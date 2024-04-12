import { createElement } from '../render.js';
import { createEventTemplate } from '../template/event-template.js';

export default class EventView {
  constructor({event, eventDestination, eventOffers}) {
    this.event = event;
    this.eventDestination = eventDestination;
    this.eventOffers = eventOffers;
  }

  getTemplate() {
    return createEventTemplate({
      event: this.event,
      eventDestination: this.eventDestination,
      eventOffers: this.eventOffers
    });
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
