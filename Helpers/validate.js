const validator = require('validator');

const validateUser = (params) => {
  let validateName = !validator.isEmpty(params.name);
  let valiteLastName = !validator.isEmpty(params.lastName);
  let validateProfesion = !validator.isEmpty(params.profesion);
let validateCedula=!validator.isEmpty(params.cedula);
  if (!validateName || !valiteLastName || !validateProfesion || !validateCedula) {
    throw new Error('no se ha validado la informacion');
  }
};
module.exports={
    validateUser,
}
