import { Tabs } from "expo-router";
import { icons } from "../../constants";
import { View, Image, Text } from "react-native";

const TabIcon = ({ icon, color, focused, name }: any) => {
    return (
        <View className="items-center w-20 gap-1.5 justify-center">
            <Image source={icon} className="w-6 h-6" resizeMode="contain" tintColor={color} />
            <Text
                className={`${focused ? "font-psemibold" : "font-pregular"} text-xs ml-0`}
                style={{ color }}
            >
                {name}
            </Text>
        </View>
    )
}

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#FFA001",
                tabBarInactiveTintColor: "#CDCDE0",
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#161622",
                    height: 64,
                    borderTopWidth: 0,
                    paddingTop: 12
                }
            }}
        >
            <Tabs.Screen 
                name="home"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.home}
                            color={color}
                            focused={focused}
                            name="Home"
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.profile}
                            color={color}
                            focused={focused}
                            name="Profile"
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="create"
                options={{
                    title: "Create",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.plus}
                            color={color}
                            focused={focused}
                            name="Create"
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="saved"
                options={{
                    title: "Saved",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.bookmark}
                            color={color}
                            focused={focused}
                            name="Saved"
                        />
                    )
                }}
            />
            
        </Tabs>
    )
}