import { createElement } from '../render';
import { createEventTemplate } from '../template/event-template';


export default class EventView {
  getTemplate() {
    return createEventTemplate();
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
