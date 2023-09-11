# react-native-ntc-pressable

A customized version of Pressable(react-native)
with onPress throttle feature

## Installation

```sh
npm install react-native-ntc-pressable
```
or
```sh
yarn add react-native-ntc-pressable
```

## Usage

```js
import Pressable, { 
  // TouchableOpacity,
  // TouchableHighlight,
  // TouchableWithoutFeedback
} from 'react-native-ntc-pressable';

// ...
  <Pressable
    // throttleTime={300} // Default is 300ms
    // opacity={0.3} // Default is 0.3
    style={{
      // ...
    }}
    onPress={() => {
      // ...
    }}
  >
    <Text>
      NTC Pressable
    <Text>
  </Pressable>
// ...
```

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
