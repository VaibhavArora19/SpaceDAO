export const accountShortner = (currentAccount) => {
  return `${currentAccount.slice(0, 6)}........${currentAccount.slice(
    currentAccount.length - 5
  )}`;
};
