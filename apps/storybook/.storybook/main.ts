import type { StorybookConfig } from '@storybook/react-vite'
import tailwindcss from '@tailwindcss/vite'

const config: StorybookConfig = {
  stories: [
    '../../../packages/ui/src/components/**/*.stories.@(ts|tsx)',
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
  async viteFinal(config) {
    const base = new URL('../../../packages/ui', import.meta.url).pathname

    config.plugins = [
      ...(config.plugins ?? []),
      tailwindcss(),
    ]
    config.resolve = config.resolve ?? {}
    config.resolve.alias = {
      ...(config.resolve.alias as Record<string, string>),
      '@workspace/ui/lib/utils': `${base}/src/lib/utils`,
      '@workspace/ui/globals.css': `${base}/src/styles/globals.css`,
      '@workspace/ui': `${base}/src`,
    }
    return config
  },
}

export default config