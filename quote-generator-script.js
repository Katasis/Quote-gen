// Declarations 
const newQuoteBtn = document.querySelector('button.newQuote-btn')
const tweetBtn = document.querySelector('button.tweet-btn')
const quoteContainer = document.querySelector('div.quote-container')
const quote = document.querySelector('span.quote')
const author = document.querySelector('div.author')
const proxyServerAcc = 'https://cors-anywhere.herokuapp.com/corsdemo'

// Quote fetching async function
async function getQuote() { try {
    const quoteUrl = 'https://zenquotes.io/api/random';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let response = await fetch(proxyUrl + quoteUrl);
    let data = await response.json();
    quote.innerText = data[0].q
    author.innerText = data[0].a
}   catch (err) {
        // Request temporarily access to proxy server
        window.open(proxyServerAcc)
       }
    }

// Tweet the quote
function tweet() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.innerText} - ${author.innerText}`
    window.open(twitterUrl)
}
// Button event listeners
newQuoteBtn.addEventListener('click', getQuote)
tweetBtn.addEventListener('click', tweet)