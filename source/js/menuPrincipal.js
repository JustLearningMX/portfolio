//Obtenemos las opciones del menú
const listaDelMenu = document.querySelector('.nav__menu__lista');
//Obtenemos el ícono de hamburguesa
const iconoMenuPrincipal = document.querySelector('.nav__menu__iconoMenu-menu');

//Manejador cuando se le de click al icono
const handlerIconoMenu = (e)=>{
    if(e)
        e.preventDefault();

    //Agrega/Quita la clase para mostrar el menú
    listaDelMenu.classList.toggle('nav__menu__lista-mostrar');
};

//Ponemos a la escucha al menú de hamburguesa
iconoMenuPrincipal.addEventListener('click', handlerIconoMenu);

//Obtenemos array con todas las opciones del menú
const listaDeOpciones = document.querySelectorAll('.nav__menu__lista-opciones');

//Manejador para cada opción del menú
const handlerOptionMenu = (opcion)=>{

    //Variable para guardar el nodo previo seleccionado
    let nodoSeleccionadoAnterior = null;

    //Recorremos las opciones del menu
    for (let i = 0; i < listaDeOpciones.length; i++) {

        //Si una opción del menú tiene la clase "selected"
        if(listaDeOpciones[i].classList.contains('nav__menu__lista-selected'))
        {
            nodoSeleccionadoAnterior = listaDeOpciones[i];//Guardamos ese nodo
        };            
    };

    //Cambiamos el color del texto
    opcion.classList.toggle('nav__menu__lista-selected');
    if(nodoSeleccionadoAnterior)
        nodoSeleccionadoAnterior.classList.toggle('nav__menu__lista-selected');

    //Ocultamos el menú
    handlerIconoMenu();
};

//Recorremos el arreglo de opciones obtenido
for (let i = 0; i < listaDeOpciones.length; i++) {

    //Lo ponemos a la escucha y mandamos que opción se dió click
    listaDeOpciones[i].addEventListener('click', () => handlerOptionMenu(listaDeOpciones[i]));
};