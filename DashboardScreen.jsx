import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Surface, FAB, Searchbar, IconButton, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import smileTab from '../../data/smile/TabData';
import theme from '../../theme';
import MobileNotch from '../../assets/SmileIcon/mobile-notch.png';
import Shop from '../../assets/SmileIcon/shop.png';
import IDBadge from '../../assets/SmileIcon/id-badge.png';
import CalendarClock from '../../assets/SmileIcon/calendar-clock.png';
import WaveForm from '../../assets/SmileIcon/circle-waveform-lines.png';
import Loading from '../../assets/SmileIcon/loading.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const renderTabBar = (props) => (
  <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>

    {props.navigationState.routes.map((route, index) => {
      const isFocused = props.navigationState.index === index;
      const titleFontSize = Math.max(18 - route.title.length, 15);
      return (
        <TouchableOpacity
          key={index}
          style={{
          
            alignItems: 'center',
            right: "10%",
            paddingHorizontal: 1,
            marginTop: "1%",
          
            borderBottomWidth: isFocused ? 5 : 0,
            borderBottomColor: theme.colors.smile.tabBarColor,


          }}
          onPress={() => props.navigation.navigate(route.key)}
        >
          <View style={{ position: 'relative', marginLeft: "20%", }}>
            <View style={[styles.circleText, { backgroundColor: isFocused ? "#FE5000" : "gray" }]}>
              <Text style={styles.tabText}>14</Text>
            </View>
          </View>
          <Text style={{ color: isFocused ? theme.colors.smile.tabBarColor : "gray", fontSize: titleFontSize, right: "10%", marginTop: "5%",marginBottom:'10%',alignItems:'flex-start',}}>{route.title}</Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

export default function DashboardScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState(smileTab);
  const [searchQuery, setSearchQuery] = React.useState('');

  const FirstRoute = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>

      <View style={styles.QR}>
        <View style={styles.QRCircle} />
        <Text style={{ fontSize: 16 }}>Total QR Applications:110</Text>
      </View>
      <View style={styles.POS}>
        <View style={styles.POSCircle} />
        <Text style={{ fontSize: 16 }}>Total POS Applications:90</Text>
      </View>
      <Surface style={styles.card1}>
        <Text style={styles.name}>Daw Khin Moh Moh Aye</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Image source={MobileNotch} style={styles.icon} />
            <Text style={styles.infoText}>09123456789</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={Shop} style={styles.icon} />
            <Text style={styles.infoText}>Khine Store</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={IDBadge} style={styles.icon} />
            <Text style={styles.infoText}>12/DAGAMA(N)035600</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={CalendarClock} style={styles.icon} />
            <Text style={styles.infoText}>20 Nov 2023</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={WaveForm} style={styles.icon} />
            <Text style={styles.infoText}>Wave: Passed</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={Loading} style={styles.icon} />
            <Text style={styles.infoText}>Status: POS machine is in preparation</Text>
          </View>
        </View>
      </Surface>
      <Surface style={styles.card2}>
        <Text style={styles.name}>U Mya</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Image source={MobileNotch} style={styles.icon} />
            <Text style={styles.infoText}>09123456789</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={Shop} style={styles.icon} />
            <Text style={styles.infoText}>Khine Store</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={IDBadge} style={styles.icon} />
            <Text style={styles.infoText}>12/DAGAMA(N)035600</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={CalendarClock} style={styles.icon} />
            <Text style={styles.infoText}>20 Nov 2023</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={WaveForm} style={styles.icon} />
            <Text style={styles.infoText}>Wave: Passed</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={Loading} style={styles.icon} />
            <Text style={styles.infoText}>Status: POS machine is in preparation</Text>
          </View>
        </View>
      </Surface>
      <FAB
        style={styles.fab}
        icon="plus"
        color="white"
        onPress={() => [
          navigation.navigate('nrccheck')
        ]}
      />

    </View>
  );

  const SecondRoute = () => (
    <View style={styles.tab}>
      <Text style={styles.tabContent}>Drafted Screen</Text>
    </View>
  );
  const ThirdRoute = () => (
    <View style={styles.tab}>
      <Text style={styles.tabContent}>Submitted Screen</Text>
    </View>
  );
  const FouthRoute = () => (
    <View style={styles.tab}>
      <Text style={styles.tabContent}>Resubmit Screen</Text>
    </View>
  );
  const FifthRoute = () => (
    <View style={styles.tab}>
      <Text style={styles.tabContent}>Onboard </Text>
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fouth: FouthRoute,
    fifth: FifthRoute,
  });
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.backarrowContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
            <MaterialCommunityIcons name="arrow-left" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <Searchbar
          placeholder="Search by merchant's name/shop/ph"
          placeholderTextColor="#333333"
          onChangeText={onChangeSearch}
          value={searchQuery}
          iconColor={'#333333'}
          inputStyle={styles.inputStyle}
          Icon={() => {
            <IconButton
              icon="magnify"

              onPress={() => console.log('Left Icon Pressed')}
              style={{ position: 'absolute' }}

            />
          }}
          onIconPress={() => console.log('Left Icon Pressed')}
          clearIcon={() => (
            <IconButton
              icon="cog"

              onPress={() => console.log('Right Icon Pressed')}
              style={{ position: 'absolute' }}

            />

          )}
          onClearIconPress={() => console.log('Right Icon Pressed')}
          style={{ width: "80%", backgroundColor: 'white', marginLeft: "15%", height: "110%", marginTop: "2%" }}
        />
      </View>
      <Surface style={styles.surface}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: 100 }}
          style={{ backgroundColor: 'white' }}
          renderTabBar={renderTabBar}
        />
      </Surface>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.smile.tabBarColor,
  },
  surface: {
    padding: 8,
    height: "100%",
    width: "100%",
    borderRadius: 20,
    elevation: 3,
    top: "4%",
    backgroundColor: "#fff",
  },
  tabText: {
    color: 'white',
    fontSize: 12,
    bottom: "5%",
    left: "15%"

  },
  inputStyle: {
    fontSize: 11,
    bottom: "2%",


  },
  dashboardText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: "38%",
    marginRight: "55%",

  },
  circleText: {
    position: 'absolute',
    // backgroundColor: "#FE5000",
    borderRadius: 60,
    width: "35%",
    height: 16,
    left: "8%",
    
    marginTop: "5%",
  },
  QR: {
    flexDirection: 'row',
    bottom: 2,
    alignItems: 'center',
    marginRight: "50%", left: "3%",
    bottom: "18%",

  },
  QRCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'lightgreen',
    marginRight: 10
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  tabContent: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.smile.textDark
  },
  POS: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 0,
    marginRight: "50%",
    bottom: "15%",
    left: "3%",

  },
  POSCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'lightblue',
    marginRight: 10,

  },
  backarrowContainer: {
    top: "120%",
    left: "2%",

  },
  searchContainer: {
    marginTop: "30%",
    marginBottom: "10%",
    height: "5%",

  },

  card1: {
    padding: 15,
    borderRadius: 16,
    elevation: 4,
    bottom: "6%",
    width: "95%",
    backgroundColor: '#ffffff',

  },
  card2: {
    bottom: "5%",
    padding: 15,
    width: "95%",
    borderRadius: 16,
    elevation: 4,
    backgroundColor: '#ffffff',

  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333',
  },
  infoContainer: {
    marginTop: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
    // color: theme.colors.smile.tabBarColor,
  },
  infoText: {
    fontSize: 16,
    color: '#555555',

  },
  fab: {
    position: "absolute",
    top: "70%",
    left: "85%",
    borderRadius: 50,
    backgroundColor: "#FE5000",
  },


});
