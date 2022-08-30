import React from 'react';
import './style.scss'


const News = ({ name, news }) => {
    return (<div>
        <div className='news-list shadow-sm mb-3'>

            <div className='profile-of-user'>
                <h1>{name.split('')[0]}</h1>
            </div>
            <div className='text-center'>

                <b>Name: {name}: </b> &nbsp;
                News: {news}

            </div>
        </div>
    </div>);
}

export default News;