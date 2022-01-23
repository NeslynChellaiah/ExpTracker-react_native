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
                    <Text style={styles.listItemTextGrey}>{date}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    monthContainer: {
      backgroundColor: "#5B21B6",
      height: 179,
      width: "100%",
      borderRadius: 15,
      marginTop: 40,
      alignSelf: 'center'
    },
    screen: {
      backgroundColor: '#171717',
      height: "100%",
      width: "100%",
      display: "flex",
      paddingLeft: 20,
      paddingRight: 20
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
    listItemTextGrey: {
      fontSize: 14,
      color: "#bfbfbf"
    },
    listItemFlex1: {
      display: 'flex'
    },
    listItemFlex2: {
      display: 'flex',
      flexDirection: "row",
      justifyContent: 'space-between',
      marginTop: 10
    }
  });

export default MonthOverview;