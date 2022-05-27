import React from 'react';
import validate from './validateInfos';
import useForm from './UseForms';
import './Forms';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Pharmacie en ligne 
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Nom</label>
          <input
            className='form-input'
            type='text'
            name='Nom'
            placeholder='Nom'
            value={values.Nom}
            onChange={handleChange}
          />
          {errors.Nom && <p>{errors.Nom}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Prénom</label>
          <input
            className='form-input'
            type='text'
            name='Prénom'
            placeholder='Prénom'
            value={values.Prénom}
            onChange={handleChange}
          />
          {errors.Prénom && <p>{errors.Prénom}</p>}
        </div>
        
        <div className='form-inputs'>
          <label className='form-label'>Mot de passe </label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Mot de passe '
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirmer mot de passe </label>
          <input
            className='form-input'
            type='password'
            name='password1'
            placeholder='Confirmer mot de passe '
            value={values.password1}
            onChange={handleChange}
          />
          {errors.password1 && <p>{errors.password1}</p>}
        </div>
        
        <button className='form-input-btn' type='submit'>
          S'inscrire
        </button>
        <span className='form-input-login'>
           Vous avez déja un compte ? <a href='#'>Login</a>
        </span>
        

      </form>
    </div>
  );
};

export default FormSignup;
