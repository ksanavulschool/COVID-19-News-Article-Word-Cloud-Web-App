import React from 'react';
import ArticleListItem from './ArticleListItem';
import './ArticleList.css'
var axios = require('axios');

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { articles: [] }
    }

    componentDidMount = () => {
        axios.get('https://2n0lst0yeh.execute-api.us-east-1.amazonaws.com/Prod/articles/')
            .then((response) => {
                console.log(response.data.articles);
                this.setState({
                    articles: response.data.articles.slice(0, 19)
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        // axios.get('https://2n0lst0yeh.execute-api.us-east-1.amazonaws.com/Prod/articles/')
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });


        var articleListItems = [];
        var key = 0;

        this.state.articles.forEach((prop) => {
            articleListItems.push(<a key={key} href={prop.url}><ArticleListItem className='ArticleListElement' imageLocation={prop.imageLocation} imageAlt={prop.imageAlt} title={prop.title} content={prop.content}></ArticleListItem></a>);
            key++;
        });

        return (
            <div className='ArticleList'>
                { articleListItems }
            </div>
        );
    }
}

export default ArticleList;