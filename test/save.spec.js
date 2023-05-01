const userController = require('../controller/user')

it('POST /api/users/save', () => {
  describe('Debería guardar el usuario y devolver un mensaje de éxito', async () => {
    const req = {
      body: {
        name: 'John',
        document: '123456789',
        lastName: 'ramirez',
        profession: 'empleado',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await userController.save(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      estatus: 'success',
      mensaje: 'Guardado con exito',
    });
  });
});
