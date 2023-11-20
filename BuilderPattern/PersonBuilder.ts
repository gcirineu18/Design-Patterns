
import { Person } from "./Person";

/*
Este padrão usa-se para criar objetos
complexos, o que não se aplica no caso
abaixo, valendo ressaltar que é usado
 meramente como exemplo

*/

export class PersonBuilder{
    private person = new Person();

    newPerson():void{
        this.person = new Person();
    }

    // O retorno do this significa que
    // se quer fazer o method chaining ou encadeamen-
    // to de chamadas de métodos
    /*
    Então, uma vez chamado setName, é possível logo após chamar
    setAge
    */
    setName(name: string): this{
        this.person.name = name;
        return this;
    }

    setAge(age: number): this{
        this.person.age = age;
        return this;
    }

    getResult():Person{
        return this.person
    }

  

}  

const personBuilder = new PersonBuilder();
const person1 = personBuilder.setName('Joelson').setAge(30).getResult();
personBuilder.newPerson();
const person2 = personBuilder.setName('Natalia').setAge(28).getResult();

console.log(person1);
console.log(person2);