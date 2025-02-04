import FormInput from "@/components/FormInput";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Button from "@/components/Button";
import FileInput from "@/components/FileInput";

export default function Create() {
  const [formData, setFormData] = useState({
    title: "",
    video: null,
    thumbnail: null,
    aiPrompt: "",
  });

  const handleForm = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <SafeAreaView className="bg-primary h-full w-full px-7">
      <View className="my-10">
        <Text className="text-white font-psemibold text-2xl">Upload Video</Text>
        <View className="mt-10 gap-7">
          <FormInput
            label="Video Title"
            placeholder="Give your video a catchy title..."
            value={formData.title}
            onChangeText={(value) => handleForm("title", value)}
          />
          <FileInput
            label="Upload Video"
            onFileSelected={(file) => handleForm("video", file)}
            typeFile="video/mp4"
            containerStyles="h-44"
          />
          <FileInput
            label="Thumbnail Image"
            onFileSelected={(file) => handleForm("thumbnail", file)}
            typeFile="image/jpeg"
            containerStyles="h-16"
          />

          <FormInput
            label="AI Prompt"
            placeholder="The AI prompt of your video..."
            value={formData.aiPrompt}
            onChangeText={(value) => handleForm("title", value)}
          />

          <Button
            title="Submit & Publish"
            handlePress={() => {
              alert(`Submitted:\n ${JSON.stringify(formData)}`);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
