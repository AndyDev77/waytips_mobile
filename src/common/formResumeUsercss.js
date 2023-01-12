import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  homeImg: {
    flex: 1,
    justifyContent: 'center',
  },
  containerCustom: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
  },
  containerCustom2: {
    display: 'flex',
    backgroundColor: '#fff',
    paddingTop: 35,
    width: '100%',
    height: '90%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  contentContainerText: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  TextBottomSheet: {
    color: '#7D56C2',
    fontFamily: 'Poppins',
    fontSize: 13,
    lineHeight: 15,
    fontWeight: '400',
  },
});

export default styles;
