import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, Pressable } from "react-native";
import FormInput from "@/components/FormInput";
import { useState } from "react";
import { Link } from "expo-router";
import Button from "@/components/Button";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [isPassword, setIsPassword] = useState(true);

    const handleForm = (key: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    return (
        <SafeAreaView className="w-full h-full bg-primary px-7 justify-center">
            <View className="my-10">
                <Image source={require("@/assets/images/logo.png")} className="w-[115px] h-[34px] self-center" resizeMode="contain" />
                <Text className="text-white text-2xl font-psemibold mt-10">Login</Text>
            </View>
            <View className="gap-5">
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
                                source={isPassword ? require("@/assets/icons/eye.png") : require("@/assets/icons/eye-hide.png")} 
                                className="h-7" 
                                resizeMode="contain" 
                            />
                        </Pressable>                    
                    )}
                </View>
                <Link href="/home" className="text-gray-100 text-base font-pregular self-end">
                    Forgot password
                </Link>
                <Button 
                    title="Login"
                    containerStyles="h-[50px]"
                    handlePress={() => alert("Email: " + formData.email + " Password: " + formData.password)}
                />
            </View>
            <Text className="text-center mt-5 text-gray-100 font-pregular">
                Don't have an account?{" "}
                <Link href="/register" className="text-secondary font-psemibold">
                    Register
                </Link>
            </Text>
        </SafeAreaView>
    )
}