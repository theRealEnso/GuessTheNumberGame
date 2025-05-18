import { Stack } from 'expo-router';

// import provider from context
import { NumberProvider } from '../context/numberContext';

export default function RootLayout() {
  return (
    <NumberProvider>
      <Stack screenOptions={{
        contentStyle: { backgroundColor: "#25292e" },
      }}>
        <Stack.Screen name="index" options={{title: "Home", headerShown: false}} />
        <Stack.Screen name="gameScreen" options={{title: "Game Screen", headerShown: false}} />
        <Stack.Screen name="gameSummary" options={{title: "Game Summary", headerShown: false}} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </NumberProvider>
  );
}
