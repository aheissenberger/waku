// This file should not include Node specific code.

export const encodeInput = (input: string) => {
  if (input === '') {
    return 'index.txt';
  }
  if (input === 'index') {
    throw new Error('Input should not be `index`');
  }
  if (input.startsWith('/')) {
    throw new Error('Input should not start with `/`');
  }
  if (input.endsWith('/')) {
    throw new Error('Input should not end with `/`');
  }
  return input + '.txt';
};

export const decodeInput = (encodedInput: string) => {
  if (encodedInput === 'index.txt') {
    return '';
  }
  if (encodedInput?.endsWith('.txt')) {
    return encodedInput.slice(0, -'.txt'.length);
  }
  const err = new Error('Invalid encoded input');
  (err as any).statusCode = 400;
  throw err;
};

const ACTION_PREFIX = 'ACTION_';

export const encodeActionId = (actionId: string) => {
  const [file, name] = actionId.split('#') as [string, string];
  if (name.includes('/')) {
    throw new Error('Unsupported action name');
  }
  return ACTION_PREFIX + file + '/' + name;
};

export const decodeActionId = (encoded: string) => {
  if (!encoded.startsWith(ACTION_PREFIX)) {
    return null;
  }
  const index = encoded.lastIndexOf('/');
  return (
    encoded.slice(ACTION_PREFIX.length, index) + '#' + encoded.slice(index + 1)
  );
};

export const hasStatusCode = (x: unknown): x is { statusCode: number } =>
  typeof (x as any)?.statusCode === 'number';

export const generatePrefetchCode = (
  basePrefix: string,
  inputs: Iterable<string>,
  moduleIds: Iterable<string>,
) => {
  const inputsArray = Array.from(inputs);
  let code = '';
  if (inputsArray.length) {
    code += `
globalThis.__WAKU_PREFETCHED__ = {
${inputsArray
  .map((input) => {
    const url = basePrefix + encodeInput(input);
    return `  '${url}': fetch('${url}'),`;
  })
  .join('\n')}
};`;
  }
  for (const moduleId of moduleIds) {
    code += `
import('${moduleId}');`;
  }
  return code;
};

export const deepFreeze = (x: unknown): void => {
  if (typeof x === 'object' && x !== null) {
    Object.freeze(x);
    for (const value of Object.values(x)) {
      deepFreeze(value);
    }
  }
};
