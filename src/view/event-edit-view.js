import { POINT_EMPTY } from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';
import { createEventEditTemplate } from '../template/event-edit-template.js';


export default class EventEditView extends AbstractView {
  #event = null;
  #eventDestination = null;
  #eventOffers = null;
  #onEditSubmit = null;
  #onRollupClick = null;

  constructor({event = POINT_EMPTY, eventDestination, eventOffers, onEditSubmit, onRollupClick }) {
    super();
    this.#event = event;
    this.#eventDestination = eventDestination;
    this.#eventOffers = eventOffers;
    this.#onEditSubmit = onEditSubmit;
    this.#onRollupClick = onRollupClick;

    this.element.querySelector('.event--edit')
      .addEventListener('submit', this.#editSubmitHandler);
    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#rollupClickHandler);
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
    this.#onEditSubmit(this.#event);
  };

  #rollupClickHandler = (evt) => {
    evt.preventDefault();
    this.#onRollupClick();
  };
}
