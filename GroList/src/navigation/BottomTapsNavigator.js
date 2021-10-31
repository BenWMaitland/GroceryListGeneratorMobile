// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   Platform,
// } from 'react-native';
// import {
//   HOME_NAVIGATOR,
//   EXPLORE,
//   ADD_POST,
//   CHATS,
//   PROFILE,
//   ADD_NEW_CHAT,
// } from '../constants/routeNames';
// import {
//   HomeStackNavigator,
//   ExploreStackNavigator,
//   AddPostStackNavigator,
//   ChatsStackNavigator,
//   ProfileStackNavigator,
// } from './HomeNavigator';
// import fonts from '../assets/theme/fonts';
// import colors from '../assets/theme/colors';
// import Ionicon from 'react-native-vector-icons/Ionicons';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

// const CustomTapButton = ({children, onPress}) => {
//   return (
//     <TouchableOpacity
//       style={{
//         top: Platform.OS === 'android' ? 0 : -10,
//         justifyContent: 'center',
//         alignItems: 'center',
//         ...styles.shadow,
//       }}
//       onPress={onPress}>
//       <View
//         style={{
//           width: 70,
//           height: 70,
//           borderRadius: 35,
//           backgroundColor: colors.ui.white,
//         }}>
//         {children}
//       </View>
//     </TouchableOpacity>
//   );
// };

// const Tab = createBottomTabNavigator();

// // const getTabBarVisibility = route => {
// // //   const routeName = route.state
// // //     ? route.state.routes[route.state.index].name
// // //     : '';

// // //   if (routeName === 'Add New Chat') {
// // //     return false;
// // //   }
// // //   return true;
// // // };

// const BottomTabsNavigator = () => {
//   const getTabBarVisibility = route => {
//     const routeName = getFocusedRouteNameFromRoute(route);
//     const hideOnScreens = [
//       'Add New Chat',
//       'accountInfo',
//       'onBoarding',
//       'selectActivity',
//       'selectFollowing',
//     ];
//     if (hideOnScreens.indexOf(routeName) > -1) {
//       return false;
//     }
//     return true;
//   };
//   return (
//     <Tab.Navigator
//       initialRouteName={HOME_NAVIGATOR}
//       tabBarOptions={{
//         showLabel: false,
//         style: {
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           elevation: 0,
//           backgroundColor: colors.ui.primary,
//           borderRadius: 0,
//           height: 80,
//           ...styles.shadow,
//         },
//       }}>
//       <Tab.Screen
//         name={HOME_NAVIGATOR}
//         component={HomeStackNavigator}
//         options={({route}) => ({
//           tabBarVisible: getTabBarVisibility(route),
//           tabBarIcon: ({focused}) => (
//             <View style={{...styles.iconWrapper}}>
//               <Ionicon
//                 name={focused ? 'home' : 'home-outline'}
//                 color={colors.ui.white}
//                 size={25}
//               />
//               {focused && <Text style={{...styles.iconText}}>Home</Text>}
//             </View>
//           ),
//         })}
//       />
//       <Tab.Screen
//         name={EXPLORE}
//         component={ExploreStackNavigator}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <View style={{...styles.iconWrapper}}>
//               <Ionicon
//                 name={focused ? 'search' : 'search-outline'}
//                 color={colors.ui.white}
//                 size={25}
//               />
//               {focused && <Text style={{...styles.iconText}}>Explore</Text>}
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name={ADD_POST}
//         component={AddPostStackNavigator}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <Image
//               source={require('../assets/images/addPost_dogPaw.png')}
//               resizeMode="contain"
//               style={{
//                 width: 55,
//                 height: 55,
//                 //tintColor: colors.ui.primary,
//               }}
//             />
//           ),
//           tabBarButton: props => <CustomTapButton {...props} />,
//         }}
//       />
//       <Tab.Screen
//         name={CHATS}
//         component={ChatsStackNavigator}
//         options={({route}) => ({
//           tabBarVisible: getTabBarVisibility(route),
//           tabBarIcon: ({focused}) => (
//             <View style={{...styles.iconWrapper}}>
//               <Ionicon
//                 name={focused ? 'chatbubble' : 'chatbubble-outline'}
//                 color={colors.ui.white}
//                 size={25}
//               />
//               {focused && <Text style={{...styles.iconText}}>Chats</Text>}
//             </View>
//           ),
//         })}
//       />
//       <Tab.Screen
//         name={PROFILE}
//         component={ProfileStackNavigator}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <View style={{...styles.iconWrapper}}>
//               <Ionicon
//                 name={focused ? 'person' : 'person-outline'}
//                 color={colors.ui.white}
//                 size={25}
//               />
//               {focused && <Text style={{...styles.iconText}}>Profile</Text>}
//             </View>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   shadow: {
//     shadowColor: colors.ui.black,
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.35,
//     shadowRadius: 5,
//     elevation: 5,
//   },

//   iconWrapper: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     top: Platform.OS === 'android' ? 0 : 10,
//   },

//   iconText: {
//     color: colors.ui.white,
//     fontFamily: fonts.family.body,
//     fontSize: fonts.fontSizes.button,
//     fontWeight: fonts.fontWeights.regular,
//   },
// });

// export default BottomTabsNavigator;
