import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import image from '../../../../assets/images/background.png';
import VectorIcon from '../Icons/VectorIcons';
import styles from '../../../common/formLogincss';

const Login = ({navigation}) => {
  const [fdata, setFdata] = useState({
    email: '',
    password: '',
  });

  const [errormsg, setErrormsg] = useState(null);
  const Sendtobackend = () => {
    //console.log(fdata);
    if (fdata.email == '' || fdata.password == '') {
      setErrormsg('Tous les champs sont obligatoires');
      return;
    } else {
      fetch('http://192.168.43.58:3000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fdata),
      })
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          if (data.error) {
            setErrormsg(data.error);
          } else {
            navigation.navigate('Themes');
          }
        });
    }
  };
  return (
    <View style={styles.root}>
      <ImageBackground source={image} resizeMode="cover" style={styles.homeImg}>
        <View style={styles.containerCustom}>
          {/* <View style={styles.buttonContainer}>
            <Image source={logo} style={styles.homeLogo}></Image>
            <Text>Waytips</Text>
          </View> */}
        </View>
        {errormsg ? <Text style={styles.errormessage}>{errormsg}</Text> : null}
        <View style={styles.containerCustom2}>
          <View style={styles.formgroup}>
            <TextInput
              onPressIn={() => setErrormsg(null)}
              placeholderTextColor="rgba(0, 0, 0, 0.4)"
              style={styles.input}
              placeholder="Adresse mail"
              color="rgba(0, 0, 0, 0.4)"
              onChangeText={text => setFdata({...fdata, email: text})}
            />
            <TextInput
              onPressIn={() => setErrormsg(null)}
              placeholderTextColor="rgba(0, 0, 0, 0.4)"
              style={styles.input}
              placeholder="Mot de passe"
              color="rgba(0, 0, 0, 0.4)"
              secureTextEntry={true}
              onChangeText={text => setFdata({...fdata, password: text})}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => Sendtobackend()}>
            <Text style={styles.buttonText}>Connexion</Text>
          </TouchableOpacity>
          <View style={styles.contentContainerTextWhere}>
            <Text style={styles.TextBottomSheet}>Ou</Text>
          </View>
          <View style={styles.contentContainerIcons}>
            <VectorIcon />
          </View>
          {/* <View style={styles.contentContainerText}>
          <Text style={styles.forgotpassword}>Mot de passe oublié ?</Text>
          </View> */}
          <View style={styles.contentContainerText}>
            <Text style={styles.TextBottomSheet}>
              Vous n'avez pas de compte ?
              <Text
                style={styles.spanText}
                onPress={() => navigation.navigate('Register')}>
                {' '}
                Inscrivez-vous
              </Text>
            </Text>
            {/* <Text style={styles.forgotpassword}>Mot de passe oublié ?</Text> */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
