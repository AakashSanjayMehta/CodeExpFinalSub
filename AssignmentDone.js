import React, { Component } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import { RNCamera } from 'react-native-camera';
import firestore from '@react-native-firebase/firestore'

export class AssignmentDone extends Component {

	constructor(props) {
		super(props);
	}





	render() {
		const { ...item } = this.props.route.params;

		return (
			<SafeAreaView>
				<View style={{
					paddingLeft: 8,
					paddingTop: 32
				}}>
					<Text
						style={{
							fontWeight: 'bold',
							textAlign: "center",
							fontSize: 18,
						}}> Take photos of your assignment </Text>

				</View>
				<View style={{
					backgroundColor: 'green',
					height: '80%',
					marginTop: 16,
					marginLeft: 8,
					marginRight: 8
				}}>

					<RNCamera
						ref={ref => {
							this.camera = ref;
						}}
						captureAudio={false}
						style={{ flex: 1, backgroundColor: 'yellow' }}
						type={RNCamera.Constants.Type.back}
						androidCameraPermissionOptions={{
							title: 'Permission to use camera',
							message: 'We need your permission to use your camera',
							buttonPositive: 'Ok',
							buttonNegative: 'Cancel',
						}} />
				</View>
				<TouchableOpacity
					style={{
						backgroundColor: "#006C67",
						alignSelf: 'center',
						borderRadius: 7.5,
						width: '30%',
						position: 'absolute',
						bottom: 16
					}}
					onPress={() => {
						console.log(item.key)
						firestore().collection('Assignments').doc(item.key).delete();
						this.props.navigation.pop(3);
						
					}}>
					<View style={{
						paddingTop: 12,
						paddingBottom: 12,

					}}>
						<Text style={{
							fontWeight: 'bold',
							color: "white",
							textAlign: "center",
							fontSize: 16,
						}}>Submit</Text>
					</View>
				</TouchableOpacity>
			</SafeAreaView>
		)
	}
}

export default AssignmentDone
