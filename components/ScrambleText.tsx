import React, { useState, useRef, useEffect } from 'react';

interface ScrambleTextProps {
  children: string;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ children }) => {
  const [text, setText] = useState(children);
  const intervalRef = useRef<number | null>(null);
  const chars = '!<>-_\\/[]{}—=+*^?#_';

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setText(children);
  }, [children]);

  const scramble = () => {
    let iteration = 0;
    
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      setText(
        children
          .split('')
          .map((_letter, index) => {
            if (index < iteration) {
              return children[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= children.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  };
  
  const resetText = () => {
     if (intervalRef.current) clearInterval(intervalRef.current);
     setText(children);
  }

  return <span onMouseEnter={scramble} onMouseLeave={resetText} className="inline-block align-top">{text}</span>;
};

export default ScrambleText;