import React, { Component } from "react";
import Header from "./components/header";

interface IProps {}
interface IState {}

export default class App extends React.Component<IProps, IState> {

    public render() {
        return (
            <Header />
        );
    }
}

