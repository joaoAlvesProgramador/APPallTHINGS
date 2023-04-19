import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { View, TextInput } from "react-native";
import { Button, Text } from "react-native-paper";
import { auth } from "../config/Firebase";

import styles from "../utils/styles";

export default function CadastrarScreen() {
  const [Nome, setNome] = useState("");
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");

  function handleRegister() {
    createUserWithEmailAndPassword(auth, Email, Senha)
      .then((userCredential) => {
        console.log("Usuário cadastrado com sucesso!");
      })
      .catch((error) => {
        console.log("Erro ao cadastrar usuário!", error);

        const errorCode = error.code;

        if (errorCode === "auth/weak-password") {
          alert("A senha deve ter no mínimo 6 caracteres!");
        }

        if (errorCode === "auth/email-already-in-use") {
          alert("E-mail já cadastrado!");
        }
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <h1>Cadastrar </h1>
      </Text>

      <TextInput
        style={styles.input}
        label="Nome"
        placeholder="Digite seu nome..."
        value={Nome}
        multiline={false}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        label="E-mail"
        placeholder="Digite seu e-mail..."
        multiline={false}
        value={Email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        label="Senha"
        placeholder="Digite sua Senha..."
        secureTextEntry={true}
        multiline={false}
        value={Senha}
        onChangeText={setSenha}
      />

      <Button style={styles.button} mode="contained" onPress={handleRegister}>
        Cadastrar-se
      </Button>
    </View>
  );
}
