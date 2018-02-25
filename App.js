/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Container, Content} from 'native-base';
import Swiper from 'react-native-swiper';


type Props = {};
export default class App extends Component<Props> {
    constructor() {
        super()
        this.state = {
            outerScrollEnabled: true
        }
    }

    verticalScroll = (index) => {
        if (index !== 1) {
            this.setState({
                outerScrollEnabled: false
            })
        }
        else {
            this.setState({
                outerScrollEnabled: true
            })
        }
    }
  render() {
    return (
      <Container>
        <Content>
            <Swiper loop={false} showsPagination={false} index={1} scrollEnabled={this.state.outerScrollEnabled}>
                <View style={styles.slideDefault}>
                    <Text style={styles.text}>Chat</Text>
                </View>
                <Swiper loop={false} showsPagination={false} horizontal={false} index={1} onIndexChanged={(index) => this.verticalScroll(index)}>
                <View style={styles.slideDefault}>
                    <Text style={styles.text}>Buscar</Text>
                </View>
                <View style={styles.slideDefault}>
                    <Text style={styles.text}>Camara</Text>
                </View>
                <View style={styles.slideDefault}>
                    <Text style={styles.text}>Memorias</Text>
                </View>
            </Swiper>
            <View style={styles.slideDefault}>
              <Text style={styles.text}>Historias</Text>
            </View>
          </Swiper>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    slideDefault:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9DD6EB'
    },
    text:{
        color:'white',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

