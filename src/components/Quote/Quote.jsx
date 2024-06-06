import { TwitterIcon, TwitterShareButton } from 'react-share';

const Quote = ({ text, author, handleNewQuote, color }) => {
  const tweetContent = `"${text}" - ${author}`;

  return (
    <div
      id='quote-box'
      className={`bg-white rounded pt-7 pb-7 pl-10 pr-10 max-w-lg mb-3 text-${color} w-[32rem] min-h-64`}
    >
      <div id='quote-content' className="transition duration-700 ease-in">
        <div id='text' className={`text-3xl`}>
          ❝ {text}
        </div>
        <div id='author' className={`text-lg text-right mt-6 text-transition`}>
          - {author}
        </div>
      </div>

      <div className='flex justify-between mt-5 relative '>
        <TwitterShareButton
          className=''
          url='https://twitter.com/intent/tweet'
          title={tweetContent}
          id='tweet-quote'
          hashtags={[author.replace(/\s+/g, '')]}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
        <button
          id='new-quote'
          onClick={handleNewQuote}
          className={`text-white bg-${color} pr-4 pl-4 h-9 rounded-md text-center flex justify-center items-center text-sm transition duration-700 ease-in`}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
