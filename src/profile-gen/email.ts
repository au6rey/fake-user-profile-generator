import { uniqueNamesGenerator, Config } from "unique-names-generator";
import { getRandomInt, shuffleArr } from "../utils";
import { emailDomains } from "./repo";

class EmailGenerator {
  randDomains: string[];
  arr: string[];
  separators: string[];
  
  constructor() {
    this.randDomains = emailDomains;
    this.arr = shuffleArr(new Array(10).fill("1", 0, 3).fill("", 3, 10));
    this.separators = ["", ".", "", "-", "", ".", "" + getRandomInt(1, 69)];
  }
  
  private chooseEmailDomain = () => {
    return this.randDomains[getRandomInt(0, this.randDomains.length - 1)];
  };

  private shouldAddDigitToEmail = () => {
    return this.arr[getRandomInt(0, this.arr.length - 1)] === "";
  };

  generateEmail = (dictionaries: string[][]) => {
    const config: Config = {
      dictionaries,
      length: getRandomInt(1, 3),
      style: "lowerCase",
      separator: this.separators[getRandomInt(0, 3)],
    };
    const username: string = uniqueNamesGenerator(config);
    const digit = ["", getRandomInt(1, 9999)];
    return (
      username +
      (this.shouldAddDigitToEmail() ? digit : "") +
      "@" +
      this.chooseEmailDomain()
    ).replace(",", "");
  };
}

export const generateEmail = new EmailGenerator().generateEmail