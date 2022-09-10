module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      // {
      //   type: 'add',
      //   path: '../src/components/{{pascalCase name}}/{{camelCase name}}.stories.tsx',
      //   templateFile: 'templates/stories.tsx.hbs'
      // },
      // {
      //   type: 'add',
      //   path: '../src/components/{{pascalCase name}}/{{camelCase name}}.test.tsx',
      //   templateFile: 'templates/test.tsx.hbs'
      // }
    ]
  })
}
