import SuperHeroRepository from '../repositories/SuperHeroRepository.mjs';
import axios from 'axios';

const API_BASE = "https://akabab.github.io/superhero-api/api";

export async function cargarSuperHeroes() {
  try {
    // 1. Consumir API
    const response = await axios.get(`${API_BASE}/all.json`);
    const heroes = response.data;

    // 2. Filtrar solo los que sean de DC
    const heroesDC = heroes.filter(hero => hero.biography?.publisher === 'DC Comics');

    // 3. Procesar solo con los campos que pedís
    const heroesProcesados = heroesDC.map(hero => {
      return {
        
        nombreComun: hero.name || "Desconocido",
        nombreReal: hero.biography?.fullName || "Desconocido",
        genero: hero.appearance?.gender || "Desconocido",
        raza: hero.appearance?.race || "Desconocida",
        ocupacion: hero.work?.occupation || "Desconocida",
        creador: "Julieta"
      };
    });

    // 4. Filtrar héroes válidos (que tengan nombre)
    const heroesValidos = heroesProcesados.filter(h => 
        h.nombreComun && h.nombreReal
        && h.genero && h.raza && h.ocupacion && h.creador
    );

    // 5. Guardar en la base de datos
    for (const hero of heroesValidos) {
      const existe = await SuperHeroRepository.existePorId(hero.id);
      if (!existe) {
        await SuperHeroRepository.crearSuperheroe(hero);
      }
    }

    console.log('Superhéroes de DC cargados correctamente en MongoDB');
  } catch (error) {
    console.error('Error cargando superhéroes:', error.message);
  }
}
// CRUD para controladores

export async function obtenerTodosLosSuperheroes() {
  return await SuperHeroRepository.obtenerTodos();
}

export async function obtenerSuperheroePorId(id) {
  return await SuperHeroRepository.obtenerPorId(id);
}

export async function crearSuperheroe(datos) {
  return await SuperHeroRepository.crearSuperheroe(datos);
}

export async function actualizarSuperheroe(id, datosActualizados) {
  return await SuperHeroRepository.actualizarSuperheroe(id, datosActualizados);
}

export async function eliminarSuperheroePorId(id) {
  return await SuperHeroRepository.eliminarPorId(id);
}

export async function eliminarSuperheroePorNombre(nombre) {
  return await SuperHeroRepository.eliminarPorNombre(nombre);
}

// Función adicional: buscar por atributo dinámico
export async function buscarSuperheroesPorAtributo(atributo, valor) {
  return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

// Función adicional: mayores de 30 años
export async function obtenerSuperheroesMayoresDe30() {
  return await SuperHeroRepository.obtenerMayoresDe30();
}
export async function obtenerSuperheroePorNombre(nombre) {
  return await SuperHeroRepository.obtenerPorNombre(nombre);
}