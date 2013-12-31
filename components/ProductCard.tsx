import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { gStyles } from "./Styles";

export default function ProductCard({ navigation }: any): JSX.Element{
    return(
        <TouchableOpacity style={[styles.cardContainer, gStyles.bRadius, gStyles.childMargin]} onPress={() => navigation.navigate('Product')}>
            <Image style={[styles.productImage, gStyles.bRadius, gStyles.width100]} source={require('../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg')} />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <Text style={[gStyles.black, gStyles.h3]}>XX99 MARK |</Text>
                <Text style={[gStyles.black, gStyles.h3]}>$ 4.99</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    productImage:{
        height: 150,
    },
    cardContainer: {
        width: 160,
    },
});