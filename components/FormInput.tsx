import { Text, TextInput, View } from "react-native";
import { useState } from "react";

type Props = {
    label: string,
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void
    isPassword?: boolean,
}

export default function FormInput({ label, placeholder, value, onChangeText, isPassword }: Props) {
    const [isFocused, setIsFocused] = useState(false);
    
    return (
        <View>
            <Text className="text-gray-50 font-pregular">{label}</Text>
                <TextInput 
                    placeholder={placeholder}
                    placeholderTextColor="#CDCDE0"
                    className={`rounded-lg h-16 px-4 bg-[#232533] ${isFocused && "border-2 border-secondary"} font-pregular`}
                    style={{ 
                        backgroundColor: "#232533", 
                        color: "#fff", 
                        paddingVertical: 0, 
                        textAlignVertical: "center" 
                    }}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={isPassword}
                    autoCapitalize="none"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
        </View>
    )
}