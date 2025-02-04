import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Pressable,
} from "react-native";
import FormInput from "@/components/FormInput";
import { useState } from "react";
import { Link } from "expo-router";
import Button from "@/components/Button";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isPassword, setIsPassword] = useState(true);

  const handleForm = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <SafeAreaView className="w-full h-full bg-primary px-7 justify-center">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="my-10">
            <Image
              source={require("@/assets/images/logo.png")}
              className="w-[115px] h-[34px] self-center"
              resizeMode="contain"
            />
            <Text className="text-white text-2xl font-psemibold mt-10">
              Register
            </Text>
          </View>
          <View className="gap-5">
            <FormInput
              label="Username"
              placeholder="Your unique username"
              value={formData.username}
              onChangeText={(value) => handleForm("username", value)}
            />
            <FormInput
              label="Email"
              placeholder="Enter your email"
              value={formData.email}
              onChangeText={(value) => handleForm("email", value)}
            />
            <View className="relative">
              <FormInput
                label="Password"
                placeholder="Enter your password"
                value={formData.password}
                onChangeText={(value) => handleForm("password", value)}
                isPassword={isPassword}
              />
              {formData.password.length > 0 && (
                <Pressable
                  onPress={() => setIsPassword(!isPassword)}
                  hitSlop={15}
                  style={{ position: "absolute", right: 3, top: 40 }}
                >
                  <Image
                    source={
                      isPassword
                        ? require("@/assets/icons/eye.png")
                        : require("@/assets/icons/eye-hide.png")
                    }
                    className="h-7"
                    resizeMode="contain"
                  />
                </Pressable>
              )}
            </View>
            <Button
              title="Register"
              containerStyles="h-[50px] mt-7"
              handlePress={() =>
                alert(
                  "Email: " + formData.email + " Password: " + formData.password
                )
              }
            />
          </View>
          <Text className="text-gray-100 text-base font-pregular self-center mt-10">
            Already have an account?{" "}
            <Link href="/login" className="text-secondary font-psemibold">
              Login
            </Link>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
