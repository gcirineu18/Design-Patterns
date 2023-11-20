

// Esta é uma interface que fala que alguma
// coisa precisa validar o email

export interface EmailValidatorProtocol{
    isEmail(value:string): Boolean;
}
