import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Pressable,
} from 'react-native';
import image from '../../../../assets/images/background.png';
import styles from '../../../common/formThemescss';

const Themes = ({navigation}) => {
  return (
    <View style={styles.root}>
      <ImageBackground source={image} resizeMode="cover" style={styles.homeImg}>
        <View style={styles.containerCustom}></View>
        <View style={styles.containerCustom2}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Vos thèmes préférés</Text>
            
          </View>
          <View>
          <Text style={styles.subtitle}>
              Choississez pari ces propositions. Vous pourrez les modifier par
              la suite.
            </Text>
          </View>
          <View>
            <Pressable style={styles.buttonThemes}>
                <Text style={styles.buttonTextThemes}>Attraction</Text>
            </Pressable>
            <Pressable style={styles.buttonThemes}>
                <Text style={styles.buttonTextThemes}>Sport</Text>
            </Pressable>
            <Pressable style={styles.buttonThemes}>
                <Text style={styles.buttonTextThemes}>Détente</Text>
            </Pressable>
            <Pressable style={styles.buttonThemes}>
                <Text style={styles.buttonTextThemes}>Famille</Text>
            </Pressable>
            <Pressable style={styles.buttonThemes}>
                <Text style={styles.buttonTextThemes}>Musée</Text>
            </Pressable>
            <Pressable style={styles.buttonThemes}>
                <Text style={styles.buttonTextThemes}>Monument</Text>
            </Pressable>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Suivant</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Themes;

