import { getStore } from "./index";
export const getUser = () => getStore("user");
export const signedIn = () => {
  getUser()
    .then((res) => {
      if (res) {
        return res;
      } else {
        return false;
      }
    })
    .catch(() => {
      return false;
    });
  return false;
};
