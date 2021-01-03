import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import TopImgSlider from './Home/TopImgSlider';
import { Text } from 'react-native-paper';

const Home = () => {
    return (
        <View style={styles.container}>
            <TopImgSlider />
            <View>
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
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        flex: 1,
    },
})

