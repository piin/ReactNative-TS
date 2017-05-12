import React, { Component } from "react";
import { Text, View, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetail = ( props: IProps ) => {
    const { 
        headerContentStyle, 
        headerTextStyle, 
        thumbnailStyle, 
        thumbnailContainerStyle, 
        imageStyle, 
    } = styles; 

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style = { thumbnailStyle } 
                        source = { { uri: props.album.thumbnail_image } } 
                    />
                </View>
                <View style = { headerContentStyle }>
                    <Text style = {headerTextStyle } >{ props.album.title }</Text>
                    <Text>{ props.album.artist }</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                    style = { imageStyle }
                    source = { { uri: props.album.image } } 
                />
            </CardSection>
            <CardSection>
                <Button onPress = { () => Linking.openURL(props.album.url) }  >
                    Buy now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles: any = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50, 
    }, 
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    },
};


export default AlbumDetail;

interface IProps {
    album: {
        title: string;
        thumbnail_image: string;
        artist: string;
        image: string;
        url: string;
    };
}


