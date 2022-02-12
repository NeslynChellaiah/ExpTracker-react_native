import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input } from "react-native-elements";

const Details = () =>{
    return (
        <View style={styles.screen}>
            <Text style={styles.boldText}>Expense</Text>
            <Input 
            label="Category" 
            style={styles.inputField} 
            labelStyle={styles.label} 
            inputStyle={styles.input} 
            inputContainerStyle={{borderBottomColor: "#ffffff"}}/>
            <Input 
            label="Amount" 
            style={styles.inputField} 
            labelStyle={styles.label} 
            inputStyle={styles.input} 
            inputContainerStyle={{borderBottomColor: "#ffffff"}}/>
            <Input 
            multiline
            label="Description" 
            style={styles.inputField} 
            labelStyle={styles.label} 
            inputStyle={styles.input} 
            inputContainerStyle={{borderBottomColor: "#ffffff"}}/>
            
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
        color: '#ffffff',
        fontSize: 14
    },
    label: {
        color: '#bfbfbf',
        fontSize: 12
    }
});

export default Details