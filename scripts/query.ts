import { BASE_URL } from './api/';
import { query } from './api/query.graphql';
import { orderBy } from 'lodash';

const getGraphQlData = async () => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  const data = await response.json();

  const dataArr = orderBy(data.data.allFilms.films, ['title'], ['desc']);

  dataArr.map(({ title, director, releaseDate }) => {
    document.querySelector('.results').innerHTML += `
       <div class="card">
        <h2>${title}</h2>
        <h5>${director}</h5>
        <p>${releaseDate}</p>
       </div>
    `;
  });

  console.log(dataArr);

  console.log(data);
  return data;
};

getGraphQlData();
