import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../../constant";
const { height, width } = Dimensions.get("window");
import { AntDesign, Entypo, EvilIcons, MaterialIcons} from "@expo/vector-icons";
import FadeInView from "../../components/FadeIn2";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = ({ navigation }) => {
  const navigateToPayment = () => {
    navigation.navigate("Pay2");
  };
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.white,
        alignItems: "center",
        width:width,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "10%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text
          style={{
            fontSize: SIZES.medium,
            color: COLORS.black,
            fontFamily: FONTS.bold,
            textAlign: "center",
          }}
        >
          Add Card
        </Text>
        <Entypo name="dots-three-vertical" size={24} color="black" />
      </View>
    
      <LinearGradient
        colors={[COLORS.primary, COLORS.primary2, COLORS.primary]}
        style={{
          width: "100%",
          height: "30%",
          paddingHorizontal: 10,
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: COLORS.primary,
          borderRadius: 50,
          elevation: 10,
          shadowColor: COLORS.purple,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.3,
          shadowRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View
            style={{
              padding: 20,
              flexDirection: "column",
              marginTop: 15,
            }}
          >
            <Text
              style={{
                fontSize: SIZES.small,
                color: COLORS.white,
                fontFamily: FONTS.medium,
                textAlign: "left",
                opacity: 0.8,
              }}
            >
              Current Balance
            </Text>
            <Text
              style={{
                fontSize: SIZES.extraLarge,
                color: COLORS.white,
                fontFamily: FONTS.medium,
                textAlign: "left",
                paddingTop: 10,
              }}
            >
              N500,000.00
            </Text>
          </View>
          <View>
            <Image
              style={{
                height: 80,
                width: 150,
                marginRight: -20,
              }}
              resizeMode="cover"
              source={require("../../assets/images/master.png")}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingBottom: 10,
          }}
        >
          <View
            style={{
              paddingVertical: 20,
              paddingHorizontal: 20,
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontSize: SIZES.small,
                color: COLORS.white,
                fontFamily: FONTS.medium,
                textAlign: "left",
                opacity: 0.8,
              }}
            >
              YUNUS ADAM ABIODUN
            </Text>
            <Text
              style={{
                fontSize: SIZES.large,
                color: COLORS.white,
                fontFamily: FONTS.light,
                textAlign: "left",
                opacity: 0.8,
              }}
            >
              1234 5678 9012 3456
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: SIZES.medium,
                color: COLORS.white,
                fontFamily: FONTS.medium,
                textAlign: "left",
                padding: 20,
                opacity: 0.8,
              }}
            >
              03/27
            </Text>
          </View>
        </View>
      </LinearGradient>
     
      <View
        style={{
          width: "100%",
          height: "45%",
          margin: "5%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: COLORS.white,
          borderRadius: 50,
          elevation: 10,
          shadowColor: COLORS.gray,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.1,
          shadowRadius: 10,
        }}
      >
        <View
          style={{
            width:"100%",
            flexDirection: "column",
            paddingVertical: 10,
            paddingHorizontal: 30,
            gap: 20,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              width: "100%",
              gap: 5,
            }}
          >
            <Text
              style={{
                fontSize: SIZES.small,
                color: COLORS.black,
                fontFamily: FONTS.medium,
                textAlign: "left",
                opacity: 0.8,
              }}
            >
              Card Number
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems:"flex-start",
                justifyContent:"space-between"
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.large,
                  color: COLORS.gray,
                  fontFamily: FONTS.medium,
                  textAlign: "left",
                }}
              >
                1234 5678 9012 3456
              </Text>
              <EvilIcons name="question" size={24} color="black" />
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                width: "100%",
                borderBottomColor: COLORS.gray,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              width: "100%",
              gap: 5,
            }}
          >
            <Text
              style={{
                fontSize: SIZES.small,
                color: COLORS.black,
                fontFamily: FONTS.medium,
                textAlign: "left",
                opacity: 0.8,
              }}
            >
              Card Name
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems:"flex-start",
                justifyContent:"space-between"
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.large,
                  color: COLORS.gray,
                  fontFamily: FONTS.medium,
                  textAlign: "left",
                }}
              >
                YUNUS ADAM ABIODUN
              </Text>
              <EvilIcons name="question" size={24} color="black" />
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                width: "100%",
                borderBottomColor: COLORS.gray,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems:"flex-start",
              justifyContent:"space-between"
            }}
          >
            <View
              style={{
                flexDirection: "column",
                width: "40%",
                gap:5,
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.small,
                  color: COLORS.black,
                  fontFamily: FONTS.medium,
                  textAlign: "left",
                  opacity: 0.8,
                }}
              >
                Expiry Date
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems:"flex-start",
                  justifyContent:"space-between"
                }}
              >
                <Text
                  style={{
                    fontSize: SIZES.large,
                    color: COLORS.gray,
                    fontFamily: FONTS.medium,
                    textAlign: "left",
                  }}
                >
                  03/27
                </Text>
                <EvilIcons name="question" size={24} color="black" />
              </View>
              <View
                style={{
                  borderBottomWidth: 2,
                  width: "100%",
                  borderBottomColor: COLORS.gray,
                }}
              ></View>
            </View>
            <View
              style={{
                flexDirection: "column",
                width: "40%",
                gap: 5,
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.small,
                  color: COLORS.black,
                  fontFamily: FONTS.medium,
                  textAlign: "left",
                  opacity: 0.8,
                }}
              >
                CSV
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems:"flex-start",
                  justifyContent:"space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: SIZES.large,
                    color: COLORS.gray,
                    fontFamily: FONTS.medium,
                    textAlign: "left",
                  }}
                >
                  111
                </Text>
                <EvilIcons name="question" size={24} color="black" />
              </View>
              <View
                style={{
                  borderBottomWidth: 2,
                  width: "100%",
                  borderBottomColor: COLORS.gray,
                }}
              />
            </View>
          </View>
          <View style={{
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            gap:5,
          }}>
            <MaterialIcons name="check-box-outline-blank" size={16} color={COLORS.gray} />
            <Text 
                style={{
                fontSize: SIZES.small,
                color: COLORS.gray,
                fontFamily: FONTS.medium,
                textAlign: "left",
              }}>
                Use this card for the next order
            </Text>

          </View>
        </View>
      </View>
        <FadeInView> 
      <TouchableOpacity
        onPress={() => navigateToPayment()}
        style={{
          backgroundColor: COLORS.primary,
          paddingVertical: 15,
          paddingHorizontal: 20,
          width: "80%",
          borderRadius: 10,
          shadowColor: COLORS.white,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.3,
          shadowRadius: 10,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.bold,
            color: COLORS.white,
            fontSize: SIZES.bold,
            textAlign: "center",
          }}
        >
          Pay - NGN50,000
        </Text>
      </TouchableOpacity>
      </FadeInView> 
    </View>
  );
};

export default HomeScreen;
