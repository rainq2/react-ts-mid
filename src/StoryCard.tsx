import React from 'react';

// ts是一種比較嚴格的語言，必須監督入資料是否為指定型態
interface StoryCardProps {
  image: string;
  title: string;
  description: string;
  nevigate: string; 
}

const StoryCard: React.FC<StoryCardProps> = ({ image, title, description, nevigate }) => {
  // button function
   const handleNavigation = () => {
    window.open(nevigate, '_blank'); //open new page
  };

  return (
    <div className="col-4 col-6-medium col-12-small">
      <section className="box">
        <a className="image featured">
          <img src={image} alt="" />
        </a>
        <header>
          <h3>{title}</h3>
        </header>
        <p>{description}</p>
        <footer>
          <ul className="actions">
            <li>
              {/* button */}
              <button onClick={handleNavigation} className="button alt"> 
                Read & Play
              </button>
            </li>
          </ul>
        </footer>
      </section>
    </div>
  );
};

export default StoryCard;