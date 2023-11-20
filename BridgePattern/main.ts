import { Radio } from "./device/radio";
import { Tv } from "./device/tv";
import { RemoteControl } from "./remote-control/remote-control";
import { RemoteControlWithVolume } from "./remote-control/remote-control-with-volume";

function clientCode(abstraction: RemoteControl | RemoteControlWithVolume): void{
   abstraction.tooglePower();
  // abstraction.volumeUp();
   
  //Type Guard
   if(!('volumeUp' in abstraction)) return;

    abstraction.volumeUp();
    abstraction.volumeUp();
    abstraction.volumeDown();
}

const tv = new Tv();
const radio = new Radio();

let  radioRemoteControl = new RemoteControl(radio);

clientCode(radioRemoteControl);

radioRemoteControl = new RemoteControlWithVolume(radio);

clientCode(radioRemoteControl);