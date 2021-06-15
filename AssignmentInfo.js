import React, { Component } from 'react';
import type { Node } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';



export class AssignmentInfo extends Component {

    render() {
        return (
            <SafeAreaView>
                <View>
                    <StatusBar />

                    <View
                        style={{
                            paddingLeft: 8,
                            paddingRight: 8,
                            height: '100%'

                        }}>
                        <View>
                            <Text style={{
                                paddingTop: 16,
                                textAlign: "center",
                                fontSize: 24,
                                fontWeight: 'bold'
                            }}>Mathematics</Text>
                        </View>

                        <View style={{ paddingLeft: 8, paddingTop: 32, flexDirection: "row" }}>
                            <View style={{
                                height: 40,
                                width: 40,
                                borderRadius: 20,
                                backgroundColor: "black",

                            }}></View>

                            <View style={{
                                paddingLeft: 8
                            }}>
                                <Text>Mr Joash Goh</Text>
                                <Text>7 Jun 2021</Text>
                            </View>
                        </View>

                        {/* Assignment Info View */}
                        <View style={{
                            marginTop: 32,
                            paddingTop: 16,
                            paddingBottom: 32,
                            marginleft: 16,
                            marginright: 16,
                            paddingLeft: 8,
                            borderRadius: 10,
                            backgroundColor: "white",
                            shadowColor: "black",
                            shadowOpacity: 0.8,
                            shadowOffset: {
                                height: 1,
                                width: 1
                            }
                        }}>
                            <Text style={{
                                fontSize: 18, paddingTop: 8, paddingBottom: 8, fontWeight: "bold"
                            }}>Assignment</Text>

                            <View style={{ paddingLeft: 4 }}>
                                <View style={{ flexDirection: "row", paddingTop: 8, paddingBottom: 8, fontSize: 16 }}>
                                    <Text>Topic:</Text>
                                    <Text>Topic</Text>
                                </View>

                                <View style={{ flexDirection: "row", paddingTop: 8, paddingBottom: 8, fontSize: 16 }}>
                                    <Text>Duration:</Text>
                                    <Text>Duration:</Text>
                                </View>


                                <View style={{ flexDirection: "row", paddingTop: 8, paddingBottom: 8, fontSize: 16 }}>
                                    <Text>Due By:</Text>
                                    <Text>Due:</Text>
                                </View>
                            </View>
                        </View>


                        <TouchableOpacity style={{
                            backgroundColor: "#006C67",
                            alignSelf: 'center',
                            borderRadius: 7.5,
                            width: '30%',
                            position: 'absolute',
                            bottom: 16

                        }}
                        onPress={() => this.props.navigation.navigate('Timer')}>

                            <View style={{
                                paddingTop: 12,
                                paddingBottom: 12,

                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: "white",
                                    textAlign: "center",
                                    fontSize: 16,

                                }}>Start</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});


export default AssignmentInfo
