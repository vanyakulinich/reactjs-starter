## ReactJS Starter Template

### Description

Starter Template for building apps with React.js.<br/>
Main purpose of this starter is to save developers time, which is usually spend on creating basic skeletons, configs and getting all together when building the apps. This template might be extremly usefull for building demos, prototypes or starting new project from the scratch.

### What's inside

- [x] React router support for pages routing
- [x] PropTypes support
- [x] Redux integration and configuration with async actions ("ducks" approach)
- [x] Styled-components with predefined global styles and app theme configuration
- [x] Localization with i18next configuration
- [x] Axios for api interactions
- [x] React Helmet for meta tags
- [x] Basic predefined react hooks
- [x] Predefined HOC for centralized api errors handle
- [x] Predefined redux store with example actions
- [x] Predefined redux store entity for centralized errors handling
- [x] Predefined basic util functions
- [x] Preconfigured testing tools (Jest, Enzyme)
- [x] Some predefined components, strucutre and configured toasted messages

### Before use

##### Envs

You need to setup envs before using the starter.<br/>

```bash
  touch .env # create env file
  # check .env.example for envs names

```

### How to use

```bash
  yarn install # install dependenices

  yarn start # run dev mode

  yarn build # build prod version

  yarn serve # run prod locally

  yarn test[:coverage/:watch] # run tests once/with coverage/in watch mode
```

NOTE:<br/>
In production mode use any server to serve build. Most common case is nginx or express serving static

### What's next

Main purpose of this starter template is to rid developers of creating the basic projects skeleton and spending a lot of time with setting up basic projects configs.<br/>
Feel free to use this starter template for building own apps, modify it as you need and actually change it whatever you like to fit your project demands.
