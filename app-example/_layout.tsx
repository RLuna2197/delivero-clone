import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { NativeWindStyleSheet } from 'nativewind';
import { Stack } from 'expo-router';
// Prevent the splash screen from auto-hiding before asset loading is complete.
//SplashScreen.preventAutoHideAsync();

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function RootLayout() {
  
  return (
      <Stack>
        <Stack.Screen name="HomeScreen"
        options={{
          title: 'Test'
        }}/>
      </Stack>
  );
}
