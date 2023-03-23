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
    const user = await User.find();
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
    const { document } = req.body;
    if (!document) {
      return res.status(400).json({
        status: error,
        message: 'faltan datos por enviar',
      });
    }

    const user = await User.findOne({ document });

    if (!user) {
      return res.status(404).json({
        status: error,
        message: 'el usuario no existe ',
      });
    }

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
  params = req.body;
  try {
    validateUser(params);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Error al guardar datos invalidos o faltantes',
      params,
      error: error,
    });
  }

  let document = params.document;
  const user = await User.findOne({ document });

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'el usuario no existe ',
    });
  }

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
  let document = req.body.document;

  const user = await User.findOne({ document });
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'el usuario no existe ',
    });
  }

  const userDeleted= await User.findByIdAndDelete({ _id: user._id });

  if(!userDeleted){
    res.status(500).json({
      mesaje: "no se pudo borrar ",
      error: "error",
    });
  }

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
