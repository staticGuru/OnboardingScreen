import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import Colors from "./colors/default.colors";

const Onboarding_3= () => {
 
  const Title = useState("Track your mechanic");
  const Explain = useState(
    "Know your mechanic in advance and be able to view current location in real time on the map"
  );

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("./assets/mobileImage-3.png")}
        />
        <Text style={styles.logoTitle}>{Title}</Text>
        <Text style={styles.logoText}>{Explain}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>GET STARTED!</Text>
        </TouchableOpacity>
      </View>

    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: Colors.white,
    // alignItems: "center",
  },
  logo: {
    height: 278,
    width: 278,
    marginTop: "30%",
  },
  logoContainer: {
    alignItems: "center",
  },
  logoTitle: {
    fontSize: 30,
    color: Colors.black,
    marginTop: 40,
  },
  logoText: {
    fontSize: 17,
    color: Colors.black,
    marginTop: 30,
    textAlign: "center",
    width: 300,
  },
  // sideTapslider: {
  //   position: "absolute",
  //   bottom: 20,
  // },
  getStartedButton: {
    position: "absolute",
    backgroundColor: Colors.primaryColor,
    top: 55,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 17,
    color: Colors.white,

    textAlign: "center",
    fontWeight: "bold",
  },

  button: {
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 70,
    paddingVertical: 20,
    borderRadius: 8,
    color: Colors.white,
    position: "absolute",
    top: 560,
  },
});

export default Onboarding_3;
