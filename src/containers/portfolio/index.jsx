import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/ImageOne.png";
import ImageTwo from "../../images/ImageTwo.png";
import ImageThree from "../../images/ImageThree.png";
import ImageFour from "../../images/ImageFour.png";
import ImageFive from "../../images/ImageFive.png";
import ImageSix from "../../images/ImageSix.png";
import ImageSeven from "../../images/ImageSeven.png";
import ImageEight from "../../images/ImageEight.png";
import ImageNine from "../../images/ImageNine.png";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "Ecommerce-Plant-App",
    image: ImageOne,
    link: "https://greenmindecommercebyyogaprasadmk.netlify.app",
  },
  {
    id: 3,
    name: "Github",
    link: "https://github.com/yogaprasadk",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Amazon Clone",
    image: ImageThree,
    link: "https://amazonclonebyyogaprasad.netlify.app/",
  },
  {
    id: 2,
    name: "Netflix Clone",
    image: ImageEight,
    link: "https://netflixclonebyyogaprasadmk.netlify.app/",
  },
  {
    id: 3,
    name: "CodeChef",
    image: ImageFive,
    link: "https://tr.ee/b75YN35OoP",
  },
  {
    id: 3,
    name: "HackerRank",
    image: ImageSix,
    link: "https://tr.ee/b75YN35OoP",
  },
  {
    id: 3,
    name: "Leetcode",
    image: ImageFour,
    link: "https://tr.ee/y8qy3S1F6S",
  },
  {
    id: 3,
    name: "Linkedin",
    image: ImageNine,
    link: "https://tr.ee/6ZMrmR5L0E",
  },
  {
    id: 2,
    name: "RockPaperScissors",
    image: ImageSeven,
    link: "https://rockpaperscissorsgamebyyogamk.netlify.app",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Profiles",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a
                  href={item.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio__content__cards__item__link"
                >
                  <img alt={item.name} src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => window.open(item.link, "_blank")}>
                      Visit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
