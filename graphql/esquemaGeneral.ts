import { citasEsquema } from "./citas";
import { reunionesEsquema } from "./reuniones";


const esquemaGeneral =  {...reunionesEsquema,
                         ...citasEsquema
                        }


export {esquemaGeneral};
