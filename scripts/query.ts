import { BASE_URL } from './api/';
import { query } from './api/query.graphql';

console.log(query);

const getData = async () => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  const data = await response.json();
  console.log(data);
  return data;
};

getData();
