import { IModClient } from "../cltypes/Client";

export interface CommandInputData {
    names: string[];
    usage: string[];
    for: CommandLevelArg;

}

export interface CommandRunData {
    args: string[];
    client: IModClient;
}

export type CommandLevelArg = "DEV" | "ADMIN";