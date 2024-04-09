import { createElement } from '../render';
import { createTripEventsTemplate } from '../template/trip-events-template';


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
