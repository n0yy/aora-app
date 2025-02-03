import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
    return (
        <SafeAreaView className="bg-primary">
            <Text className="text-white">Profile</Text>
        </SafeAreaView>
    )
}