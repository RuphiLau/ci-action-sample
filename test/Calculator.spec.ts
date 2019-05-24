import { expect } from 'chai'
import Calculator from '../src/Calculator'
import { OperationType } from '../src/OperationType'

describe('Calculator', () => {
    const calc = new Calculator()
    describe('Plus', () => {
        it('should return the plus result of two numbers', () => {
            const result = calc.calculate(OperationType.PLUS, 1, 2)
            expect(result).to.equal(3)
        })
    })
    describe('Minus', () => {
        it('should return the minus result of two numbers', () => {
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
    describe('Divide', () => {
        it('should return the divide result of two numbers', () => {
            const result = calc.calculate(OperationType.DIVIDE, 2, 1)
            expect(result).to.equal(2)
        })
        it('should throw error when the divisor is zero', () => {
            expect(() => {
                calc.calculate(OperationType.DIVIDE, 2, 0)
            }).to.throw(Error)
        })
    })
})