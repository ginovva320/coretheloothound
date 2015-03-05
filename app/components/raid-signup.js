import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'signup',
  classNameBindings: ['signup.seated', 'roleSlugs'],

  rolesSorting: ['slug:desc'],
  sortedRoles: Ember.computed.sort('signup.roles', 'rolesSorting'),

  attributeBindings: ['note:title'],

  roleSlugs: function() {
    return this.get('signup.roles').mapBy('slug').join(' ');
  }.property('signup.roles'),

  didInsertElement: function() {
    console.log("Draggable: " + this.get('signup.character.name'));
    this.$().draggable({
      addClasses: false,
      containment: "section.signups",
      revert: "invalid",
      revertDuration: 200
    });
  },

  note: function() {
    return this.get('signup.note');
  }.property('signup.note'),

  classes: function() {
    var classes = 'class class-' + this.get('signup.character.class_id');
    if(this.get('preferred')) {
      classes += ' preferred';
    }
    return classes;
  }.property('signup.character.class_id'),

  iconClasses: function() {
    return 'role ' + this.get('signup.role.slug');
  }.property('signup.role.slug'),

  mine: function() {
    return this.get('currentAccount.id') === this.get('signup.character.account.id');
  }.property('currentAccount.id', 'signup.character.account.id'),

  actions: {
    unsignup: function() {
      this.sendAction("unsignup",
                      this.get('signup.content'));
    },
    seat: function(role) {
      this.sendAction("seat",
                      this.get('signup.content'),
                      role);
    },
    unseat: function() {
      this.sendAction("unseat",
                      this.get('signup.content'));
    }
  }
});
