const paisInfo = document.querySelector('.pais-info');
const query = new URLSearchParams(window.location.search);
const params = query.get('name');

document.addEventListener('DOMContentLoaded', (e) => {
  fetchData();
})

const fetchData = async () => {
  try {
    const res = await fetch('https://restcountries.com/v2/all');
    const data = await res.json();
    const filtroData = data.filter(item => item.name === params)
    cards(filtroData);
  } catch (error) {
    console.log(error);
  }
}

const cards = data => {
  let elementos = '';
  data.forEach(element => {
    elementos += `<div class="detalhes-pais">
      <img src="${element.flag}" alt="">
      <div class="detalhes">
        <p>Nome: <span>${element.translations.br}</span></p>
        <p>Capital: <span>${element.capital}</span></p>
        <p>Região: <span>${element.region}</span></p>
        <p>Sub região: <span>${element.subregion}</span></p>
        <p>População: <span>${element.population.toLocaleString('pt-BR')}</span></p>
        <p>Linguas: <span>${element.languages[0].name}</span></p>
      </div>
    </div>`;
  paisInfo.innerHTML = elementos;
  })
} 
