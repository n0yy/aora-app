import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import Button from "@/components/Button";

export default function Index() {
  return (
    <>
      <SafeAreaView className="h-full items-center justify-center flex-1 bg-primary ">
        <View className="items-center mb-6">
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: 115, height: 34 }}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/images/cards.png")}
            style={{ width: 384, height: 298 }}
            resizeMode="contain"
          />
        </View>

        <View className="px-4">
          <View className="relative ">
            <Text className="text-white font-pbold text-4xl text-center font-bold">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary">Aora</Text>
            </Text>
            <Image
              source={require("../assets/images/path.png")}
              style={{ width: 64, height: 80 }}
              resizeMode="contain"
              className="absolute -bottom-10 right-2"
            />
          </View>

          <Text className="text-gray-100 font-pextralight text-lg text-center mt-3">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          {/* Button */}
          <View className="mt-4">
            <Button
              title="Continue with Email"
              handlePress={() => router.push("/login")}
              containerStyles="w-full"
            />
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}
