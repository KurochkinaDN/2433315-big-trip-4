import { POINT_EMPTY } from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';
import { createEventEditTemplate } from '../template/event-edit-template.js';


export default class EventEditView extends AbstractView {
  #event = null;
  #eventDestination = null;
  #eventOffers = null;
  #handleEditSubmit = null;
  #handleResetClick = null;

  constructor({event = POINT_EMPTY, eventDestination, eventOffers, onEditSubmit, onResetClick}) {
    super();
    this.#event = event;
    this.#eventDestination = eventDestination;
    this.#eventOffers = eventOffers;
    this.#handleEditSubmit = onEditSubmit;
    this.#handleResetClick = onResetClick;

    this.element.querySelector('.event--edit')
      .addEventListener('submit', this.#editSubmitHandler);
    this.element.querySelector('.event__reset-btn')
      .addEventListener('click', this.#resetClickHandler);
  }

  get template() {
    return createEventEditTemplate({
      event: this.#event,
      eventDestination: this.#eventDestination,
      eventOffers: this.#eventOffers
    });
  }

  #editSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditSubmit();
  };

  #resetClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleResetClick();
  };
}
