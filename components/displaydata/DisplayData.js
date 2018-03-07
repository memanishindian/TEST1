import React from 'react';
import {Text} from 'react-native';
import {
    Container,
    Header, 
    Card, 
    CardItem, 
    Content,
    Icon,
    List, 
    Left, 
    Right, 
    Body, 
    Item,
    Input,
    Button,
} from 'native-base';



import SearchHeader from './display_data_component/SearchHeader';
import AvatarList from './display_data_component/AvatarList';

class DisplayData extends React.Component{
    render(){
        return(
            <Container>
                <SearchHeader/>
                <AvatarList/>
            </Container>
        );
    }
}



export default DisplayData;