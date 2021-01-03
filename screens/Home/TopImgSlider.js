import React, { useState } from 'react'
import { View, Image, ScrollView, Dimensions, Text, StyleSheet, ImageBackground } from 'react-native'

// https://www.youtube.com/watch?v=otr_x0wKgvU&ab_channel=microcode
// const { width } = Dimensions.get('window');
const width = Dimensions.get('window').width / 1.2;
const height = width * 1.2;

const datas = [
    {
        title: "Titles, triumphs & terrific goals",
        image: "https://i.esdrop.com/d/Q9zVC1Ujbs.webp",
    }, 
    {
        title: "Behold: Bayern's Best goals of 2020",
        image: "https://i.esdrop.com/d/oM80FnOyJz.webp",
    }, 
    {
        title: "Part 6 features board member Oliver Kahn.",
        image: "https://i.esdrop.com/d/klFsgr0alT.webp",
    },
    {
        title: "Leverkusen in the 2020/21",
        image: "https://i.esdrop.com/d/y7SbUT4XYj.webp",
    },
    {
        title: "World footballer Lewandowski",
        image: "https://i.esdrop.com/d/a0wFMCtvQA.webp",
    },
]

const TopImgSlider = () => {
    const [active, setActive] = useState(0);

    const change = ({nativeEvent}) => {
        const slide = Math.ceil(
          nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
        );
        if (slide !== active) {
          setActive(slide);
        }
    };


    return (
        <View style={styles.container}>
            <ScrollView 
                pagingEnabled 
                horizontal 
                onScroll={change}
                showsHorizontalScrollIndicator={false}
                style={styles.scroll}>
            {
                datas.map((data, index) => (
                    <ImageBackground source={{ uri: data.image }}
                    imageStyle={{ borderRadius: 10}}
                     style={styles.image}
                    >
                    <View>
                        <Text key={index} style={styles.title}>
                            {data.title}
                        </Text>
                    </View>
                    </ImageBackground>
                ))
            }
            </ScrollView>
            <View style={styles.pagination}>
                {
                    datas.map((i, k) => ( 
                        <Text key={k} style={k == active? styles.activeDot: styles.dot}>
                            <Text>___</Text>
                        </Text>
                    ))
                }
            </View>
        </View>
    )
}

export default TopImgSlider

const styles = StyleSheet.create({
    container: { 
        marginTop: 30, 
        width, 
        height, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    scroll: { width, height },
    image: { 
        width, 
        height, 
        resizeMode: 'contain',
    },
    title: {
        width, 
        height, 
        resizeMode: 'contain', 
        color: 'white',
        fontSize: 28,
        margin: 15,
        top: 260,
        textShadowColor: 'black', 
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 10, 
    },
    pagination: { 
        flexDirection: 'row', 
        position: 'absolute', 
        bottom: -25, 
        alignSelf: 'center' 
    },

    activeDot: {
        color: 'rgb(119, 35, 57)',
        marginHorizontal: 3,
        fontWeight: '300',
        fontSize: 30
    },
    dot: {
        color: 'rgb(197, 197, 197)',
        marginHorizontal: 3,
        fontWeight: '300',
        fontSize: 30,
    },
})