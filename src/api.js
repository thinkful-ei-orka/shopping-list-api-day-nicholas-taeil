import store from './store';

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/nicholas-taeil';

const fetchApi = function(url, args) {
  return fetch(url, args)
    .then(res => {
      if (res.ok) {
        console.log(res);
        return res.json();
      } else {
        store.error = 'Response is NOT okay';
        console.log(store.error);
      }
    })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch((e) => {
      store.error = e.message;
      console.log(store.error);
    });
};

const getItems = function() {
  return fetchApi(`${BASE_URL}/items`);
};

const createItem = function(name) {
  let newItem = JSON.stringify({
    name: name
  });

  return fetchApi(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItem
  });
};

const updateItem = function(id, updateData) {
  return fetchApi(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
  });
};

const deleteItem = function(id) {
  return fetchApi(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};
