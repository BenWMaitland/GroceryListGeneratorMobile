import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
import PortraitPost from '../../components/Posts/PortraitPost';
import {UPDATE_GLOBAL_STATE} from '../../constants/actionTypes';
import {GlobalContext} from '../../context/Provider';
import axiosInstance from '../../helpers/axiosInterceptor';
import Onboarding from '../OnBoarding';
import {OnBoardingStackNavigator} from '../../navigation/HomeNavigator';

const Home = () => {
  const {authState, authDispatch} = useContext(GlobalContext);
  const [postsInfo, setPostsInfo] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    axiosInstance
      .post('user/homePosts', {
        ownPosts: authState.data.user.posts,
        ownPetsIds: authState.data.user.pets,
        userFollowingIds: authState.data.user.following.userFollowing,
        petFollowingIds: authState.data.user.following.petFollowing,
      })
      .then(res => {
        setPostsInfo(res.data);
      })
      .catch(err => {
        console.log('Could not get Home Posts info :>> ', err.message);
      });
  }, [
    authState.data.user.following.petFollowing,
    authState.data.user.following.userFollowing,
    authState.data.user.pets,
    authState.data.user.posts,
  ]);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    axiosInstance
      .post('user/homePosts', {
        ownPosts: authState.data.user.posts,
        ownPetsIds: authState.data.user.pets,
        userFollowingIds: authState.data.user.following.userFollowing,
        petFollowingIds: authState.data.user.following.petFollowing,
      })
      .then(res => {
        setPostsInfo(res.data);
        console.log(
          'Look at this response from post refresh ',
          postsInfo[0].likes,
        );
      })
      .catch(err => {
        console.log('Could not get Home Posts info :>> ', err.message);
      });
    // UPDATE GLOBAL STATE
    setTimeout(() => {
      axiosInstance
        .post('user/getUserById', {
          userId: authState.data.user._id,
        })
        .then(res => {
          authDispatch({
            type: UPDATE_GLOBAL_STATE,
            payload: {user: res.data},
          });
        })
        .then(setRefreshing(false))
        .catch(err => {
          console.log('Could not update Global State :>> ', err.message);
        });
    }, 300);
  }, [
    authDispatch,
    authState.data.user._id,
    authState.data.user.following.petFollowing,
    authState.data.user.following.userFollowing,
    authState.data.user.pets,
    authState.data.user.posts,
    postsInfo,
  ]);

  return postsInfo ? (
    postsInfo.length === 0 ? (
      // <View>
      //   <Text>
      //     Oh! It seems that you are not following anyone, go to Explore and
      //     start following someone to see their Posts!
      //   </Text>
      // </View>
      <Onboarding />
    ) : (
      <View style={{paddingHorizontal: 10, marginBottom: 80}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item._id}
          data={postsInfo}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={({item}) => <PortraitPost post={item} />} // must use 'item' as parameter, cannot change to 'post'
        />
      </View>
    )
  ) : (
    <Text>Loading</Text>
  );
};

export default Home;
