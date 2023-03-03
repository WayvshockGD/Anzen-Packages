import { CommandInputData, CommandLevelArg } from "./SCTypes";

export class StructureCommand implements CommandInputData {
    public constructor(private options: CommandInputData) {}

    get names() {
        return this.options.names
    }

    get usage() {
        return this.options.usage;
    }

    get for() {
        return this.options.for;
    }
}