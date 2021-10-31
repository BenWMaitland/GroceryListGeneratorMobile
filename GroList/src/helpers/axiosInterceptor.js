// import axios from 'axios';
// import envs from '../config/env';
// import AsyncStorage from '@react-native-community/async-storage';

// let headers = {'content-type': 'application/json'};
// // Platform.OS === 'android'
// //   ? (envs.BACKEND_URL = 'http://10.0.2.2:3000')
// //   : (envs.baseURL = 'http://localhost:3000');

// const axiosInstance = axios.create({
//   baseURL: envs.BACKEND_URL,
//   headers,
// });

// axiosInstance.interceptors.request.use(
//   async config => {
//     console.log('able to get token');
//     const token = await AsyncStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//       //   console.log('config problem');
//     }
//     // console.log('can not return config');
//     console.log();
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );

// export default axiosInstance;
