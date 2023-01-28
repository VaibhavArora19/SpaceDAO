import lighthouse from "@lighthouse-web3/sdk";

const progressCallback = (progress) => {
    let percentageDone = 100 - (progress?.total/progress?.uploaded)?.toFixed(2);

    console.log(percentageDone);
};

export const upload = async (file) => {
    const output = await lighthouse.upload(file, "API_KEY", progressCallback);

    console.log('File status: ', output);
};

