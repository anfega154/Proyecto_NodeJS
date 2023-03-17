const {validateUser} = require('../Helpers/validate');
const User = require('../model/user');

const save = async(req,res)=>{
params=req.body;

try {
    validateUser(params);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error al guardar aqui",
      params,
      error: error
    });
  }
  

  const existingUser = await User.findOne({
    $or: [
      { cedula: params.cedula.toLowerCase() }
      
    ],
  });

  if (existingUser) {
    return res.status(400).json({
      status: "error",
      message: "El usuario ya existe",
    });
  }
  const user = new User(params);

user.save(user);

      return res.status(200).json({
        estatus: "success",
        mensaje: "Guardado con exito",
      });



}

module.exports={
    save,
}