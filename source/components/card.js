import { crearElemento } from "../utils/crearNodos.js";
const __dir = './source/assets/projects/';

export const card = (clases, objDatos)=>{

    const card = crearElemento('div', [{type: 'class', name: `${clases.divCard}`}]); 
    card.classList.add('cards');

    if(objDatos.iconAwesome){ //Cards para los skills y hobbies
        
        const p = crearElemento('p', [{type: 'class', name: `${clases.nombreCard}`}]); 
        const i = crearElemento('i', [{type: 'class', name: `${objDatos.iconAwesome}`}]);
        p.textContent = objDatos.nombre;
        
        card.appendChild(i);
        card.appendChild(p);
    }

    //Función que crea un contenedor para una imagen y agrega la imagen
    const contenedorImg = (esProyectos)=>{

        const divCardImg = crearElemento('div', [{type: 'class', name: `${clases.divCardImg}`}]);
        const urlImg = esProyectos ? __dir  + objDatos.img : objDatos.img;

        const img = crearElemento('img', [
            {type: 'class', name: `${clases.imgCard}`}, 
            {type: 'src', name: `${urlImg}`},
            {type: 'alt', name: `${objDatos.alt}`}]);
        
        divCardImg.appendChild(img);
        card.appendChild(divCardImg);

    };

    if(objDatos.img && !objDatos.proyectos){ //Cards para Formación
        
        contenedorImg(false);
        
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

    if(objDatos.img && objDatos.proyectos){ //Cards para los proyectos
        
        contenedorImg(true);

        const divCardDatos = crearElemento('div', [{type: 'class', name: `${clases.divCardDatos}`}]);
        const nombreCard = crearElemento('p', [{type: 'class', name: `${clases.nombreCard}`}]);
        const descripcionCard = crearElemento('p', [{type: 'class', name: `${clases.descripcionCard}`}]);

        nombreCard.textContent = objDatos.nombre;
        descripcionCard.textContent = objDatos.descripcion;

        divCardDatos.appendChild(nombreCard);
        divCardDatos.appendChild(descripcionCard);


        const divCardRepo = crearElemento('div', [{type: 'class', name: `${clases.divCardRepo}`}]);
        const repoLink = crearElemento('a', [
            {type: 'class', name: `${clases.divCardRepoLink}`},
            {type: 'href', name: `${objDatos.repositorio}`},
            {type: 'target', name: `_blank`}
        ]);
        const fontAwesomeRepo = crearElemento('i', [{type: 'class', name: `fa-brands fa-github-alt fa-lg`}]);
        const pRepo = crearElemento('p', [{type: 'class', name: `${clases.repo_demo_title}`}]);
        pRepo.textContent = 'Repo y demo links:';
        divCardRepo.appendChild(pRepo);
        repoLink.appendChild(fontAwesomeRepo);

        const demoLink = crearElemento('a', [
            {type: 'class', name: `${clases.divCardDemoLink}`},
            {type: 'href', name: `${objDatos.demostracion}`},
            {type: 'target', name: `_blank`}
        ]);
        const fontAwesomeDemo = crearElemento('i', [{type: 'class', name: `fa-solid fa-play fa-lg`}]);
        demoLink.appendChild(fontAwesomeDemo);

        divCardRepo.appendChild(repoLink);
        divCardRepo.appendChild(demoLink);

        divCardDatos.appendChild(divCardRepo);

        const divCardStack = crearElemento('div', [{type: 'class', name: `${clases.divCardStack}`}]);
        if(objDatos.stack){
            objDatos.stack.map((item)=>{
                const stackItem = crearElemento('p', [{type: 'class', name: `${clases.divCardStackItem}`}]);
                stackItem.textContent = item;
                divCardStack.appendChild(stackItem);
            });
        };

        divCardDatos.appendChild(divCardStack);

        card.appendChild(divCardDatos);
    }

    return card;
};