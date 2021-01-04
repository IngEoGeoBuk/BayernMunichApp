import React from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'


const NewsBox = ({img, content}) => {
    return (
        <View style={styles.container}>      
            <ImageBackground source={{ uri: img }}
            style={styles.img}
            imageStyle={{ borderRadius: 10}}
            >
            <Text style={styles.txt}>{content}</Text>
            </ImageBackground>
        </View>
    )
}

const News = () => {
    return (
        <ScrollView
            pagingEnabled 
            horizontal 
            showsHorizontalScrollIndicator={false}
        >
            <NewsBox
                img='https://i.esdrop.com/d/79lmi4oPyX.webp'
                content="Bayern master Mainz with morale and a strong mentality"
            />
            <NewsBox
                img='https://i.esdrop.com/d/iMPVWhd9un.webp'
                content='Flick: "We used our mental strength to force the win"'
            />
            <NewsBox
                img='https://i.esdrop.com/d/5kt0O7Dk8E.webp'
                content='Gnabry subbed off with injury against Mainz'
            />
            <NewsBox
                img='https://i.esdrop.com/d/C6BryOIzEp.webp'
                content='Reds rewarded for rousing fightback'
            />
            <NewsBox
                img='https://i.esdrop.com/d/U0ZauImbH5.webp'
                content='Winner of Kiel vs. Bayern to face Darmstadt'
            />
        </ScrollView>
        
    )
}

export default News

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
        margin: 10,
    },
    img: { 
        resizeMode: 'contain', 
        width: 330,
        height: 130,
        borderColor: 'rgb(77, 77, 77)',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    txt: {
        color: 'white',
        padding: 10,
        fontSize: 15,
        textShadowColor: 'black', 
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 10, 
    }
})
