import React from 'react';
import './TransformSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInbox, faClipboardList, faCheck, faLightbulb } from '@fortawesome/free-solid-svg-icons';

// Add icons to library
library.add(faInbox, faClipboardList, faCheck, faLightbulb);

// Card data structure for transformation steps
const transformationCards = [
  {
    id: 1,
    title: "1° CONTATO",
    before: "-Demora para responder, perde oportunidades",
    after: "Processo simplificado e transparente",
    day: "D1",
    icon: "inbox",
    afterIcon: "lightbulb"
  },
  {
    id: 2,
    title: "ONBOARDING",
    before: "Envio de formulários",
    after: "Processo guiado e intuitivo",
    day: "D1",
    icon: "clipboard-list",
    afterIcon: "check"
  }
];

// Individual transformation card component
const TransformCard = ({ title, before, after, day, icon, afterIcon }) => {
  return (
    <div className="transform-card" data-day={day}>
      <div className="card-content before">
        <h3>{title}</h3>
        <div className="before-content">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={icon} className="icon" />
          </div>
          <p>{before}</p>
        </div>
      </div>
      <div className="card-content after">
        <div className="after-content">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={afterIcon} className="icon" />
          </div>
          <p>{after}</p>
        </div>
      </div>
    </div>
  );
};

// Main transformation section component
const TransformSection = () => {
  return (
    <>
      <section className="vectorial-element"> </section>
      <section className="transform-section">
        <div className="section-container">
          <h2 className="section-title">
            Sua parte
          </h2>
          <div className="cards-container">
            {transformationCards.map((card) => (
              <TransformCard
                key={card.id}
                title={card.title}
                before={card.before}
                after={card.after}
                day={card.day}
                icon={card.icon}
                afterIcon={card.afterIcon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TransformSection; 