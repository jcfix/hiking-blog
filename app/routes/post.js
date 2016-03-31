import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
    // Note: Don't need this because we are not trying to pass through ALL comments, ever. We only want comments specific to one post.
    // return Ember.RSVP.hash({
    // posts: this.store.findRecord('post', params.post_id),
    // comments: this.store.findAll('comment')
    // });
  },
  actions: {
    save3(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      console.log(params.post.get('title'));
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post');
    },
    update(comment, params) {
      console.log(params);
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          comment.set(key, params[key]);
        }
      });
      comment.save();
      this.transitionTo('post');
    }
  }
});
