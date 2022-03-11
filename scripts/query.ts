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
        <div class="container">
          <div class="card">
            <div class="face face1">
              <div class="content">
              <span class="stars"></span>
              <h2 class="java">${title}</h2>
              <p class="java">${director}</p>
              <p class="java">${releaseDate}</p>
            </div>
          </div>
            <div class="face face2">
            <h2>${title}</h2>
          </div>
        </div>
    `;
  });

  console.log(dataArr);

  console.log(data);
  return data;
};

getGraphQlData();
