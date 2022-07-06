import { skills } from "../utils/skills.js";
import { card } from "../components/card.js";

const seccionDeSkills = document.querySelector('.main__skills_card-container');

const clases = {
    'divCard': 'main__skills__card',
    'nombreCard': 'main__skills__card-nombre'
};

const crearCards = ()=>{

    skills.map(       
        (skill)=>{
            const cardSkill = card(clases, skill);
            seccionDeSkills.appendChild(cardSkill);
        }
    );
};

crearCards();
