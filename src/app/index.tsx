import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import Button from "./components/button";
import Input from "./components/button/input";


function Index(){
    const [name, setName] = useState<string>(""); // Tipo explititamente declarado
    const [name1, setName1] = useState(""); // Inferindo a tipagem 

    function handleSubmit(){
        const name ="Alexandra";
        alert(`Olá, ${name}` );

    }

function onChangeText(text: string){
    console.log(text);
    setName(text); 
}
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Olá, {name}</Text>
            <Input label="Nome" onChangeText={(text) => onChangeText(text)} />
            <Input label="Idade"/>
            <Button label={"Enviar"} onPress={handleSubmit} activeOpacity={1 }/>
            <Button label={"Continuar"} onPress={handleSubmit}/>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "#0000CD",
        fontSize: 26,
        fontWeight:"bold",
    },
    container:{
        flex: 1,
        padding: 32,
        justifyContent: "center",
        gap: 12,
        backgroundColor: "rgb(112, 157, 241)"
    },
});
export default Index;