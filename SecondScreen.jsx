import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./secondscreen.style";

export default function SecondScreen() {
  const [image, setImage] = useState(require("../assets/vs_silver.png"));

  return (
    <View style={styles.container}>
      <View style={styles.productSection}>
        <View>
          <Image style={styles.stretch} source={image} />
        </View>
        <Text style={styles.productText}>
          Điện Thoại Vsmart Joy 3 Hàng Chính Hãng
        </Text>
      </View>

      <View style={styles.chooseColorSection}>
        <View>
          <Text style={styles.chooseColorText}>Chọn một màu bên dưới</Text>
        </View>
        <View style={styles.chooseColorContainer}>
          <Pressable
            style={styles.silver}
            onPress={() => {
              setImage(require("../assets/vs_silver.png"));
            }}
          ></Pressable>
          <Pressable
            style={styles.red}
            onPress={() => {
              setImage(require("../assets/vs_red.png"));
            }}
          ></Pressable>
          <Pressable
            style={styles.black}
            onPress={() => {
              setImage(require("../assets/vs_black.png"));
            }}
          ></Pressable>
          <Pressable
            style={styles.blue}
            onPress={() => {
              setImage(require("../assets/vs_blue.png"));
            }}
          ></Pressable>
        </View>
        <View style={styles.chooseColorButton}>
          <Pressable style={styles.button}>
            <Text style={{ fontWeight: "bold", fontSize: "15px" }}>XONG</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
