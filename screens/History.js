import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const History = () => {
    return (
        <View style={styles.container}>
            <Text>History</Text>
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
})

