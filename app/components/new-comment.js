import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    save1() {
      var params = {
        author: this.get('author') ? this.get('author'): "",
        comment: this.get('comment') ? this.get('comment'): "",
        post: this.get('post')
      };
      this.set('addNewComment', false);
      this.sendAction('save2', params);
    }
  }
});
