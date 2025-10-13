import React from "react";
import TopSection from "../Sales/TopSection";
import BottomSection from "../Sales/BottomSection";
import PlayStation from "../../assets/images/Collections/ps5.png";
import AttractiveWoman from "../../assets/images/Collections/attractive-woman.png";
import Gucci from "../../assets/images/Collections/Gucci.png";
import Clipart from "../../assets/images/Collections/clipart.png";
import "../../css/Collections.css";

export default function Collections() {
  const collections = [
    {
      id: 1,
      image: PlayStation,
      title: "PlayStation 5",
      description: "Black and White version of the PS5 coming out on sale.",
      size: "large",
    },
    {
      id: 2,
      image: AttractiveWoman,
      title: "Women’s Collections",
      description: "Featured woman collections that give you another vibe.",
      size: "medium",
    },
    {
      id: 3,
      image: Clipart,
      title: "Speakers",
      description: "Amazon wireless speakers",
      size: "small",
    },
    {
      id: 4,
      image: Gucci,
      title: "Perfume",
      description: "GUCCI INTENSE OUD EDP",
      size: "small",
    },
  ];

  return (
    <div className="collections-wrapper">
      <TopSection sectionTitle="Featured" />
      <BottomSection title="New Arrival" />

      <div className="collections-layout">
        {/* يسار: بلايستيشن */}
        <div className="left-side">
          <div className="collection-card large">
            <img src={collections[0].image} alt={collections[0].title} />
            <div className="info">
              <h3>{collections[0].title}</h3>
              <p>{collections[0].description}</p>
              <button>Shop Now</button>
            </div>
          </div>
        </div>

        {/* يمين: باقي العناصر */}
        <div className="right-side">
          <div className="collection-card medium">
            <img src={collections[1].image} alt={collections[1].title} />
            <div className="info">
              <h3>{collections[1].title}</h3>
              <p>{collections[1].description}</p>
              <button>Shop Now</button>
            </div>
          </div>

          <div className="small-cards">
            {collections.slice(2).map((item) => (
              <div key={item.id} className="collection-card small">
                <img src={item.image} alt={item.title} />
                <div className="info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button>Shop Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
