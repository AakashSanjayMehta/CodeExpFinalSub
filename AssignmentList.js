import React, { Component, useState, useEffect } from 'react'
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
	ActivityIndicator
} from 'react-native';
import firestore from '@react-native-firebase/firestore'
import { getActionFromState } from '@react-navigation/native';
import moment from 'moment';



const AssignmentList = ({ navigation }) => {


	const [loading, setLoading] = useState(true)
	const [Assignments, setAssignments] = useState([]);

	useEffect(() => {
		const suscriber = firestore().collection('Assignments').onSnapshot(querySnapshot => {
			const Assignments = [];

			querySnapshot.forEach(documentSnapshot => {
				Assignments.push({
					...documentSnapshot.data(),
					key: documentSnapshot.id,
				});
			});

			setAssignments(Assignments);
			console.log(Assignments)
			setLoading(false);
		});

		return () => subscriber();
	}, []);




	if (loading) {
		return (<ActivityIndicator />)
	}


	console.log("hi");
	console.log(moment().unix());

	return (
		<SafeAreaView>
			<View>
				<Text style={{
					paddingTop: 16,
					paddingLeft: 8,
					fontSize: 32,
					fontWeight: '500'
				}}> Select an Assignment </Text>
				<FlatList
					style={{ marginTop: 32 }}
					data={Assignments}
					renderItem={({ item }) => (
						<TouchableOpacity style={{
							backgroundColor: '#006C67',
							padding: 12,
							marginVertical: 8,
							marginHorizontal: 16,
							borderRadius: 10,
							height: 225
						}}
							onPress={() => navigation.navigate("Information", {
								// AssignmentName: item.key,
								// Teachername: item.Teacher,
								// Subjectname: item.Subject,
								// dueDate: item.dueBy
								...item
							 }) }
						>
							<Text style={{ fontSize: 28, color: 'white', paddingBottom: 8 }}>{item.key}</Text>
							<View style={{
								backgroundColor: 'white',
								borderRadius: 10,
								flex: 1,
								paddingLeft: 8,
								paddingTop: 8,
							}}>
								<View style={{ flexDirection: 'row', paddingVertical: 4 }}>
									<Text style={{ fontSize: 20, color: '#003844' }}>Subject: </Text>
									<Text style={{ fontSize: 20, color: '#003844' }}>{item.Subject}</Text>
								</View>
								<View style={{ flexDirection: 'row', paddingVertical: 4 }}>
									<Text style={{ fontSize: 20, color: '#003844' }}>Teacher: </Text>
									<Text style={{ fontSize: 20, color: '#003844' }}>{item.Teacher}</Text>
								</View>
								<View style={{ flexDirection: 'row', paddingVertical: 4 }}>
									<Text style={{ fontSize: 20, color: '#003844' }}>Due in: </Text>
									<Text style={{ fontSize: 20, color: '#003844' }}>

									{Math.floor(((parseInt(JSON.parse(JSON.stringify(item.dueBy)).seconds)-moment().unix()))/86400) }
										</Text>
										<Text style={{ fontSize: 20, color: '#003844' }}>
											 {" days"}
										</Text>
								</View>
							</View>
						</TouchableOpacity>
					)}
				/>
			</View>
		</SafeAreaView>
	)
}

export default AssignmentList
