import { getRandomInt } from "../utils";
import { VendorDictionary, VendorList } from "./repository";
import { CCConfig, CreditCardDetails, VendorName } from "./types";

class CCGenerator {
  private pseudoRandom = Math.random;
  private readonly ccVendors;
  constructor() {
    this.ccVendors = VendorList;
  }
  private strrev = (str: string) => {
    if (!str) return "";
    let revstr = "";
    for (let i = str.length - 1; i >= 0; i--) revstr += str.charAt(i);
    return revstr;
  };

  private completedNumber = (prefix: string, length: number) => {
    let ccnumber = prefix;

    // generate digits
    while (ccnumber.length < length - 1) {
      ccnumber += Math.floor(this.pseudoRandom() * 10);
    }

    // reverse number and convert to int
    const reversedCCnumberString = this.strrev(ccnumber);
    const reversedCCnumber = new Array();
    for (let i = 0; i < reversedCCnumberString.length; i++) {
      reversedCCnumber[i] = parseInt(reversedCCnumberString.charAt(i));
    }

    // calculate sum
    let sum = 0;
    let pos = 0;

    while (pos < length - 1) {
      let odd = reversedCCnumber[pos] * 2;
      if (odd > 9) {
        odd -= 9;
      }

      sum += odd;

      if (pos != length - 2) {
        sum += reversedCCnumber[pos + 1];
      }
      pos += 2;
    }

    // calculate check digit
    const checkdigit = ((Math.floor(sum / 10) + 1) * 10 - sum) % 10;
    ccnumber += checkdigit;
    return ccnumber;
  };

  private creditCardNumber = (options: {
    prefixList: string[];
    digitCount: number;
    howMany: number;
    config?: CCConfig;
  }) => {
    const { howMany, prefixList, config, digitCount } = options;
    const result: CreditCardDetails[] = new Array();
    for (let i = 0; i < howMany; i++) {
      const randomArrayIndex = Math.floor(
        this.pseudoRandom() * prefixList.length
      );
      const ccnumber = prefixList[randomArrayIndex];
      const date = new Date();
      let expiryMM = ("0" + getRandomInt(1, 12)).slice(-2);
      let expiryYY = "";
      if (!config) {
        const ccMinYear = parseInt(
          (date.getFullYear() + 1).toString().slice(-2)
        );
        const ccMaxYear = parseInt(
          (date.getFullYear() + 5).toString().slice(-2)
        );
        expiryYY = ("0" + getRandomInt(ccMinYear, ccMaxYear)).slice(-2);
      } else {
        expiryYY = (
          "0" + getRandomInt(config.ccMinYear, config.ccMaxYear)
        ).slice(-2);
      }
      const expiryDate = expiryMM + "/" + expiryYY;
      const cardNumber = this.completedNumber(ccnumber, digitCount);
      const cvv = `${("000" + getRandomInt(0, 999)).slice(-3)}`;
      result.push({
        expiryDate,
        cvv,
        cardNumber,
      });
    }
    return result;
  };

  private randomCreditCardScheme = () => {
    const index = getRandomInt(0, this.ccVendors.length - 1);
    const randomVendor: VendorName = this.ccVendors[index];
    return VendorDictionary.get(randomVendor)!;
  };

  generateCC = (
    cardScheme?: VendorName,
    howMany?: number,
    config?: { ccMaxYear: number; ccMinYear: number },
    randomGen?: () => number
  ) => {
    this.pseudoRandom = randomGen || this.pseudoRandom;
    howMany = howMany || 1;
    if (!cardScheme) {
      const { digitCount, prefixList } = this.randomCreditCardScheme();
      return this.creditCardNumber({
        howMany,
        prefixList,
        digitCount,
      });
    }
    const ccDetails = VendorDictionary.get(cardScheme);
    if (!ccDetails) {
      throw Error("Invalid Credit Card Vendor!");
    }
    const { prefixList, digitCount } = ccDetails;
    return this.creditCardNumber({
      digitCount,
      howMany,
      prefixList,
      config,
    });
  };
}

export default new CCGenerator().generateCC;
