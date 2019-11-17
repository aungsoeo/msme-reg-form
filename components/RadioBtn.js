import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class RadioBtn extends React.Component {

  setToggle() {
    if(this.props.onPress){
        this.props.onPress();
    }
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={()=>this.setToggle()}
        >
          <View style={styles.radioContainer}>
            <View style={styles.largeCirle}>
              {this.props.active  ? (
                <View style={styles.activeCirle} />
              ) : null}
            </View>
            <Text style={styles.label}>
              {this.props.label ? this.props.label : null}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  radioContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20
  },
  largeCirle: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: "#999",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  activeCirle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "green"
  },
  label: {
    marginLeft: 10,
    color: "black"
  }
});
