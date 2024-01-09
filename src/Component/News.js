import React, { Component } from "react";
import Spinner from "./Spinner";
import './newsStyle.css';
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItemFunctionBased from "./NewsItemFunctionBased";


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 3,
        category: 'general'

    };

    // static PropTypes = {
    //     country : PropTypes.string,
    //     pageSize : PropTypes.number,
    //     category:PropTypes.string,
    //  };

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
           
            loading: false,
            page: 1,
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.skillstork.org%2Fblog%2Ftop-10-reasons-we-use-technology-in-education%2F&psig=AOvVaw1nrMADpPxp6giqx6C7qqy_&ust=1704367915733000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNj9iNuPwYMDFQAAAAAdAAAAABAD"
        };
    }

    async upDatePage(page = this.state.page) {
        debugger
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKeys}&page=${page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        
        let data = await fetch(url);
        let parsedData = await data.json();
        this.props.setProgress(50);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100)
    }

    async componentDidMount() {

        const { category } = this.props;
        const title = category === 'General' ? 'Home - NewsMedia' : `${category} - NewsMedia`;
        document.title = title.toUpperCase();
        this.upDatePage();
        this.intervalId = setInterval(() => {
            this.setState({
                currentDate: new Date()
            });
        }, 1000);       
      

    }

    handlePreviousClick = async () => {
        this.setState({
            page: this.state.page - 1
        })
        this.upDatePage(this.state.page - 1);

    }

    handleNextClick = async () => {
        this.setState({
            page: this.state.page + 1
        })
        this.upDatePage(this.state.page + 1);

    }
    handleNextPreviousClick = async () => {
        this.upDatePage(this.state.page = 1);
    }

    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKeys}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
            page: this.state.page + 1
        })
    };



    render() {
        return (
            <>
            
           
                {/*this.state.loading && <Spinner />*/}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}>
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
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
        );
    }
}

export default News;
