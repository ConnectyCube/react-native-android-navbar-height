# react-native-android-navbar-height

A library to obtain Android Navigation Bar height

## Installation

Add the following line into your package.json:

```sh
"react-native-android-navbar-height": "git+https://github.com/ConnectyCube/react-native-android-navbar-height.git#main"
```

then do `npm install`

## Usage

```js
import { Dimensions } from "react-native";
import { getNavigationBarHeight } from "react-native-android-navbar-height";

// ...

const scale = Dimensions.get('screen').scale;
const navigationBarHeight = await getNavigationBarHeight();
const result = navigationBarHeight / scale;
```

See example for more info https://github.com/ConnectyCube/react-native-android-navbar-height/blob/main/example/src/App.tsx

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
