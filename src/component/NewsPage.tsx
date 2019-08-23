import React, {Component} from 'react';
import {NewsFragment} from "./NewsFragment";
import {NewsItemType} from "../data/type/NewsItemType";
import news from '../service/list';

export class NewsPage extends Component {

    render() {
        let newsCollection = news as Array<NewsItemType>;

        return (
            // return (
            //   <div className="App">
            //     <header className="App-header">
            //       <img src={logo} className="App-logo" alt="logo" />
            //       <p>
            //       </p>
            //       <a
            //         className="App-link"
            //         href="https://reactjs.org"
            //         target="_blank"
            //         rel="noopener noreferrer"
            //       >
            //         Learn React
            //       </a>
            //     </header>
            //   </div>
            // );
            <div>
                {
                    newsCollection.map(news => <NewsFragment id={news.id} title={news.title} caption={news.caption}
                                                             date={news.date} views={news.views} img={news.img}
                                                             link={news.link}/>)
                }
            </div>
        );
    }
}