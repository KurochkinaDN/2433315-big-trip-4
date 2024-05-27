import { TYPES} from '../const.js';
import { formatStringToDateTime} from '../utils/event.js';
import { firstLetterToUpperCase, firstLetterToLowerCase, ButtonLabel, EditType } from '../utils/common.js';
import he from 'he';

function createEventTypesListTemplate(currentType) {
  return TYPES.map((type) =>
    `<div class="event__type-item">
      <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${currentType === type ? 'checked' : ''}>
      <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${firstLetterToUpperCase(type)}</label>
    </div>`).join('');
}

function createEventDestinationListTemplate(eventDestination) {
  return `
    <datalist id="destination-list-1">
    ${eventDestination.map((destination) => `<option value="${destination.name}"></option>`).join('')}
    </datalist>`;
}

function createEventOfferTemplate(offers, checkedOffers) {
  const offerItem = offers.map((offer) => `
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="${offer.id}" type="checkbox" name="event-offer-${firstLetterToLowerCase(offer.title)}" ${checkedOffers.includes(offer.id) ? 'checked' : ''}>
      <label class="event__offer-label" for="${offer.id}">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>`).join('');
  return `<div class="event__available-offers">${offerItem}</div>`;
}

function createResetButtonTemplate(eventType) {
  const label = eventType === EditType.CREATING
    ? ButtonLabel.CANCEL_DEFAULT
    : ButtonLabel.DELETE_DEFAULT;
  return `<button class="event__reset-btn" type="reset">${label}</button>`;
}

function createEventPhotoTemplate(pictures) {
  return `
    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${pictures.map((picture) => `<img class="event__photo" src="${picture.src}" alt="${picture.description}">`).join('')}
      </div>
    </div>`;
}

function createEventEditTemplate({event, eventDestination, eventOffers, eventType}) {
  const { type, offers, dateFrom, dateTo, price } = event;
  const nameDestination = (eventDestination) ? eventDestination.name : '';
  const currentOffers = eventOffers.find((offer) => offer.type === type);
  const currentDestination = eventDestination.find((destination) => destination.id === event.destination);
  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${createEventTypesListTemplate(type)}
              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${nameDestination}" list="destination-list-1">
            ${createEventDestinationListTemplate(eventDestination)}
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateFrom ? formatStringToDateTime(dateFrom) : ''}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateTo ? formatStringToDateTime(dateTo) : ''}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            ${createEventDestinationListTemplate()}
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${he.encode(price.toString())}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">${ButtonLabel.SAVE_DEFAULT}</button>
          ${createResetButtonTemplate(eventType)}
          ${(eventType === EditType.EDITING) ? '<button class="event__rollup-btn" type="button">' : ''}
        </header>
        <section class="event__details">
        ${(currentOffers.offers.length !== 0) ? `<section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>
            ${createEventOfferTemplate(currentOffers.offers, offers)}
          </section>` : ''}

          ${(currentDestination) ? `<section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${currentDestination.description}</p>
            ${createEventPhotoTemplate(currentDestination.pictures)}
          </section>` : ''}
        </section>
      </form>
    </li>`;
}

export {createEventEditTemplate};
