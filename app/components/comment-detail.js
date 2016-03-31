import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    update(comment, params) {
      this.sendAction('update', comment, params);
    }
  }
});
