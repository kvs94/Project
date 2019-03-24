import { ValueChanges } from "./value-changes";

export interface Mediator {
    notify(valueChanges: ValueChanges): void;
}