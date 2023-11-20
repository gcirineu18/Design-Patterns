


export abstract class ValidationComponent{

     abstract validate(value: unknown): boolean;
}

export class ValidateEmaiLeaf extends ValidationComponent{
    validate(value: unknown): boolean{

        // TypeGuard
        if(typeof value !== 'string') return false;


        return /@/.test(value);
    }
}

export class ValidateStringLeaf extends ValidationComponent{

    validate(value: unknown): boolean {
        return typeof value === 'string';
    }
}

export class ValidateNumberLeaf extends ValidationComponent{

    validate(value: unknown): boolean {
        return typeof value === 'number';
    }
}


export class ValidationComposite extends ValidationComponent{

   private children : ValidationComponent [] = [];

   validate(value: boolean[]): boolean{
     
    for(const val of value){
     
        if (!val){
            
            return false;}
    }
    return true;

   }
}

const validateEmail = new ValidateEmaiLeaf();

const validateString = new ValidateStringLeaf();

const validateNumber = new ValidateNumberLeaf();


const a = validateEmail.validate('guilh@');
const b = validateNumber.validate(90);
const c = validateString.validate('guilh');



const composite =  new ValidationComposite();

console.log(composite.validate([a, b, c]));

