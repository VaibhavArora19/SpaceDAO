import lighthouse from "@lighthouse-web3/sdk";

const progressCallback = (progress) => {
  let percentageDone = 100 - (progress?.total / progress?.uploaded)?.toFixed(2);

  console.log(percentageDone);
};

export const upload = async (file) => {
  const output = await lighthouse.upload(
    file,
    "e7ec952a-dbc8-41dc-91a3-ea8221ff1577",
    progressCallback
  );
  return "https://gateway.lighthouse.storage/ipfs/" + output.data.Hash;
};
