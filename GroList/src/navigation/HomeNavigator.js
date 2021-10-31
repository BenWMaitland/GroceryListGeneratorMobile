// import React, {useContext, useState, useEffect} from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import {
//   HOME_NAVIGATOR,
//   EXPLORE,
//   ADD_POST,
//   CHATS,
//   PROFILE,
//   SETTINGS,
//   SETTINGS_ACCOUNT_INFO,
//   SETTINGS_MY_PETS,
//   SETTINGS_PET_FORM,
//   PROFILE_PET,
//   PICK_MULTIPLE_USER,
//   UPDATE_PET_FORM,
//   ADD_NEW_CHAT,
//   WALLET,
//   OWN_POSTS,
//   SETTINGS_MY_FAMILY,
//   NOTIFICATIONS,
//   SELECT_POST,
//   ON_BOARDING,
//   SELECT_ACTIVITY,
//   ACCOUNT_INFO,
//   SELECT_FOLLOWING,
//   FEEDBACK,
//   FEEDBACKICON,
// } from '../constants/routeNames';
// import {GlobalContext} from '../context/Provider';
// import Ionicon from 'react-native-vector-icons/Ionicons';
// import colors from '../assets/theme/colors';
// import fonts from '../assets/theme/fonts';
// //Screen propertities
// import Home from '../screens/Home';
// import Explore from '../screens/Explore';
// import AddPost from '../screens/AddPost';
// import Chats from '../screens/Chats';
// import Profile from '../screens/Profile';
// import PetProfile from '../screens/Profile/pet';
// import Settings from '../screens/Settings';
// import SettingsAccountInfo from '../screens/Settings/accountInfo';
// import SettingsMyPets from '../screens/Settings/myPets';
// import SettingsMyFamily from '../screens/Settings/myFamily';
// import SettingsPetForm from '../screens/Settings/petForm';
// import UpdatePetFormComponent from '../screens/Settings/updatePetForm';
// import ProfilePickScreen from '../screens/AddPost/ProfilePickScreen';
// import NewChatScreen from '../screens/Chats/AddNewChat';
// import Wallet from '../screens/Wallet';
// import OwnPosts from '../screens/Profile/ownPosts';
// import Notifications from '../screens/Notifications';
// import OnBoarding from '../screens/OnBoarding';
// import FeedBack from '../screens/FeedBack';
// //React Native Components
// import {View, Text, StyleSheet} from 'react-native';
// import NotificationIconComponent from '../components/Notifications';
// import AccountInfo from '../screens/OnBoarding/accountInfo';
// import selectActivity from '../screens/OnBoarding/selectActivity';
// import selectFollowing from '../screens/OnBoarding/selectFollowing';
// import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
// import FeedBackComponent from '../components/FeedBack';

// const HomeStack = createStackNavigator();
// const ExploreStack = createStackNavigator();
// const AddPostStack = createStackNavigator();
// const ChatsStack = createStackNavigator();
// const ProfileStack = createStackNavigator();
// const OnBoardingStack = createStackNavigator();

// const screenOptions = {
//   headerShown: true,
//   headerStyle: {
//     backgroundColor: colors.ui.primary,
//   },
//   headerTintColor: colors.text.white,
//   headerTitleStyle: {
//     fontFamily: fonts.family.heading,
//     fontWeight: fonts.fontWeights.bold,
//     fontSize: fonts.fontSizes.title,
//   },
// };

// const screenOptions2 = {
//   headerMode: 'none',
//   headerShown: false,
//   headerStyle: {
//     backgroundColor: colors.ui.primary,
//   },
//   headerTintColor: colors.text.white,
//   headerTitleStyle: {
//     fontFamily: fonts.family.heading,
//     fontWeight: fonts.fontWeights.bold,
//     fontSize: fonts.fontSizes.title,
//   },
// };

// export const HomeStackNavigator = ({navigation}) => {
//   return (
//     <HomeStack.Navigator
//       initialRouteName={HOME_NAVIGATOR}
//       screenOptions={{...screenOptions}}>
//       <HomeStack.Screen
//         name={HOME_NAVIGATOR}
//         component={Home}
//         options={{
//           title: HOME_NAVIGATOR,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="md-megaphone-outline"
//                   size={25}
//                   color={colors.ui.white}
//                   onPress={() => navigation.navigate(FEEDBACK)}
//                 />
//               </View>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <HomeStack.Screen
//         name={PROFILE}
//         component={Profile}
//         options={{
//           title: PROFILE,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <HomeStack.Screen
//         name={PROFILE_PET}
//         component={PetProfile}
//         options={{
//           title: PROFILE_PET,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <HomeStack.Screen
//         name={OWN_POSTS}
//         component={OwnPosts}
//         options={{
//           title: OWN_POSTS,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <HomeStack.Screen
//         name={NOTIFICATIONS}
//         component={Notifications}
//         options={{
//           title: NOTIFICATIONS,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <HomeStack.Screen name={ON_BOARDING} component={OnBoarding} />
//       <HomeStack.Screen name={ACCOUNT_INFO} component={AccountInfo} />
//       <HomeStack.Screen name={SELECT_ACTIVITY} component={selectActivity} />
//       <HomeStack.Screen name={SELECT_FOLLOWING} component={selectFollowing} />
//       <HomeStack.Screen
//         name={FEEDBACK}
//         component={FeedBack}
//         options={{
//           title: 'FEED BACK',
//         }}
//       />
//     </HomeStack.Navigator>
//   );
// };
// export const ExploreStackNavigator = ({navigation}) => {
//   return (
//     <ExploreStack.Navigator screenOptions={{...screenOptions}}>
//       <ExploreStack.Screen
//         name={EXPLORE}
//         component={Explore}
//         options={{
//           title: EXPLORE,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="md-megaphone-outline"
//                   size={25}
//                   color={colors.ui.white}
//                   onPress={() => navigation.navigate(FEEDBACK)}
//                 />
//               </View>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <ExploreStack.Screen
//         name={PROFILE}
//         component={Profile}
//         options={{
//           title: PROFILE,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="md-megaphone-outline"
//                   size={25}
//                   color={colors.ui.white}
//                   onPress={() => navigation.navigate(FEEDBACK)}
//                 />
//               </View>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <ExploreStack.Screen
//         name={PROFILE_PET}
//         component={PetProfile}
//         options={{
//           title: PROFILE_PET,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="md-megaphone-outline"
//                   size={25}
//                   color={colors.ui.white}
//                   onPress={() => navigation.navigate(FEEDBACK)}
//                 />
//               </View>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <ExploreStack.Screen
//         name={OWN_POSTS}
//         component={OwnPosts}
//         options={{
//           title: OWN_POSTS,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="md-megaphone-outline"
//                   size={25}
//                   color={colors.ui.white}
//                   onPress={() => navigation.navigate(FEEDBACK)}
//                 />
//               </View>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//     </ExploreStack.Navigator>
//   );
// };
// export const AddPostStackNavigator = ({navigation}) => {
//   return (
//     <AddPostStack.Navigator screenOptions={{...screenOptions}}>
//       <AddPostStack.Screen
//         name={ADD_POST}
//         component={AddPost}
//         options={{
//           title: ADD_POST,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="md-megaphone-outline"
//                   size={25}
//                   color={colors.ui.white}
//                   onPress={() => navigation.navigate(FEEDBACK)}
//                 />
//               </View>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <AddPostStack.Screen
//         name={PICK_MULTIPLE_USER}
//         component={ProfilePickScreen}
//         options={{
//           title: ADD_POST,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="md-megaphone-outline"
//                   size={25}
//                   color={colors.ui.white}
//                   onPress={() => navigation.navigate(FEEDBACK)}
//                 />
//               </View>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//     </AddPostStack.Navigator>
//   );
// };
// export const ChatsStackNavigator = ({navigation}) => {
//   return (
//     <ChatsStack.Navigator screenOptions={{...screenOptions}}>
//       <ChatsStack.Screen
//         name={CHATS}
//         component={Chats}
//         options={{
//           title: CHATS,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="md-megaphone-outline"
//                   size={25}
//                   color={colors.ui.white}
//                   onPress={() => navigation.navigate(FEEDBACK)}
//                 />
//               </View>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <ChatsStack.Screen
//         name={ADD_NEW_CHAT}
//         component={NewChatScreen}
//         options={({route}) => ({
//           title: route.params.username,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="md-megaphone-outline"
//                   size={25}
//                   color={colors.ui.white}
//                   onPress={() => navigation.navigate(FEEDBACK)}
//                 />
//               </View>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         })}
//       />
//     </ChatsStack.Navigator>
//   );
// };
// export const ProfileStackNavigator = ({navigation}) => {
//   const {authState} = useContext(GlobalContext);

//   return (
//     <ProfileStack.Navigator
//       initialRouteName={PROFILE}
//       screenOptions={{...screenOptions}}>
//       <ProfileStack.Screen
//         name={PROFILE}
//         initialParams={{profileId: authState.data.user._id}}
//         component={Profile}
//         options={{
//           title: PROFILE,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="md-megaphone-outline"
//                   size={25}
//                   color={colors.ui.white}
//                   onPress={() => navigation.navigate(FEEDBACK)}
//                 />
//               </View>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <ProfileStack.Screen
//         name={PROFILE_PET}
//         component={PetProfile}
//         options={{
//           title: PROFILE_PET,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="md-megaphone-outline"
//                   size={25}
//                   color={colors.ui.white}
//                   onPress={() => navigation.navigate(FEEDBACK)}
//                 />
//               </View>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <ProfileStack.Screen
//         name={OWN_POSTS}
//         component={OwnPosts}
//         options={{
//           title: OWN_POSTS,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="md-megaphone-outline"
//                   size={25}
//                   color={colors.ui.white}
//                   onPress={() => navigation.navigate(FEEDBACK)}
//                 />
//               </View>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <ProfileStack.Screen
//         name={SETTINGS}
//         component={Settings}
//         options={{
//           title: SETTINGS,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="md-megaphone-outline"
//                   size={25}
//                   color={colors.ui.white}
//                   onPress={() => navigation.navigate(FEEDBACK)}
//                 />
//               </View>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <ProfileStack.Screen
//         name={SETTINGS_ACCOUNT_INFO}
//         component={SettingsAccountInfo}
//         options={{
//           title: SETTINGS_ACCOUNT_INFO,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="md-megaphone-outline"
//                   size={25}
//                   color={colors.ui.white}
//                   onPress={() => navigation.navigate(FEEDBACK)}
//                 />
//               </View>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <ProfileStack.Screen
//         name={SETTINGS_MY_FAMILY}
//         component={SettingsMyFamily}
//         options={{
//           title: SETTINGS_MY_FAMILY,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="md-megaphone-outline"
//                   size={25}
//                   color={colors.ui.white}
//                   onPress={() => navigation.navigate(FEEDBACK)}
//                 />
//               </View>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <ProfileStack.Screen
//         name={SETTINGS_MY_PETS}
//         component={SettingsMyPets}
//         options={{
//           title: SETTINGS_MY_PETS,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="md-megaphone-outline"
//                   size={25}
//                   color={colors.ui.white}
//                   onPress={() => navigation.navigate(FEEDBACK)}
//                 />
//               </View>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <ProfileStack.Screen
//         name={SETTINGS_PET_FORM}
//         component={SettingsPetForm}
//         options={{
//           title: SETTINGS_PET_FORM,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="md-megaphone-outline"
//                   size={25}
//                   color={colors.ui.white}
//                   onPress={() => navigation.navigate(FEEDBACK)}
//                 />
//               </View>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <ProfileStack.Screen
//         name={UPDATE_PET_FORM}
//         component={UpdatePetFormComponent}
//         options={{
//           title: UPDATE_PET_FORM,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="md-megaphone-outline"
//                   size={25}
//                   color={colors.ui.white}
//                   onPress={() => navigation.navigate(FEEDBACK)}
//                 />
//               </View>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <ProfileStack.Screen
//         name={WALLET}
//         component={Wallet}
//         options={{
//           title: WALLET,
//           headerRight: () => (
//             <View style={styles.ViewContainer}>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="md-megaphone-outline"
//                   size={25}
//                   color={colors.ui.white}
//                   onPress={() => navigation.navigate(FEEDBACK)}
//                 />
//               </View>
//               <View style={styles.iconContainer}>
//                 <NotificationIconComponent />
//               </View>
//               <View style={styles.iconContainer}>
//                 <Ionicon
//                   name="menu-outline"
//                   size={30}
//                   color={colors.ui.white}
//                   onPress={() => navigation.openDrawer()}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//       />
//     </ProfileStack.Navigator>
//   );
// };

// export const OnBoardingStackNavigator = ({navigation}) => {
//   return (
//     <OnBoardingStack.Navigator headerMode="none" options={{headerShown: false}}>
//       <OnBoardingStack.Screen name={ON_BOARDING} component={OnBoarding} />
//     </OnBoardingStack.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   ViewContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     width: 120,
//   },
//   iconContainer: {
//     width: 30,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   notificationContainer: {
//     position: 'absolute',
//     zIndex: 999,
//     top: -1,
//     right: 5,
//     width: 10,
//     height: 10,
//     padding: 2,
//     borderRadius: 50,
//     backgroundColor: colors.ui.danger,
//     // borderWidth: 1,
//     // borderColor: 'red',
//   },
//   notificationText: {
//     color: colors.text.white,
//     fontFamily: fonts.family.body,
//     fontSize: fonts.fontSizes.caption,
//     fontWeight: fonts.fontWeights.bold,
//   },
// });
