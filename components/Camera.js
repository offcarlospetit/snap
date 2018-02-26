import React, { Component } from 'react';
import { Platform, Dimensions ,StyleSheet, Text, View, AppRegistry } from 'react-native';
import {Container, Content} from 'native-base';
import Camera from 'react-native-camera';
import BottomBar from '../components/camera-bottom';
import TopBar from '../components/camera-top';



type Props = {};
export default class CameraComponent extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                    type={this.state.captureType}
                    flashMode={this.state.flashmode}
                >
                    <View style={{flex:1, justifyContent:'space-between'}}>
                        <TopBar {...this.props}/>
                        <View style={{height:40, backgroundColor:'#333', alignSelf:'center', justifyContent:'center', padding:10}}><Text style={{color:'#fff'}}>Camera Background Works on Device</Text></View>
                        <View>
                            <BottomBar {...this.props.actions} {...this.props}/>
                        </View>
                    </View>
                </Camera>
            </View>
        );
    }
    takePicture() {
        this.camera.capture()
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});

AppRegistry.registerComponent('Camera', () => Camera);

