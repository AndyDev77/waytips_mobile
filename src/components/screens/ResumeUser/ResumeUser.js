import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import image from '../../../../assets/images/background.png';
import styles from '../../../common/formResumeUsercss';

const ResumeUser = ({navigation}) => {
  return (
    <View style={styles.root}>
      <ImageBackground source={image} resizeMode="cover" style={styles.homeImg}>
        <View style={styles.containerCustom}>
          {/* <View style={styles.buttonContainer}>
            <Image source={logo} style={styles.homeLogo}></Image>
            <Text>Waytips</Text>
          </View> */}
        </View>
        <View style={styles.containerCustom2}>
          <View style={styles.contentContainerText}>
            <Text style={styles.TextBottomSheet}>
              Bonjour, je suis John Doe
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ResumeUser;
