import AbstractView from '../framework/view/abstract-view.js';
import {createFilterElement} from '../template/filter-template.js';

export default class FilterView extends AbstractView{
  #filters = [];

  constructor({filters}) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFilterElement(this.#filters);
  }
}
