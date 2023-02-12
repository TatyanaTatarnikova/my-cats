import { api } from "./api.js";

export class Card {
  constructor(dataCat, selectorTemplate, handleCatImage, handleCatTitle) {
    this._dataCat = dataCat;
    this._selectorTemplate = selectorTemplate;
    this._handleCatImage = handleCatImage;
    this._handleCatTitle = handleCatTitle;
  }

  _getTemplate() {
    //возвращает содержимое шаблона в видел DOM узла
    return document
      .querySelector(this._selectorTemplate)
      .content.querySelector(".card");
  }

  getElement() {
    this.element = this._getTemplate().cloneNode(true); //клонируем полученное содержимое из шаблона
    this.cardTitle = this.element.querySelector(".card__name");
    this.cardImage = this.element.querySelector(".card__image");
    this.cardLike = this.element.querySelector(".card__like");
    const deleteBtn = this.element.querySelector(".card__delete");

    this.cardTitle.textContent = this._dataCat.name;
    this.cardImage.src = this._dataCat.image;

    deleteBtn.setAttribute("id", `btn-${this._data.id}`);
    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Подтверждаете удаление?")) {
        api.deleteCatById(this._data.id).then(() => {
          const elem = document.getElementById(`btn-${this._data.id}`);
          console.log({ elem });
          // updateLocalStorage(cat, 'DELETE_CAT');
          elem.parentElement.remove();
        });
      }
    });

    if (this._dataCat.favourite) {
      this.cardLike.classList.toggle("card__like_active");
    }
    this.setEventListener();
    return this.element;
  }

  setData(newData) {
    this._dataCat = newData;
  }

  getId() {
    return this._dataCat.id;
  }

  deleteView() {
    this.element.remove();
    this.element = null;
  }

  setEventListener() {
    this.cardImage.addEventListener("click", () =>
      this._handleCatImage(this._dataCat)
    );
    this.cardTitle.addEventListener("click", () => this._handleCatTitle(this));
  }
}
