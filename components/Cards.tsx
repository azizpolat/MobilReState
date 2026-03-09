import icons from "@/app/constants/icons";
import images from "@/app/constants/images";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Models } from "react-native-appwrite";

interface Props {
  item: Models.Document;
  onPress: () => void;
}

export const FeaturedCard = ({
  item: { image, rating, address, name, price },
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative"
    >
      <Image
        source={{ uri: image }}
        className="size-full
       rounded-2xl"
      />
      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      />
      <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image source={icons.star} className="size-3.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
          {rating}
        </Text>
      </View>
      <View className="flex flex-col items-start absolute bottom-5 inset-x-5 ">
        <Text
          className="text-xl font-rubik-extrabold text-white "
          numberOfLines={1}
        >
          {name}
        </Text>
        <Text className="text-base font-rubik text-white">{address}</Text>
        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl font-rubik-extrabold text-white">
            ${price}
          </Text>
          <Image source={icons.heart} className="size-5" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({
  item: { image, rating, address, name, price },
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 rounded-2xl bg-white shadow-lg shadow-black-100/60 relative mr-4"
    >
      <Image
        source={{ uri: image }}
        className="w-full h-40 rounded-t-2xl"
        resizeMode="cover"
      />

      <View className="flex flex-row items-center absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full z-50">
        <Image source={icons.star} className="size-2.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
          {rating}
        </Text>
      </View>

      <View className="p-3">
        <Text
          className="text-base font-rubik-bold text-black-300"
          numberOfLines={1}
        >
          {name}
        </Text>

        <Text
          className="text-xs font-rubik text-black-200 mt-0.5"
          numberOfLines={1}
        >
          {address}
        </Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-rubik-bold text-primary-300">
            ${price}
          </Text>
          <Image source={icons.heart} className="w-5 h-5" tintColor="#191D31" />
        </View>
      </View>
    </TouchableOpacity>
  );
};
