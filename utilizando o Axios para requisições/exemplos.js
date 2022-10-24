const BaseUrl = 'https://rickandmortyapi.com/api';

function dataFetch() {
    const data = fetch(`${BaseUrl}/character`)
        .then((response) => response.json())
        .then((responseJSON) => console.log(responseJSON))
        .catch((error) => console.log(error));

    return data;
};
dataFetch();


function dataAxios() {
    const data = axios.get(`${BaseUrl}/character`)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

    return data;
}
dataAxios();


const dataAxios2 = async () => {
    const request = await axios.get(`${BaseUrl}/character`)
    console.log(request.data)
    return request;
}
dataAxios();


/* FICTICIA USANDO FETCH */
async function dataFetch(data) {
    const response = await fetch('www.urlbase.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseJSON = await response.json();
    return responseJSON;
  }


  /* MESMA REQUISIÇÃO FICTICIA USANDO AXIOS */
  async function dataAxios(data) {
    const response = await axios.post('www.urlbase.com/register', data);
    return response;
  }