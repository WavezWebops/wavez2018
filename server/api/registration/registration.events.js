/**
 * Registration model events
 */

'use strict';

import {EventEmitter} from 'events';
import Registration from './registration.model';
var RegistrationEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
RegistrationEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Registration.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    RegistrationEvents.emit(event + ':' + doc._id, doc);
    RegistrationEvents.emit(event, doc);
  }
}

export default RegistrationEvents;
