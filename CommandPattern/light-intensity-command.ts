import { SmartHouseCommand } from "./command";
import { SmartHouseLIght } from "./smart-house-light";


export class LightIntensityCommand implements SmartHouseCommand{

    constructor(private readonly light: SmartHouseLIght){}

    execute(): void{

        this.light.increaseIntensity();
        
    }
    undo(): void{
       
        this.light.decreaseIntensity(); 
    }


}