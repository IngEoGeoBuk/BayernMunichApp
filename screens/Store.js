import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Store = () => {
    return (
        <View style={styles.container}>
            <Text>Store</Text>
        </View>
    )
}

export default Store

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
})

