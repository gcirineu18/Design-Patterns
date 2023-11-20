import { DeviceImplementation } from "../device/device-implementation";


export class RemoteControl{
    constructor(protected device: DeviceImplementation){}

    tooglePower(): void{
        // Toogle para inverter o valor atual para o oposto
        this.device.setPower(!this.device.getPower());

        console.log(`${this.device.getName()} power status: ${this.device.getPower()}`);
    }
}