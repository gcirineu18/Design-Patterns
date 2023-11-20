import { EmailValidatorProtocol } from './email-validator-protocol';
import isEmail from 'validator/lib/isEmail';
/**
 * Quem depende do validator é apenas essa classe só no programa
 */

export class EmailValidatorAdapter implements EmailValidatorProtocol{

    isEmail(value: string): Boolean {
        return isEmail(value);
    }
}