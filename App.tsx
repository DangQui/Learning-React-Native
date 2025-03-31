import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

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
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 60, fontWeight: "bold"}}>Name: {name}</Text>
        <TextInput 
          multiline // Thuộc tinh co giãn đảm bảo hiển thị hết các kí tự trong ô Input.
          placeholder="Nhập một thứ gì đó vào Input này" // "Người giữ chỗ", gợi ý cho người dùng cần nhập gì vào Input.
          autoCapitalize={"characters"} // Thay đổi font chữ viết hoa, viết thường
          // value= "" // Là thuộc tính giá trị hiện tại của text Input.
          onChangeText={(value) => setName(value)} // Hàm callBack được gọi khi thuộc tính trong Input thay đổi
          style={styles.textInputStyle}
        />
      </View>

      <View>
        <Text style={{fontSize: 60, fontWeight: "bold"}}>Age: {age}</Text>
        <TextInput 
          multiline // Thuộc tinh co giãn đảm bảo hiển thị hết các kí tự trong ô Input.
          placeholder="Nhập một thứ gì đó vào Input này" // "Người giữ chỗ", gợi ý cho người dùng cần nhập gì vào Input.
          autoCapitalize={"characters"} // Thay đổi font chữ viết hoa, viết thường
          // value= "" // Là thuộc tính giá trị hiện tại của text Input.
          onChangeText={(value) => setAge(+value)} // Hàm callBack được gọi khi thuộc tính trong Input thay đổi
          style={styles.textInputStyle}
        />
      </View>

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

  textInputStyle: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "back",
    borderRadius: 20,
    padding: 20
  },
});
