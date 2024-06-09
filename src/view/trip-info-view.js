import AbstractView from '../framework/view/abstract-view.js';
import {createTripInfoTemplate} from '../template/trip-info-template.js';
import { getTripTitle, getTripDuration, getTripCost } from '../utils/trip-info.js';

export default class TripInfoView extends AbstractView {
  #destinations = null;
  #offers = null;
  #events = 0;

  constructor({destinations, offers, events}) {
    super();
    this.#destinations = destinations;
    this.#offers = offers;
    this.#events = events;
  }

  get template() {
    return createTripInfoTemplate({
      isEmpty: this.#events.length === 0,
      title: getTripTitle(this.#events, this.#destinations),
      duration: getTripDuration(this.#events),
      cost: getTripCost(this.#events, this.#offers),
    });
  }
}
