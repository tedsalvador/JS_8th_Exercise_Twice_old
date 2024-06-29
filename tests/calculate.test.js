import { describe, expect, it } from 'vitest';
import { calculate } from "/js/calculate.js";

describe('Test for Calculate Age Father double than Son', () => {
    
    it('should return the value for twice old', () => {
        //Aceptance Criteria
        // Given
        const value1 = 36;
        const value2 = 7;
        //When - Action
        const result = calculate(value1, value2)
        //Then
        console.log(result);
        expect(result).toBe(22)
    });

    it('should return the value for twice old', () => {
        //Aceptance Criteria
        // Given
        const value1 = 55;
        const value2 = 30;
        //When - Action
        const result = calculate(value1, value2)
        //Then
        console.log(result);
        expect(result).toBe(5)
    });

    it('should return the value for twice old', () => {
        //Aceptance Criteria
        // Given
        const value1 = 42;
        const value2 = 21;
        //When - Action
        const result = calculate(value1, value2)
        //Then
        console.log(result);
        expect(result).toBe(0)
    });

});