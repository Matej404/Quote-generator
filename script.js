const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const quotes = [
    'The journey of a thousand miles begins with one step.',
    'Life is what happens when you’re busy making other plans.',
    'If you’re going through hell, keep going.', 
    'Strive not to be a success, but rather to be of value.',
    'Those who dare to fail miserably can achieve greatly.',
    'Never let the fear of striking out keep you from playing the game.'
]

const randomQuote = () => {
    let randQoute = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = randQoute;
}

btn.addEventListener('click', randomQuote);