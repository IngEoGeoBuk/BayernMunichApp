import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import { globalStyles } from '../styles/Styles';

const History = () => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
            <Image
                style={styles.img}
                source={{ uri:'https://i.esdrop.com/d/rhzn8vhYjQ.png' }}
            />
            </View>
            <View style={{ padding: 10, }}>
                <Text>FC Bayern Munich was founded in 1900 by 11 football players, led by Franz John.</Text>
                <Text></Text>
                <Text style={styles.main}>Early years (1900–1965)</Text>
                <Text>FC Bayern Munich was founded by members of a Munich gymnastics club (MTV 1879). When a congregation of members of MTV 1879 decided on 27 February 1900 that the footballers of the club would not be allowed to join the German Football Association (DFB), 11 members of the football division left the congregation and on the same evening founded Fußball-Club Bayern München.</Text>
                <Text></Text>
                <Text style={styles.main}>The golden years (1965–1979)</Text>
                <Text>A year later in Glasgow, Saint-Étienne were defeated by another Roth goal and Bayern became the third club to win the trophy in three consecutive years.</Text>
                <Text></Text>
                <Text style={styles.main}>From FC Breitnigge to FC Hollywood (1979–1998)</Text>
                <Text>Jupp Heynckes was hired as coach in 1987, but after two consecutive championships in 1988–89 and 1989–90, Bayern's form dipped. After finishing second in 1990–91, the club finished just five points above the relegation places in 1991–92. In 1993–94, Bayern was eliminated in the UEFA Cup second round to Premier League side Norwich City, who remain the only English club to beat Bayern at the Olympiastadion. Success returned when Franz Beckenbauer took over for the second half of the 1993–94 season, winning the championship again after a four-year gap. Beckenbauer was then appointed club president.</Text>
                <Text></Text>
                <Text style={styles.main}>Renewed international success (1998–present)</Text>
                <Text>A third consecutive Bundesliga title followed in 2001, won with a stoppage time goal on the final day of the league season.</Text>
                <Text>For the 2012–13 season, Bayern signed Javi Martínez. After Bayern had finished as runner-up to all titles in 2011–12, Bayern went on to win all titles in 2012–13, setting various Bundesliga records along the way, and becoming the first German team to win the treble.</Text>
                <Text>Hans-Dieter Flick joined Bayern Munich on 1 July 2019 as an assistant coach. they became the second European club to complete the continental treble in two different seasons</Text>
                <Text></Text>
                <Text></Text>
                <Text style={{ fontWeight: 'bold',fontSize: 25 }}>Honours</Text>
                <Text></Text>
                <Text style={styles.main}>Domestic</Text>
                <Text style={styles.mainBlue}>German Champions/Bundesliga</Text>
                <Text>Winners: (30) 1932, 1968–69, 1971–72, 1972–73, 1973–74, 1979–80, 1980–81, 1984–85, 1985–86, 1986–87, 1988–89, 1989–90, 1993–94, 1996–97, 1998–99, 1999–2000, 2000–01, 2002–03, 2004–05, 2005–06, 2007–08, 2009–10, 2012–13, 2013–14, 2014–15, 2015–16, 2016–17, 2017–18, 2018–19, 2019–20 (record)</Text>
                <Text style={styles.mainBlue}>DFB-Pokal</Text>
                <Text>Winners: (20)1956–57, 1965–66, 1966–67, 1968–69, 1970–71, 1981–82, 1983–84, 1985–86, 1997–98, 1999–2000, 2002–03, 2004–05, 2005–06, 2007–08, 2009–10, 2012–13, 2013–14, 2015–16, 2018–19, 2019–20 (record)</Text>
                <Text style={styles.mainBlue}>DFB/DFL-Supercup</Text>
                <Text>Winners: 1987, 1990, 2010, 2012, 2016, 2017, 2018, 2020 (record)</Text>
                <Text style={styles.mainBlue}>DFL-Ligapokal</Text>
                <Text>Winners: 1997, 1998, 1999, 2000, 2004, 2007 (record)</Text>
                <Text></Text>
                <Text style={styles.main}>European</Text>
                <Text style={styles.mainBlue}>UEFA Champions League / European Cup</Text>
                <Text>Winners: 1973–74, 1974–75, 1975–76, 2000–01, 2012–13, 2019–20</Text>
                <Text style={styles.mainBlue}>UEFA Europa League / UEFA Cup</Text>
                <Text>Winners: 1995–96</Text>
                <Text style={styles.mainBlue}>UEFA/European Cup Winners' Cup</Text>
                <Text>Winners: 1966–67</Text>
                <Text style={styles.mainBlue}>UEFA/European Super Cup</Text>
                <Text>Winners: 2013, 2020</Text>
                <Text></Text>
                <Text style={styles.main}>Worldwide</Text>
                <Text style={styles.mainBlue}>Intercontinental Cup</Text>
                <Text>Winners: 1976, 2001</Text>
                <Text style={styles.mainBlue}>FIFA Club World Cup</Text>
                <Text>Winners: 2013</Text>
            </View>
        </ScrollView>
    )
}

export default History

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 10,
    },
    img: {
        width: 150,
        height: 200,
        resizeMode: 'contain', 
    },
    main: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    mainBlue: {
        fontWeight: 'bold',
        fontSize: 18,
        color: globalStyles.munichBlue,
    }
})

