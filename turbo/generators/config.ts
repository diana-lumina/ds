import type { PlopTypes } from '@turbo/gen'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('component', {
    description: 'Genera la estructura de un componente del DS',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nombre del componente (ej: card-course):',
      },
      {
        type: 'input',
        name: 'title',
        message: 'Nombre para mostrar (ej: CardCourse):',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/ui/src/components/{{name}}/{{name}}.stories.tsx',
        templateFile: 'templates/stories.hbs',
      },
      {
        type: 'add',
        path: 'packages/ui/src/components/{{name}}/{{name}}.test.tsx',
        templateFile: 'templates/test.hbs',
      },
      {
        type: 'add',
        path: 'packages/ui/src/components/{{name}}/index.ts',
        templateFile: 'templates/index.hbs',
      },
      {
        type: 'add',
        path: 'apps/web/app/playground/{{name}}/page.tsx',
        templateFile: 'templates/playground.hbs',
      },
      {
        type: 'append',
        path: 'packages/ui/src/index.ts',
        template: "export * from './components/{{name}}'",
      },
      {
        type: 'append',
        path: 'apps/web/app/playground/layout.tsx',
        pattern: /\/playground\/[a-z-]+' \},\n\]/,
        template: "  { name: '{{title}}', href: '/playground/{{name}}' },\n]",
      },
    ],
  })
}