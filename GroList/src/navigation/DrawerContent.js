// import React, {useContext} from 'react';
// import {GlobalContext} from '../context/Provider';
// import {View, StyleSheet, Alert} from 'react-native';
// import {
//   ADD_POST,
//   EXPLORE,
//   HOME_NAVIGATOR,
//   PROFILE,
//   SETTINGS,
//   WALLET,
//   FEEDBACK,
// } from '../constants/routeNames';
// import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
// import {Avatar, Title, Caption, Paragraph, Drawer} from 'react-native-paper';
// import logoutUser from '../context/actions/auth/logout';
// import signOut from '../context/actions/auth/googleLogOut';
// import fonts from '../assets/theme/fonts';
// //import Icon from 'react-native-vector-icons/Ionicons';
// import {useNavigation} from '@react-navigation/native';
// import {comingSoonAlert} from '../helpers/methods';

// export function DrawerContent(props) {
//   const {authState, authDispatch} = useContext(GlobalContext);

//   const getName = () => {
//     if (authState.data.user.firstName || authState.data.user.lastName) {
//       return `${authState.data.user.firstName} ${authState.data.user.lastName}`;
//     } else {
//       return `${authState.data.user.username}`;
//     }
//   };

//   const handleLogout = () => {
//     Alert.alert('Logout!', 'Are you sure you want to logout?', [
//       {
//         text: 'Cancel',
//         onPress: () => {},
//       },
//       {
//         text: 'OK',
//         onPress: () => {
//           props.navigation.closeDrawer();
//           logoutUser()(authDispatch);
//           signOut()(authDispatch);
//         },
//       },
//     ]);
//   };

//   return (
//     <View style={{flex: 1}}>
//       <DrawerContentScrollView {...props}>
//         <View style={styles.drawerContent}>
//           <View style={styles.userInfoSection}>
//             <Avatar.Image
//               source={{uri: authState.data.user.profilePicture}}
//               size={100}
//             />
//             <View style={{flexDirection: 'column'}}>
//               <Title style={styles.title}>{getName()}</Title>
//               <Caption
//                 style={
//                   styles.caption
//                 }>{`@${authState.data.user.username}`}</Caption>
//             </View>
//             <View style={styles.row}>
//               <View style={styles.section}>
//                 <Paragraph style={[styles.paragraph, styles.caption]}>
//                   {authState.data.user.followers.userFollowers.length +
//                     authState.data.user.followers.petFollowers.length}
//                 </Paragraph>
//                 <Caption style={styles.caption}>Followers</Caption>
//               </View>
//               <View style={styles.section}>
//                 <Paragraph style={[styles.paragraph, styles.caption]}>
//                   {authState.data.user.following.userFollowing.length +
//                     authState.data.user.following.petFollowing.length}
//                 </Paragraph>
//                 <Caption style={styles.caption}>Following</Caption>
//               </View>
//             </View>
//           </View>
//           <Drawer.Section style={styles.drawerSection}>
//             <DrawerItem
//               label="Home"
//               onPress={() => {
//                 props.navigation.navigate(HOME_NAVIGATOR, {
//                   screen: HOME_NAVIGATOR,
//                   initial: true,
//                 });
//               }}
//             />
//             <DrawerItem
//               label="Profile"
//               onPress={() => {
//                 props.navigation.navigate(PROFILE, {
//                   screen: PROFILE,
//                   initial: true,
//                   params: {profileId: authState.data.user._id},
//                 });
//               }}
//             />
//             <DrawerItem
//               label="Settings"
//               onPress={() => {
//                 props.navigation.navigate(PROFILE, {
//                   screen: SETTINGS,
//                   initial: false,
//                 });
//               }}
//             />
//             <DrawerItem
//               label="Wallet"
//               onPress={() => {
//                 props.navigation.navigate(PROFILE, {
//                   screen: WALLET,
//                   initial: false,
//                 });
//               }}
//             />
//             <DrawerItem
//               label="Support"
//               onPress={() => {
//                 comingSoonAlert();
//                 //props.navigation.navigate();
//               }}
//             />
//             <DrawerItem
//               label="Feedback"
//               onPress={() => {
//                 props.navigation.navigate(FEEDBACK);
//               }}
//             />
//             <DrawerItem
//               label="Sign Out"
//               onPress={() => {
//                 console.log('User logged out');
//                 handleLogout();
//               }}
//             />
//           </Drawer.Section>
//         </View>
//       </DrawerContentScrollView>
//       {/* <Drawer.Section style={styles.bottomDrawerSection}>
//         <DrawerItem
//           icon={({color, size}) => (
//             <Icon name="log-out-outline" color={color} size={size} />
//           )}
//           label="Sign Out"
//           onPress={() => {
//             console.log('User logged out');
//           }}
//         />
//       </Drawer.Section> */}
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//   },
//   userInfoSection: {
//     paddingTop: 10,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 16,
//     marginTop: 3,
//     fontWeight: fonts.fontWeights.bold,
//     alignSelf: 'center',
//   },
//   caption: {
//     alignSelf: 'center',
//     fontSize: fonts.fontSizes.button,
//     lineHeight: 14,
//   },
//   row: {
//     marginTop: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   section: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   paragraph: {
//     fontWeight: fonts.fontWeights.bold,
//     marginRight: 3,
//   },
//   drawerSection: {
//     marginTop: 15,
//   },
//   bottomDrawerSection: {
//     marginBottom: 15,
//     borderTopColor: '#F4F4F4',
//     borderTopWidth: 1,
//   },
//   preference: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
// });
