import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const MonthOverview = () => {
    const data = [
      {
        id: 1,
        category: 'food',
        amount: 120,
        date: '12/12/2021'
      }
    ]
    return (
    <View style={styles.screen}>
        <View style={styles.monthContainer}>
          <Text style={styles.boldText}>December 2021</Text>
          <Text style={styles.textGrey}>Total Expense</Text>
          <Text style={styles.boldText}>{(Math.random()*9000).toFixed(0)}</Text>
        </View>
        <Text style={styles.listLabel}>December 2021 Expenses:</Text>
        <ScrollView style={styles.scrollArea}>
          {data.map(({id, category, amount, date}) => {
            return (
              <TouchableOpacity style={styles.listItem} key={id}>
                <View style={styles.listItemFlex1}>
                  <View>
                    <Text style={styles.listItemTextWhite}>{category}</Text>
                  </View>
                  <View style={styles.listItemFlex2}>
                    <Text style={styles.listItemTextWhite}>{amount + '/-'}</Text>
                    <Text style={styles.textGrey}>{date}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
    </View>
    )
}

const purple = "#5B21B6";
const bgClr = '#171717';
const textStyle = 'Poppins';

const styles = StyleSheet.create({
    screen: {
      backgroundColor: bgClr,
      height: "100%",
      width: "100%",
      display: "flex",
      paddingLeft: 20,
      paddingRight: 20
    },
    monthContainer: {
      backgroundColor: purple,
      height: 179,
      width: "100%",
      borderRadius: 15,
      marginTop: 10,
      padding: 20,
      paddingTop: 30,
      alignSelf: 'center'
    },
    listLabel: {
      color: "#ffffff",
      marginTop: 20,
      marginBottom: 10,
      fontSize: 16
    },
    scrollArea: {
      height: "100%",
    },
    listItem: {
      backgroundColor: "rgba(220, 198, 255, 0.21)",
      marginBottom: 10,
      padding: 10,
      borderRadius: 5
    },
    listItemTextWhite: {
      color: '#ffffff',
      fontSize: 14
    },
    textGrey: {
      color: "#bfbfbf",
      fontSize: 14
    },
    listItemFlex1: {
      display: 'flex'
    },
    listItemFlex2: {
      display: 'flex',
      flexDirection: "row",
      justifyContent: 'space-between',
      marginTop: 10
    },
    boldText: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 24
    },
    button: {
      borderRadius: 20,
      width: 120,
      backgroundColor: purple,
      alignSelf: 'center',
      margin: 20
    },
    buttonLabel: {
      fontSize: 10,
    }
  });

export default MonthOverview;