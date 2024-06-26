import AbstractView from '../framework/view/abstract-view.js';
import { createEventTemplate } from '../template/event-template.js';

export default class EventView extends AbstractView {
  #event = null;
  #eventDestination = null;
  #eventOffers = null;
  #handleRollupClick = null;
  #handleFavoriteClick = null;

  constructor({event, eventDestination, eventOffers, onRollupClick, onFavoriteClick}) {
    super();
    this.#event = event;
    this.#eventDestination = eventDestination;
    this.#eventOffers = eventOffers;
    this.#handleRollupClick = onRollupClick;
    this.#handleFavoriteClick = onFavoriteClick;

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#rollupClickHandler);
    this.element.querySelector('.event__favorite-btn')
      .addEventListener('click', this.#favoriteClickHandler);
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

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFavoriteClick();
  };
}
