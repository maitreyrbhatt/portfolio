var quotes = [
    "Cyber-Security is much more than a matter of IT.",
    "Privacy is a Myth.",
    "Cybercrime is the greatest threat to every company in the world.",
    "Privacy is not for the passive.",
    "When you say, 'I have nothing to hide', you’re saying, 'I don’t care about this right'.",
    "Privacy is not an option, and it shouldn’t be the price we accept for just getting on the Internet.",
];
var creater = ["― Stephane Nappo", "- Unknown", "- Ginni Rommety", "- Jeffrey Rosen", "- Edward Snowden", "- Gary Kovacs"];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber] + "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + creater[randomNumber];
}