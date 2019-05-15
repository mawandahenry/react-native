import React from "react";
import { Image,View, Text, Button, StyleSheet, ScrollView,TouchableOpacity } from "react-native";
import { DrawerItems, SafeAreaView, createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";
import DetailsScreen from './details';
import Settings from './settings';
import Profile from './profile';
import Dashboard from './dashboard';
import Icon from 'react-native-vector-icons/FontAwesome';


class HomeScreen extends React.Component {
  static navigationOptions={
    title: 'Home',
    headerStyle: {
      backgroundColor: 'pink'
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button title = "go to Next Page" onPress = {()=> this.props.navigation.navigate('Dashboard')} />
      </View>
    );
  }
}
const Linkd = createBottomTabNavigator({
  Profile: {
    screen: Profile,
    },
  Details: {
    screen: Settings
  }
},{
  navigationOptions:({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName,
      headerStyle: {
        backgroundColor: 'gray'
      }
    }
  }
});
const Stk = createStackNavigator({
  Linkd: {screen: Linkd}
},
{
  defaultNavigationOptions: ({navigation}) => {
  return{
    headerRight: (
      <Icon name = "bars" color = "blue" size = {32}  onPress = {()=> navigation.openDrawer()}/>
    )
  }

}
});


const AppDrawer = createDrawerNavigator({
  Dashboard: {screen: Stk,
    navigationOptions: {
      drawerLabel: 'DashB',
      drawerIcon: ({focused}) => {
        return(
          <Icon name = "dashboard" size = {25} color = "black" />
        )
      },
      onItemPress: ({navigation}) => {navigation.push('Details')}
    }
  },
  Profile: {screen: Profile}
},
{
  contentComponent: props =>
  <ScrollView>
  <SafeAreaView style = {styles.conta}>
  <View >

  <View style = {styles.head}>
  <Image style = {styles.img} source = {require('../src/images/naco.jpg')} />

  </View>

  <View style = {styles.content}>
  <DrawerItems {...props} />
  </View>

  <View style = {styles.foot}>
  <Text> Footer Area</Text>
  <TouchableOpacity onPress = {({navigation})=>navigation.navigate('Home')} >
  <Text>Log out</Text>
  </TouchableOpacity>
  </View>

  </View>
  </SafeAreaView>
</ScrollView>
});

const AppNavigator = createSwitchNavigator({
  Home: {
    screen: DetailsScreen,
    },
  Dashboard: {
    screen: AppDrawer
  }
});

// Apps.navigationOptions = {
//   tabBarLabel:'Home',
//   tabBarIcon:({focused, tintColor}) => (
//     <Icon
//     name = {`home${focused ? '': ''}`}
//     color = {tintColor}
//     size = {32}
//     />
//   )
// }

// const AppNavigator2 = createStackNavigator({
//   Profile: {
//     screen: Profile,
//     },
//   Settings: {
//     screen: Settings
//   }
// },
//   {
//     initalRouteName: 'Profile'
//   }
//
// );
// AppNavigator2.navigationOptions = {
//   tabBarLabel:'Profile',
//   tabBarIcon:({focused, tintColor}) => (
//     <Icon
//     name = {`cog${focused ? '':''}`}
//     color = {tintColor}
//     size = {32}
//     />
//   )
// }
// const AppNavigator = createBottomTabNavigator({
//   Start: {screen: Apps},
//   Profiles: {screen: AppNavigator2}
// },
// {
//   tabBarOptions: {
//        initialRouteName: 'Home',
//        activeTintColor: '#fff',
//        inactiveTintColor: '#ddd',
//        style: {
//          backgroundColor: 'pink',
//       }
//    }
//  })
const styles = StyleSheet.create({
  conta: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'orange'
  },
  head: {
    flex: 1,
    height: 200,
    flexDirection: 'row',
    backgroundColor: 'yellow'
  },
  tit: {
    fontSize: 25,
    color: 'green',
    padding: 5
  },
  foot: {
    position: 'relative',
    bottom: 10,
    backgroundColor: 'pink',
    height: 300
  },
  img:{
    height: 80
  },
  content: {
    backgroundColor: 'white'
  }
})

export default createAppContainer(AppNavigator);
