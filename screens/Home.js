import React from 'react'
import { StyleSheet, View, Image, ScrollView } from 'react-native'
import TopImgSlider from './Home/TopImgSlider';
import { Text } from 'react-native-paper';
import MatchHome from './Home/MatchHome';

const Home = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <TopImgSlider />
                <View style={{ alignItems: 'center' }}>
                    <Text>
                        {"\n"}{"\n"}
                        <Text style={{ color: "rgb(0, 47, 108)" }}>
                            PRESENTED BY&nbsp; 
                        </Text>
                        <Image 
                            style={{ width:70, height: 30 }}
                            source={{ uri: "https://i.esdrop.com/d/WiaW45oIz7.png" }}
                        />
                    </Text>
                    <Text>&nbsp;</Text>
                </View>
                <MatchHome/>
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
    },
})

