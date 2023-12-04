import { Text } from 'react-native';
import styles from './styles';

export default function Label({
        type,
        size,
        text,
        color
}){
    let style = '';
    
    switch(type){
        case 'display':{
            
            if(size == 'large'){
                style = styles.display.large;
            }else if(size == 'medium'){
                style = styles.display.medium;
            }else {
                style = styles.display.small;
            }
            break;
        }
    }
    
    const selected = style;

    return(
        <Text style={selected}>
            {text}
        </Text>
    );
}