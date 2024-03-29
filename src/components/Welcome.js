import { useState, useEffect } from 'react';
// import welcomeImagesData from './data/welcomeImages.json';

export const Welcome = () => {
  const [welcomeImagesData, setWelcomeImagesData] = useState([]);

  const loadWelcomeImagesData = async () => {
    const response = await fetch(
      'https://x2bho9vzta.execute-api.us-east-1.amazonaws.com/Production/gallery-links',
    );
    setWelcomeImagesData(await response.json());
  };

  useEffect(() => {
    loadWelcomeImagesData();
  }, []);

  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          {welcomeImagesData.map((image) => {
            if (image.class !== 'no_class')
              return (
                <img
                  key={image.src}
                  className={`${image.class}`}
                  src={image.src}
                  alt={image.alt}
                />
              );
            return <img key={image.src} src={image.src} alt={image.alt} />;
          })}
        </div>
        <h1>Welcome to the Landon&nbsp;Hotel</h1>
        <p>
          The original Landon perseveres after 50 years in the heart of West
          London. The West End neighborhood has something for everyone—from
          theater to dining to historic sights. And the not-to-miss Rooftop Cafe
          is a great place for travelers and locals to engage over drinks, food,
          and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel
          in the West End, browse our website and{' '}
          <a href="files/landon_information_sheet_London.pdf">
            download our handy information sheet
          </a>
          .
        </p>
      </article>
    </div>
  );
};
