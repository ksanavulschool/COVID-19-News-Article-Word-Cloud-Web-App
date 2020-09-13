import React from 'react';
import ArticleListItem from './ArticleListItem';

function ArticleList(props) {
    return (
        <div className='ArticleList'>
            <ArticleListItem></ArticleListItem>
            <ArticleListItem></ArticleListItem>
            <ArticleListItem></ArticleListItem>
        </div>
    );
}

export default ArticleList;