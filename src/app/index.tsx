import { StyleSheet, Text, View } from "react-native";
import Button from "./components/button";


function Index(){
    function handleSubmit(){
        const name ="Alexandra";
        alert(`Olá, ${name}` );

    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Hello, world</Text>
            <Button label={"Enviar"} onPress={handleSubmit}/>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "blue",
        fontSize: 26,
        fontWeight:"bold",
    },
    container:{
        flex: 1,
        padding: 32,
        justifyContent: "center",
    },
});
export default Index;