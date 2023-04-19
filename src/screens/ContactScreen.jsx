import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";

export function ContactScreen({}) {
  return (
    <View>
      <Text style={styles.Text}>Sou a página de Contato</Text>

      <TextInput label="Email" />
      <TextInput label="Senha" />
    </View>
  );
}

export default ContactScreen;
