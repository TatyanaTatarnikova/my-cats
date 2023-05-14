export class CatsInfo {
    constructor(selectorTemplate, handleDeleteCat) {
        this._selectorTemplate = selectorTemplate;
        this._handleDeleteCat = handleDeleteCat;
        this._data = {};
    }

    _getTemplate() { // возвращает содержимое шаблона в виде DOM узла
        return document.querySelector(this._selectorTemplate).content.children[0];

    }

    getElement() {
        this.element = this._getTemplate().cloneNode(true);

        this.buttonEdited = this.element.querySelector('.cat-info__edited');
        this.buttonDeleted = this.element.querySelector('.cat-info__deleted');
        this.catImage = this.element.querySelector('.cat-info__image'); 
        console.log(this.catImage);

        this.setEventListener();
        return this.element;
    }

    setData(cardInstance) {
        this._cardInstance = cardInstance;
        this._data = this._cardInstance.getData();

        this.catImage.src = this._data.image;
    }

    setEventListener() {
        this.buttonDeleted.addEventListener('click', () => this._handleDeleteCat(this._cardInstance))
    }
}