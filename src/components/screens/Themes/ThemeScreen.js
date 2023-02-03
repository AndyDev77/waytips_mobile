import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Pressable,
} from 'react-native';
import image from '../../../../assets/images/background.png';
import styles from '../../../common/formThemescss';

class Themes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProposThemes: [
        {themes1: 'Attraction'},
        {themes2: 'Sport'},
        {themes3: 'Détente'},
        {themes4: 'Famille'},
        {themes5: 'Musée'},
        {themes6: 'Monument'},
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
                    key={[
                      item.themes1,
                      item.themes2,
                      item.themes3,
                      item.themes4,
                      item.themes5,
                      item.themes6,
                    ]}
                    style={[
                      styles.buttonThemes,
                      item.isSelected
                        ? {
                            backgroundColor: '#7D56C2',
                            borderColor: '#7D56C2',
                          }
                        : {backgroundColor: 'white'},
                    ]}
                    onPress={() => this.selectionHandler(index)}>
                    <Text
                      style={[
                        styles.buttonTextThemes,
                        item.isSelected ? {color: 'white'} : {color: '#7D56C2'},
                      ]}>
                      {[
                        item.themes1,
                        item.themes2,
                        item.themes3,
                        item.themes4,
                        item.themes5,
                        item.themes6,
                      ]}
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
