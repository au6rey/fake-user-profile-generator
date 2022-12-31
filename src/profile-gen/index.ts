import { getRandomInt, shuffleArr } from "../utils";
import { adjectives, colors, animals } from "unique-names-generator";
import UserAgent from "user-agents";
import { FakeProfileData } from "./types";
import genCC from "../cc/index";
import { generateEmail } from "./email";

const RandomProfile = require("random-profile-generator");

class ProfileGenerator {
  private street2Options: string[];
  private wordDictionaries: string[][];
  private emailGeneratorFunc: (dictionaries: string[][]) => string;
  constructor() {
    this.street2Options = shuffleArr([
      ...new Array(9).fill(""),
      "Apt",
      "apt",
      "#",
      "APT",
    ]);
    this.wordDictionaries = [animals, colors, adjectives];
    this.emailGeneratorFunc = generateEmail;
  }

  private chooseStreet2 = () => {
    const pref =
      this.street2Options[getRandomInt(0, this.street2Options.length - 1)];
    return pref !== "" ? pref + " " + getRandomInt(1, 9999) : "";
  };

  getFakeData = () => {
    const USER_AGENT = new UserAgent().random();
    const profile = RandomProfile.profile();
    this.wordDictionaries.unshift([profile.firstName, profile.lastName]);
    const fakeData: FakeProfileData = {
      addressInfo: {
        city: ("" + profile.address).split(",")[1].trim().replace(".", ""),
        street: ("" + profile.address).split(",")[0].trim().replace(".", ""),
        email: this.emailGeneratorFunc(this.wordDictionaries),
        fullName: profile.fullName,
        phone: profile.phone.replace(/\D/g, ""),
        state: profile.state,
        street2: this.chooseStreet2(),
        zipCode: profile.zip,
      },
      creditCard: genCC()[0],
      language: "en-US", //TODO: Randomize
      languages: ["en-US", "en"],
      userAgent: USER_AGENT.toString(),
    };
    return fakeData;
  };
}

const profGenerator = new ProfileGenerator();
export const generateFakeProfile = profGenerator.getFakeData;
