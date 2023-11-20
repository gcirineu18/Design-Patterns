
// Criando o receptor
export class SmartHouseLIght{
    private isOn = false;

    private intensity = 50;

    constructor(public name: string){}

    getPowerStatus(): string{
        return this.isOn ? 'ON' : 'OFF'; 
    }

    on(): boolean{
        this.isOn = true;
        console.log(`${this.name} agora está ${this.getPowerStatus()}`);
        return this.isOn;
    }

    off(): boolean{
        this.isOn = false;
        console.log(`${this.name} agora está ${this.getPowerStatus()}`);
        return this.isOn;
    }

    increaseIntensity(): number{
        if(this.intensity >=100) return this.intensity;

        this.intensity +=1;
        console.log(`${this.name} agora está com intensidade em ${this.intensity}`);
        return this.intensity;
    }

    
    decreaseIntensity(): number{
        if(this.intensity <=0) return this.intensity;
        
        this.intensity -=1;
        console.log(`${this.name} agora está com intensidade em ${this.intensity}`);
        return this.intensity;
    }
}