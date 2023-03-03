import Eris from "eris";
import { CommandInputData } from "../command";

export interface IModClient extends Eris.Client {
    commands: Map<string, CommandInputData>;
}