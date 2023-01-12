import {Text, View, StyleSheet, Image} from 'react-native';
import google from '../../../../assets/images/google.png';
import apple from '../../../../assets/images/apple.png';
import facebook from '../../../../assets/images/facebook.png';

const VectorIcon = () => {
  return (
    <View style={styles.contentContainerIcons}>
      <View style={styles.contentContainerIconsView}>
        <Text style={styles.contentContainerIconsImg}>
          <Image source={google} size={25}></Image>
        </Text>
      </View>
      <View style={styles.contentContainerIconsView}>
        <Text style={styles.contentContainerIconsImg}>
          <Image source={apple} size={25}></Image>
        </Text>
      </View>
      <View style={styles.contentContainerIconsView}>
        <Text style={styles.contentContainerIconsImg}>
          <Image source={facebook} size={25}></Image>
        </Text>
      </View>
    </View>
  );
};

export default VectorIcon;

const styles = StyleSheet.create({
  contentContainerIcons: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // marginTop: -7,
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
    justifyContent: 'center',
    textAlign: 'center',
    margin: 10,
  },
});
