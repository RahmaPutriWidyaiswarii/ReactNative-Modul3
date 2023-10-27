// mengimpor komponen React dan React Native yang diperlukan untuk membuat aplikasi
import { useRef, useState } from "react";
import { NativeBaseProvider, Box } from 'native-base'
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
  const NavigationView = (props) => (
    <Box style={{ padding: 30, backgroundColor: '#222222', flex: 1 }}>
      <Button text="List" onPress={() => changePage(props.drawer, 'list')} />
      <Separator height={30} />
      <Button
        text="Article"
        onPress={() => changePage(props.drawer, 'article')}
      />
      <Separator height={30} />
      <Button text="Close" onPress={() => props.drawer.current.closeDrawer()} />
    </Box>
  );
  // render komponen aplikasi
  return (
    <NativeBaseProvider>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={() => <NavigationView drawer={drawer} />}>
        <Box style={{ paddingTop: 0 }}>
          <StatusBar style="auto" backgroundColor="#AA0002" />
          <Header drawer={drawer} />
          {page == 'list' && <List />}
          {page == 'article' && <Article />}
        </Box>
      </DrawerLayoutAndroid>
    </NativeBaseProvider>
  );
};
export default App;

