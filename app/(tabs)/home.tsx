import { View, Text, Image, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Button from "@/components/Button";
import React from "react";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        console.log("Search query: ", query);
    }

    return (
        <SafeAreaView className="bg-primary w-full h-full px-7">
            <View className="mt-10 flex-row items-center justify-between">
                <View>
                    <Text className="text-gray-100 text-lg font-pregular">Welcome Back</Text>
                    <Text className="text-white text-2xl font-psemibold">Nang do san</Text>
                </View>
                <Image source={require("@/assets/images/logo-small.png")} className="w-[36px] h-[64px]" resizeMode="contain" />
            </View>
            {/* Search Bar */}
            <View className="mt-6 relative">
                <TextInput 
                    placeholder="Search for a video topic"
                    placeholderTextColor="#CDCDE0"
                    className="rounded-lg h-16 px-4 font-pregular"
                    style={{ 
                        backgroundColor: "#232533", 
                        color: "#fff", 
                        paddingVertical: 0, 
                        textAlignVertical: "center" 
                    }}
                    value={searchQuery}
                    onChangeText={handleSearch}
                    autoCapitalize="none"
                />
   
                {searchQuery.length > 0 && (
                    <> 
                    <Button 
                        title="Search Now"
                        handlePress={() => alert("Your search query is: \n" + searchQuery + ".")}
                        containerStyles="mt-5 h-7 w-1/2 self-center"
                    /> 
                    </>
                )}
            </View>

            {/* End Search Bar */}
        </SafeAreaView>
    )
}