import { VendorDetails, VendorName } from "./types";


export const VendorList = [
  "VISA",
  "MasterCard",
  "Amex",
  "Diners",
  "Discover",
  "EnRoute",
  "JCB",
  "Voyager",
] as const;


const visaPrefixList = new Array(
  "4539",
  "4556",
  "4916",
  "4532",
  "4929",
  "40240071",
  "4485",
  "4716",
  "4"
);
const mastercardPrefixList = new Array("51", "52", "53", "54", "55");
const amexPrefixList = new Array("34", "37");
const discoverPrefixList = new Array("6011");
const dinersPrefixList = new Array("300", "301", "302", "303", "36", "38");
const enRoutePrefixList = new Array("2014", "2149");
const jcbPrefixList = new Array("35");
const voyagerPrefixList = new Array("8699");

export const VendorDictionary: Map<VendorName, VendorDetails> = new Map();

VendorDictionary.set("VISA", {
  prefixList: visaPrefixList,
  digitCount: 16,
});
VendorDictionary.set("MasterCard", {
  prefixList: mastercardPrefixList,
  digitCount: 16,
});
VendorDictionary.set("Amex", {
  prefixList: amexPrefixList,
  digitCount: 15,
});
VendorDictionary.set("Diners", {
  prefixList: dinersPrefixList,
  digitCount: 16,
});
VendorDictionary.set("Discover", {
  prefixList: discoverPrefixList,
  digitCount: 16,
});
VendorDictionary.set("EnRoute", {
  prefixList: enRoutePrefixList,
  digitCount: 16,
});
VendorDictionary.set("JCB", {
  prefixList: jcbPrefixList,
  digitCount: 16,
});
VendorDictionary.set("Voyager", {
  prefixList: voyagerPrefixList,
  digitCount: 16,
});

