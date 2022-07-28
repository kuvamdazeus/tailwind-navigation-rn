import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LoginScreenHeader from "./components/LoginScreenHeader";

export default function LoginScreen() {
  const [phone, setPhone] = useState("");

  return (
    <View className="">
      <StatusBar />
      <LoginScreenHeader />

      <KeyboardAvoidingView behavior="position">
        <View className="px-5 pt-20">
          <TextInput
            keyboardType="number-pad"
            className="text-xl p-2 mb-10 border"
            onChangeText={(text) => setPhone(text)}
            returnKeyType="done"
          />

          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <View className="border">
              <Text className="text-center">Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
