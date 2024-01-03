
const { validate, notValid, valid } = require('../js/validation');

describe('Validation functions', () => {
    let inputElement;

    beforeEach(() => {
        inputElement = {
            classList: {
                remove: jest.fn(),
                add: jest.fn(),
            },
        };
    });

    test('validate повертає true для валідного email', () => {
        const regex = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/;
        expect(validate(regex, 'test@example.com')).toBe(true);
    });

    test('validate повертає false для невалідного email', () => {
        const regex = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/;
        expect(validate(regex, 'invalid-email')).toBe(false);
    });

    test('notValid правильно змінює класи для невалідного введення', () => {
        notValid(inputElement);

        expect(inputElement.classList.remove).toHaveBeenCalledWith('is-valid');
        expect(inputElement.classList.add).toHaveBeenCalledWith('is-invalid');
    });

    test('valid правильно змінює класи для валідного введення', () => {
        valid(inputElement);

        expect(inputElement.classList.remove).toHaveBeenCalledWith('is-invalid');
        expect(inputElement.classList.add).toHaveBeenCalledWith('is-valid');
    });
});
