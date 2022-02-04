import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";

const Details = () =>{
    const [category, setCategory] = useState();
    return (
        <View style={styles.screen}>
            <Text style={styles.boldText}>Expense</Text>
            <Input 
            label="Category" 
            style={styles.inputField} 
            labelStyle={styles.input} 
            inputStyle={styles.input} 
            inputContainerStyle={{borderBottomColor: "#ffffff"}}
            containerStyle={styles.spacer}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
      backgroundColor: '#5B21B6',
      minHeight: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
    boldText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 25
    },
    input: {
        color: '#ffffff'
    },
    spacer: {
        marginTop: 5,
    }
});

export default Details