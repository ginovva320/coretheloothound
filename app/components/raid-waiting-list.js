import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'waiting-list',
  classNameBindings: 'dragging',

  actions: {
    selectSignup: function(signup) {
      this.sendAction('selectSignup', signup);
    }
  }
});
