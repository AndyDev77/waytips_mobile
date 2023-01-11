import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FFAB00',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 30,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#FFAB00',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Poppins',
    lineHeight: 20,
    color: 'white',
  },
  buttonThemes: {
    backgroundColor: 'white',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 30,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#3D696180',
  },
  buttonTextThemes: {
    fontSize: 16,
    fontFamily: 'Poppins',
    lineHeight: 20,
    color: '#7D56C2',
  },
  homeImg: {
    flex: 1,
    justifyContent: 'center',
  },
  containerCustom: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
  },
  containerCustom2: {
    display: 'flex',
    backgroundColor: '#fff',
    paddingTop: 35,
    width: '100%',
    height: '106%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    color: 'black',
    fontWeight: '700',
    fontFamily: 'Poppins',
    alignSelf: 'center',
    fontSize: 24,
  },
  subtitle: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 20,
    margin: 10,
  },
});

export default styles;
