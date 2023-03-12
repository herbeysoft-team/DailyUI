import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../../constant";
const { height } = Dimensions.get("window");
import { FontAwesome5 } from "@expo/vector-icons";
import FadeInView from '../../components/FadeIn2';

const SignUp = ({navigation}) => {
  const navigateToHome = () => {
    navigation.navigate('Home')
}
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.purple,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: SIZES.extraLarge,
            color: COLORS.white,
            fontFamily: FONTS.black,
            marginVertical: 10,
          }}
        >
          Create Account
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.medium,
            color: COLORS.gray,
            maxWidth: "80%",
            textAlign: "center",
          }}
        >
          Create an account to explore our services today!
        </Text>
      </View>
      <FadeInView>
      <View style={{ width: 350, marginTop: 50 }}>
        <TextInput
          placeholder="Enter username"
          placeholderTextColor={COLORS.gray}
          fontSize={16}
          style={{
            fontFamily: FONTS.regular,
            paddingHorizontal: 20,
            paddingVertical: 15,
            backgroundColor: COLORS.white,
            borderRadius: 10,
          }}
        />
        <View>
          <TextInput
            placeholder="Password"
            placeholderTextColor={COLORS.gray}
            fontSize={16}
            style={{
              fontFamily: FONTS.regular,
              paddingHorizontal: 20,
              paddingVertical: 15,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              marginTop: 10,
            }}
          />
          <FontAwesome5
            name="eye-slash"
            size={16}
            color={COLORS.grey}
            style={{ position: "absolute", right: 10, top: 30 }}
          />
        </View>
        <View>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={COLORS.gray}
            fontSize={16}
            style={{
              fontFamily: FONTS.regular,
              paddingHorizontal: 20,
              paddingVertical: 15,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              marginTop: 10,
            }}
          />
          <FontAwesome5
            name="eye-slash"
            size={16}
            color={COLORS.grey}
            style={{ position: "absolute", right: 10, top: 30 }}
          />
        </View>
        <TouchableOpacity
        onPress={() => navigateToHome()}
          style={{
            backgroundColor: COLORS.orange,
            width: 350,
            borderRadius: 10,
            marginTop: 50,
            paddingVertical: 15,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: 20,
              color: COLORS.purple,
              textAlign: "center",
            }}
          >{`Sign Up`}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigateToHome()}
        > 
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: 16,
              color: COLORS.gray,
              textAlign: "center",
              marginTop: 25,
            }}
          >{`Already have an account?`}</Text>
        </TouchableOpacity>
      </View>
      </FadeInView>
      <FadeInView>
      <View
        style={{
          flexDirection: "row",
          width: 350,
          justifyContent: "space-evenly",
          marginTop: 100,
        }}
      >
        <TouchableOpacity
          style={{
            width: 80,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.white,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLORS.orange,
          }}
        >
          <FontAwesome5 name={"facebook"} size={24} color={COLORS.purple} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 80,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.white,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLORS.orange,
          }}
        >
          <FontAwesome5 name={"apple"} size={24} color={COLORS.purple} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 80,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.white,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLORS.orange,
          }}
        >
          <FontAwesome5 name={"google"} size={24} color={COLORS.purple} />
        </TouchableOpacity>
      </View>
      </FadeInView>
    </View>
  );
};

export default SignUp;
