// app/controllers/login.js
import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),

    actions: {
        authenticate: function() {
            var credentials = this.getProperties('identification', 'password'),
                authenticator = 'simple-auth-authenticator:jwt';

            this.get('session').authenticate(authenticator, credentials);
        }
    }
});