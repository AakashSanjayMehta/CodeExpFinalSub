import React, { Component } from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    FlatList,
} from 'react-native';

export class AssignmentList extends Component {
    render() {
        const Item = ({ title }) => (
            <TouchableOpacity style={{
                backgroundColor: '#f9c2ff',
                padding: 20,
                marginVertical: 8,
                marginHorizontal: 16,
            }}
                onPress={() => this.props.navigation.navigate("Information")}

            >
                <Text style={{ fontSize: 32 }}>{title}</Text>
            </TouchableOpacity>
        );

        const Data = [
            {
                title: "Math"
            },
            {
                title: "English"
            }

        ]

        const renderItem = ({ item }) => (
            <Item title={item.title} />
        );

        return (
            <View>
                <Text style={{
                    paddingTop: 16, 
                    paddingLeft: 8,
                    fontsize: 24

                }}> Select an Assignment </Text>


                <FlatList
                    data={Data}
                    renderItem={renderItem}
                />
            </View>
        )
    }
}

export default AssignmentList
