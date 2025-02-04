import { View, Text, TouchableOpacity, Image } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";

interface FileInputProps {
  label: string;
  onFileSelected: (file: any) => void;
  typeFile: string;
  containerStyles?: string;
  icon?: string;
}

export default function FileInput({
  label,
  onFileSelected,
  typeFile,
  containerStyles,
}: FileInputProps) {
  const [fileName, setFileName] = useState<string | null>(null);

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: typeFile,
      });

      if (result.canceled) return;

      setFileName(result.assets[0].name);
      onFileSelected(result.assets[0]);
    } catch (error) {
      console.error("File selection error: ", error);
    }
  };

  return (
    <View className="gap-2">
      <Text className="text-gray-50 font-pregular">{label}</Text>
      <TouchableOpacity
        onPress={pickFile}
        className={`bg-[#232533] rounded-lg px-4 flex flex-row justify-center items-center ${containerStyles}`}
      >
        <Text className="text-gray-50 font-pregular">
          {fileName || (
            <Image
              source={require("@/assets/icons/upload.png")}
              className="w-7 h-7"
            />
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
