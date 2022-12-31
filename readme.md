# Fake-Profile Generator

Work in progress. This generates fake **believable** random user profiles. It also generates random valid credit card numbers! Unlike other modules. Refer to example under **src/example** for potential use-case.


## Running Instructions
- NodeJS and Typescript must be installed
	> cd /fake-profile-generator
	
	> npm i


## Example Output
> npm run simulate

Output:
```
{
  addressInfo: {
    city: 'Valley Stream',
    street: '9587 South Airport Circle',
    email: 'yolanda7954@gmail.com',
    fullName: 'Yolanda Nunez',
    phone: '5732469450',
    state: 'NY',
    street2: '',
    zipCode: '11580'
  },
  language: 'en-US',
  languages: [ 'en-US', 'en' ],
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36', 
  expiryDate: '04/25',
  cvv: '036',
  cardNumber: '379789043163477'
}
{
  addressInfo: {
    city: 'East Meadow',
    street: '7430 Gartner Ave',
    email: 'sullivan.yolanda1302@zoho.com',
    fullName: 'Naomi Sullivan',
    phone: '8018031554',
    state: 'NY',
    street2: '',
    zipCode: '11554'
  },
  language: 'en-US',
  languages: [ 'en-US', 'en' ],
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
  expiryDate: '02/26',
  cvv: '184',
  cardNumber: '4024007167255511'
}
{
  addressInfo: {
    city: 'Glasgow',
    street: '675 Young Dr',
    email: 'irishsullivan4556@gmail.com',
    fullName: 'Alita Irish',
    phone: '3832909261',
    state: 'KY',
    street: '9139 Park Lane',
    email: 'celsa-alita@verizon.net',
    fullName: 'Celsa Potts',
    phone: '7567354136',
    state: 'FL',
    street2: 'APT 6776',
    zipCode: '33056'
  },
  language: 'en-US',
  languages: [ 'en-US', 'en' ],
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36', 
  expiryDate: '04/24',
  cvv: '000',
  cardNumber: '4539403651069914'
}
```