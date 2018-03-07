import React from 'react';
import { Text } from 'react-native';
import {
    Card,
    Header,
    Item,
    Icon,
    Input,
    Button,
    
} from 'native-base';


class SearchHeader extends React.Component{
    render(){
        return(
                <Header searchBar rounded>
                        <Item>
                            <Icon name='ios-search'/>
                            <Input placeholder='search'/>
                            <Icon name='people'/>
                        </Item>  
                </Header>  
        );
    }
}


export default SearchHeader;