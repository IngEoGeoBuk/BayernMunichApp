import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Teams = () => {
    return (
        <View style={styles.container}>
            <Text>Teams</Text>
        </View>
    )
}

export default Teams

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
})

