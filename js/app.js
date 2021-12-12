const bandeiras = document.querySelector('.bandeiras');

document.addEventListener('DOMContentLoaded', (e) => {
  fetchData();
});
const fetchData = async () => {
  try {
    const res = await fetch('https://restcountries.com/v2/all');
    const data = await res.json();
    cards(data);
    filtros(data);
    formClient(data);
  } catch (error) {
    console.log(error);
  }
}

const cards = data => {
  let elementos = '';
  data.forEach(element => {
    elementos += `<a href="detalhes.html?name=${element.name}"><div class="card">
      <img src="${element.flag}" alt="Bandeiras">
      <div class="preview">
        <h4>${element.translations.br}</h4>
        <p>População: ${element.population.toLocaleString('pt-BR')}</p>
        <p>Região: ${element.region}</p>
        <p>Capital: ${element.capital}</p>
      </div>
    </div>
  </div></a>`;
  bandeiras.innerHTML = elementos;
  });
}
