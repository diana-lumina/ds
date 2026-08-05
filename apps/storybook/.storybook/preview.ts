/// <reference path="../src/declarations.d.ts" />
import type { Preview } from '@storybook/react'
import theme from './theme'
import '@workspace/tokens/css/tec-360'
import '@workspace/tokens/css/tec-educacion-continua'
import '@workspace/tokens/css/tec-360/grid-medium'
import '@workspace/tokens/css/tec-360/grid-wide'
import '@workspace/tokens/css/tec-360/motion-reduced'
import '../../../packages/ui/src/styles/globals.css'

const preview: Preview = {
  parameters: {
    docs: {
      theme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Foundations',
          ['Colors', 'Typography', 'Spacing', 'Radius', 'Shadows', 'Breakpoints', 'Border','Iconography'],
          'Components',
        ],
      },
    },
  },
 
  globalTypes: {
    brand: {
      description: 'Marca activa',
      defaultValue: 'tec-360',
      toolbar: {
        title: 'Marca',
        icon: 'paintbrush',
        items: [
          { value: 'tec-360', title: 'TEC 360' },
          { value: 'tec-educacion-continua', title: 'TEC Educación Continua' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      // Aplica data-brand al <html> real — getComputedStyle(document.documentElement)
      // en getDesignTokens() depende de que el atributo esté ahí, no en un wrapper interno.
      document.documentElement.setAttribute('data-brand', context.globals.brand)
      return Story()
    },
  ],
}

export default preview
