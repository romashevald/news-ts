import React from 'react';
import {NewsFragment} from "./NewsFragment";
import {NewsItemType} from "../data/type/NewsItemType";
import news from '../service/list';
import ReactPaginate from 'react-paginate';

interface State {
    pageCount?: number;
}

interface IProps {
}

export class NewsPage extends React.Component<IProps, State> {
    state: State = {
        pageCount: 1
    };

    render() {
        let newsCollection = news as Array<NewsItemType>;
        console.log('==this.state.pageCount', this.state.pageCount);
        return (
            <div>
                <div>
                    {
                        newsCollection.slice(0, 3).map((news, i) =>
                            <NewsFragment key={i}
                                          id={news.id} title={news.title}
                                          caption={news.caption}
                                          date={news.date} views={news.views}
                                          img={news.img}
                                          link={news.link}/>)
                    }
                </div>
                <ReactPaginate previousLabel={"previous"}
                               nextLabel={"next"}
                               breakLabel={<a href="">...</a>}
                               breakClassName={"break-me"}
                               pageCount={12}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.onPageChange.bind(this)}
                               containerClassName={"pagination"}
                               activeClassName={"active"}
                />
            </div>
        );
    }


    onPageChange(data: any) {
        console.log('onPageChange', data);
    }
}