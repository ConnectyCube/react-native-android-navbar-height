# react-native-android-navbar-height

A library to obtain Android Navigation Bar height

## Installation

```sh
npm install react-native-android-navbar-height
```

## Usage

```js
import { Dimensions } from "react-native";
import { getNavigationBarHeight } from "react-native-android-navbar-height";

// ...

const scale = Dimensions.get('screen').scale;
const navigationBarHeight = await getNavigationBarHeight();
const result = navigationBarHeight / scale;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
