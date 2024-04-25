import React, { useState, useEffect } from 'react';

const TypeAnimation = ({ sequence, wrapper = 'div', speed = 50, repeat = 1 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timeout;

    const typeNextString = () => {
      const [text, duration] = sequence[currentIndex % sequence.length];
      setDisplayText('');
      typeString(text, duration);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const typeString = (text, duration) => {
      let index = 0;
      timeout = setInterval(() => {
        setDisplayText((prevText) => prevText + text[index]);
        index++;
        if (index === text.length) {
          clearInterval(timeout);
          setTimeout(typeNextString, duration || 0);
        }
      }, speed);
    };

    typeNextString();

    return () => clearInterval(timeout);
  }, [currentIndex, sequence, speed]);

  const Wrapper = wrapper;

  return <Wrapper>{displayText}</Wrapper>;
};

export default TypeAnimation;
