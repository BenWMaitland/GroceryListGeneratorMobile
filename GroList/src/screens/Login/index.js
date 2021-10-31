import React, {useState, useContext} from 'react';
import LoginComponent from '../../components/Login';
import loginUser from '../../context/actions/auth/loginUser';
import {GlobalContext} from '../../context/Provider';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from 'react-native-google-signin';

const Login = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {authState, authDispatch} = useContext(GlobalContext);

  const onChange = ({inputName, value: inputValue}) => {
    setForm({...form, [inputName]: inputValue});

    if (inputValue === '') {
      // on change input validations
      setErrors(prev => {
        return {
          ...prev,
          [inputName]: `This field is required, enter your ${inputName}.`,
        };
      });
    } else {
      // empty errors if user is filling again
      setErrors(prev => {
        return {...prev, [inputName]: null};
      });
    }
  };

  const onSubmit = () => {
    // on submit form validations
    if (!form.email) {
      setErrors(prevState => {
        return {...prevState, email: 'Please add a email'};
      });
    }
    if (!form.password) {
      setErrors(prevState => {
        return {...prevState, password: 'Please add a password'};
      });
    }

    console.log('before sign in ');
    // on submit form validations

    // if (form.email && form.password) {
    //   loginUser(form)(authDispatch);
    //   //console.log(authState.data);
    // }
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
};

export default Login;
