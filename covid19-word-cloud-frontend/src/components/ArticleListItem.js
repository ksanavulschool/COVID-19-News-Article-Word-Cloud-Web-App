import React from 'react';

function ArticleListItem(props) {
    return (
        <div className='ArticleListItem'>
            <div className='ArticleListItem-Image'>
                <img src='./word-clouds/sample_word_cloud.png' alt='word cloud of article'></img>
            </div>
            <div className='ArticleListItem-Article'>
                <div className='ArticleListItem-Title'>
                    Sample Article Title
                </div>
                <div className='ArticleListItem-Content'>
                    Est sint dolor fugiat Lorem occaecat ex deserunt sunt duis amet fugiat sint. In dolor mollit anim laboris. Quis est eiusmod eu commodo quis exercitation proident incididunt dolor fugiat. Esse aute veniam do velit consectetur aliquip. Enim mollit consectetur adipisicing aliquip deserunt mollit reprehenderit nisi. Elit incididunt dolor cupidatat deserunt reprehenderit consectetur. Ex tempor adipisicing id dolor nostrud amet sint magna labore sunt laboris...
                </div>
            </div>
        </div>
    );
}

export default ArticleListItem;