# Matine WAKU Setup

## Matine Core

1. add to `vite.config.ts`:

```ts
export default {
  optimizeDeps: {
      exclude: ["@mantine/core", "@mantine/hooks","@mantine/dates","@mantine/charts","recharts"],
      include: ["dayjs", "dayjs/plugin/*"]
  }
};
```

> **IMPORTANT:** changing `vite.config.ts` is specific to the WAKU framework. All other steps are similar to the [official documentation]().

2. install dependencies

```sh
npm install @mantine/core @mantine/hooks
npm install --save-dev postcss postcss-preset-mantine postcss-simple-vars
```

2. add `postcss.config.js`:

```js
/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
      },
    },
  },
};
```

2. add `@mantine/core/styles.css` and the `MantineProvider`to the base layout to`src/pages/_layout.tsx`:

```tsx
import '@mantine/core/styles.css';

import type { ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';
import { ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <html>
      <head><ColorSchemeScript/></head>
      <body>
        <MantineProvider theme={theme} withNormalizeCSS>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

const getData = async () => {
  const data = {
    description: 'An internet website!',
    icon: '/images/favicon.png',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};

```

3. add your theme `src/theme.ts`:

```ts
import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'red',
});
```

## Mantine Form

1. install dependencies

```sh
npm install @mantine/form
```

## Mantine Dates

1. modify `vite.config.ts`:

   1. add `,"@mantine/dates"` to `optimizeDeps.excludes` array
   2. add `include: ["dayjs", "dayjs/plugin/*"]` to `optimizeDeps` as new property

2. install dependencies

```sh
npm install @mantine/dates dayjs
```

3. add `import '@mantine/dates/styles.css';` to `src/pages/_layout.tsx`

## Mantine Charts

**NOT WORKING:**
`waku dev`: syntax error lodash does not provide an export named default

`waku build`: compiles without errors. in the browser no errors but no content is rendered!

1. modify `vite.config.ts`:

   1. add `,"@mantine/charts"` to `optimizeDeps.excludes` array

2. install dependencies

```sh
npm install @mantine/charts recharts@2
```

3. add `import '@mantine/charts/styles.css';` to `src/pages/_layout.tsx`

## Extentions

### CodeHighlight

1. modify `vite.config.ts`:

   1. add `,"@mantine/code-highlight"` to `optimizeDeps.excludes` array
   2. add `'@mantine/code-highlight > highlight.js'` to `optimizeDeps.include` array

2. install dependencies

```sh
npm install @mantine/code-highlight
```

3. add `import '@mantine/code-highlight/styles.css';` to `src/pages/_layout.tsx`

### Notifications system

1. modify `vite.config.ts`:

   1. add `,"@mantine/notifications"` to `optimizeDeps.excludes` array
   2. add `'@mantine/notifications > prop-types'` to `optimizeDeps.include` array

2. install dependencies

```sh
npm install @mantine/notifications
```

3. add `import '@mantine/notifications/styles.css';` to `src/pages/_layout.tsx`
4. add `import { Notifications } from '@mantine/notifications';` to `src/pages/_layout.tsx`
5. add `<Notifications />` after `<MantineProvider>` to `src/pages/_layout.tsx`

### Spotlight

1. modify `vite.config.ts`:

   1. add `,"@mantine/spotlight"` to `optimizeDeps.excludes` array

2. install dependencies

```sh
npm install @mantine/spotlight
```

3. add `import '@mantine/spotlight/styles.css';` to `src/pages/_layout.tsx`

### Carousel

**NOT WORKING:**

- fails in dev and build with `Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.`
- fails in build

1. modify `vite.config.ts`:

   1. add `,"@mantine/carousel"` to `optimizeDeps.excludes` array

2. install dependencies

```sh
npm install @mantine/carousel
```

3. add `import '@mantine/carousel/styles.css';` to `src/pages/_layout.tsx`

### Dropzone

1. modify `vite.config.ts`:

   1. add `,"@mantine/dropzone"` to `optimizeDeps.excludes` array

2. install dependencies

```sh
npm install @mantine/dropzone
```

3. add `import '@mantine/dropzone/styles.css';` to `src/pages/_layout.tsx`

### NavigationProgress

1. modify `vite.config.ts`:

   1. add `,"@mantine/nprogress"` to `optimizeDeps.excludes` array

2. install dependencies

```sh
npm install @mantine/nprogress
```

3. add `import '@mantine/nprogress/styles.css';` to `src/pages/_layout.tsx`

### Modals manager

1. modify `vite.config.ts`:

   1. add `,"@mantine/modals"` to `optimizeDeps.excludes` array

2. install dependencies

```sh
npm install @mantine/modals
```

4. add `import { ModalsProvider } from '@mantine/modals';` to `src/pages/_layout.tsx`
5. wrap inner content of `<MantineProvider>` with `<ModalsProvider > </ModalsProvider >` in `src/pages/_layout.tsx`

### Rich text editor

1. modify `vite.config.ts`:

   1. add `,"@mantine/dropzone"` to `optimizeDeps.excludes` array

2. install dependencies

```sh
npm install @mantine/tiptap @mantine/hooks @tiptap/react @tiptap/pm @tiptap/extension-link @tiptap/starter-kit
```

3. add `import '@mantine/tiptap/styles.css';` to `src/pages/_layout.tsx`
