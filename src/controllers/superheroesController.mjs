import { validationResult } from "express-validator";
import {
  obtenerSuperheroePorId,
  obtenerTodosLosSuperheroes,
  crearSuperheroe,
  actualizarSuperheroe,
  eliminarSuperheroePorId,
  obtenerSuperheroePorNombre
} from "../services/superheroesService.mjs";

// Obtener un superhéroe por ID
export async function obtenerSuperheroePorIdController(req, res) {
  try {
    const { id } = req.params;
    const superheroe = await obtenerSuperheroePorId(id);

    if (!superheroe) {
      return res.status(404).json({ mensaje: "Superhéroe no encontrado" });
    }

    res.status(200).json(superheroe);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener el superhéroe",
      error: error.message,
    });
  }
}

// Obtener todos los superhéroes
export async function obtenerSuperheroesJSON(req, res) {
  try {
    const superheroes = await obtenerTodosLosSuperheroes();
    res.status(200).json(superheroes);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener los superhéroes",
      error: error.message,
    });
  }
}



// Crear superhéroe
export async function crearSuperheroeController(req, res) {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    const nuevoSuperheroe = await crearSuperheroe(req.body);
    res.status(201).json({
      mensaje: "Superhéroe creado con éxito",
      superheroe: nuevoSuperheroe,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al crear el superhéroe",
      error: error.message,
    });
  }
}

// Actualizar superhéroe
export async function actualizarSuperheroeController(req, res) {
  try {
    const { id } = req.params;
    const datosActualizados = req.body;

    const superheroeActualizado = await actualizarSuperheroe(
      id,
      datosActualizados
    );

    if (!superheroeActualizado) {
      return res.status(404).json({ mensaje: "Superhéroe no encontrado" });
    }

    res.status(200).json({
      mensaje: "Superhéroe actualizado con éxito",
      superheroe: superheroeActualizado,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al actualizar el superhéroe",
      error: error.message,
    });
  }
}

// Eliminar superhéroe por ID
export async function eliminarSuperheroePorIdController(req, res) {
  try {
    const { id } = req.params;
    const eliminado = await eliminarSuperheroePorId(id);

    if (!eliminado) {
      return res.status(404).json({ mensaje: "Superhéroe no encontrado" });
    }

    res.status(200).json({
      mensaje: "Superhéroe eliminado",
      superheroe: eliminado,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al eliminar el superhéroe",
      error: error.message,
    });
  }
}
//Obtener superheroe por nombre:
export async function obtenerSuperheroePorNombreController(req, res) {
  try {
    const { nombre } = req.params;
    const superheroe = await obtenerSuperheroePorNombre(nombre);

    if (!superheroe) {
      return res.status(404).json({ mensaje: "Superhéroe no encontrado" });
    }

    res.status(200).json(superheroe);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener el superhéroe",
      error: error.message,
    });
  }
}



