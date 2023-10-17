// r komponen React Native View yang diperlukan untuk membuat pemisah
import { View } from "react-native";

// Functional Component with props
// mendeklarasikan komponen fungsional bernama Separator dengan properti props
const Separator = (props) => {
  // menampilkan pemisah dengan tinggi yang ditentukan oleh properti props.height
  return <View style={{ height: props.height }}></View>;
};

export default Separator;