import { Control } from "angular2/common";

export class UsernameValidators {
    static cannotContainSpace(control: Control) {
        if (control.value.indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null;
    }

    static shouldBeUnique(control: Control) {  
        console.log('insdie unique');  
        /* 
            if Promise give error with visual studio code 
            got to below url
            https://github.com/Microsoft/vscode/issues/21968#issuecomment-284217200

            fix : just update tsconfig.json and add following property with in complieroption object
                    "lib": ["es2017", "dom"],
                    "types" : [ "node", "jasmine", "core-js" ]
            and after compling this you can remove this.
        */    
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if(control.value == "vinay")
                    resolve({shouldBeUnique : true});
                else
                    resolve(null);
            },1000);
        });
    }
}