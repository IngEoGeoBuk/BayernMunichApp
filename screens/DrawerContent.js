import React from 'react';
import { StyleSheet, View, Image, Linking } from 'react-native';
import { Avatar, Drawer, Title } from 'react-native-paper';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

export function DrawerContent(props) {

    return(
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} > 
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 5 }}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://i.esdrop.com/d/nW1USMQyuT.png'
                                }}
                                size={50}
                            />
                        </View>
                        <View>
                            <Title style={styles.title}>FC BAYERN</Title>
                        </View>
                        <View>
                        <Image 
                            style={styles.TelekomStyle}
                            source={{ uri:'https://i.esdrop.com/d/2PBErYkOwH.png' }}
                        />
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon = {({color, size}) => (
                                <Icon name="ios-home"
                                    color={color}
                                    size={size}
                                />)}
                            label="Home" onPress={() => {
                                props.navigation.navigate('Home')
                            }}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon = {({color, size}) => (
                                <Icon name="ios-calendar-outline"
                                    color={color}
                                    size={size}
                                />)}
                            label="Match" onPress={() => {
                                props.navigation.navigate('Match')
                            }}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon = {({color, size}) => (
                                <Icon name="ios-football-outline"
                                    color={color}
                                    size={size}
                                />)}
                            label="Teams" onPress={() => {
                                props.navigation.navigate('Teams')
                            }}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon = {({color, size}) => (
                                <Icon name="ios-cart-outline"
                                    color={color}
                                    size={size}
                                />)}
                            label="Store" onPress={() => {
                                props.navigation.navigate('Store')
                            }}
                            onPress={() => Linking.openURL('https://github.com/IngEoGeoBuk')}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon = {({color, size}) => (
                                <Icon name="trophy-outline"
                                    color={color}
                                    size={size}
                                />)}
                            label="History" onPress={() => {
                                props.navigation.navigate('History')
                            }}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon = {({color, size}) => (
                                <Icon name="ios-information-outline"
                                    color={color}
                                    size={size}
                                />)}
                            label="About" onPress={() => {
                                props.navigation.navigate('About')
                            }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    label="Made By IngEoGeoBuk"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        backgroundColor: "rgb(204, 0, 51)",
        top: -4,
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        fontSize: 18,
        marginTop: 15,
        marginLeft: 8,
        fontWeight: 'bold',
        color: 'white'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    TelekomStyle : {
        marginLeft: 40,
        marginTop: 22,
        width: 40, 
        height: 20,

    }
})
