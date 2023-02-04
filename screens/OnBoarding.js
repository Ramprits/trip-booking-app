import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { images, SIZES, COLORS } from "../constants";

const OnBoarding = ({ navigation }) => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 items-center justify-center bg-white'>
        <Image
          source={images.onboardingImage}
          resizeMode='contain'
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <View className='flex-1 items-center justify-center'>
        <View style={{ alignItems: "center", marginHorizontal: SIZES.padding }}>
          <Text className='text-[22px] leading-8'>Digital Ticket</Text>
          <Text
            style={{
              color: COLORS.gray,
              marginTop: SIZES.padding,
              textAlign: "center",
            }}
          >
            Easy solution to buy tickets for your travel, business trips,
            transportation, lodging and culinary.
          </Text>
        </View>

        <TouchableOpacity
          style={{
            marginTop: SIZES.padding * 2,
            width: "70%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          className='bg-blue-400 rounded-lg'
          onPress={() => navigation.navigate("Home")}
        >
          <Text className='text-white font-bold'>Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
