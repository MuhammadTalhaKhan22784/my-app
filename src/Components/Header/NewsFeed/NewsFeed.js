import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './NewsFeed.css'
import { Link } from 'react-router-dom';
const NewsFeed = () => {

    let [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN', {
            headers: {
                'Authorization': `b4b61c4d0ec2a748ca587f708718bc03cada764d9b7bb4320b0ab8d05e21e15b`

            }
        })
            .then((res) => {
                setNews(res.data.Data.slice(0, 12))
            })
            .catch((error) => {
                console.error('error :', error)
            })

    }, []);
    return (
        <>
            <div className="newsfeed-section">
            <h1 className="newsfeed-heading">News Feeds</h1>
                <div className="news-main container">
                    
                    {news.map(news => {
                        return (
                            <>
                                <div className="news-contents" data-aos="fade-up" data-aos-delay="80" data-aos-duration="2000">
                                    <div className="news-img" >
                                        <img src={news.imageurl}></img>
                                    </div>
                                    <div className="news-categories">

                                        <span>{news.categories}</span>
                                    </div>
                                    <div className="news-title">
                                        <h2>{news.title}</h2>
                                    </div>

                                    <div className="news-body">
                                        <a href={news.url} target="_blank"><p>{news.body}</p></a>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>

            )


        </>
    )
}

export default NewsFeed
