import type { StorybookConfig } from '@storybook/react-vite'
import tailwindcss from '@tailwindcss/vite'

const config: StorybookConfig = {
  stories: [
    '../../../packages/ui/src/components/**/*.mdx',
    '../../../packages/ui/src/components/**/*.stories.@(ts|tsx)',
    '../../../packages/ui/src/docs/**/*.mdx',
    '../stories/**/*.stories.@(ts|tsx|mdx)', 
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  managerHead: (head) => `
    ${head}
  `,
  async viteFinal(config) {
    const base = new URL('../../../packages/ui', import.meta.url).pathname
    const storybookBase = new URL('..', import.meta.url).pathname

    config.plugins = [
      ...(config.plugins ?? []),
      tailwindcss(),
    ]
    config.resolve = config.resolve ?? {}
    config.resolve.alias = {
      ...(config.resolve.alias as Record<string, string>),
      '@storybook/blocks': `${storybookBase}/node_modules/@storybook/blocks`,
      '@workspace/ui/lib/utils': `${base}/src/lib/utils`,
      '@workspace/ui/globals.css': `${base}/src/styles/globals.css`,
      '@workspace/ui': `${base}/src`,
    }
    return config
  },
}

export default config