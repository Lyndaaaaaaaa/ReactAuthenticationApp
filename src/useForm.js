import { useState, useEffect } from 'react';
import axios from 'axios'

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginUser = {
      username: values.username,
      password: values.password,
    };

    const { data } = await axios.post("http://localhost:8080/auth/login", loginUser);
    console.log(data);

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
