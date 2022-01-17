import * as React from 'react';

import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { getNavigationBarHeight } from 'react-native-android-navbar-height';

const scale = Dimensions.get('screen').scale;

export default function App() {
  const [height, setHeight] = React.useState<number | undefined>();

  React.useEffect(() => {
    getNavigationBarHeight().then(setHeight);
  }, []);

  const finalResult = height / scale;

  return (
    <View style={styles.container}>
      <Text>Result: {height}</Text>
      <Text>Final result: {finalResult}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
