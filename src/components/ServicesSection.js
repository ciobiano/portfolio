import React from 'react';
import { MdDesktopMac, MdCode } from 'react-icons/md';
import { FaWordpress } from 'react-icons/fa';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="I enjoy bringing ideas to life in the browser.I use HTML, CSS, and JavaScript to produce responsive websites and web apps that provide users the best and most appropriate experience for browser."
          />
          <ServicesSectionItem
            icon={<FaWordpress />}
            title="Wordpress Dev"
            desc=" My focus when using WordPress is on ease of use and maintainability; making sure you can manage your content as simply and quickly as possible."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
