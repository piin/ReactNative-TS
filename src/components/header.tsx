import React, { Component } from "react";
import { Text, View } from "react-native";


const Header = ( props: IProps ) => {
    const { viewStyle, textStyle  } = styles;
    return (
        <View style = { viewStyle } >
            <Text style = { textStyle } >{ props.headerText }</Text>
        </View>
    );
};

const styles: any = {
    viewStyle: {
        backgroundColor : '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20,
    },
};
export default Header;

interface IProps {
    headerText: string;
}
