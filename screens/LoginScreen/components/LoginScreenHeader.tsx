import React from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function LoginScreenHeader() {
  return (
    <View className="w-full px-3 py-12 bg-slate-300">
      <SafeAreaView>
        <Text className="text-3xl font-bold">Login with OTP</Text>
      </SafeAreaView>
    </View>
  );
}
