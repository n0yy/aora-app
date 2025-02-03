import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

type Props = {
    title: string;
    handlePress: () => void;
    containerStyles?: string;
    textStyles?: string;
    isLoading?: boolean;
}

export default function Button({ title, handlePress, containerStyles, textStyles, isLoading }: Props) {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-secondary rounded-xl min-h-[54px] flex flex-row justify-center items-center ${containerStyles} ${isLoading && "opacity-50"}`}
            disabled={isLoading}
        >
            <Text className={`text-primary font-psemibold ${textStyles} text`}>{title}</Text>
            {isLoading && (
                <ActivityIndicator 
                    animating={isLoading}
                    color="#fff"
                    size="small"
                    className="ml-2"
                />
            )}
        </TouchableOpacity>
    )
}