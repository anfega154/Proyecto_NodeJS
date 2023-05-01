const mongoose = require('mongoose');   
const conection = require('../database/conection')
   
   // Tests that the function successfully connects to the database. 
    it("test_successful_connection", async () => {
        const mockConnect = jest.spyOn(mongoose, "connect");
        await conection();
        expect(mockConnect).toHaveBeenCalled();
    });