import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: 'role',

  didInsertElement: function() {
    var _this = this;

    console.log("Droppable for: " + 'div.signup.' + this.get('role'));
    this.$().find('.target').droppable({
      accept: 'div.signup.' + this.get('role'),
      activeClass: 'dragging',
      hoverClass: 'highlight',
      drop: function(event, ui) {
        var signup = Ember.View.views[ui.draggable[0].id];
        _this.sendAction('signup', signup.get('signup'), _this.get('role'));
      }
    });
  }
});
