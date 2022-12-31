import { AddressInfo } from "../profile-gen/types";

export interface FakeScamData {
  addressInfo: AddressInfo;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  userAgent: string;
  language: string;
  languages: string[];
}
