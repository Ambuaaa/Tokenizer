class Tokenizer{
  constructor(){
    this.charToToken = {} ;
    this.tokenToChar = {} ;
    let tokenId = 1;

    //numbers
    for(let i = 0; i<10 ; i++){
      const char = i.toString() ; // "0", "1", "2".....
      this.charToToken[char] = tokenId ;
      this.tokenToChar[tokenId] = char ;
      tokenId++ ;
    }
    //lowercase
    for(let i = 0; i< 26 ; i++){
      const char = String.fromCharCode(97 + i) ; // converted to ASCII value - 97 because 'a' starts from 97
      this.charToToken[char] = tokenId ; // adds the Key-value pair and does mapping
      this.tokenToChar[tokenId] = char // reverse mapping
      tokenId++ ; 
    }
    //UPPERCASE
    for(let i = 0; i<26 ; i++){
      const char = String.fromCharCode(65 + i)
        this.charToToken[char] = tokenId; 
        this.tokenToChar[tokenId] = char ;
        tokenId++ ;
    }
    //special character
    const specialChar = [
           ' ', '.', ',', '!', '?', ';', ':', '-', '_',
            '@', '#', '$', '%', '&', '*', '(', ')',
            '[', ']', '{', '}', '+', '=', '/', '\\',
            '|', '<', '>', '"', "'"
    ];
    for(const char of specialChar){
      this.charToToken[char] = tokenId ;
      this.tokenToChar[tokenId] = char ;
      tokenId++;
    }
  }
  //------methods------
  encode(text){
    const tokens = [] ;
    for(const char of text){
      if(this.charToToken[char]){
        tokens.push(this.charToToken[char]) ; // push it to the token array
      }
      else{
        tokens.push(0) ; // unknown value 
      }
    }
    return tokens.join(' ') // turning array of numbers into a single string 
  }
  decode(text){
    const token = text.split(' ').map( c => parseInt(c.trim())).filter(c => !isNaN(c)) ;  // takes the string , break it into characters, converts each one into a number. ignore all the white spaces, eleminate any NaN value
    let answer = '' ;
    for(const char of token){
      if(this.tokenToChar[char]){
        answer+= this.tokenToChar[char]; // if the current number is in the key value pair of tokentoChar, add it to the answer
      }
      else if(char === 0){
        answer+= '?' ;
      }
    }
    return answer ;
  }
  getMapping(){
    return this.charToToken ;
  }
}
//--------------------------

const tokenizer = new Tokenizer() ;

//encoding
document.getElementById('encodeBtn').addEventListener('click', () =>{
  const text = document.getElementById('encoderInput').value ;
  const encoded = tokenizer.encode(text) // calling our encode method from the class
  document.getElementById('resultBox').textContent = encoded ;
});

//decoding
document.getElementById('decodeBtn').addEventListener('click', () => {
  const text =  document.getElementById('decoderInput').value ;
  const decoded = tokenizer.decode(text) // calling our decode method from the class
  document.getElementById('resultBox').textContent = decoded ;
  })

// copy
document.getElementById('copyBtn').addEventListener('click', () => {
  const text = document.getElementById('resultBox').innerText ; // jiska copy karna hai uska id mil gaya (result ka )

  navigator.clipboard.writeText(text).then( () => {
    alert('Copied to clipboard');
  })
  .catch( (err) => {
    alert('Failed to copy: ', err) ; 
  })
})


