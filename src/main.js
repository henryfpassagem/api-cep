import './style.css';
import Swal from 'sweetalert2';

const inputBox = document.querySelector('.input-box');
const buttonConsult = document.querySelector('.consult-button');
const preEl = document.querySelector('pre');

buttonConsult.addEventListener('click', async (event) => {
    event.preventDefault();
    const cep = inputBox.value;

    try {
        const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await result.json(); //This is an object
        console.log(data);
        preEl.innerHTML = '';
        preEl.innerHTML = JSON.stringify(data);
        //return data;
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'CEP inválido, tente novamente!',
        });
        //return error.message;
    }
});