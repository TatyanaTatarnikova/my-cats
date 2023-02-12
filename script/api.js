const CONFIG_API = {
  url: "https://sb-cats.herokuapp.com/api/2/tatarnikovatatiana",
  // url: "https://cats.petiteweb.dev/api/single/tatarnikovatatiana",
  headers: {
    "Content-type": "application/json"
  }
};

class API {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }
  _onResponse(res) {
    return res.ok ? res.json() : Promise.reject({ ...res, message: "error" });
  }
  getAllCats() {
    //получить массив всех существующих id
    return fetch(`${this._url}/show`, {
      method: "GET",
    }).then(this._onResponse);
  }
  getCatById(id) {
    /// отобразить конкретного котика
    return fetch(`${this._url}/show/${id}`, {
      method: "GET",
    }).then(this._onResponse);
  }
  addNewCat(data) {
    //добавить нового кота
    return fetch(`${this._url}/add`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._onResponse);
  }
  updateCatById(id, data) {
    //изменить информацию о коте
    return fetch(`${this._url}/update/${id}`, {
      method: "PUT",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._onResponse);
  }
  deleteCatById(id) {
    //удалить кота по id
    return fetch(`${this._url}/delete/${id}`, {
      method: "DELETE",
    }).then(this._onResponse);
  }
}

export const api = new API(CONFIG_API);
