import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    save3(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      this.transtitionTo('comment');
    },
  }
});
