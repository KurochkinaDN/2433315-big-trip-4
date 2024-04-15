import AbstractView from '../framework/view/abstract-view.js';
import { createEventTemplate } from '../template/event-template.js';


export default class EventView extends AbstractView{
  #event = null;
  #eventDestination = null;
  #eventOffers = null;
  #handleRollupClick = null;

  constructor({event, eventDestination, eventOffers, onRollupClick}) {
    super();
    this.#event = event;
    this.#eventDestination = eventDestination;
    this.#eventOffers = eventOffers;
    this.#handleRollupClick = onRollupClick;

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#rollupClickHandler);
  }

  get template() {
    return createEventTemplate({
      event: this.#event,
      eventDestination: this.#eventDestination,
      eventOffers: this.#eventOffers
    });
  }

  #rollupClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleRollupClick();
  };
}
