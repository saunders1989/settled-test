import { validate } from '../../utils/validation';

/** @test {FormatNumbers} */
describe('validate', () => {

  it ('should return FALSE if isRequired && value === ""', () => {
    expect(validate('', false, true, false, 'input')).toBe(false);
  });

  it ('should return NULL if !isRequired && value === ""', () => {
    expect(validate('', false, false, false, 'input')).toBe(null);
  });

  it ('should return FALSE if !isNonZero && +value === false', () => {
    expect(validate('0', false, false, true, 'input')).toBe(false);
  });

  it ('should not validate if validation is false', () => {
    expect(validate('L4S 2T9', null, false, false, 'input')).toBe(true);
    expect(validate('L4S 2T9', false, false, false, 'input')).toBe(true);
    expect(validate('L4S 2T9', 'blah', false, false, 'input')).toBe(true);
  });

  describe('numeric', () => {
    it('it should validate these fields', () => {
      const fieldsToTest = [
        { value: '1', validation: 'numeric', isRequired: false, isNonZero: false, type: 'input' },
        { value: '1123123', validation: 'numeric', isRequired: false, isNonZero: false, type: 'input' }
      ];
  
      fieldsToTest.forEach(field => {
        expect(validate(
          field.value,
          field.validation,
          field.isRequired,
          field.isNonZero,
          field.type
        )).toBe(true);
      });
    });
  });

  describe('currency', () => {
    it ('should validate these currency', () => {
      expect(validate('0.00', 'currency', false, false, 'input')).toBe(true);
      expect(validate('0.01', 'currency', false, false, 'input')).toBe(true);
      expect(validate('0.1', 'currency', false, false, 'input')).toBe(true);
      expect(validate('123', 'currency', false, false, 'input')).toBe(true);
      expect(validate('12345', 'currency', false, false, 'input')).toBe(true);
      expect(validate('1', 'currency', false, false, 'input')).toBe(true);
      expect(validate('1.2', 'currency', false, false, 'input')).toBe(true);
      expect(validate('0.2', 'currency', false, false, 'input')).toBe(true);
      expect(validate('0.22', 'currency', false, false, 'input')).toBe(true);
    });
  
    it ('should NOT validate these currency', () => {
      expect(validate('0.00', 'currency', false, true, 'input')).toBe(false);
      expect(validate('0.123', 'currency', false, false, 'input')).toBe(false);
      expect(validate('.5234', 'currency', false, false, 'input')).toBe(false);
      expect(validate('1.234.0', 'currency', false, false, 'input')).toBe(false);
      expect(validate('1.112', 'currency', false, false, 'input')).toBe(false);
    });
  });

  describe('alpha', () => {
    it ('should validate these alpha values', () => {
      expect(validate('abc', 'alpha', false, false, 'input')).toBe(true);
      expect(validate('ABC', 'alpha', false, false, 'input')).toBe(true);
      expect(validate('aBc', 'alpha', false, false, 'input')).toBe(true);
      expect(validate('AbC', 'alpha', false, false, 'input')).toBe(true);
      expect(validate('abc-', 'alpha', false, false, 'input')).toBe(true);
      expect(validate('abc ', 'alpha', false, false, 'input')).toBe(true);
    });
  
    it ('should NOT validate these alpha values', () => {
      expect(validate('abc1', 'alpha', false, false, 'input')).toBe(false);
      expect(validate('AB3', 'alpha', false, false, 'input')).toBe(false);
      expect(validate('a@3fd', 'alpha', false, false, 'input')).toBe(false);
    });
  });

  describe('alphaNumeric', () => {
    it ('should validate these alpha values', () => {
      expect(validate('abc', 'alphaNumeric', false, false, 'input')).toBe(true);
      expect(validate('ABC', 'alphaNumeric', false, false, 'input')).toBe(true);
      expect(validate('aBc', 'alphaNumeric', false, false, 'input')).toBe(true);
      expect(validate('AbC', 'alphaNumeric', false, false, 'input')).toBe(true);
      expect(validate('abc123', 'alphaNumeric', false, false, 'input')).toBe(true);
      expect(validate('123abc', 'alphaNumeric', false, false, 'input')).toBe(true);
    });

    it ('should NOT validate these alpha values', () => {
      expect(validate('abc ', 'alphaNumeric', false, false, 'input')).toBe(false);
      expect(validate('AB-3', 'alphaNumeric', false, false, 'input')).toBe(false);
      expect(validate('a@3fd', 'alphaNumeric', false, false, 'input')).toBe(false);
    });
  });

  describe('postcode', () => {
    it ('should validate these postcode values', () => {
      // Please check the regex.js for more tests
      expect(validate('L4S 2T9', 'postcode', false, false, 'input')).toBe(true);
    });
    it ('should NOT validate these postcode values', () => {
      // Please check the regex.js for more tests
      expect(validate('14S 2T9', 'postcode', false, false, 'input')).toBe(false);
    });
  });

  describe('email', () => {
    it ('should validate these email values', () => {
      expect(validate('a@a.com', 'email', false, false, 'input')).toBe(true);
    });
    it ('should NOT validate these email values', () => {
      expect(validate('@a.com', 'email', false, false, 'input')).toBe(false);
    });
  });

  describe('match', () => {
    it ('should validate these confirmation values', () => {
      expect(validate('qwerty', 'match', false, false, 'input', 'qwerty')).toBe(true);
      expect(validate('a@a.com', 'match', false, false, 'input', 'a@a.com')).toBe(true);
    });
    it ('should NOT validate these confirmation values', () => {
      expect(validate('qwerty', 'match', false, false, 'input', 'poiuyt')).toBe(false);
      expect(validate('a@a.com', 'match', false, false, 'input', 'b@b.com')).toBe(false);
    });
  });

  describe('noMatch', () => {
    it ('should validate these confirmation values', () => {
      expect(validate('qwerty', 'noMatch', false, false, 'input', 'poiuyt')).toBe(true);
      expect(validate('a@a.com', 'noMatch', false, false, 'input', 'b@b.com')).toBe(true);
    });
    it ('should NOT validate these confirmation values', () => {
      expect(validate('qwerty', 'noMatch', false, false, 'input', 'qwerty')).toBe(false);
      expect(validate('a@a.com', 'noMatch', false, false, 'input', 'a@a.com')).toBe(false);
    });
  });

  describe('lengthEquals3', () => {
    it ('should validate these length values', () => {
      expect(validate('qwe', 'lengthEquals3', false, false, 'input')).toBe(true);
      expect(validate('123', 'lengthEquals3', false, false, 'input')).toBe(true);
    });
    it ('should NOT validate these length values', () => {
      expect(validate('qw', 'lengthEquals3', false, false, 'input')).toBe(false);
      expect(validate('12', 'lengthEquals3', false, false, 'input')).toBe(false);
      expect(validate('qwerty', 'lengthEquals3', false, false, 'input')).toBe(false);
      expect(validate('123456', 'lengthEquals3', false, false, 'input')).toBe(false);
    });
  });

  describe('lengthEquals4', () => {
    it ('should validate these length values', () => {
      expect(validate('qwer', 'lengthEquals4', false, false, 'input')).toBe(true);
      expect(validate('1234', 'lengthEquals4', false, false, 'input')).toBe(true);
    });
    it ('should NOT validate these length values', () => {
      expect(validate('qwe', 'lengthEquals4', false, false, 'input')).toBe(false);
      expect(validate('123', 'lengthEquals4', false, false, 'input')).toBe(false);
      expect(validate('qwerty', 'lengthEquals4', false, false, 'input')).toBe(false);
      expect(validate('123456', 'lengthEquals4', false, false, 'input')).toBe(false);
    });
  });

  describe('length8to16', () => {
    it ('should validate these length values', () => {
      expect(validate('qwertyuiop', 'length8to16', false, false, 'input')).toBe(true);
      expect(validate('qwertyuiopasdfgh', 'length8to16', false, false, 'input')).toBe(true);
    });
    it ('should NOT validate these length values', () => {
      expect(validate('qwertyu', 'length8to16', false, false, 'input')).toBe(false);
      expect(validate('qwertyuiopasdfghj', 'length8to16', false, false, 'input')).toBe(false);
    });
  });

  describe('length8to32', () => {
    it ('should validate these length values', () => {
      expect(validate('qwertyuiop', 'length8to32', false, false, 'input')).toBe(true);
      expect(validate('qwertyuiopasdfghjklzxcvbnmqwerty', 'length8to32', false, false, 'input')).toBe(true);
    });
    it ('should NOT validate these length values', () => {
      expect(validate('qwertyu', 'length8to32', false, false, 'input')).toBe(false);
      expect(validate('qwertyuiopasdfghjklzxcvbnmqwertyu', 'length8to32', false, false, 'input')).toBe(false);
    });
  });

  describe('limitedSpecialChars', () => {
    it('it should validate these special characters', () => {
      expect(validate('qwerty-qwerty', 'limitedSpecialChars', false, false, 'input')).toBe(true);
      expect(validate('qwerty.', 'limitedSpecialChars', false, false, 'input')).toBe(true);
    });

    it('it should NOT validate these special characters', () => {
      expect(validate('qwerty?qwerty', 'limitedSpecialChars', false, false, 'input')).toBe(false);
      expect(validate('qwerty@', 'limitedSpecialChars', false, false, 'input')).toBe(false);
    });
  });

  describe('letterNumber', () => {
    it('it should validate these values', () => {
      expect(validate('qwerty1qwerty', 'letterNumber', false, false, 'input')).toBe(true);
      expect(validate('123456y', 'letterNumber', false, false, 'input')).toBe(true);
    });

    it('it should NOT validate these values', () => {
      expect(validate('qwerty', 'letterNumber', false, false, 'input')).toBe(false);
      expect(validate('!@£$%^qwerty', 'letterNumber', false, false, 'input')).toBe(false);
    });
  });

  describe('repeatedSpecialChars', () => {
    it('it should validate these length values', () => {
      expect(validate('qwerty-qwerty', 'repeatedSpecialChars', false, false, 'input')).toBe(true);
      expect(validate('qwerty.', 'repeatedSpecialChars', false, false, 'input')).toBe(true);
    });

    it('it should NOT validate these length values', () => {
      expect(validate('qwerty--qwerty', 'repeatedSpecialChars', false, false, 'input')).toBe(false);
      expect(validate('qwerty./', 'repeatedSpecialChars', false, false, 'input')).toBe(false);
    });
  });

  describe('upperCaseChar', () => {
    it('it should validate these values', () => {
      expect(validate('Qwerty', 'upperCaseChar', false, false, 'input')).toBe(true);
      expect(validate('qwertY', 'upperCaseChar', false, false, 'input')).toBe(true);
    });

    it('it should NOT validate these values', () => {
      expect(validate('qwerty', 'upperCaseChar', false, false, 'input')).toBe(false);
      expect(validate('qwerty12345', 'upperCaseChar', false, false, 'input')).toBe(false);
    });
  });

  describe('type select', () => {
    it ('should return FALSE if required and no string', () => {
      expect(validate('', '', true, false, 'select')).toBe(false);
    });
    it ('should return TRUE if value is an empty string', () => {
      expect(validate('value', '', false, false, 'select')).toBe(true);
    });
  });

  describe('type is undefined', () => {
    it ('should return TRUE', () => {
      expect(validate('abc', '', false, false, undefined)).toBe(true);
      expect(validate(' ', '', false, false, undefined)).toBe(true);
    });

    it ('should return UNDEFINED', () => {
      expect(validate('', '', false, false, undefined)).toBe(undefined);
    });
  });


});
