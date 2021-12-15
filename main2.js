
let contador = 5;
//const url = 'https://ghibliapi.herokuapp.com/films?limit=5';
const contenedor = document.querySelector('.contenedor');
const boton = document.querySelector('.boton');

const films = async () =>{
  const response = await fetch(`https://ghibliapi.herokuapp.com/films?limit=${contador}`);
  const data = await response.json();
  return data.map(({id, image})=>({id, image}));

}

const mostrarData = async ()=>{
    const data = await films();
    data.forEach(element => {
       contenedor.innerHTML += `<div class="box"><img src="${element.image}"></div>`
    });
}

const mostrarMas = () =>{
    boton.addEventListener('click', (e) =>{
        contenedor.innerHTML = '';
        contador = contador + 5;
       mostrarData()
    })
}

const init = ()=>{
    mostrarData();
    mostrarMas();
}

init();