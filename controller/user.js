// debemos importar la validacion para usarla en el controlador
const { validateUser } = require('../Helpers/validate');
// debemos requerir el modelo de la bd
const User = require('../model/user');

// controlador guardar user
const save = async (req, res) => {
  // recogemos datos del body
  params = req.body;

  // intentamos hacer validacion, si hay error lo dispara y lo atrapa
  try {
    validateUser(params);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Error al guardar datos invalidos o faltantes',
      params,
      error: error,
    });
  }
  // sila validacion exitosa la funcion sigue ejecutandose
  // hacemos funcion para si el usuario ya existe
  const existingUser = await User.findOne({
    $or: [{ document: params.document.toLowerCase() }],
  });
  // si el usuario exite me generar error y me detiene la funcion
  if (existingUser) {
    return res.status(400).json({
      status: 'error',
      message: 'El usuario ya existe',
    });
  }
  // si el usuario no exite crea un objeto en base a los parametros
  const user = new User(params);
  // le indicamos que nos guarde el objeto en la base de datos con el metodo save
  user.save(user);
  // retornamos un mensaje de exito
  return res.status(200).json({
    estatus: 'success',
    mensaje: 'Guardado con exito',
  });
};

//exportamos el controlador
module.exports = {
  save,
};
