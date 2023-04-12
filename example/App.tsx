import { StyleSheet, Text, View } from 'react-native';

import * as UnityView from 'expo-unity-view';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{UnityView.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
