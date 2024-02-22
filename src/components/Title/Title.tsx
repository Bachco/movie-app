import React from 'react';
import { TitleProps } from '../../api/interfaces';

const Title: React.FC<TitleProps> = ({ title, specialClass = "", headingLevel = 1 }) => {
  // Ensuring the heading level is within the range of 1 to 3. This prevents invalid heading levels
  // and ensures accessibility and semantic correctness.
  const safeHeadingLevel = Math.min(3, Math.max(1, headingLevel));

  // A mapping object that assigns CSS class names based on the heading level.
  // This allows for dynamic styling of the title depending on its semantic importance.
  const headingClassNames: Record<number, string> = {
    1: 'text-6xl mb-4',
    2: 'text-4xl mb-2',
    3: 'text-2xl mb-2',
  };

  // Composing the final class name by combining the base style from 'headingClassNames'
  // with any additional classes passed through 'specialClass'.
  const className = `${headingClassNames[safeHeadingLevel]} ${specialClass}`;

  // Dynamically creating the heading element based on the safe heading level.
  // This approach allows for flexible use of different heading levels for SEO and accessibility,
  // while keeping the styling consistent.
  const heading = React.createElement(`h${safeHeadingLevel}`, { className }, title);


  /** Template */
  return <>{heading}</>;
};

export default Title;