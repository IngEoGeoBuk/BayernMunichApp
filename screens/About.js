import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper';
import { globalStyles } from '../styles/Styles';

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.middle}>About Me</Text>
            <Text>&nbsp;</Text>
            <Text style={styles.sub}>Github : IngEoGeoBuk</Text>
            <Text style={styles.sub}>Email: you3667@naver.com</Text>
            <Text>&nbsp;</Text>
            <Text style={styles.sub}>This app is copy app of FC Bayern München</Text>
            <Text style={styles.sub}>Using React-Native</Text>
            <Text>&nbsp;</Text>
            <Text style={styles.sub}>© FC Bayern München AG 2000 - 2021</Text>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        paddingLeft: 20,
        paddingTop: 50,
        flex: 1,
    },
    middle: {
        color: globalStyles.munichBlue,
        fontSize: 30,
        fontWeight: 'bold',
    },
    sub: {
        color: "rgb(190, 190, 190)"
    }
})


