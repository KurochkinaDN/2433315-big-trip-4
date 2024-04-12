import { POINT_EMPTY } from '../const.js';
import { createElement } from '../render.js';
import { createEventEditTemplate } from '../template/event-edit-template.js';


export default class EventEditView {
  constructor({event = POINT_EMPTY, eventDestination, eventOffers}) {
    this.event = event;
    this.eventDestination = eventDestination;
    this.eventOffers = eventOffers;
  }

  getTemplate() {
    return createEventEditTemplate({
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
