export default function validateInfos(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username Obligatoire';
    }
    if (!values.Nom.trim()) {
        errors.Nom = 'Nom Obligatoire';
      }
      if (!values.Prénom.trim()) {
        errors.Prénom = 'Prénom Obligatoire';
      }
   
    if (!values.password) {
      errors.password = 'Mot de passe obligatoire';
    } else if (values.password.length < 8) {
      errors.password = 'Le mot de passe doit etre minimum 8 caractéres ';
    }
    if (!values.password1) {
        errors.password1 = 'La Confirmation du mot de passe est obligatoire';
    } else if (values.password1 !== values.password) {
        errors.password1 = 'Les mots de passe ne sont pas compatibles ';
      }
  
    return errors;
  }
  