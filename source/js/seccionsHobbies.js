import { hobbies } from "../utils/hobbies.js";
import { card } from "../components/card.js";

const seccionDeSkills = document.querySelector('.main__hobbies_card-container');

const clases = {
    'divCard': 'main__hobbies__card',
    'nombreCard': 'main__hobbies__card-nombre'
};

const crearCards = ()=>{

    hobbies.map(       
        (hobby)=>{
            const cardHobby = card(clases, hobby);
            seccionDeSkills.appendChild(cardHobby);
        }
    );
};

crearCards();