import React from 'react';

const imgCity = {
  'Buenos Aires':
    'https://www.bain.com/contentassets/f68751a8708848558d763e7fe458c10a/local-office-images-buenos-aires-1440x810.jpg',
  Sydney:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzQ-KViWfcD3U8XHJtCSdvvTSyqfdaFf181iXTnjk76w&usqp=CAU&ec=45714077',
  Praga: 'https://cdn2.civitatis.com/republica-checa/praga/guia/praga.jpg',
  Boston:
    'https://www.visittheusa.mx/sites/default/files/styles/hero_l_x2/public/images/hero_media_image/2017-06/de6f732d8950b74b550d885beab53c37.jpeg?itok=AHJDbUok',
  Tokyo:
    'https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg',
};

class CityImage extends React.Component {
  render() {
    return (
      <img
        src={imgCity[this.props.city]}
        alt={this.props.city}
        //src="https://cdn2.civitatis.com/republica-checa/praga/guia/praga.jpg"
        //alt="Praga"
      />
    );
  }
}

export default CityImage;
