import React from 'react';
import { TitleProps } from '../../api/interfaces';

const Title: React.FC<TitleProps> = ({ title, specialClass = "", headingLevel = 1 }) => {

  const safeHeadingLevel = Math.min(3, Math.max(1, headingLevel));
  const headingClassNames: Record<number, string> = {
    1: 'text-6xl mb-4',
    2: 'text-4xl mb-2',
    3: 'text-2xl mb-2',
  };

  const className = `${headingClassNames[safeHeadingLevel]} ${specialClass}`;

  const heading = React.createElement(`h${safeHeadingLevel}`, { className }, title);


  return <>{heading}</>;
};

export default Title;