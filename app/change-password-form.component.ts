import { PasswordValidator } from './passwordValidator';
import { ControlGroup, FormBuilder, Validators } from 'angular2/common';
import { Component } from 'angular2/core';

@Component({
    selector : 'change-password',
    templateUrl : 'app/change-password-form.component.html'
})
export class ChangePasswordComponent {
    form : ControlGroup;
    constructor(fb : FormBuilder){
        this.form = fb.group({
            currentPassword :['',Validators.required],
            newPassword : ['',Validators.compose([
                                Validators.required,
                                PasswordValidator.ComplexPassword])
                         ],
            confirmPassword: ['', Validators.required]
        },{ validator: PasswordValidator.passwordsShouldMatch });
    }

    changePassword(){
        var oldPassword = this.form.find('currentPassword');
        if (oldPassword.value != '1234') 
            oldPassword.setErrors({ validOldPassword: true });

        if (this.form.valid)
            alert("Password successfully changed.");
    }
}