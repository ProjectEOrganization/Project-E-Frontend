import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { loadAsync } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await loadAsync({
          ...Ionicons.font,
          ...FontAwesome5.font,
          "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
          "Inter-Medium": require("../assets/fonts/Inter/Inter-Medium.ttf"),
          "Inter-Bold": require("../assets/fonts/Inter/Inter-Bold.ttf"),
          "Inter-Regular": require("../assets/fonts/Inter/Inter-Regular.ttf"),
          "Inter-SemiBold": require("../assets/fonts/Inter/Inter-SemiBold.ttf"),
          "Inter-ExtraBold": require("../assets/fonts/Inter/Inter-ExtraBold.ttf"),
          "Rubik-Medium": require("../assets/fonts/Rubik/Rubik-Medium.ttf"),
          "Rubik-Bold": require("../assets/fonts/Rubik/Rubik-Bold.ttf"),
          "Rubik-Regular": require("../assets/fonts/Rubik/Rubik-Regular.ttf"),
          "Rubik-ExtraBold": require("../assets/fonts/Rubik/Rubik-ExtraBold.ttf"),
          "Nunito-Bold": require("../assets/fonts/Nunito/Nunito-Bold.ttf"),
          "Nunito-ExtraBold": require("../assets/fonts/Nunito/Nunito-ExtraBold.ttf"),
        });
        console.log("your fonts loaded!");
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
