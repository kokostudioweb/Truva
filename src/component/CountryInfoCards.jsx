// components/CountryInfo.js
import React from "react";


const highlightWords = [
  "15°C to 35°C",
  "Vietnamese Dong (VND)",
  "Vietnamese",
  "English",
  "French",
  "Chinese",
  "Russian",
  "March and April",
  "October and November",
  "Singapore Dollar (SGD)",
  "Malay",
  "Tamil",
  "Mandarin",
  "June to August",
];

const CountryInfoCards = ({ cards }) => {
  return (
    <div className="info-container">
      {cards.map((card, index) => (
        <div
          key={index}
          className="info-card"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <img src={card.icon} alt={`${card.title} Icon`} className="icon" />
          <h2>{card.title}</h2>
          <ul>
            {card.items.map((item, idx) => (
              <li key={idx}>
                {item.split(new RegExp(`(${highlightWords.join("|")})`, "g")).map(
                  (part, i) =>
                    highlightWords.includes(part) ? (
                      <strong key={i}>{part}</strong>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CountryInfoCards;
