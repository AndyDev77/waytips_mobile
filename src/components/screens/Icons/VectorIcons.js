import {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class VectorIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.contentContainerIcons}>
        <View style={styles.contentContainerIconsView}>
          <Text style={styles.contentContainerIconsImg}>
            <FontAwesome name="google" size={25} color="#d63031" />
          </Text>
        </View>
        <View style={styles.contentContainerIconsView}>
          <Text style={styles.contentContainerIconsImg}>
            <FontAwesome name="apple" size={25} color="black" />
          </Text>
        </View>
        <View style={styles.contentContainerIconsView}>
          <Text style={styles.contentContainerIconsImg}>
            <FontAwesome5 name="facebook" size={25} color="darkblue" />
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainerIcons: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: -70,
    marginBottom: 10,
  },
  contentContainerIconsView: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#3D696180',
    width: 60,
    height: 60,
    margin: 5,
    borderRadius: 10,
  },
  contentContainerIconsImg: {
    flex: 1,
    textAlign: 'center',
    margin: 15,
  },
});
