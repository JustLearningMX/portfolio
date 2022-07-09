import { crearInputs } from '../components/input.js';
import { inputsContacto } from '../utils/camposFormContactos.js';
import { crearElemento } from '../utils/crearNodos.js';

const seccionContacto = document.querySelector('.main__contacto__form');

const clases = {
    divInputContainer: 'contacto__form__inputContainer',
    inputData: 'form__inputContainer-data',
    labelTextForInput: 'form__inputContainer-text',    
    spanErrorMsg: 'form__inputContainer-error',
};

const crearForm = ()=>{

    inputsContacto.map(       
        (inputItem)=>{
            const input = crearInputs(clases, inputItem); //clases, input
            seccionContacto.appendChild(input);
        }
    );

    const divTxtAreaContainer = crearElemento('div', [{type: 'class', name: `${clases.divInputContainer}`}]);
    const txtareaMensaje = crearElemento('textarea', [
        {type: 'class', name: `${clases.inputData} textArea`},
        {type: `name`, name: `mensaje`},
        {type: `rows`, name: `10`},
        {type: `cols`, name: `40`},
        {type: `placeholder`, name: `Mensaje`},
    ]);

    divTxtAreaContainer.appendChild(txtareaMensaje);
    seccionContacto.appendChild(divTxtAreaContainer);

    const divInputSubmitContainer = crearElemento('div', [{type: 'class', name: `${clases.divInputContainer}`}]);
    const inputBoton = crearElemento('input', [
        {
          type: 'id', 
          name: 'input-button'
        },
        {
          type: 'class', 
          name: 'submittButton'
        },
        {
          type: 'type', 
          name: 'submit'
        },
        {
          type: 'value', 
          name: 'Enviar mensaje'
        }
      ]);

    divInputSubmitContainer.appendChild(inputBoton);
    seccionContacto.appendChild(divInputSubmitContainer);

};

crearForm();