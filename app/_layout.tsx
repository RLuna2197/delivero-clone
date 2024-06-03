import { Stack } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";

export default function RootLayout() {
  NativeWindStyleSheet.setOutput({
    default: 'native',
  });
  
  return (
    <Stack>
      <Stack.Screen name="index"/>
    </Stack>
  );
}
