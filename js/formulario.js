const formulario = document.querySelector('.form-search');
const inputForm = document.querySelector('.inputForm');

const formClient = data => {
  formulario.addEventListener('keyup', (e) => {
    e.preventDefault();
    const letraClient = inputForm.value.toLowerCase();
    const arrayFilter = data.filter(item => {
      const letraApi = item.translations.br.toLowerCase();
      if (letraApi.indexOf(letraClient) !== -1) {
        return item;
      }
    })
    cards(arrayFilter);
  })
}