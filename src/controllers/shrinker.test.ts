// yourFile.test.ts
import { generateRandomURL } from './shrinker';

const iterations = Array.from({ length: 100 }, (_, index) => index + 1);

describe.each(iterations)('generateRandomNumber - Iteration %i', (Iteration) => {


    it('should return a defined result', () => {
        const result = generateRandomURL();
        expect(result).not.toContain('undefined') 
    });

    // Add more test cases to cover other scenarios
});
