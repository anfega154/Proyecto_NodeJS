    // Tests that the function successfully deletes a user with a given document. 
    it('DELETE /api/users/delete', async () => {
        const req = { body: { document: "123456789" } };
        const res = { 
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const user = { _id: "123", name: "John Doe", document: "123456789" };
        User.findOne = jest.fn().mockResolvedValue(user);
        User.findByIdAndDelete = jest.fn().mockResolvedValue(user);
        await deleting(req, res);
        expect(User.findOne).toHaveBeenCalledWith({ document: "123456789" });
        expect(User.findByIdAndDelete).toHaveBeenCalledWith({ _id: "123" });
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            status: 'success!',
            mensaje: 'Borrado con exito',
            userDeleted: user
        });
    });