import { VendorList } from "./repository";

export type VendorName = typeof VendorList[number];

export type VendorDetails = {
  prefixList: string[];
  digitCount: number;
};

export type CreditCardDetails = {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

export type CCConfig = { ccMaxYear: number; ccMinYear: number };
