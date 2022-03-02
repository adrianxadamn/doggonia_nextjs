import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import classes from './accordion-tabs.module.scss';
import ExpandableTab from './expandable-tab';

const AccordionTabs = ({content}) => {
  const parsedContent = ReactHtmlParser(content);
  return (
    <div className={classes.accordionTabs}>
      {parsedContent.map((item, index) => {
        if (item.type === 'ul') {
          return <ExpandableTab key={index}>{item}</ExpandableTab>
        }
        return item;
      })}
    </div>
  );
};

export default AccordionTabs;