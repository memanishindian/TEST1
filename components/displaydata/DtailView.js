import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { 
    Container,
    Header, 
    Content, 
    Card, 
    CardItem,
    Item,
    Thumbnail,
    Left,
    Icon,
    Body,
    Button 
} from 'native-base';


class DetailView extends React.Component{
    render(){
        return(
            <Container>
                <Header><Text>View Avatar</Text></Header>
                <Content>
                    <Card style={{flex: 1}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../assets/test/images/amir.jpg')} />
                                    <Body>
                                        <Text>NativeBase</Text>
                                        <Text note>April 15, 2016</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Image source={require('../../assets/test/images/amir.jpg')} style={styles.image}/>
                                        <Text>
                                        //Your text here
                                        </Text>
                                    </Body>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent textStyle={{color: '#87838B'}}>
                                        <Icon name="logo-github" />
                                        <Text>1,926 stars</Text>
                                    </Button>
                                </Left>
                            </CardItem>
                    </Card>
                </Content>
           </Container>
        );
    }
}





const styles = StyleSheet.create({
    container:{

    },
    imageContainer:{

    },
    image:{
        height : 200,
        width : 400,
        sizeMode: 'stretch'

    },
    detailFields:{

    },
});






export default DetailView;
