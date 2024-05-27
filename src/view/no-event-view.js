import AbstractView from '../framework/view/abstract-view.js';
import {createNoEventTemplate} from '../template/no-event-template.js';
export default class NoEventView extends AbstractView {
  #filterType = null;

  constructor({filterType}) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createNoEventTemplate(this.#filterType);
  }
}
