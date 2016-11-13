const app = "I don't do much.";

const digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking: function(){
    setInterval(this.time += 1, 1000)
  }
}

function censor(word, string) {
  const matchWord = new RegExp(word, 'gi')
  return string.replace(matchWord, 'BLEEP');
}


const violenceCensor = censor.bind(null, 'violence');

const drugsCensor = censor.bind(null, 'drugs');