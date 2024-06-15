import { firstLetterToUpperCase } from '../utils/common.js';

function createFilterItemElement(filter, currentFilter) {
  const {type, exists} = filter;
  return `
    <div class="trip-filters__filter">
      <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}" ${currentFilter === type ? 'checked' : ''} ${exists ? '' : 'disabled'}>
      <label class="trip-filters__filter-label" for="filter-${type}">${firstLetterToUpperCase(type)}</label>
    </div>`;
}

function createFilterTemplate(filterItems, currentFilter) {
  const filterItemsTemplate = filterItems.map((filter) => createFilterItemElement(filter, currentFilter)).join('');
  return `
    <form class="trip-filters" action="#" method="get">
      ${filterItemsTemplate}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`;
}

export {createFilterTemplate};
