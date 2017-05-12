import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import axios from 'axios';
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component<IProps, IState> {
    public state: IState = { albums: []  };

    private componentWillMount( ) {
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
            .then( result => this.setState( { albums: result.data } ) )
            .catch( reason => console.log("Reason:", reason) );
    }

    private renderAlbums() {
        return this.state.albums.map( album  => <AlbumDetail key = { album.title } album = { album } /> );
    }

    public render( ) {
        console.log(this.state);
        return (
            <ScrollView>
               { this.renderAlbums( ) }
            </ScrollView>
        );
    }
}

export default AlbumList;

interface IProps {}
interface IState {
    albums: IAlbum[];
}
interface IAlbum {
    title: string;
    thumbnail_image: string;
    artist: string;
    image: string;
    url: string;
}

