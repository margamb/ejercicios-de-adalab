import React from 'react';
import MediaCard from './MediaCard';

const MediaList = (props) => {
  return (
    <section>
      <h2>Section Title</h2>
      <ul>
        <li>
          <MediaCard
            title="Card 1"
            subTitle="First"
            text="Text number one. it's a long text"
            likes="12"
            photoUrl="https://avatarfiles.alphacoders.com/654/thumb-65443.gif"
            liked={true}
          />
        </li>
        <li>
          <MediaCard
            title="Card 2"
            subTitle="Second"
            text="Text number two. it's a long text"
            likes="13"
            photoUrl="https://avatarfiles.alphacoders.com/654/thumb-65440.gif"
            liked={false}
          />
        </li>
        <li>
          <MediaCard
            title="Card 3"
            subTitle="Third"
            text="Text number three. it's a long text"
            likes="14"
            photoUrl="https://avatarfiles.alphacoders.com/654/thumb-65441.jpg"
            liked={true}
          />
        </li>
      </ul>
    </section>
  );
};

export default MediaList;
