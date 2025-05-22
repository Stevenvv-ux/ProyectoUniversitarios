import { Cabecera_receta } from "./Cabecera_receta";
import { Doctor } from "./Doctor";
import { Paciente } from "./Paciente";
import { Receta } from "./Receta";

const Paciente1 = new Paciente(1313533505, "Carlos", "Alberto", "O+",224364657);
const Doctor1 = new Doctor(1313533505, "Steven", "Santos", "O+",224568657,"Universidad Técnica de Manabí","Medico Cirujano","30 años","Inglés");
const Cabecera_receta1 = new Cabecera_receta( new Date(), Doctor1 ,Paciente1);

const Receta1 = new Receta(Cabecera_receta1);
console.log(Receta1.devolverInformacion());
console.log("Total de esta factura:");console.log(Receta1.calcularTotal());