import React from "react";
import { Text,StyleSheet,View } from "react-native";

export default class CreatePost extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.text}>Create Post Screen</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        flex:1,
        justifyContent:'center',
        fontSize:20,
    }
})