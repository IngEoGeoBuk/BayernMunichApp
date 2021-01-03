import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Match = () => {
    return (
        <View style={styles.container}>
            <Text>Match</Text>
        </View>
    )
}

export default Match

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
})

