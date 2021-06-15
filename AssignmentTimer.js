
import React, { useEffect, useState, Component } from 'react';
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
	Button,
	Dimensions,
	PermissionsAndroid,
	Alert,

} from 'react-native';

import BackgroundTimer from "react-native-background-timer";
import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PDFView from 'react-native-view-pdf'


const resources = {
	url: 'https://www.irs.gov/pub/irs-pdf/i1040gi.pdf'
}

const Section = ({ children, title }): Node => {
	const isDarkMode = useColorScheme() === 'dark';
	return (
		<View style={styles.sectionContainer}>
			<Text
				style={[
					styles.sectionTitle,
					{
						color: isDarkMode ? Colors.white : Colors.black,
					},
				]}>
				{title}
			</Text>
			<Text
				style={[
					styles.sectionDescription,
					{
						color: isDarkMode ? Colors.light : Colors.dark,
					},
				]}>
				{children}
			</Text>
		</View>

	);
};

const AssignmentTimer = () => {

	const [secondsLeft, setSecondsLeft] = useState(3601);
	const [timerOn, setTimerOn] = useState(false);
	useEffect(() => {
		if (timerOn) startTimer();
		else BackgroundTimer.stopBackgroundTimer();
		return () => {
			BackgroundTimer.stopBackgroundTimer();
		};
	}, [timerOn]);

	useEffect(() => {
		if (secondsLeft === 0) BackgroundTimer.stopBackgroundTimer()
	}, [secondsLeft])
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};
	const clockify = () => {
		let hours = Math.floor(secondsLeft / 60 / 60)
		let mins = Math.floor((secondsLeft / 60) % 60)
		let seconds = Math.floor(secondsLeft % 60)
		let displayHours = hours < 10 ? `0${hours}` : hours
		let displayMins = mins < 10 ? `0${mins}` : mins
		let displaySecs = seconds < 10 ? `0${seconds}` : seconds
		return {
			displayHours,
			displayMins,
			displaySecs,
		}
	}

	const startTimer = () => {
		BackgroundTimer.runBackgroundTimer(() => {
			setSecondsLeft(secs => {
				if (secs > 0) return secs - 1
				else return 0
			})
		}, 1000)
	}
	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />


			<View style={styles.container}>
				<Text style={styles.time}>Time Left...</Text>
				<Text>{clockify().displayHours} Hours {clockify().displayMins} Mins{" "}
					{clockify().displaySecs} Secs</Text>

			</View>
			<View style={{height: '40%'}}>
				<PDFView
					fadeInDuration={250.0}
					style={{ flex: 1, backgroundColor: 'yellow', height: '40%'}}
					resource={resources['url']}
					onLoad={() => console.log(`PDF rendered from ${'url'}`)}
					onError={() => console.log('Cannot render PDF', error)} />
			</View>
			<View
				style={{
					backgroundColor: isDarkMode ? Colors.black : Colors.white,
				}}>




					<TouchableOpacity onPress={() => setTimerOn(timerOn => !timerOn)} >
						<Text>Press Here</Text>
					</TouchableOpacity>





					<TouchableOpacity>
						<Text>Submit early</Text>
					</TouchableOpacity>


			</View>



		</SafeAreaView>
	)

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

export default AssignmentTimer
