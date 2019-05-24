import { OperationType } from './OperationType'

export default class Calculator {
    public calculate(action: OperationType, a: number, b: number): number {
        switch (action) {
            case OperationType.PLUS:
                return this._plus(a, b)
            case OperationType.MINUS:
                return this._minus(a, b)
            case OperationType.MULTIPLY:
                return this._multiply(a, b)
            case OperationType.DIVIDE:
                return this._divide(a, b)
        }
    }
    private _plus(a: number, b: number): number {
        return a + b
    }
    private _minus(a: number, b: number): number {
        return a - b
    }
    private _multiply(a: number, b: number): number {
        return a * b
    }
    private _divide(a: number, b: number): number | never {
        if (b === 0) {
            throw new Error('b cannot be zero')
        }
        return a / b;
    }
}
