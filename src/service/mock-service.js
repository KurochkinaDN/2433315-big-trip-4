import { getRandomArrayElement, getRandomInteger } from '../utils.js';
import { mockDestinations } from '../mock/destinations.js';
import { generateEvent } from '../mock/events.js';
import { mockOffers } from '../mock/offers.js';
import { EVENT_COUNT, TYPES } from '../const.js';


export default class MockService {
  constructor() {
    this.destinations = mockDestinations;
    this.offers = mockOffers;
    this.events = this.generateEvents();
  }

  generateEvents() {
    return Array.from({length: EVENT_COUNT}, () => {
      const type = getRandomArrayElement(TYPES);
      const destination = getRandomArrayElement(this.destinations);
      const destinationIDs = destination.id;
      const offersByType = this.offers.find((offerByType) => offerByType.type === type);
      const offersIDs = [];
      offersByType.offers.forEach((offer) => {
        if (getRandomInteger(0, 1)) {
          offersIDs.push(offer.id);
        }
      });
      return generateEvent(type, offersIDs, destinationIDs);
    });
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }

  getEvents() {
    return this.events;
  }
}
