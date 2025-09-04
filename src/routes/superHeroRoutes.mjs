import express from 'express';
import { validarSuperheroe } from "../validations/superheroValidation.mjs";

import {
  obtenerSuperheroePorIdController,
  obtenerSuperheroesJSON,
  
  crearSuperheroeController, 
  actualizarSuperheroeController,
  eliminarSuperheroePorIdController,
  obtenerSuperheroePorNombreController
} from '../controllers/superheroesController.mjs';
import { authenticateToken } from "../middleware/authenticationMiddleware.mjs";

const router = express.Router();


// CRUD Superhéroes
router.get("/",authenticateToken, obtenerSuperheroesJSON); // Obtener todos
router.get("/:id",authenticateToken, obtenerSuperheroePorIdController); // Obtener por ID
router.get("/nombre/:nombre",authenticateToken, obtenerSuperheroePorNombreController); // Obtener por nombre
router.post('/agregar',authenticateToken, validarSuperheroe, crearSuperheroeController); // Crear
router.put('/editar/:id',authenticateToken, validarSuperheroe, actualizarSuperheroeController); // Actualizar
router.delete('/eliminar/:id',authenticateToken, eliminarSuperheroePorIdController); // Eliminar por ID

export default router;
