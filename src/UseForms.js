import {useState, useEffect} from 'react';
import axios from "axios";

const useForms = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        nom: '',
        prenom: '',
        password: '',
        password1: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);

        const userInfo = {
            username: values.username,
            name: values.nom,
            lastname: values.prenom,
            password: values.password
        }
        const {data} = await axios.post("http://localhost:8080/auth/signup", userInfo);
        console.log(data);
    };

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        },
        [errors]
    );

    return {handleChange, handleSubmit, values, errors};
};

export default useForms;
