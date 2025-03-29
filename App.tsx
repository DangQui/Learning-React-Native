import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
 
  /*
  // Định nghĩa biến name, không nên ép type
  const [name, setName] = useState("");
  // Định nghĩa Object
  const [test, setTest] = useState({
    name: "HoiDanIT",
    age: 21
  });
  */

  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 60, fontWeight: "bold"}}>
        count: {count}
      </Text>

      {/* Bọc button trong view để tạo style cho nút */}
      <Text style={{borderRadius: 10, marginTop: 20, overflow: "hidden"}}>
        {/* Mỗi lần chạm vào nút button cout sẽ tăng nên 1 */}
        <Button 
        color={"green"}
        title="Increment" onPress ={() => setCount(count + 1)}/>
      </Text>
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
  },
});
