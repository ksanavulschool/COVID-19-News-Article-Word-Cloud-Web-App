import React from 'react';
import ArticleListItem from './ArticleListItem';

function ArticleList(props) {
    // Make axios call to the backend
    var sampleProps1 = {
        imageLocation: './word-clouds/sample_word_cloud.png',
        imageAlt: 'A word cloud',
        title: 'Sample Title 1',
        content: 'sample content 1 this is a piece of sample content this will contain a paragraph of text that describes the article. It will probably just be a preview of the artile such as the first paragraph or so.'
    }
    var sampleProps2 = {
        imageLocation: './word-clouds/sample_word_cloud.png',
        imageAlt: 'A word cloud',
        title: 'Sample Title 2',
        content: 'sample content 2 this is a piece of sample content this will contain a paragraph of text that describes the article. It will probably just be a preview of the artile such as the first paragraph or so.'
    }
    var sampleProps3 = {
        imageLocation: './word-clouds/sample_word_cloud.png',
        imageAlt: 'A word cloud',
        title: 'Sample Title 3',
        content: 'sample content 3 this is a piece of sample content this will contain a paragraph of text that describes the article. It will probably just be a preview of the artile such as the first paragraph or so.'
    }

    return (
        <div className='ArticleList'>
            <ArticleListItem imageLocation={sampleProps1.imageLocation} imageAlt={sampleProps1.imageAlt} title={sampleProps1.title} content={sampleProps1.content}></ArticleListItem>
            <ArticleListItem imageLocation={sampleProps2.imageLocation} imageAlt={sampleProps2.imageAlt} title={sampleProps2.title} content={sampleProps2.content}></ArticleListItem>
            <ArticleListItem imageLocation={sampleProps3.imageLocation} imageAlt={sampleProps3.imageAlt} title={sampleProps3.title} content={sampleProps3.content}></ArticleListItem>
        </div>
    );
}

export default ArticleList;