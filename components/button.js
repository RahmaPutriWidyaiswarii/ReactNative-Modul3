// mengimpor komponen React Native yang diperlukan untuk membuat tombol
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// Functional Component with props
// mendeklarasikan komponen fungsional dengan props
const Button = (props) => {
  // menampilkan tombol yang terdiri dari teks dan fungsionalitas klik
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

// Styles
// mendefinisikan style untuk tombol
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dddddd",
    padding: 15,
    alignItems: "center",
    borderRadius: 30,
  },
  text: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default Button;
