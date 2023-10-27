// // // kode program tanpa modal
// // // mengimpor komponen React Native yang diperlukan untuk membuat daftar
// // import {
// //   FlatList,
// //   Image,
// //   Text,
// //   TouchableOpacity,
// //   View,
// //   StyleSheet,
// // } from "react-native";

// // // Dummmy Data (Array of Object)
// // // mendefinisikan data dummy berupa array of object yang akan digunakan untuk mengisi daftar
// // const datas = [
// //   {
// //     id: 1,
// //     title:
// //       "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
// //     image:
// //       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
// //   },
// //   {
// //     id: 2,
// //     title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
// //     image:
// //       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
// //   },
// //   {
// //     id: 3,
// //     title:
// //       "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
// //     image:
// //       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
// //   },
// //   {
// //     id: 4,
// //     title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
// //     image:
// //       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
// //   },
// //   {
// //     id: 5,
// //     title:
// //       "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
// //     image:
// //       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
// //   },
// //   {
// //     id: 6,
// //     title:
// //       "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
// //     image:
// //       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
// //   },
// //   {
// //     id: 7,
// //     title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
// //     image:
// //       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
// //   },
// //   {
// //     id: 8,
// //     title:
// //       "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
// //     image:
// //       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
// //   },
// //   {
// //     id: 9,
// //     title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
// //     image:
// //       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
// //   },
// //   {
// //     id: 10,
// //     title:
// //       "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
// //     image:
// //       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
// //   },
// // ];

// // // Functional Component
// // // mendeklarasikan komponen fungsional bernama List yang akan digunakan untuk menampilkan daftar
// // const List = () => {
// //   // Arrow Function with destructured argument
// // // mendeklarasikan fungsi arrow untuk menangani render item daftar. Fungsi renderItem digunakan untuk merender setiap item daftar. Fungsi ini menerima argumen item yang berisi data dari item daftar
// //   const renderItem = ({ item }) => {
// //     return (
// //       <TouchableOpacity style={styles.view} onPress={() => alert("Pressed")}>
// //         <View>
// //           <Image source={{ uri: item.image }} style={styles.image} />
// //           <Text style={styles.text}>{item.title}</Text>
// //         </View>
// //       </TouchableOpacity>
// //     );
// //   };
// // // menggunakan komponen FlatList untuk menampilkan daftar
// //   return (
// //     <FlatList
// //       data={datas}
// //       renderItem={renderItem}
// //       keyExtractor={(item) => item.id}
// //     />
// //   );
// // };

// // // Styles
// // // mendefinisikan style untuk elemen daftar
// // const styles = StyleSheet.create({
// //   view: {
// //     padding: 15,
// //     borderBottomColor: "#dddddd",
// //     borderBottomWidth: 1,
// //   },
// //   image: {
// //     height: 200,
// //     width: null,
// //   },
// //   text: {
// //     fontSize: 18,
// //     paddingTop: 10,
// //   },
// // });

// // export default List;


// // kode program menggunakan modal
// import {
//     FlatList,
//     Image,
//     Text,
//     TouchableOpacity,
//     View,
//     StyleSheet,
//     Modal
//   } from "react-native";
//   import React, {useState} from "react";
  
//   // Dummmy Data (Array of Object)
//   const datas = [
//     {
//       id: 1,
//       title:
//         "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
//       image:
//         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
//     },
//     {
//       id: 2,
//       title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
//       image:
//         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
//     },
//     {
//       id: 3,
//       title:
//         "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
//       image:
//         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
//     },
//     {
//       id: 4,
//       title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
//       image:
//         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
//     },
//     {
//       id: 5,
//       title:
//         "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
//       image:
//         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
//     },
//     {
//       id: 6,
//       title:
//         "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
//       image:
//         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
//     },
//     {
//       id: 7,
//       title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
//       image:
//         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
//     },
//     {
//       id: 8,
//       title:
//         "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
//       image:
//         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
//     },
//     {
//       id: 9,
//       title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
//       image:
//         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
//     },
//     {
//       id: 10,
//       title:
//         "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
//       image:
//         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
//     },
//   ];
  
//   // Functional Component
//   const List = () => {
//     // Arrow Function with destructured argument
// // menggunakan useState untuk mengelola state modalVisibl
//     const [modalVisible, setModalVisible] = useState(false);
//     const renderItem = ({ item }) => {
//       return (
//         <View>
//           <Modal
//             animationType="slide"
//             transparent={true}
//             visible={modalVisible}
//             onRequestClose={() => {
//               Alert.alert('Modal has been closed.');
//               setModalVisible(!modalVisible);
//             }}>
//             <View style={styles.centeredView}>
//               <View style={styles.modalView}>
//                 <Text style={styles.modalText}>Hello World!</Text>
//                 <TouchableOpacity
//                   style={[styles.button, styles.buttonClose]}
//                   onPress={() => setModalVisible(!modalVisible)}>
//                   <Text style={styles.textStyle}>Hide Modal</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </Modal>
//           <TouchableOpacity style={styles.view} onPress={() => setModalVisible(true)}>
//             <View>
//               <Image source={{ uri: item.image }} style={styles.image} />
//               <Text style={styles.text}>{item.title}</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       );
//     };
  
//     return (
//       <FlatList
//         data={datas}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//     );
//   };
  
//   // Styles
//   const styles = StyleSheet.create({
//     view: {
//       padding: 15,
//       borderBottomColor: "#dddddd",
//       borderBottomWidth: 1,
//     },
//     image: {
//       height: 200,
//       width: null,
//     },
//     text: {
//       fontSize: 18,
//       paddingTop: 10,
//     },

//     centeredView: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginTop: 22,
//     },
//     modalView: {
//       margin: 20,
//       backgroundColor: 'white',
//       borderRadius: 20,
//       padding: 35,
//       alignItems: 'center',
//       shadowColor: '#000',
//       shadowOffset: {
//         width: 0,
//         height: 2,
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 4,
//       elevation: 5,
//     },
//     button: {
//       borderRadius: 20,
//       padding: 10,
//       elevation: 2,
//     },
//     buttonOpen: {
//       backgroundColor: '#F194FF',
//     },
//     buttonClose: {
//       backgroundColor: '#2196F3',
//     },
//     textStyle: {
//       color: 'white',
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//     modalText: {
//       marginBottom: 15,
//       textAlign: 'center',
//     },
//   });
  
//   export default List;

// Reactnative=>nativebase
import React, { useState } from "react";
import { FlatList, Image, Text, Pressable, Box, Modal, Button, VStack, Center } from "native-base";

const data = [
  {
    id: 1,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
  },
  {
    id: 2,
    title:
      "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
  },
  {
    id: 3,
    title: "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
  },
  {
    id: 4,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
  },
  {
    id: 5,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
  },
  {
    id: 6,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
  },
  {
    id: 7,
    title:
      "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
  },
  {
    id: 8,
    title: "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
  },
  {
    id: 9,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
  },
  {
    id: 10,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
  },
];

const List = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const renderItem = ({ item }) => {
    return (
      <Pressable
        padding={15}
        borderBottomColor="#dddddd"
        borderBottomWidth={1}
        onPress={() => openModal(item)}
      >
        <Box>
          <Image source={{ uri: item.image }} height={200} width={null} />
          <Text fontSize={18} paddingTop={10}>
            {item.title}
          </Text>
        </Box>
      </Pressable>
    );
  };

  return (
    <Box paddingBottom={100}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Modal isOpen={selectedItem !== null} onClose={closeModal} size="lg">
        <Modal.Content>
          <Modal.Header>{selectedItem ? selectedItem.title : ""}</Modal.Header>
          <Modal.CloseButton />
          <Modal.Body>
            {selectedItem && (
              <VStack space={3}>
                <Image source={{ uri: selectedItem.image }} height={200} width={null} />
                <Text>{selectedItem.title}</Text>
              </VStack>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button onPress={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default List;