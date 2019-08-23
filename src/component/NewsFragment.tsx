import React from "react";
import {NewsItemType} from "../data/type/NewsItemType";

export class NewsFragment extends React.Component<NewsItemType> {
    render() {
        return (
            <div>
                <p>{this.props.id}</p>
                <p>{this.props.caption}</p>
                <p>{this.props.img}</p>
                <p>{this.props.link}</p>
            </div>
        );
    }
}