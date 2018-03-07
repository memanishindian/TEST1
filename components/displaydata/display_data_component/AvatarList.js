import React from 'react';
import { Text, TouchableOpacity, Alert, Button } from 'react-native';
import {
    Content,
    List,
    ListItem,
    Icon,
    Thumbnail,
    Left,
    Container,
} from 'native-base';


import Members from '../../../assets/Members.json'; 








class AvatarList extends React.Component{
    _message(name, contact){
        Alert.alert(contact+name+'   CLicked');
    }
    render(){
        return(
                <List dataArray={Members.members}
                        renderRow={(item, index)=>
                            <ListItem>
                                
                                <Text> {item.name}</Text>
                    
                            </ListItem>
                      }
                      />
              
        );
    }
}

export default AvatarList;