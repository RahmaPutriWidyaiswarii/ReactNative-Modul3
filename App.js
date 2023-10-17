// mengimpor komponen React dan React Native yang diperlukan untuk membuat aplikasi
import { useRef, useState } from "react";
import { View, DrawerLayoutAndroid, StatusBar } from "react-native";
//  mengimpor komponen kustom yang akan digunakan dalam aplikasi
import Header from "./components/header";
import Button from "./components/button";
import Separator from "./components/separator";
import List from "./screens/list";
import Article from "./screens/article";

// Functional Component
const App = () => {
  // State Declaration
  // Inisialisasi status halaman ke "list"
  const [page, setPage] = useState("list");
  // Ref Declaration
  // mendeklarasikan ref untuk menyimpan instance drawer
  const drawer = useRef(null);

  // Arrow Function inside Functional Component
  // digunakan untuk mengubah halaman saat ini
  const changePage = (drawer, pageName) => {
    // Close Drawer
    drawer.current.closeDrawer();
    // Change state value

    setPage(pageName);
  };

  // Arrow Function inside Functional Component
  // digunakan untuk render navigation view
  const navigationView = () => (
    <View style={{ padding: 30, backgroundColor: "#222222", flex: 1 }}>
      <Button text="List" onPress={() => changePage(drawer, "list")} />
      <Separator height={30} />
      <Button text="Article" onPress={() => changePage(drawer, "article")} />
      <Separator height={30} />
      <Button text="Close" onPress={() => drawer.current.closeDrawer()} />
    </View>
  );

  // render komponen aplikasi
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <StatusBar style="light" backgroundColor="#AA0002" />
      <View>
        <Header drawer={drawer} />
        {page == "list" ? <List /> : page == "article" ? <Article /> : null}
      </View>
    </DrawerLayoutAndroid>
  );
};

export default App;
