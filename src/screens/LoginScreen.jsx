import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { View, TextInput } from "react-native";
import { Button, Text } from "react-native-paper";
import { auth } from "../config/Firebase";
import styles from "../utils/styles";

export default function LoginScreen() {
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");

  function handleLogin() {
    signInWithEmailAndPassword(auth, Email, Senha)
      .then((userCredential) => {
        console.log("Usuário logado com sucesso!");
      })
      .catch((error) => {
        console.log("Erro ao logar usuário!", error);

        const errorCode = error.code;

        if (errorCode === "auth/wrong-password") {
          alert("Senha incorreta!");
        }

        if (errorCode === "auth/user-not-found") {
          alert("Usuário não encontrado!");
        }
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {" "}
        <h1>Login</h1>
      </Text>

      <TextInput
        style={styles.input}
        label="Email"
        value={Email}
        onChangeText={setEmail}
        placeholder="Digite seu email..."
        multiline={false}
      />

      <TextInput
        style={styles.input}
        label="Senha"
        value={Senha}
        onChangeText={setSenha}
        placeholder="Digite sua Senha..."
        secureTextEntry={true}
        multiline={false}
      />

      <Button style={styles.button} mode="contained" onPress={handleLogin}>
        {" "}
        Entrar{" "}
      </Button>
    </View>
  );
}
