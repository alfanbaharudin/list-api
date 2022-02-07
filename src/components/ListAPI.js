import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ItemAPI from './ItemAPI';

const ListAPI = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await Axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-01-07&sortBy=publishedAt&apiKey=3333cccec6e64b15b97070a9a21e78bc");
            setArticles(res.data.articles);

            console.log(res);
        }
        getArticles();
    }, []);

    return (
        <div>
            {articles.map(({author, title, description, url, urlToImage}) => (
                <ItemAPI 
                    author={author}
                    title={title} 
                    description={description} 
                    url={url} 
                    urlToImage={urlToImage} 
                />
            ))}
        </div>
    );
};

export default ListAPI;
