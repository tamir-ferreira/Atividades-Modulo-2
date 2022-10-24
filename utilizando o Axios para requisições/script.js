const BaseUrl = 'https://rickandmortyapi.com/api';
const divObservadora = document.querySelector('.observador');
let page = 1

async function dataAxios(currentPage) {
  const response = await axios.get(`${BaseUrl}/character?page=${currentPage}`);
  console.log(response);

  response.data.results.map((elem) => {
    divObservadora.insertAdjacentHTML(
      'beforebegin',
      `
          <div class="card">
            <h2>${elem.name}</h2>
            <img src="${elem.image}" alt="${elem.name}" />
          </div>
        `,
    );
  });
}
// dataAxios(page);


/* EVENTO DE OBSERVAÇÃO DE ELEMENTO */
const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      console.log('Apareci');
      dataAxios(page++);
    }
  });
  observer.observe(divObservadora);