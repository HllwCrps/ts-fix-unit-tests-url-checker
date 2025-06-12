import {calculatePasswordStrength} from "../src/PasswordStrenght";

describe('Calculate Password Strenght', () => {
    test('returns "Very Weak" for short or simple passwords', async () => {
        expect(calculatePasswordStrength('123')).toBe('Very Weak');
        expect(calculatePasswordStrength('123456789')).toBe('Very Weak');
    })
    test('returns "Weak" for limited variety', async () => {
        expect(calculatePasswordStrength('abc12345')).toBe('Weak');
        expect(calculatePasswordStrength('12345abc')).toBe('Weak');
    })
    test('returns "Moderate" for pass with multiple criteria', async () => {
        expect(calculatePasswordStrength('Abcdefg132')).toBe('Moderate');
    })
    test('returns "Strong" for pass with most or all criteria', async () => {
        expect(calculatePasswordStrength('Abcdef!_g132')).toBe('Strong');
        expect(calculatePasswordStrength('AbCd_14!42#X')).toBe('Strong');
    })
    test('returns "Very Weak" for pass with empty string', async () => {
        expect(calculatePasswordStrength(' ')).toBe('Very Weak');
    })
})