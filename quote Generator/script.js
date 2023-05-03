let quote = document.getElementById('text');
let author = document.getElementById('author');
let tweet = document.getElementById('tweet');
let newQuote = document.getElementById('newQuote');
let speech1 = document.getElementById('speech');
let copy = document.getElementById('copy');

newQuote.addEventListener("click", () => {
    newQuote.textContent = "Loading..."
    fetch("https://api.quotable.io/random")
        .then(result => result.json())
        .then(data => {
            console.log(data);
            newQuote.textContent = "New Quote";
            quote.textContent = `${data.content}`;
            author.textContent = `${data.author}`;
            copy.textContent = "Copy";
        });
});

speech1.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quote.innerText}`);
    speechSynthesis.speak(utterance);

});

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(`${quote.innerText}`);
    copy.textContent = "Copied !";
});

tweet.addEventListener("click", ()=>{
    let content = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
    window.open(content, "_blank");
})