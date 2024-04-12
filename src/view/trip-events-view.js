import { createElement } from '../render.js';
import {createTripEventsTemplate} from '../template/trip-events-template.js';

export default class TripEventsView {
  getTemplate() {
    return createTripEventsTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
