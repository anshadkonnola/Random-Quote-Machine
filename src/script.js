var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

let quotesData = [
  ["The only way to do great work is to love what you do.", "Steve Jobs"],
  ["I would rather die of passion than of boredom.", "Vincent van Gogh"],
  ["Life isn’t about getting and having, it’s about giving and being.", "Kevin Kruse"],
  ["When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", "Henry Ford"],
  ["Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.", "Booker T. Washington"],
  ["Remember no one can make you feel inferior without your consent.", "Eleanor Roosevelt"]
];



class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse",
      color: "#970052"
    };
    this.newQuote = this.newQuote.bind(this);
  }
  newQuote(){
    let quoteIdx = Math.floor(Math.random()*quotesData.length);
    this.setState({
      quote: quotesData[quoteIdx][0],
      author: quotesData[quoteIdx][1],
      color: colors[Math.floor(Math.random()*colors.length)]
    });
  }
  render() {
    document.body.style.background = this.state.color;
    return (
      <div class="quote-box" >
        <div class="quote" style={{color: this.state.color}}>
        <i class="fa fa-quote-left"></i>
        <span id="text">
          {this.state.quote}
        </span>
         </div>
        <div class="author" id="author" style={{color: this.state.color}}>
            -
            <span id="author-text">{this.state.author}</span>
          </div>
          <div class="buttons">
            <a class="button" id="tweet-quote" title="Tweet this quote!" target="_top" href="twitter.com/intent/tweet" style={{backgroundColor: this.state.color}}>
            <i class="fa fa-twitter"></i>
          </a>
            <a class="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" href="" style={{backgroundColor: this.state.color}}>
            <i class="fa fa-tumblr"></i>
          </a>
           
          <button id="new-quote" class="button" onClick={this.newQuote} style={{backgroundColor: this.state.color}}>New quote</button>
          </div>
      
      </div>
    );
  }
}


const rootNode = document.getElementById('quote-box');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(QuoteBox));