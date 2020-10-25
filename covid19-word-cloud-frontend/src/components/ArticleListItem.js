import React from 'react';

function ArticleListItem(props) {
    return (
        <div className='ArticleListItem'>
            <div className='ArticleListItem-Image'>
                <img src={ props.imageLocation } alt={ props.imageAlt }></img>
            </div>
            <div className='ArticleListItem-Article'>
                <div className='ArticleListItem-Title'>
                    { props.title }
                </div>
                <div className='ArticleListItem-Content'>
                    { props.content }
                </div>
            </div>
        </div>
    );
}

export default ArticleListItem;