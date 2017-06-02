import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
    showPerson(person) {
      alert(person.email+" "+person.phone+" "+person.gender);
    }
  }
});
