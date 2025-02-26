import { StyleSheet, Text, View } from "react-native";


function Index(){
    return(
        <View>
            <Text style={{}}>Hello world</Text>
        </View>
    );
}

const style = StyleSheet.create({
    text: {
        color: "red",
        fontSize: 26,
        fontWeight:"bold"
    },
    container:{
        flex: 1,
        padding: 32,
        justifyContent: "center",
    },
});
export default Index;