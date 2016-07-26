import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    model: [],
    user: function () {
      console.log('run');
        return {'username': 'avengerweb'};
    },
    actions: {
        invalidateSession() {
            this.get('session').invalidate();
        }
    }
});