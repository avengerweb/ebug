import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    registered: false,
    actions: {
        register(){
            let self = this;
            this.get('model').save().then(()=>{
                self.set('registered',1);
            }).catch((error)=>{
                this.set('errorMessage',"Registration failed.");
            });
        }
    }
});