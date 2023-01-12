import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Pressable,
  Alert,
} from 'react-native';
import image from '../../../../assets/images/background.png';
import styles from '../../../common/formThemescss';
import {createStackNavigator} from 'react-navigation';

class Themes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProposThemes: [
        {themes: 'Attraction'},
        {themes: 'Sport'},
        {themes: 'Détente'},
        {themes: 'Famille'},
        {themes: 'Musée'},
        {themes: 'Monument'},
      ],
    };
  }

  componentDidMount() {
    let arr = this.state.ProposThemes.map((item, index) => {
      item.isSelected = false;
      return {...item};
    });
    this.setState({ProposThemes: arr});
    console.log('arr data ==>'.arr);
  }

  selectionHandler = ind => {
    const {ProposThemes} = this.state;
    let arr = ProposThemes.map((item, index) => {
      if (ind == index) {
        item.isSelected = !item.isSelected;
      }
      return {...item};
    });
    console.log('selection handler ==>', arr);
    this.setState({ProposThemes: arr});
  };

  render() {
    const {ProposThemes} = this.state;
    return (
      <View style={styles.root}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.homeImg}>
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
              {ProposThemes.map((item, index) => {
                return (
                  <Pressable
                    style={styles.buttonThemes}
                    onPress={() => this.selectionHandler(index)}>
                    <Text style={styles.buttonTextThemes}>{item.themes}</Text>
                    <Text style={styles.buttonTextThemes}>
                      {item.isSelected ? 'Selected' : 'Not selected'}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('ResumeUser')}>
                <Text style={styles.buttonText}>Suivant</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Themes;
