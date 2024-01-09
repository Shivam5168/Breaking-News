import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
import NewsItemFunctionBased from './NewsItemFunctionBased';
const NewsFunctionBased = (props) => {
    const [articles, setArticle] = useState([]);
    const [loading, setLoding] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResult] = useState(0);


    const upDatePage = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKeys}&page=${page}&pageSize=${props.pageSize}`;
        setLoding(true);
        setPage(page + 1)
        let data = await fetch(url);
        console.log(data)
        let parsedData = await data.json();
        props.setProgress(50);
        setArticle(parsedData.articles);
        setTotalResult(parsedData.totalResults);
        setLoding(false);
        props.setProgress(100);
    };

    useEffect(() => {
        const { category } = props;
        const title = category === 'General' ? 'Home - NewsMedia' : `${category} - NewsMedia`;
        document.title = title.toUpperCase();
        upDatePage();
    }, []   );

    const fetchMoreData = async () => {
        debugger

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKeys}&page=${page}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        setLoding(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticle(articles.concat(parsedData.articles));
        setTotalResult(parsedData.totalResults);
        setLoding(false);
        console.log(parsedData)
    };
    return (
        <>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}>
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItemFunctionBased title={element.title || ""} description={element.description ? element.description.slice(0, 87) : ""} imageUrl={element.urlToImage} url={element.url} publishedAt={element.publishedAt || ""} author={element.author || "unknown"} source={element.source.name || "unknown"} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/*<div className="d-flex justify-content-between mt-3">
        <div className="button-container">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleNextPreviousClick}>&#8592;</button>
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>previous</button>
        </div>
        <div>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>next</button>
        </div>
        </div>*/}
        </>
    )
}
NewsFunctionBased.defaultProps = {
    country: 'in',
    pageSize: 3,
    category: 'general'

};

// NewsFunctionBased.PropTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
// };
export default NewsFunctionBased;