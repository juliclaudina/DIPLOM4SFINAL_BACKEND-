import { body } from "express-validator";

export const validarSuperheroe = [
  body("nombreComun")
    .trim()
    .notEmpty().withMessage("El nombre común es obligatorio")
    .isLength({ min: 2, max: 60 }).withMessage("El nombre común debe tener entre 2 y 60 caracteres"),

  body("nombreReal")
    .trim()
    .notEmpty().withMessage("El nombre real es obligatorio")
    .isLength({ min: 2, max: 60 }).withMessage("El nombre real debe tener entre 2 y 60 caracteres"),

  body("genero")
    .optional()
    .isString().withMessage("El género debe ser un texto"),

  body("raza")
    .optional()
    .isString().withMessage("La raza debe ser un texto"),

  body("ocupacion")
    .optional()
    .isString().withMessage("La ocupación debe ser un texto"),

  body("creador")
    .optional()
    .isString().withMessage("El creador debe ser un texto"),
];
