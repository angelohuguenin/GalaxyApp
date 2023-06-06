import React,{Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image, SafeAreaView, StatusBar, Platform} from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View>
                <SafeAreaView>
                    <ImageBackground source={require('../assets/bg_image.png')}>
                        <View>
                            <Text> Observatory</Text>
                            <TouchableOpacity>
                                <Text>Localization</Text>
                                <Text>Show More</Text>
                                <Text>1</Text>
                                <Image source={require('../assets/iss_icon.png')}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>Meteor</Text>
                                <Text>Show More</Text>
                                <Text>2</Text>
                                <Image source={require('../assets/meteor_icon.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </SafeAreaView>
            </View>
        );
    }
}