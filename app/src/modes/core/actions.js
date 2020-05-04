//
export const a = '';

const FAKE_PROMISE = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ error: false }); // Yay! Everything went well!
  }, 3000);
});

export const fetchCoreDependencies = () => async (dispatch, getState) => {
  // const promises = [dispatch(fetchDictionary())];
  // // return Promise.all(promises);
  const fake = await FAKE_PROMISE();
  return fake;
};
