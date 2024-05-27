import { NoEventsTextType } from '../utils/filter.js';

function createNoEventTemplate(filterType) {
  return `<p class="trip-events__msg">${NoEventsTextType[filterType]}</p>`;
}
export{createNoEventTemplate};
