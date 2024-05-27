import TripInfoView from './view/trip-info-view.js';
import {render, RenderPosition} from './framework/render.js';
import RoutePresenter from './presenter/trip-presenter.js';
import DestinationsModel from './model/destinations-model.js';
import EventsModel from './model/events-model.js';
import OffersModel from './model/offers-model.js';
import EventsApiService from './service/events-api-service.js';
import FilterPresenter from './presenter/filter-presenter.js';
import FilterModel from './model/filter-model.js';
import NewEventButtonView from './view/new-event-view.js';

const AUTHORIZATION = 'Basic eo0w672ik29809a';
const END_POINT = 'https://21.objects.htmlacademy.pro/big-trip';

const tripMainContainer = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');
const filterModel = new FilterModel();
const tripEventsContainer = document.querySelector('.trip-events');
const eventsApiService = new EventsApiService(END_POINT, AUTHORIZATION);
const destinationsModel = new DestinationsModel(eventsApiService);
const offersModel = new OffersModel(eventsApiService);
const eventsModel = new EventsModel({
  eventsApiService,
  destinationsModel,
  offersModel
});

const routePresenter = new RoutePresenter({
  tripEventsContainer,
  destinationsModel,
  offersModel,
  eventsModel,
  filterModel,
  onNewEventDestroy: handleNewEventFormClose
});

const filterPresenter = new FilterPresenter({
  filterContainer: filterContainer,
  filterModel,
  eventsModel,
});

const newEventButtonComponent = new NewEventButtonView({
  onClick: handleNewEventButtonClick
});

function handleNewEventFormClose() {
  newEventButtonComponent.element.disabled = false;
}

function handleNewEventButtonClick() {
  routePresenter.createEvent();
  newEventButtonComponent.element.disabled = true;
}

render(new TripInfoView(), tripMainContainer, RenderPosition.AFTERBEGIN);
render(newEventButtonComponent, tripMainContainer, RenderPosition.BEFOREEND);

routePresenter.init();
filterPresenter.init();
eventsModel.init();
