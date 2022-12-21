
var qutoe=[
    {'author': ' Frank Zappa', 
    'quote': 'So many books, so little time.',
   },
   {'author': 'Epictetus', 
    'quote': 'It\'s not what happens to you, but how you react to it that matters.'
   },
   {'author': 'Frank Sinatra', 
    'quote': 'The best revenge is massive success.'
   },
   {'author': 'Wayne Gretzy', 
    'quote': 'You miss 100% of the shots you don\'t take.'
   },
   {'author': 'Nelson Mandela', 
    'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
   },
   {'author': 'Elbert Hubbard', 
    'quote': 'Do not take life too seriously. You will not get out alive.'
   },
]


function addQutoe(){
    var random = Number.parseInt(Math.random()*qutoe.length + 1);
    document.querySelector('#q-body').textContent = `\"${qutoe[random].quote}\"`;
    document.querySelector('#heading').textContent = `--${qutoe[random].author}`;
}