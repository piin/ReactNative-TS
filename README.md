# ReactNativeTS
>**Basic structure for react native & Typescript**

> Recommended usage with [VSCode](https://code.visualstudio.com/)

## Getting Started

* Requirements: [Node.js](https://nodejs.org) and [Yarn](https://yarnpkg.com/)

Install dependencies:

```sh
yarn
```

Start React Native server:

```sh
yarn start
```

Build the source-code with Typescript:

```sh
# Build once
yarn run build

# Build and watch for changes
yarn run build -- --watch
```

### iOS

```sh
yarn run ios
```

### Android

In order to use "yarn run android", you have to change your android sdk dir, in android/local.properties
```sh
yarn run android
```
>**Note:** Enable auto reload :)

## Testing

This project uses Typescript + Jest. Run the test suite with:

```sh
yarn test
```

### Reference

```sh
https://github.com/mrpatiwi/ReactNativeTS
```