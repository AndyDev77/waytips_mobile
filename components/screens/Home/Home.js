import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Image,
} from 'react-native';
import image from '../../../assets/images/background.png';
import VectorIcon from '../Icons/VectorIcons';
import logo from '../../../assets/images/logo.png';

const Home = ({navigation}) => {
  return (
    <View style={styles.root}>
      <ImageBackground source={image} resizeMode="cover" style={styles.homeImg}>
        <View style={styles.containerCustom}>
          <View style={styles.buttonContainer}>
            <Image source={logo}></Image>
            <Text>Waytips</Text>
          </View>
        </View>
        <View style={styles.containerCustom2}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonText}>S'inscrire</Text>
          </Pressable>
          <View style={styles.contentContainerText}>
            <Text style={styles.TextBottomSheet}>Ou</Text>
          </View>
          <VectorIcon />
          <View style={styles.contentContainerText}>
            <Text style={styles.TextBottomSheet}>
              Vous êtes déjà inscrits ?
              <Text style={styles.spanText}> Connectez-vous</Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  homeImg: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    marginTop: 15,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#7D56C2',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 30,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#7D56C2',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Poppins',
    lineHeight: 20,
    color: 'white',
  },
  containerCustom: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
  },
  containerCustom2: {
    display: 'flex',
    backgroundColor: '#fff',
    paddingTop: 35,
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  contentContainerText: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  TextBottomSheet: {
    color: '#7D56C2',
    fontFamily: 'Poppins',
    fontSize: 13,
    lineHeight: 15,
    fontWeight: '400',
  },
  spanText: {
    color: '#FFAB00',
  },
});

export default Home;
