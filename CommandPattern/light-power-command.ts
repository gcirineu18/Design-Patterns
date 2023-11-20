import { SmartHouseCommand } from "./command";
import { SmartHouseLIght } from "./smart-house-light";


export class LightPowerCommand implements SmartHouseCommand{

    constructor(private readonly light: SmartHouseLIght){}

    execute(): void{
        this.light.on();
    }
    undo(): void{
       
       if( this.light.getPowerStatus() === 'ON'){
        this.light.off();
       }
       else{
        this.light.on();
       }
       
    }


}