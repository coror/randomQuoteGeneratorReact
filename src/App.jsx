import { useEffect, useState } from 'react';
import Quote from './components/Quote/Quote';

const colors = {
  red: 'red-400',
  blue: 'blue-400',
  green: 'green-400',
  yellow: 'yellow-400',
  purple: 'purple-400',
  // Add more colors as needed
};

const getRandomColor = () => {
  const colorKeys = Object.keys(colors);
  const randomIndex = Math.floor(Math.random() * colorKeys.length);
  return colors[colorKeys[randomIndex]];
};

const App = () => {
  const [quoteData, setQuoteData] = useState({
    text: '',
    author: '',
  });
  const [color, setColor] = useState(getRandomColor());

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setColor(getRandomColor());
        setQuoteData({ text: data.content, author: data.author });
      })
      .catch((error) => {
        console.error('Error fetching quote:', error);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div
      className={`w-screen h-screen flex flex-col text-xs text-white justify-center items-center text-center bg-${color} transition duration-700 ease-in`}
    >
      <Quote
        text={quoteData.text}
        author={quoteData.author}
        handleNewQuote={fetchQuote}
        color={color}
      />
      by Rhythm_Zero
    </div>
  );
};

export default App;
