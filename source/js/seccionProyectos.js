import { proyectos } from "../utils/proyectos.js";
import { card } from "../components/card.js";

const seccionDeProyectos = document.querySelector('.main__proyectos_card-container');

const clases = {
    'divCard': 'proyectos__card__container',
    'divCardImg': 'proyectos__card___imgContainer',
    'imgCard': 'proyectos__card-img',
    
    'divCardDatos': 'proyectos__card___datosContainer',
    'nombreCard': 'proyectos__card-nombre',
    'descripcionCard': 'proyectos__card-descripcion',

    'divCardRepo': 'proyectos__card__repo',
    'divCardRepoLink': 'proyectos__card__repo-link',
    'divCardDemoLink': 'proyectos__card__demo-link',
    
    'divCardStack': 'proyectos__card__stack',
    'divCardStackItem': 'proyectos__card__stack-item',
    'repo_demo_title': 'repo_demo_title',
};

const crearCards = ()=>{

    proyectos.map(       
        (proyecto)=>{
            const cardProyecto = card(clases, proyecto);
            seccionDeProyectos.appendChild(cardProyecto);
        }
    );
};

crearCards();