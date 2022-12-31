export interface FakeProfileData {
  addressInfo: AddressInfo;
  creditCard: CreditCardDetails
  userAgent: string;
  language: string;
  languages: string[];
}

export interface AddressInfo {
  email: string;
  street: string;
  street2: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  fullName: string;
}

export interface CreditCardDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}
