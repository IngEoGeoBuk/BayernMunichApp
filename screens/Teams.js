import React, { useState } from 'react'
import { StyleSheet, View, FlatList, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import { globalStyles } from '../styles/Styles';
import { goalkeeper, defenders, midfielders, forwards, coaches } from '../Teams/TeamData';

const Teams = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text>&nbsp;</Text>
            <Text style={styles.position}>GOALKEEPERS</Text>
            <FlatList 
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={goalkeeper}
                renderItem={({ item }) => (
            <ImageBackground source={{ uri: item.img }} style={styles.img}>
                <View>
                    <Text style={styles.item}>
                        <View style={styles.itemPadding}>
                        <View style={styles.number}>
                            <Text style={styles.numbertxt}>{item.number}</Text>
                        </View>
                        <View style={styles.name}>
                            <Text style={styles.nametxt}>{item.name}</Text>
                        </View>
                        </View>
                    </Text>
                </View>
            </ImageBackground>
            )} />
            <Text>&nbsp;</Text>

            <Text style={styles.position}>DEFENDERS</Text>
            <FlatList 
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={defenders}
                renderItem={({ item }) => (
            <ImageBackground source={{ uri: item.img }} style={styles.img}>
                <View>
                    <Text style={styles.item}>
                        <View style={styles.itemPadding}>
                        <View style={styles.number}>
                            <Text style={styles.numbertxt}>{item.number}</Text>
                        </View>
                        <View style={styles.name}>
                            <Text style={styles.nametxt}>{item.name}</Text>
                        </View>
                        </View>
                    </Text>
                </View>
            </ImageBackground>
            )} />

            <Text style={styles.position}>MIDFIELDERS</Text>
            <FlatList 
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={midfielders}
                renderItem={({ item }) => (
            <ImageBackground source={{ uri: item.img }} style={styles.img}>
                <View>
                    <Text style={styles.item}>
                        <View style={styles.itemPadding}>
                        <View style={styles.number}>
                            <Text style={styles.numbertxt}>{item.number}</Text>
                        </View>
                        <View style={styles.name}>
                            <Text style={styles.nametxt}>{item.name}</Text>
                        </View>
                        </View>
                    </Text>
                </View>
            </ImageBackground>
            )} />

            <Text style={styles.position}>FORWARDS</Text>
            <FlatList 
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={forwards}
                renderItem={({ item }) => (
            <ImageBackground source={{ uri: item.img }} style={styles.img}>
                <View>
                    <Text style={styles.item}>
                        <View style={styles.itemPadding}>
                        <View style={styles.number}>
                            <Text style={styles.numbertxt}>{item.number}</Text>
                        </View>
                        <View style={styles.name}>
                            <Text style={styles.nametxt}>{item.name}</Text>
                        </View>
                        </View>
                    </Text>
                </View>
            </ImageBackground>
            )} />

            <Text style={styles.position}>COACHES</Text>
            <FlatList 
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={coaches}
                renderItem={({ item }) => (
            <ImageBackground source={{ uri: item.img }} style={styles.img}>
                <View>
                    <Text style={styles.item}>
                        <View style={styles.itemPadding}>
                        <View style={styles.number}>
                            <Text style={styles.numbertxt}>{item.number}</Text>
                        </View>
                        <View style={styles.name}>
                            <Text style={styles.nametxt}>{item.name}</Text>
                        </View>
                        </View>
                    </Text>
                </View>
            </ImageBackground>
            )} />
        </View>
        </ScrollView>
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
    position: {
        color: globalStyles.munichBlue,
        fontWeight: 'bold',
        fontSize: 30,
        paddingBottom: 10,
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 12, 
    },  
    img: { 
        resizeMode: 'contain', 
        backgroundColor: 'rgb(229, 230, 231)', 
        borderRadius: 10, 
        margin: 5,
        borderColor: 'rgb(77, 77, 77)',
        borderWidth: 0.5,
    },
    item : {
        width: 150,
        height: 380,
        margin: 5,
        display: 'flex',
    },
    itemPadding: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        display: 'flex',
    },
    number: {
        display: 'flex',
        flexDirection: 'row',
        top: -15,
    },
    numbertxt : {
        fontSize: 35,
        color : globalStyles.munichBlue,
        fontWeight: 'bold',
        textShadowColor: '#888', 
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 12, 
    },
    name: {
        top: 250
    },
    nametxt: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: '#888', 
        textShadowOffset: { width:2, height: 1 },
        textShadowRadius: 15, 

    }
})

