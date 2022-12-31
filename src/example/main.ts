import fetch from "node-fetch";
import { generateFakeProfile } from "../profile-gen/index";
import { FakeScamData } from "./model";
// This file has scammer/phishing urls, headers
import { PROXY_URL } from "./scammer-details";
import asyncNode from "async";

const postFakeData = async (data: FakeScamData) => {
  try {
    const response = await fetch(PROXY_URL, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return response;
  } catch (error: any) {
    throw Error(error);
  }
};

(async () => {
  //Send over 100,000 fake user details in batches of 100!
  
  for (let i = 0; i < 1; ++i) {
    // Set up empty batch
    const batch: FakeScamData[] = [];

    //Fill batch with 1000 fa
    for (let j = 0; j < 1_0; j++) {
      const { creditCard, ...fakeData } = generateFakeProfile();
      const { addressInfo, language, languages, userAgent } = fakeData;
      
      batch.push({
        addressInfo,
        language,
        languages,
        userAgent,
        ...creditCard,
      });
    
    }

    const iterator = async (data: FakeScamData) => {
      //Send fake profile data to website
      console.log(data)
      const res = await postFakeData(data);
    };

    //Multithreaded post requests to phishing website
    //Sends a batch of 1000 records to server
    asyncNode.mapLimit(batch, batch.length, iterator, (err: any, results) => {
      if (err) throw Error(err);
    });

  }
})();
