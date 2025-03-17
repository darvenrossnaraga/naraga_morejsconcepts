const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const copyBtn = document.getElementById('copyBtn');
const statusMessage = document.getElementById('statusMessage');

function fetchQuote() {
    quoteElement.textContent = 'Loading quote...';
    authorElement.textContent = '';

    fetch('https://dummyjson.com/quotes')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.quotes.length);
            const randomQuote = data.quotes[randomIndex];

            quoteElement.textContent = `"${randomQuote.quote}"`;
            authorElement.textContent = `- ${randomQuote.author}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteElement.textContent = 'Failed to load quote. Please try again.';
            authorElement.textContent = '';
        });
}

function copyQuote() {
    const textToCopy = `${quoteElement.textContent} ${authorElement.textContent}`;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            statusMessage.textContent = "Quote copied to clipboard!";
            setTimeout(() => statusMessage.textContent = "", 2000);
        })
        .catch(err => console.error('Error copying text:', err));
}

newQuoteBtn.addEventListener('click', fetchQuote);
copyBtn.addEventListener('click', copyQuote);

fetchQuote();
