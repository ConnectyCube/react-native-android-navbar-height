[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner2-direct.svg)](https://stand-with-ukraine.pp.ua)

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

## Have an issue?

Got troubles with integration? Create an issue at [Issues page](https://github.com/ConnectyCube/react-native-android-navbar-height/issues).

**Want to support our team**:<br>
<a href="https://www.buymeacoffee.com/connectycube" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## License

MIT
