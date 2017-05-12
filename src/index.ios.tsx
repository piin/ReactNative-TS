import React, { Component } from "react";
import { AppRegistry, View } from 'react-native';
import Header from "./components/header";
import AlbumList from "./components/AlbumList";

interface IProps {}
interface IState {}

export default class App extends Component<IProps, IState> {
    public render() {
        return (
            <View style={ { flex: 1 } }>
                <Header headerText = { 'Albums!' } />
                <AlbumList />
            </View>
        );
    }
}
