import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking, Image } from 'react-native'
import { globalStyles } from '../styles/Styles';

const Store = () => {
    return (
        <View style={styles.container}>
            <Text>Let's Go Shopping ^^</Text>
            <Image 
                style={{ width:300, height: 200, resizeMode: 'contain' }}
                source={{ uri: "https://i.esdrop.com/d/JPGgO9G2Pk.gif" }}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => Linking.openURL('https://github.com/IngEoGeoBuk')}
            >
                <Text style={styles.text}>Go to Shop</Text>
            </TouchableOpacity>
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
    button: {
        backgroundColor: globalStyles.munichRed,
        borderRadius: 8,
        padding: 15
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
})

