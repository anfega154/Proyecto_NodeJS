const { rules } = require('eslint-config-prettier');
const express = require('express')
const router = express.Router();
// importamos el modulos de los controladores 
const userController = require('../controller/user')

// declaromos endpoint 
router.get('/',(req,res)=>{
    res.send('esta es la raiz')
    })
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API para gestionar usuarios
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *         - name
 *         - profession
 *         -document
 *       properties:
 *         id:
 *           type: string
 *           description: ID generado automáticamente por MongoDB
 *           name:
 *           type: string
 *           description: Nombre del usuario.
 *         profession:
 *           type: string
 *           description: profesion del usuario.
 *       example:
 *         id: 60a3f3ca4827d03154d694a7
 *         nombresUsuario: John Doe
 *         celularUsuario: 1234567890
 */

/**
 * @swagger
 * /api/users/save:
 *   post:
 *     summary: Agrega un nuevo usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario agregado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Los campos nombresUsuario y celularUsuario son requeridos
 */
    router.post('/save',userController.save);
/**
 * @swagger
 * /api/users/find:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de todos los usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/find',userController.findAll);
/**
 * @swagger
 * /api/users/findone:
 *   get:
 *     summary: Obtiene un usuario por su ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a obtener
 *     responses:
 *       200:
 *         description: Usuario encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: El usuario con el ID especificado no fue encontrado
 */
router.get('/findone',userController.find);

/**
 * @swagger
 * /api/users/edit:
 *   post:
 *     summary: Actualiza un usuario existente
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       404:
 *         description: El usuario con el ID especificado no fue editado
 *
 */
    router.post('/edit',userController.edit);


/**
 * @swagger
 * /api/users/delete:
 *   delete:
 *     summary: Elimina un usuario existente
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: El usuario con el ID especificado no fue eliminado
 *
 */
router.delete('/delete',userController.deleting);


module.exports=router;