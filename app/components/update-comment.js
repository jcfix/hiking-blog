import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },
    update(comment) {
      var params = {
        author: this.get('author') ? this.get('author'): comment.get('author'),
        comment: this.get('commentText') ? this.get('commentText'): comment.get('commentText'),
      };
      // debugger;
      this.set('updateCommentForm', false);
      this.sendAction('update', comment, params);
    }
  }
});
