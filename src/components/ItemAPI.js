import React from 'react';
import { Button } from 'reactstrap';

const ItemAPI = ({author, title, description, url, urlToImage}) => {
  return (
    <div className='newsItem'>
      <img className='newsImg' src={urlToImage} alt='This Picture' />
      <h3>
          {title}
      </h3>
      <h6>
        {author}
      </h6>
        <p>{description}</p>
      <div className='btnCenter'>
        <Button color='primary' href={url} target="blank">Read More</Button>
      </div>
    </div>
  );
};

export default ItemAPI;
