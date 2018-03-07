import React from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';






class Home extends React.Component{
    render(){
        return(
            <View >
                <Text>
                    Welcome
                </Text>
                <Button
                    title = 'Go to Detail'
                />
            </View>
        );
    }
}

export default Home;