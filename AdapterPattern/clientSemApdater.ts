
import isEmail from "validator/lib/isEmail";

/**
 * Supondo que se tenha um software grande, e de forma incosistente
 * seja importado o validator em todas as classes que fazem seu uso,
 * caso um dia o validator fosse deprecado, em todas as classes usuárias
 * do validator haveria problema para se resolver. Nesse caso, é útil utilizar
 * o Adapter
 */

const email = 'guilher@gmai.com';

if(isEmail(email)){
    console.log(email+' é um email válido');
}
else{
    console.log(email+' não é um email válido');
}