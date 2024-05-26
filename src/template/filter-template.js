import { firstLetterToUpperCase } from '../utils/common.js';

function createFilterItemTemplate(filter, isChecked){
  const {type, exists} = filter;
  return `
  <div class="trip-filters__filter">
      <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}" ${isChecked ? 'checked' : ''} ${exists ? '' : 'disabled'}>
      <label class="trip-filters__filter-label" for="filter-${type}">${firstLetterToUpperCase(type)}</label>
    </div>`;
}

function createFilterElement(filterItems) {
  const filterItemsTemplate = filterItems.map((filter, index) => createFilterItemTemplate(filter, index === 0)).join('');
  return `
    <form class="trip-filters" action="#" method="get">
      ${filterItemsTemplate}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`;
}


export {createFilterElement};
