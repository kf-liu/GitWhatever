import AsyncStorage from "@react-native-async-storage/async-storage";

export const getStore = async (storage_Key: string) => {
  try {
    const value = await AsyncStorage.getItem(storage_Key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log("getStore err: ", e);
  }
};
