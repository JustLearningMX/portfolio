import { crearElemento } from "../utils/crearNodos.js";

export const card = (clases, objDatos)=>{

    const card = crearElemento('div', [{type: 'class', name: `${clases.divCard}`}]); //.main__skills__card
    card.classList.add('cards');

    if(objDatos.iconAwesome){ //Si sólo hay íconos
        
        const p = crearElemento('p', [{type: 'class', name: `${clases.nombreCard}`}]); //.main__skills__card-nombre
        const i = crearElemento('i', [{type: 'class', name: `${objDatos.iconAwesome}`}]);
        p.textContent = objDatos.nombre;
        
        card.appendChild(i);
        card.appendChild(p);
    }    

    if(objDatos.img){ //Si sólo hay imágenes
        const divCardImg = crearElemento('div', [{type: 'class', name: `${clases.divCardImg}`}]);

        const img = crearElemento('img', [
            {type: 'class', name: `${clases.imgCard}`}, //.main__skills__card-img
            {type: 'src', name: `${objDatos.img}`},
            {type: 'alt', name: `${objDatos.alt}`}]);
        
        divCardImg.appendChild(img);
        card.appendChild(divCardImg);
        
        const divCardDatos = crearElemento('div', [{type: 'class', name: `${clases.divCardDatos}`}]);
        const nombreCard = crearElemento('p', [{type: 'class', name: `${clases.nombreCard}`}]);
        const carreraCard = crearElemento('p', [{type: 'class', name: `${clases.carreraCard}`}]);
        const periodoCard = crearElemento('p', [{type: 'class', name: `${clases.periodoCard}`}]);

        nombreCard.textContent = objDatos.nombre;
        carreraCard.textContent = objDatos.carrera;
        periodoCard.textContent = objDatos.periodo;

        divCardDatos.appendChild(nombreCard);
        divCardDatos.appendChild(carreraCard);
        divCardDatos.appendChild(periodoCard);

        card.appendChild(divCardDatos);
        
    }

    return card;
};