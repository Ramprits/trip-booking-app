import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";

const Home = () => {
  return (
    <View className='flex-1 mt-4 bg-white'>
      <View className='flex-1 mx-3'>
        <Image
          source={images.homeBanner}
          resizeMode='cover'
          style={{
            height: "100%",
            width: "100%",
            borderRadius: 15,
          }}
        />
      </View>
      <View className='flex-1 justify-center'></View>
    </View>
  );
};

export default Home;
