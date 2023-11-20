import { SmartHouseApp } from './smart-house-app';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseLIght } from './smart-house-light';
import { LightIntensityCommand } from './light-intensity-command';


 //fazendo chamando diretamente
 // Receiver
const bedroomLight = new SmartHouseLIght('Luz Quarto');
const bathroomLight = new SmartHouseLIght('Luz Banheiro');

// Command
const lightPowerCommand =  new LightPowerCommand(bedroomLight);
const lightPowerCommand2 =  new LightIntensityCommand(bathroomLight);
/*
lightPowerCommand.execute();

lightPowerCommand.undo();
lightPowerCommand.undo();
lightPowerCommand.undo();
*/


// controle - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addComand('btn-1', lightPowerCommand);
smartHouseApp.executeCommand('btn-1');


smartHouseApp.addComand('btn-2', lightPowerCommand2);
smartHouseApp.executeCommand('btn-2');
