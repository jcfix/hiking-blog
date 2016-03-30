import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        title: this.get('title') ? this.get('title'): post.get('title'),
        date: this.get('date') ? this.get('date'): post.get('date'),
        content: this.get('content') ? this.get('content'): post.get('content'),
        image: this.get('image') ? this.get('image'): post.get('image'),
      };
      // debugger;
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
