export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username Obligatoire';
  }
  
 
  if (!values.password) {
    errors.password = 'Mot de passe obligatoire';
  } else if (values.password.length < 8) {
    errors.password = 'Le mot de passe doit etre minimum 8 caractéres ';
  }


  return errors;
}
