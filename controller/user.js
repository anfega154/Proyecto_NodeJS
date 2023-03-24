// debemos importar la validacion para usarla en el controlador
const { validateUser } = require('../Helpers/validate');
// debemos requerir el modelo de la bd
const User = require('../model/user');
const { param } = require('../routes/user');

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

//------------------------------------------------------------------------------------------------

// metodo Listar

const findAll = async (req, res) => {
  try {
    // buscamos todos los registros existentes
    const user = await User.find();

    //validamos si hay resultados en caso que no retornamos el error
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'No se encontró ningún registro',
      });
    }

    return res.status(200).json({
      status: 'success',
      users: user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 'error',
      message: 'Hubo un problema al buscar ',
      error,
    });
  }
};

//----------------------------------------------------------------------------------

// metodo buscar

const find = async (req, res) => {
  try {
    //recogemos los datos del cuerpo de la solicitud, en este caso el document 
    const { document } = req.body;
    // validamos que el campo no este vacio 
    if (!document) {
      return res.status(400).json({
        status: error,
        message: 'faltan datos por enviar',
      });
    }
// buscamos en la base de datos con los datos requeridos anteriormente 
    const user = await User.findOne({ document });
// validamos si el resultado es exitoso 
    if (!user) {
      return res.status(404).json({
        status: error,
        message: 'el usuario no existe ',
      });
    }
//retornamos el objeto traido desde la base de datos
    return res.status(200).json({
      status: 'success',
      user,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Ocurrió un error',
    });
  }
};
//----------------------------------------------------------------------------------------------

// metodo editar

const edit = async (req, res) => {
  // recogemos datos del cuerpo de la solicitud 
  params = req.body;
  try {
    // utilizamos la validacion que alojamos en los helpers
    validateUser(params);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Error al guardar datos invalidos o faltantes',
      params,
      error: error,
    });
  }
//declaramos una variable con el documento que viene en la solicitud 
  let document = params.document;
  // buscamos en la base de datos con los datos requeridos anteriormente 
  const user = await User.findOne({ document });

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'el usuario no existe ',
    });
  }
// hacemos una constante con los nuevos datos y utilizamos la sentencia de mongoose para actualizar 
  const newUser = await User.findOneAndUpdate(
    { _id: user._id },
    { $set: req.body },
    { new: true }
  );
  return res.status(200).json({
    status: 'succes',
    newUser,
  });
};

//----------------------------------------------------------------------------------------

// metodo eliminar

const deleting = async (req, res) => {
  // recogemos el dato document que viene en el cuerpo de la solicitud 
  let document = req.body.document;
// buscamos en mongo con ese documento 
  const user = await User.findOne({ document });
  // validamos si existe 
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'el usuario no existe ',
    });
  }
// generamos un objeto con los resultados y eliminadmos 
  const userDeleted= await User.findByIdAndDelete({ _id: user._id });
// validamos si fue exitosa la solicitud 
  if(!userDeleted){
    res.status(500).json({
      mesaje: "no se pudo borrar ",
      error: "error",
    });
  }
// retornamos el objeto eliminado
    res.status(200).json({
      status: 'success!',
      mensaje: 'Borrado con exito',
      userDeleted,
    });

};

//exportamos el controlador
module.exports = {
  save,
  findAll,
  find,
  edit,
  deleting
};
