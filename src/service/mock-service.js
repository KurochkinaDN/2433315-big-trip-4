import { getRandomArrayElement, getRandomInteger } from '../utils/common.js';
import { mockDestinations } from '../mock/destinations.js';
import { generateEvent } from '../mock/events.js';
import { mockOffers } from '../mock/offers.js';
import { EVENT_COUNT, TYPES } from '../const.js';


export default class MockService {
  #destinations = null;
  #offers = null;
  #events = null;

  constructor() {
    this.#destinations = mockDestinations;
    this.#offers = mockOffers;
    this.#events = this.#generateEvents();
  }

  #generateEvents() {
    return Array.from({length: EVENT_COUNT}, () => {
      const type = getRandomArrayElement(TYPES);
      const destinationIDs = (getRandomInteger(0, 1)) ? getRandomArrayElement(this.#destinations).id : null;
      const offersByType = this.#offers.find((offerByType) => offerByType.type === type);
      const offersIDs = [];
      offersByType.offers.forEach((offer) => {
        if (getRandomInteger(0, 1)) {
          offersIDs.push(offer.id);
        }
      });
      return generateEvent(type, offersIDs, destinationIDs);
    });
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }

  get events() {
    return this.#events;
  }
}
