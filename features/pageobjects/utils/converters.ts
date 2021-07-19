  /**
   * Converts finance number like $607,000 to numeric value 607000
   * Can be extended to accommodate other currency formats like AUD607,000
   * @param {string} amountWithDollarSignAndSeparators finance number
   * @returns integer
   */
  export function fromFinanceNumberToNumber(amountWithCurrencySignAndSeparators: string ): number {
    let amountWithoutDollar = amountWithCurrencySignAndSeparators.substring(1);
    let numericValue = parseInt(amountWithoutDollar.replace(',',''));
    console.log(`Converted ${amountWithCurrencySignAndSeparators} => ${numericValue}`);
    return numericValue;
  }