import BaseValidator from './base';
import validator from 'validator';
import {isBlank} from '@ember/utils';

export default BaseValidator.create({
    properties: ['identification', 'signin', 'forgotPassword'],
    //invalidMessage: 'Email address is not valid',
    invalidMessage:' User Id is not valid',
    identification(model) {
        let id = model.get('identification');
	id+='@llxnews.com';
        if (!isBlank(id) && !validator.isEmail(id)) {
            model.get('errors').add('identification', this.invalidMessage);
            this.invalidate();
        }
    },

    signin(model) {
        let id = model.get('identification');
// LLIUREX Complete id to generate internal email	    
	id+='@llxnews.com';    
// LLIUREX 	    
        let password = model.get('password');

        model.get('errors').clear();

        if (isBlank(id)) {
          //model.get('errors').add('identification', 'Please enter an email');
            model.get('errors').add('identification', 'Please enter an User Id');
            this.invalidate();
        }
// LLIUREX Complete id to generate internal email	    

      //  if (!isBlank(id) && !validator.isEmail(id)) {
       //     model.get('errors').add('identification', this.invalidMessage);
        //    this.invalidate();
       // }
// LLIUREX 	    

        if (isBlank(password)) {
            model.get('errors').add('password', 'Please enter a password');
            this.invalidate();
        }
    },

    forgotPassword(model) {
        let id = model.get('identification');
	id+='@llxnews.com';
        model.get('errors').clear();
// LLIUREX Complete id to generate internal email	    
     	/*
	 if (isBlank(id) || !validator.isEmail(id)) {
           model.get('errors').add('identification', this.invalidMessage);
           this.invalidate();
        }
	 */
// LLIUREX	    
    }
});
