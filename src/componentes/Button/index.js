import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function Button({ onPress,
    text,
    icon,
    disabled,
    isLoading,
    type }) {

    const buttonVar = {
        active: {
            button: {
                paddingHorizontal: 8,
                paddingVertical: 16,
                flexDirection: 'row'


            },
            icon: {
                color: "#fff"
            },
            text: {
                color: "#fff"
            }
        },
        inactive: {
            button: {
                paddingHorizontal: 8,
                paddingVertical: 16,
                flexDirection: 'row'
            },
            icon: {
                color: "#000"
            },
            text: {
                color: "#000"
            }
        }
    };
    const buttonStyle = disabled ? buttonVar.inactive : buttonVar.active;

    let selected = '';

    switch (type) {
        case "login":
            selected = styles.login;
            break;
        case "register":
            selected = styles.register;
            break;
            case "chose":
                selected = styles.chose;
                break;
                case "logininc":
                selected = styles.chose;
                break;
                case "genero":
                    selected = styles.genero;
                    break;
        default:
            selected = styles.secondary;
            break;
    }

    const buttonType = selected;
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled} style={[buttonType, buttonStyle.button]}>
            {isLoading == true ? (
                <ActivityIndicator color="#000" />
            ) : (
                <>
                    <AntDesign name={icon} size={20}style={buttonStyle.icon} />
                    <Text style={buttonStyle.text}>
                        {text}
                    </Text>
                 
                </>
            )}

        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    login: {
        backgroundColor: "#1e2f44",
        borderRadius: 12,
        margin: 8,
        justifyContent: "center",
        textAlign: "center"
    },
    register: {
        backgroundColor: '#1E2F44',       
        borderRadius: 12,
        margin: 4,
        justifyContent: "center",
        textAlign: "center"
    },
    chose:{
        backgroundColor: "#1e2f44",
        borderRadius: 12,
        margin: 4, 
        margin: 8,
        justifyContent: "center",
        textAlign: "center" 
    },
    logininc:{
        backgroundColor: "#1e2f44",
        borderRadius: 12,
        margin: 4,
        margin: 8,
        justifyContent: "center",
        textAlign: "center"
    },
    gereno:{
        backgroundColor: "#1e2f44",
        borderRadius: 12,
        margin: 4,
        margin: 8,
        justifyContent: "center",
        textAlign: "center"
    },

});