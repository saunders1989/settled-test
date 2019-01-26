import {
  numericRegex,
  alphaRegex,
  alphaNumericRegex,
  postcodeRegex,
  currencyRegex,
  emailRegex,
  lengthEquals3Regex,
  lengthEquals4Regex,
  length8to16Regex,
  length8to32Regex,
  limitedSpecialCharsRegex,
  letterNumberRegex,
  repeatedSpecialCharsRegex,
  upperCaseCharRegex
} from '../../utils/regex';

describe('regex', () => {
  describe('numericRegex', () => {
    it('it should validate these numbers', () => {
      expect('1').toMatch(numericRegex);
      expect('12').toMatch(numericRegex);
    });

    it('it should NOT validate these numbers', () => {
      expect('').not.toMatch(numericRegex);
      expect('1a').not.toMatch(numericRegex);
      expect('1-').not.toMatch(numericRegex);
      expect('-').not.toMatch(numericRegex);
    });
  });

  describe('alphaRegex', () => {
    it('it should validate these strings', () => {
      expect('a').toMatch(alphaRegex);
      expect('A').toMatch(alphaRegex);
      expect('aB').toMatch(alphaRegex);
      expect('AA').toMatch(alphaRegex);
      expect('camelCase').toMatch(alphaRegex);
      expect('kebab-case').toMatch(alphaRegex);
    });

    it('it should NOT validate these strings', () => {
      expect('1').not.toMatch(alphaRegex);
      expect('a1').not.toMatch(alphaRegex);
      expect('!@£$@%').not.toMatch(alphaRegex);
      expect('213123').not.toMatch(alphaRegex);
      expect('kebab.case').not.toMatch(alphaRegex);
      expect('kebabC.se').not.toMatch(alphaRegex);
    });
  });

  describe('alphaNumericRegex', () => {
    it('it should validate these strings', () => {
      expect('a').toMatch(alphaNumericRegex);
      expect('A').toMatch(alphaNumericRegex);
      expect('aB').toMatch(alphaNumericRegex);
      expect('AA').toMatch(alphaNumericRegex);
      expect('camelCase').toMatch(alphaNumericRegex);
      expect('AA11aa').toMatch(alphaNumericRegex);
      expect('123456').toMatch(alphaNumericRegex);
      expect('123abc123').toMatch(alphaNumericRegex);
    });

    it('it should NOT validate these strings', () => {
      expect('!@£$@%').not.toMatch(alphaNumericRegex);
      expect('kebab.case').not.toMatch(alphaNumericRegex);
      expect('kebabC.se').not.toMatch(alphaNumericRegex);
      expect('qwerty@').not.toMatch(alphaNumericRegex);
    });
  });

  describe('postcodeRegex', () => {
    it('it should validate these numbers', () => {
      expect('L4S 2T9').toMatch(postcodeRegex); // Richmond Hill, OT
      expect('K8N 5W6').toMatch(postcodeRegex); // Belleville, OT
      expect('A1A 1A1').toMatch(postcodeRegex); // St. John's, NF&L
      expect('X0B 1J0').toMatch(postcodeRegex); // Gjoa Haven, Nunavut
      expect('V0N 1A0').toMatch(postcodeRegex); // Alert Bay, Nunavut
      expect('Y0B 1C0').toMatch(postcodeRegex); // Y0B 1C0, Yukon
    });

    it('it should NOT validate these numbers', () => {
      expect('').not.toMatch(postcodeRegex);
      expect('!@£').not.toMatch(postcodeRegex);
      expect('T5A').not.toMatch(postcodeRegex);
      expect('L4S-2T9').not.toMatch(postcodeRegex);
      expect('14S 2T9').not.toMatch(postcodeRegex);
      expect('14S 2T9').not.toMatch(postcodeRegex);
      expect('MK21 5Q3').not.toMatch(postcodeRegex);
      expect('SW1').not.toMatch(postcodeRegex);
      expect('SW13').not.toMatch(postcodeRegex);
    });
  });

  describe('currencyRegex', () => {
    it('it should validate these currency values', () => {
      expect('0.1').toMatch(currencyRegex);
      expect('123').toMatch(currencyRegex);
      expect('12345').toMatch(currencyRegex);
      expect('1').toMatch(currencyRegex);
      expect('1.2').toMatch(currencyRegex);
      expect('0.2').toMatch(currencyRegex);
      expect('0.22').toMatch(currencyRegex);
    });

    it('it should NOT validate these currency values', () => {
      expect('1-234').not.toMatch(currencyRegex);
      expect('..2').not.toMatch(currencyRegex);
      expect('2,9').not.toMatch(currencyRegex);
      expect('0.123').not.toMatch(currencyRegex);
      expect('.5234').not.toMatch(currencyRegex);
      expect('1.234.0').not.toMatch(currencyRegex);
      expect('1.112').not.toMatch(currencyRegex);
      expect('1,000').not.toMatch(currencyRegex);
      expect('1,000,000').not.toMatch(currencyRegex);
      expect('45w4').not.toMatch(currencyRegex);
      expect('45w45').not.toMatch(currencyRegex);
    });
  });

  describe('emailRegex', () => {
    it('it should validate these file extension values', () => {
      expect('a@a.com').toMatch(emailRegex);
      expect('test@test.com').toMatch(emailRegex);
      expect('test@test.co.uk').toMatch(emailRegex);
      expect('123test@test.com').toMatch(emailRegex);
      expect('123_test@test_test.com').toMatch(emailRegex);
    });

    it('it should NOT validate these file extension values', () => {
      expect('test').not.toMatch(emailRegex);
      expect('test.com').not.toMatch(emailRegex);
      expect('test@').not.toMatch(emailRegex);
      expect('@test.com').not.toMatch(emailRegex);
    });
  });

  describe('lengthEquals3Regex', () => {
    it('it should validate these length values', () => {
      expect('qwe').toMatch(lengthEquals3Regex);
      expect('123').toMatch(lengthEquals3Regex);
    });

    it('it should NOT validate these length values', () => {
      expect('qw').not.toMatch(lengthEquals3Regex);
      expect('12').not.toMatch(lengthEquals3Regex);
      expect('qwerty').not.toMatch(lengthEquals3Regex);
      expect('123456').not.toMatch(lengthEquals3Regex);
    });
  });

  describe('lengthEquals4Regex', () => {
    it('it should validate these length values', () => {
      expect('qwer').toMatch(lengthEquals4Regex);
      expect('1234').toMatch(lengthEquals4Regex);
    });

    it('it should NOT validate these length values', () => {
      expect('qwe').not.toMatch(lengthEquals4Regex);
      expect('123').not.toMatch(lengthEquals4Regex);
      expect('qwerty').not.toMatch(lengthEquals4Regex);
      expect('123456').not.toMatch(lengthEquals4Regex);
    });
  });

  describe('length8to16Regex', () => {
    it('it should validate these length values', () => {
      expect('qwertyuiop').toMatch(length8to16Regex);
      expect('qwertyuiopasdfgh').toMatch(length8to16Regex);
    });

    it('it should NOT validate these length values', () => {
      expect('qwertyu').not.toMatch(length8to16Regex);
      expect('qwertyuiopasdfghj').not.toMatch(length8to16Regex);
    });
  });

  describe('length8to32Regex', () => {
    it('it should validate these length values', () => {
      expect('qwertyuiop').toMatch(length8to32Regex);
      expect('qwertyuiopasdfghjklzxcvbnmqwerty').toMatch(length8to32Regex);
    });

    it('it should NOT validate these length values', () => {
      expect('qwertyu').not.toMatch(length8to32Regex);
      expect('qwertyuiopasdfghjklzxcvbnmqwertyu').not.toMatch(length8to32Regex);
    });
  });

  describe('limitedSpecialCharsRegex', () => {
    it('it should validate these special characters', () => {
      expect('qwerty-qwerty').toMatch(limitedSpecialCharsRegex);
      expect('qwerty_qwerty').toMatch(limitedSpecialCharsRegex);
      expect('qwerty.qwerty').toMatch(limitedSpecialCharsRegex);
      expect('-qwerty').toMatch(limitedSpecialCharsRegex);
      expect('_qwerty').toMatch(limitedSpecialCharsRegex);
      expect('.qwerty').toMatch(limitedSpecialCharsRegex);
      expect('qwerty-').toMatch(limitedSpecialCharsRegex);
      expect('qwerty_').toMatch(limitedSpecialCharsRegex);
      expect('qwerty.').toMatch(limitedSpecialCharsRegex);
    });

    it('it should NOT validate these special characters', () => {
      expect('qwerty?qwerty').not.toMatch(limitedSpecialCharsRegex);
      expect('qwerty(qwerty)').not.toMatch(limitedSpecialCharsRegex);
      expect('qwerty&qwerty').not.toMatch(limitedSpecialCharsRegex);
      expect('qwerty$qwerty').not.toMatch(limitedSpecialCharsRegex);
      expect('qwerty£qwerty').not.toMatch(limitedSpecialCharsRegex);
      expect('qwerty@qwerty').not.toMatch(limitedSpecialCharsRegex);
      expect('qwerty!qwerty').not.toMatch(limitedSpecialCharsRegex);
      expect('?qwerty').not.toMatch(limitedSpecialCharsRegex);
      expect('(qwerty)').not.toMatch(limitedSpecialCharsRegex);
      expect('&qwerty').not.toMatch(limitedSpecialCharsRegex);
      expect('$qwerty').not.toMatch(limitedSpecialCharsRegex);
      expect('£qwerty').not.toMatch(limitedSpecialCharsRegex);
      expect('@qwerty').not.toMatch(limitedSpecialCharsRegex);
      expect('!qwerty').not.toMatch(limitedSpecialCharsRegex);
      expect('qwerty?').not.toMatch(limitedSpecialCharsRegex);
      expect('qwerty()').not.toMatch(limitedSpecialCharsRegex);
      expect('qwerty&').not.toMatch(limitedSpecialCharsRegex);
      expect('qwerty$').not.toMatch(limitedSpecialCharsRegex);
      expect('qwerty£').not.toMatch(limitedSpecialCharsRegex);
      expect('qwerty@').not.toMatch(limitedSpecialCharsRegex);
      expect('qwerty!').not.toMatch(limitedSpecialCharsRegex);
    });
  });

  describe('letterNumberRegex', () => {
    it('it should validate these values', () => {
      expect('qwerty1qwerty').toMatch(letterNumberRegex);
      expect('qwerty1').toMatch(letterNumberRegex);
      expect('1qwerty').toMatch(letterNumberRegex);
      expect('1Qwerty').toMatch(letterNumberRegex);
      expect('1QWERTY').toMatch(letterNumberRegex);
      expect('123456y').toMatch(letterNumberRegex);
    });

    it('it should NOT validate these values', () => {
      expect('qwerty').not.toMatch(letterNumberRegex);
      expect('qwertyqwerty').not.toMatch(letterNumberRegex);
      expect('123456').not.toMatch(letterNumberRegex);
      expect('123456!@£$%^').not.toMatch(letterNumberRegex);
      expect('!@£$%^qwerty').not.toMatch(letterNumberRegex);
    });
  });

  describe('repeatedSpecialCharsRegex', () => {
    it('it should validate these length values', () => {
      expect('qwerty--qwerty').toMatch(repeatedSpecialCharsRegex);
      expect('qwerty__qwerty').toMatch(repeatedSpecialCharsRegex);
      expect('qwerty..qwerty').toMatch(repeatedSpecialCharsRegex);
      expect('--qwerty').toMatch(repeatedSpecialCharsRegex);
      expect('__qwerty').toMatch(repeatedSpecialCharsRegex);
      expect('..qwerty').toMatch(repeatedSpecialCharsRegex);
      expect('qwerty--').toMatch(repeatedSpecialCharsRegex);
      expect('qwerty__').toMatch(repeatedSpecialCharsRegex);
      expect('qwerty..').toMatch(repeatedSpecialCharsRegex);
      expect('qwerty._').toMatch(repeatedSpecialCharsRegex);
      expect('qwerty./').toMatch(repeatedSpecialCharsRegex);
      expect('qwerty&&').toMatch(repeatedSpecialCharsRegex);
    });

    it('it should NOT validate these length values', () => {
      expect('qwerty-qwerty').not.toMatch(repeatedSpecialCharsRegex);
      expect('qwerty_qwerty').not.toMatch(repeatedSpecialCharsRegex);
      expect('qwerty.qwerty').not.toMatch(repeatedSpecialCharsRegex);
      expect('-qwerty').not.toMatch(repeatedSpecialCharsRegex);
      expect('_qwerty').not.toMatch(repeatedSpecialCharsRegex);
      expect('.qwerty').not.toMatch(repeatedSpecialCharsRegex);
      expect('qwerty-').not.toMatch(repeatedSpecialCharsRegex);
      expect('qwerty_').not.toMatch(repeatedSpecialCharsRegex);
      expect('qwerty.').not.toMatch(repeatedSpecialCharsRegex);
    });
  });

  describe('upperCaseCharRegex', () => {
    it('it should validate these values', () => {
      expect('Qwerty').toMatch(upperCaseCharRegex);
      expect('qwertY').toMatch(upperCaseCharRegex);
      expect('qwertY1234qwerty').toMatch(upperCaseCharRegex);
    });

    it('it should NOT validate these values', () => {
      expect('qwerty').not.toMatch(upperCaseCharRegex);
      expect('qwerty12345').not.toMatch(upperCaseCharRegex);
      expect('12345qwerty').not.toMatch(upperCaseCharRegex);
    });
  });

});

