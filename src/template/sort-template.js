import { SortType } from '../const.js';
import { firstLetterToUpperCase } from '../utils/common.js';

function createSortItemElement() {
  return Object.values(SortType).map((type) =>
    `<div class="trip-sort__item  trip-sort__item--${type}">
      <input id="sort-${type}" class="trip-sort__input  visually-hidden" data-sort-type="${type}" type="radio" name="trip-sort" value="sort-${type}" ${type === 'day' ? 'checked' : ''} ${type === 'event' ? 'disabled' : ''} ${type === 'offer' ? 'disabled' : ''}>
      <label class="trip-sort__btn" for="sort-${type}">${firstLetterToUpperCase(type)}</label>
    </div>`).join('');
}

function createSortTemplate(){
  return `
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  ${createSortItemElement()}
  </form>`;
}

export {createSortTemplate};
