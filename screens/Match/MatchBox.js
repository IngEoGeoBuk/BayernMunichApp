import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text } from 'react-native-paper';
import { globalStyles } from '../../styles/Styles';

const MatchBox = ({ league, day, team1, team2, 
    matchpoint1, matchpoint2, matchsemi }) => {
    return (
        <View style={{ padding: 5 }}>
        <View style={[ league == "Champions League" ? styles.containerChamps : styles.container ]}>
            <View style={styles.containerFlex}>
                <Text style={[ league == "Champions League" ? styles.Top1Champs : styles.Top1 ]}>{league}, &nbsp; </Text>
                <Text style={[ league == "Champions League" ? styles.Top2Champs : styles.Top2 ]}>{day}</Text>
            </View>
            <View style={styles.containerFlex}>
                <Image 
                    style={{ width:70, height: 70, resizeMode: 'contain',  }}
                    source={{ uri: team1 }}
                />
                <Text> &nbsp; </Text>
                <Text style={[ league == "Champions League" ? styles.matchPointChamps : styles.matchPoint ]}>{matchpoint1}</Text>
                <Text> &nbsp; </Text>
                <Text style={[league == "Champions League" ? styles.matchCenterChamps : styles.matchCenter ]}>FT</Text>
                <Text> &nbsp; </Text>
                <Text style={[ league == "Champions League" ? styles.matchPointChamps : styles.matchPoint ]}>{matchpoint2}</Text>
                <Text> &nbsp; </Text>
                <Image 
                    style={{ width:70, height: 70, resizeMode: 'contain',  }}
                    source={{ uri: team2 }}
                />
            </View>
            <View><Text style={[ league == "Champions League" ? styles.matchBottomChamps : styles.matchBottom ]}>{matchsemi}</Text></View>
            <View></View>
        </View>
        </View>
    )
}

export default MatchBox

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderColor: 'rgb(197, 197, 197)',
        width: 330,
        height: 150,
        borderRadius: 15,
        borderWidth: 1,
    },
    containerChamps: {
        backgroundColor: 'rgb(30, 0, 0)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderColor: 'black',
        width: 330,
        height: 150,
        borderRadius: 15,
        borderWidth: 1,
    },
    containerFlex: {
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: 5
    },
    Top1 : {
        fontWeight: 'bold',
        fontSize: 13,
        color: globalStyles.munichBlue,
    },
    Top1Champs: { 
        fontWeight: 'bold',
        fontSize: 11,
        color: "white" 
    },
    Top2 : {
        fontSize: 13,
        color: globalStyles.munichBlue,
    },
    Top2Champs : {
        fontSize: 13,
        color: "white"
    },
    Top2Champs: { color: "white" },
    matchPoint: {
        backgroundColor: 'rgb(241, 242, 244)',
        borderRadius: 15,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 25,
        padding: 10,
        color: globalStyles.munichBlue,
    },
    matchPointChamps: {
        backgroundColor: 'rgb(30, 0, 0)',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 25,
        padding: 10,
        color: 'white',
    },
    matchCenter: {
        backgroundColor: 'rgb(241, 242, 244)',
        borderRadius: 15,
        fontSize: 17,
        padding: 8
    },
    matchCenterChamps: {
        backgroundColor: 'rgb(30, 0, 0)',
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        fontSize: 17,
        padding: 8
    },
    matchBottom: {
        color: globalStyles.munichBlue,
        fontWeight: 'bold',
        bottom: 10, 
    },
    matchBottomChamps: {
        color: "white",
        fontWeight: 'bold',
        bottom: 10, 
    }
})