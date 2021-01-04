import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import MatchBox from './Match/MatchBox'

const Bayern = "https://i.esdrop.com/d/nW1USMQyuT.png"

const Match = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
            <Text>&nbsp;</Text>
            <Text>
                <MatchBox
                    league="Champions League"
                    day="Matchday 6 | 10/12/2020, 5:00 am"
                    team1={Bayern}
                    team2="https://i.esdrop.com/d/vq8JWjBZXU.png"
                    matchpoint1="2"
                    matchpoint2="0"
                    matchsemi="(0:0)"
                />
            </Text>
            <Text>
                <MatchBox
                    league="Bundesliga"
                    day="Matchday 11 | 13/12/2020, 2:30 am"
                    team1="https://i.esdrop.com/d/cSZwHD80It.png"
                    team2={Bayern}
                    matchpoint1="1"
                    matchpoint2="1"
                    matchsemi="(1:0)"
                />
            </Text>
            <Text>
                <MatchBox
                    league="Bundesliga"
                    day="Matchday 12 | 17/12/2020, 4:30 am"
                    team1={Bayern}
                    team2="https://i.esdrop.com/d/qVPHtnyQvg.png"
                    matchpoint1="2"
                    matchpoint2="1"
                    matchsemi="(1:1)"
                />
            </Text>
            <Text>
                <MatchBox
                    league="Bundesliga"
                    day="Matchday 13 | 04/01/2020, 2:30 am"
                    team1="https://i.esdrop.com/d/SwldxLMJzQ.png"
                    team2={Bayern}
                    matchpoint1="1"
                    matchpoint2="2"
                    matchsemi="(1:1)"
                />
            </Text>
            </ScrollView>
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

