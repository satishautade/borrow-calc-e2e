  /** fromFinanceNumberToInteger
   * 
   * @param amountWithDollarSignAndSeparators: string 
   * @returns amount in number without currency and separators
   * 
   * Converts finance number like $607,000 to integer value 607000
   */
  export function fromFinanceNumberToInteger(amountWithCurrencySignAndSeparators: string ): number {
    let amountWithoutDollar = amountWithCurrencySignAndSeparators.substring(1);
    let intergerValue = parseInt(amountWithoutDollar.replace(',',''));
    console.log(`Converted ${amountWithCurrencySignAndSeparators} => ${intergerValue}`);
    return intergerValue;
  }