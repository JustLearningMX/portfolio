import { estudios } from "../utils/formacion.js";
import { card } from "../components/card.js";

const seccionDeFormacion = document.querySelector('.main__formacion_card-container');

const clases = {
    'divCard': 'formacion__card__container',
    'divCardImg': 'formacion__card___imgContainer',
    'imgCard': 'formacion__card-img',
    
    'divCardDatos': 'formacion__card___datosContainer',
    'nombreCard': 'formacion__card-nombre',
    'carreraCard': 'formacion__card-carrera',
    'periodoCard': 'formacion__card-periodo',
};

const crearCards = ()=>{

    estudios.map(       
        (estudio)=>{
            const cardEstudio = card(clases, estudio);
            console.log(cardEstudio);
            seccionDeFormacion.appendChild(cardEstudio);
        }
    );
};

crearCards();