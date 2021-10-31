import React, {useContext, useState} from 'react';
import {Alert} from 'react-native';
import RegisterComponent from '../../components/Register';
import {GlobalContext} from '../../context/Provider';
import register from '../../context/actions/auth/register';
import auth from '../../context/reducers/auth';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {authDispatch, authState} = useContext(GlobalContext);

  const onChange = ({inputName, value: inputValue}) => {
    setForm({...form, [inputName]: inputValue});

    if (inputValue === '') {
      // on change input validations
      setErrors(prev => {
        return {...prev, [inputName]: 'This field is required'};
      });
    }
    if (inputName === 'email') {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
      );
      if (!pattern.test(inputValue)) {
        setErrors(prev => {
          return {
            ...prev,
            [inputName]: 'Email not valid',
          };
        });
      } else {
        // empty errors if user is filling again
        setErrors(prev => {
          return {...prev, [inputName]: null};
        });
      }
    }
    if (inputName === 'password') {
      if (inputValue.length < 6) {
        setErrors(prev => {
          return {
            ...prev,
            [inputName]: 'This field needs at least 6 characters',
          };
        });
      } else {
        // empty errors if user is filling again
        setErrors(prev => {
          return {...prev, [inputName]: null};
        });
      }
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
    if (
      Object.values(form).length === 2 && // check that the form submits 5 inputs
      Object.values(form).every(item => item.trim().length > 0) && // check for no empty values
      Object.values(errors).every(item => !item) // check if no errors on the form
    ) {
      console.log('state  ', authState);
      register(form)(authDispatch);
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
};

export default Register;
