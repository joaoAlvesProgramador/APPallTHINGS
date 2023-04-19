import { ActivityIndicator, Text } from "react-native-paper";
import { View } from "react-native";
import styles from "../utils/styles";

export default function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate("TabsNavigation");
  }, 500);

  return (
    <View style={styles.container}>
      <ActivityIndicator color="#F28705" />
      <Text style={styles.text}>
        <h1>Aguarde um instante...</h1>
      </Text>
    </View>
  );
}
