import React, { Component, useEffect, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import AssignmentList from './AssignmentList';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { create } from 'combined-stream';

const EmailValidate = ({ navigation }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '278652244495-n7jqneet5k91j30j0a4h10sjf352klvs.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            hostedDomain: '', // specifies a hosted domain restriction
            loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            accountName: '', // [Android] specifies an account name on the device that should be used
            iosClientId: '278652244495-05idt9k44anqpepetho3l17rrmph3nrk.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        });
        isSignedIn()
    }, [])

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo)
            setUser(userInfo)
        } catch (error) {
            console.log('Message', error.message);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('User Cancelled the Login Flow');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('Signing In');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Play Services Not Available or Outdated');
            } else {
                console.log('Some Other Error Happened');
            }
        }
    };

    const isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (!!isSignedIn) {
            getCurrentUserInfo()
        } else {
            console.log('Please Login')
        }
    };

    const getCurrentUserInfo = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently();
            setUser(userInfo);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                alert('User has not signed in yet');
                console.log('User has not signed in yet');
            } else {
                alert("Something went wrong. Unable to get user's info");
                console.log("Something went wrong. Unable to get user's info");
            }
        }
    };

    const signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setUser({}); // Remember to remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
    };

    return (

        <SafeAreaView>
            <View style={{ height: '100%' }}>
                <StatusBar barStyle='light-content' />
                <Text style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    color: '#003844',
                    alignSelf: 'center',
                    paddingTop: 64,
                }}>TestTaker</Text>

                <Text style={{
                    fontSize: 20,
                    alignSelf: 'center',
                    marginTop: 64
                }}>Tap sign in to get get started!</Text>


                <View style={styles.main}>
                    {!user.idToken ?
                        <GoogleSigninButton
                            style={{ width: 192, height: 48 }}
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Dark}
                            onPress={() => navigation.navigate('Subjects')}
                        /> :
                        <TouchableOpacity onPress={signOut}>
                            <Text>Logout</Text>
                        </TouchableOpacity>
                    }
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default EmailValidate