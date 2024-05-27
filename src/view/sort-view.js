import AbstractView from '../framework/view/abstract-view.js';
import {createSortTemplate} from '../template/sort-template.js';

export default class SortView extends AbstractView{
  #onSortTypeChange = null;
  #currentSortType = null;

  constructor({currentSortType, onSortTypeChange}) {
    super();
    this.#currentSortType = currentSortType;
    this.#onSortTypeChange = onSortTypeChange;
    this.element.addEventListener('click', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortTemplate(this.#currentSortType);
  }

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'INPUT') {
      return;
    }

    this.#onSortTypeChange(evt.target.dataset.sortType);
  };
}
