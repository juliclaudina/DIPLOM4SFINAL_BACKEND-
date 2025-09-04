import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
  async obtenerPorId(id) {
    return await SuperHero.findById(id); // usa el _id de Mongo
  }

  async obtenerTodos() {
    return await SuperHero.find({ nombreComun: { $exists: true } });
  }

  async buscarPorAtributo(atributo, valor) {
    const filtro = {};
    filtro[atributo] = valor;
    return await SuperHero.find(filtro);
  }

  async crearSuperheroe(datos) {
    const nuevoSuperheroe = new SuperHero(datos);
    return await nuevoSuperheroe.save();
  }

  async actualizarSuperheroe(id, datosActualizados) {
    return await SuperHero.findByIdAndUpdate(id, datosActualizados, { new: true });
  }

  async eliminarSuperheroe(id) {
    return await SuperHero.findByIdAndDelete(id);
  }

  async eliminarSuperheroePorNombre(nombre) {
    return await SuperHero.findOneAndDelete({
      nombreComun: new RegExp(`^${nombre}$`, "i"),
    });
  }

  async contar() {
    return await SuperHero.countDocuments();
  }

  async existePorId(id) {
    const superheroe = await SuperHero.findById(id);
    return !!superheroe; // true o false
  }
  async obtenerTodos (){
    return await SuperHero.find({ nombreComun: { $exists: true } });
  }
  async eliminarPorId (id){
    return await SuperHero.findByIdAndDelete(id);
  }
  async obtenerPorNombre(nombre) {
    return await SuperHero.findOne({ nombreComun: new RegExp(`^${nombre}$`, "i") });
  }
}

export default new SuperHeroRepository();
