import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: 'signups',

  selectedSignup: null,
  dragging: function() {
    return this.get('selectedSignup') !== null;
  }.property('selectedSignup'),

  actions: {
    selectSignup: function(signup) {
      this.set('selectedSignup', signup);
    }
  }
});
