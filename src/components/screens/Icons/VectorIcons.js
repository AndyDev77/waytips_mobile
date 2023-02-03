import {Text, View, StyleSheet, Image} from 'react-native';
import google from '../../../../assets/images/google.png';
import facebook from '../../../../assets/images/facebook.png';
import styles from '../../../common/formVectorIconscss';

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
          <Image source={facebook} size={25}></Image>
        </Text>
      </View>
    </View>
  );
};

export default VectorIcon;
