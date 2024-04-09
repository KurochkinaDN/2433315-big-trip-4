import { render } from '../render';
import TripEventsView from '../view/trip-events-view';
import SortView from '../view/sort-view';
import EventEditView from '../view/event-edit-view';
import EventView from '../view/event-view';

export default class RoutePresenter{
  EVENT_COUNT = 3;
  tripEventsComponent = new TripEventsView();

  constructor({container}) {
    this.container = container;
  }


  int() {
    render(new SortView(), this.container);
    render(this.tripEventsComponent, this.container);
    render(new EventEditView(), this.tripEventsComponent.getElement());

    for (let i = 0; i < this.EVENT_COUNT; i++){
      render(new EventView(), this.tripEventsComponent.getElement());
    }
  }
}
