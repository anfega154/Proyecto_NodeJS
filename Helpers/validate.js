// importar el modulo validate 
const validator = require('validator');

// creamos metodo o funcion de validacion 
const validateUser = (params) => {
  let validateName = !validator.isEmpty(params.name);
  let valiteLastName = !validator.isEmpty(params.lastName);
  let validateProfession = !validator.isEmpty(params.profession);
let validateDocument=!validator.isEmpty(params.document);
  if (!validateName || !valiteLastName || !validateProfession || !validateDocument) {
    throw new Error('no se ha validado la informacion');
  }
};


// exportamos la validacion 
module.exports={
    validateUser,
}
