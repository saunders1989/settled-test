import { formatNumber, formatNumberFixed } from '../../utils/format-numbers';

/** @test {FormatNumbers} */
describe('FormatNumbers', () => {

  it('should format a number with the currency symbol', () => {
    const number = '680000';

    const formattedNumber = formatNumber(number);

    expect(formattedNumber).toEqual('$680,000');
  });
});

/** @test {FormatNumbersFixed} */
describe('FormatNumbersFixed', () => {

  it('should format a number with the currency symbol to two decimal places', () => {
    const number = '680000';

    const formattedNumber = formatNumberFixed(number);

    expect(formattedNumber).toEqual('$680,000.00');
  });
});
