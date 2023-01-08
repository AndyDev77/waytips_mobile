import React from 'react';
import {View, StyleSheet} from 'react-native';
import Routes from './routes';

const App = () => {
  return (
    <View style={styles.root}>
      <Routes />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
