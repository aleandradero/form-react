import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import styles from "./styles";

type Props = TouchableOpacityProps &{
    label: String;
    onPress: () => void;
};

function Button({label, ...rest}:Props){
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>

    );

}
export default Button;