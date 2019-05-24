import { expect } from 'chai'
import Calculator from '../src/Calculator'
import { OperationType } from '../src/OperationType'

describe('Calculator', () => {
    describe('Plus', () => {
        it('should return the plus result of two numbers', () => {
            const calc = new Calculator()
            const result = calc.calculate(OperationType.PLUS, 1, 2)
            expect(result).to.equal(3)
        })
    })
    describe('Minus', () => {
        it('should return the minus result of two numbers', () => {
            const calc = new Calculator()
            const result = calc.calculate(OperationType.MINUS, 2, 1)
            expect(result).to.equal(1)
        })
    })
    describe('Multiply', () => {
        it('should return the multiply result of two numbers', () => {
            const calc = new Calculator()
            const result = calc.calculate(OperationType.MULTIPLY, 1, 2)
            expect(result).to.equal(2)
        })
    })
})