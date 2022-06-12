import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "@rneui/themed";
import { signedIn } from "../../api/user";

const Home = () => {
  useEffect(() => {
    if (!signedIn()) {
      console.log("not signed in");
    }
  });

  return (
    <View style={style.container}>
      <Avatar
        activeOpacity={0.2}
        avatarStyle={{}}
        containerStyle={{ backgroundColor: "#BDBDBD" }}
        icon={{}}
        iconStyle={{}}
        imageProps={{}}
        onLongPress={() => alert("onLongPress")}
        onPress={() => alert("onPress")}
        overlayContainerStyle={{}}
        placeholderStyle={{}}
        rounded
        size="large"
        source={{
          uri: "https://avatars.githubusercontent.com/u/41723241?s=400&u=1c97091fbde2af4fc8c1345c62339b4ff77b3282&v=4",
        }}
        title="Q"
        titleStyle={{}}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});

export default Home;
