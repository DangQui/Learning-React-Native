import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.hearder, styles.marginBottom]} >Hello Word 1</Text> 
      <Text style={[styles.footer, styles.marginBottom]}>Hello Word 2</Text> 
      <Text style={styles.parent}>
        Hello Word 3 
        <Text style={styles.children}>- Hỏi Dân IT</Text></Text> 
      <StatusBar style="auto" />
    </View>
  );
}

// StyleSheet không phải là CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  hearder: {
    fontSize: 30,
    fontWeight: "bold", // Ngang "600"
    color: "green",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10
  },

  footer: {
    fontSize: 30,
    fontWeight: "bold", // Ngang "600"
    color: "blue",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10
  },

  // Không có fontWeight
  parent: {
    color: "red",
    fontSize: 30,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10
  },

  children: {
    color: "pink",
    fontSize: 25,
    fontWeight: "600", // Ngang "bold"
  },

  marginBottom: {
    marginBottom: 10
  }
});
