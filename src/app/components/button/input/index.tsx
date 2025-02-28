import { TextInput, TextInputProps } from "react-native";
import styles from "./styles";


function Input({...rest}:TextInputProps){
    return <TextInput style={styles.Input} {...rest}/>;

}

export default Input;