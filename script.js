 /**
  *  
  *  
  *  
  *  
  *  




center attribute on everything HTML <center >?
  goal {
      don't cut the word in half in acryp
      choose   num of hints for morbit and pollux input type range https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range  
      med // -> tell person cryptogram_de is incomplete 
      make cryptogram CSS better look ing
      no hard 4) if ( ) quote image_src == null then put no image in pollux morbit and aristocrat_de
    morbit pollux work on quotes with punction 
    can pollux end in "xx"
    7 HARD > CREATE MORBIT AND pollux NO NEED TO CONVERT TO English JUST FIGURE OUT WUT MORSE IS THERE 

    
       high light input box in aristocrat_de  and add arrow mobilitiy


    cryptogram en i can't be i   letter can't be same letter when you rearragne the letters
      more quotes in word.quotes d
      hard 100000 voice recognition to detect ans for each problem <= dumb idea
      ez 2 ) show image of morse code (so people don't NEED to memorize - to secrely mind games - if you don't need to memorize mors e you don't ) 
     ez 2 add vigenere table img (bc no one knoe formula)

     med 4/5 aritocrat - cryptogram 
       (med 6) shift click show answer -> cheat code 

    med 4-7) add high light feature to all number selected like cryptogram "https://cryptograms.puzzlebaron.com/play.php"
coreect/ wrong list up add up upown while top is most recent  + clear button for each div_showing

      ez 4) atbash random sentance -> ennable it to do "'" (unknown_characters)

        
       hard 8-9 make moible version of pollux and morbit for different screen sizes < hard 
          hard 15-aristocrat_de   
        
// does vigenere cipher decoding on toebes.com work? 

sections to add -> 
      make practice test => with all the question  
    random adition and subtraction by num -26 and 26 
    the invers of letter ex n -> 13 and -13 
      make option for converting -> plain text -> to atbash,affince caesar, baconian, or idk encrytp and decrypt {
          -atbash 
          -caesar shift en  
          -caesar shift de 
          -affine_en
          -affine_de 
          -vigenere_en  
          -vigenere_de 
          -baconian
          -pollux 
          -morbit
          -aristocrat_en  
          -aristocrat_de   
            

      }
      inspiration  https://toebes.com/codebusters/ -> DiV B 
       s   
       
       a inverse table in affine_de
     => morse -  morbit

---------------------------------------------- completed goals
    med 5 bug glitch have button fill in what we know( fill all the hints automatically) for pollux and morbit 

      ez 3) change table of morbit to set numbers as input and .. , .- , .x , -. , -- -x x. x- xx to be in order so person on website knows what char morse is left 
      
      show time it takes to solve problem 
      thing like hint but shows what you typed in in a quick summary with a table like the hints  and already has hints inputed in it but can be change like <input > it must be h1 tag 

      add <br> between timer and image of quote
       
      show image after person get quote right or wrong

    2) pollux encryption 
 baconian encoding -> doesnt work on baconian 8 or 19 

 baconian decryptions 
 
      1) baconian cipher  -> check 
            make norm to baconian 
            make baconian to norm 
            -> plain word to norm num -> baconian -> ABAa form 
    


        -1 choose what each num (0,1,2,3,4,5,6,7,8,9) is equal to " .  " , "-" , or "x"
        -2 see the morse for 
        
        -2 -> for each letter 

pollux 

affine _sort by a 
affine metion a and b in wrong answer 
built mod num like 52 and any num between -500 , 500 to get mod of it by 26 
clear every box after enter -> check 

 vigenere front visal encrpyted and decryption
      glitch in morse #4 -> when changing the option ->
      add press enter and enter button clicks to each div  -> check 

 vigenere cipher -> encrpytion and decryption -> check  
      atbash cipher  -> check 
      give and atbash encrpytion question -> check 
      
      give and atbash decrpytion question -> check

      add number  to morse  -> check 
      ceasear shift -> check 
      give and ceasear encrpytion question  -> check
      give and ceasear decrpytion question -> check 
      
      affine cipher -> check 
      give and affine encrpytion question -> check 
      give and affine decrpytion question -> check 
      

     



      -> give num {0-25 inclusive}-> guess letter -> check   
      -> give letter {a-z} -> guess num -> check  
      -> give morse guess letter -> check 
      -> letter guess morse -> check 


    


  }
  */

let hr
let mn
let sc
let ms
let num1,num2;
let current_times = [] 

// class Stopwatch_ {
//     constructor() {
//         var timer = createTimer(),
//     startButton = createButton("start", start),
//     stopButton = createButton("stop", stop),
//     resetButton = createButton("reset", reset),
//     offset,
//     clock,
//     interval;

//   // default options
//   options = options || {};
//   options.delay = options.delay || 1;
//   this.op = elem.id 
//   print(this.op)
//   // append elements     
//   elem.appendChild(timer);
//   elem.appendChild(startButton);
//   elem.appendChild(stopButton);
//   elem.appendChild(resetButton);

//   // initialize
//   reset();

//     }
//      // private functions
//     createTimer() {
//       let item = document.createElement("span");
//       item.id = this.op + "hi"
//     return item 
//   }

//     createButton(action, handler) {
//     var a = document.createElement("a");
//     a.href = "#" + action;
//     a.innerHTML = action;
//     a.addEventListener("click", function(event) {
//       handler();
//       event.preventDefault();
//     });
//     return a;
//   }

//     start() {
//     if (!interval) {
//       offset = Date.now();
//       interval = setInterval(update, options.delay);
//     }
//   }

//     stop() {
//     if (interval) {
//       clearInterval(interval);
//       interval = null;
//     }
//   }

//    reset() {
//     clock = 0;
//     render(0);
//   }

//    update() {
//     clock += delta();
//     render();
//   }

//    render() {
//     timer.innerHTML = clock / 1000;
//   }

//    delta() {
//     var now = Date.now(),
//       d = now - offset;

//     offset = now;
//     return d;
//   }

// //   // public API
// //   this.start = start;
// //   this.stop = stop;
// //   this.reset = reset;
// // };

// }

var Stopwatch = function(elem, options) {

  var timer = createTimer(),
    startButton = createButton("start", start),
    stopButton = createButton("stop", stop),
    resetButton = createButton("reset", reset),
    getTimeButton = createButton("get_time", get_time),
    offset,
    clock,
    interval;

  // default options
  options = options || {};
  options.delay = options.delay || 1;
  this.op = elem.id 
//   print(this.op)
  // append elements     
  elem.appendChild(timer);
//   elem.appendChild(startButton);
//   elem.appendChild(stopButton);
  elem.appendChild(resetButton);
//   elem.appendChild(getTimeButton);

  // initialize
  reset();

  // private functions
  function createTimer() {
      let item = document.createElement("span");
      item.id = this.op + "hi"
    return item 
  }

  function createButton(action, handler) {
    var a = document.createElement("a");
    a.href = "#" + action;
    a.innerHTML = action;
    a.addEventListener("click", function(event) {
      handler();
      event.preventDefault();
    });
    return a;
  }

  function start() {
    if (!interval) {
      offset = Date.now();
      interval = setInterval(update, options.delay);
    }
  }

  function stop() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  function reset() {
    clock = 0;
    render(0);
  }

  function update() {
    clock += delta();
    render();
  }

  function render() {
      let time_in_ms = clock/ 1000 

    timer.innerHTML = Math.round(time_in_ms *10) / 10 ;
  }

  function delta() {
    var now = Date.now(),
      d = now - offset;

    offset = now;
    return d;
  }
  function get_time() {
    //   print(clock/1000) 
     let time_in_ms = clock/ 1000 

         return  Math.round(time_in_ms *10) / 10 ;
//    Math.round(clock / 100)/10 
  }

  // public API
//   this.clock = clock 
  this.start = start;
  this.stop = stop;
  this.reset = reset;
  this.get_time = get_time;
};







// programmatic examples
// var one = document.getElementById("timer-1");
// timer_1 = new Stopwatch(one);
// timer_1.start();

// // timer_1.reset()
// var two = document.getElementById("timer-2");
// timer_2 = new Stopwatch(two);
// timer_2.start();

let timers = []
for (let i=1; i<=21; i++) {
    timers.push(new Stopwatch(document.getElementById(`timer-${i}`))) 

}

// https://stackoverflow.com/questions/20318822/how-to-create-a-stopwatch-using-javascript













function print(x) {
    console.log(x)
}
class Hint {
    constructor(num,value) {
        this.num = num 
        this.value = value
    }
}
class Quote {
    constructor(quote, author,img_src) {
        this.quote = quote 
        this.author = author
        this.img_src = "img/" + img_src 
        this.unknown_char = ["!","?",".",",",";",":","@","#","$","%","&"]
    }
    fix() {// no punctionation or number 
        // for (let i=0; i < this.quote.length; i++) {
        //     if (word.char_in_list(this.quote[i],this.unknown_char) {

        //     }
        // }

    }
}
 
class MorseQuestion {
    constructor(question, hints,) {
        this.question= question 
        this.hints = hints
         
    }
}
class Word {
    constructor(word) {
        this.word = word 
        this.alphabet_list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        this.words = [

            "tire",
"reject",
"giant",
"development",
"word",
"ear",
"shiny",
"cowardly",
"skip",
"realize",
"careless",
"squeak",
"writer",
"please",
"null",
"embarrass",
"sparkling",
"victorious",
"solid",
"damaging",
"score",
"knowledge",
"tiger",
"page",
"orange",
"lamp",
"summer",
"young",
"trip" ,
"nap",
"change",
"beneficial",
"society",
"wink",
"invite",
"milk",
"acid",
"voice",
"clever",
"hat",
"heal",
"cheer",
"vessel",
"rust",
"ring",
"twist",
"street",
"flight",
"fixed",
"fireman",
"succeed",
"judge",
"tour",
"desk",
"existence",
"cellar",
"fresh",
"clap",
"drum",
"second",
"delay",
"donkey",
"tangible",
"scare",
"tricky",
"fool",
"creature",
"roll",
"exciting",
"rake",
"explain",
"flow",
"mind",
"book",
"truck",
"happy",
"uneven",
"cycle",
"chess",
"pawn",
"roblox",
"fortnite",
"apple",
"iphone",
"laptop",
"mouse",
"LG",
"calculator",
"sock",
"math",
"fitbit",
"brown",


        ]

        this.sentences = [
"I am so tired.", // 0 
"Ask your guest if you could serve them tea.", //1
"My grandmother's death was a big shock.", //2
"He bonded with his father over music.", //3
"Doing more exercise will help you get rid of a few kilos.",//4 
"It's so expensive I want to die.", //5
"You should brush your teeth soon.", //6
"She had to start saving in October so she could afford to buy Christmas presents for all her family and friends.", //7
"It is interesting to read old newspaper articles and hear about all the famous people who are no longer famous.", //8
"What you're suggesting is just not practical.",//9  
"On the other hand, I feel like I just have to do it for my sanity.", //10
"One morning, I found an elephant in my pajamas.", //11
"His shirt is covered in sweat.", //12
"The stars are so bright tonight.", //13
"Lenora only had eight fingers, after losing both of her pinkies to a freak accident with a hay baler.", //14
"It's so sunny outside.",//15 
"It's a big deal to Tom, I think.",//16 
"Sit down and cross your legs, please!",//17 
"We shall devote today’s lesson to the study of the English verb ‘to get’.", //18
"You’ll get a chance to come closer to nature, meet lots of different animals, birds, and plants."//19, 
        ]

        this.fourteen_all_alternator = 0  
        this.fourteen_1_alternator = 0  
        this.fourteen_3_alternator = 0  
        this.fourteen_5_alternator = 0  
        this.fourteen_7_alternator = 0  
        this.fourteen_9_alternator = 0  
        this.fourteen_11_alternator = 0   
        this.fourteen_15_alternator = 0  
        this.fourteen_17_alternator = 0  
        this.fourteen_19_alternator = 0  
        this.fourteen_21_alternator = 0  
        this.fourteen_23_alternator = 0  
        this.fourteen_25_alternator = 0  
        this.fourteen_26_alternator = 0 
          
           this.num1_options = [1,3,5,7,9,11,15,17,19,21,23,25,26] 
         this.num2_options = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25] 


        this.quotes = []
        this.quotes.push(new Quote("life is like riding a bicycle to keep your balance you must keep moving","Albert Einstein","quote1.jpg")) 
        this.quotes.push(new Quote("anyone who has never made a mistake has never tried anything new","Albert Einstein","quote2.jpg"))
        this.quotes.push(new Quote("Nothing in life is quite as important as you think it is while you're thinking about it.","Daniel Kahneman",null))
        this.quotes.push(new Quote("A strong, positive self-image is the best possible preparation for success.","Joyce Brothers","quote3.jpg"))
        this.quotes.push(new Quote("It's a wonderful thing to be optimistic. It keeps you healthy and it keeps you resilient.","Daniel Kahneman","quote4.jpg"))

        this.quotes.push(new Quote("Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.","Albert Schweitzer","quote5.jpg"))
        this.quotes.push(new Quote("If you have a dream, give it a chance to happen.","Richard M. DeVos",null))
        this.quotes.push(new Quote("I can't change the direction of the wind, but I can adjust my sails to always reach my destination.","Jimmy Dean","quote6.jpg"))
        this.quotes.push(new Quote("If opportunity doesn't knock, build a door.","Milton Berle","quote7.jpg"))
        this.quotes.push(new Quote("Alone we can do so little; together we can do so much.","Helen Keller","quote9.jpg"))
        this.quotes.push(new Quote("The best preparation for tomorrow is doing your best today.","H. Jackson Brown, Jr.","quote10.jpg"))
        this.quotes.push(new Quote("It always seems impossible until it's done.","Nelson Mandela","quote11.jpg"))
        this.quotes.push(new Quote("A creative man is motivated by the desire to achieve, not by the desire to beat others.","Ayn Rand","quote12.jpg"))
        this.quotes.push(new Quote("You just can't beat the person who never gives up.","Babe Ruth","quote12.jpg"))
        this.quotes.push(new Quote("Laughter is an instant vacation.","Milton Berle","quote8.jpg"))
        // this.quotes = []


        // this.quotes.push(new Quote())
   
    }
    remove_punction() {
        for (let item of this.quotes) {
            let d = item.quote 
            // for (let name of collection) {
                
            // }            
            for (let i = d.length-1; i >=0; i--) {
                if (this.char_in_list(d[i],[",",".",":",";",'"',"'"])) {
                    d = this.del_char(d,i)
                }
            }
            item.quote = d
         }
    }
    char_in_list(char,list) {
        for (let item of list) {
            if (char == item) {
                return true 
            }
        }
        return false 
    }
    del_char(str, x) {
        return str.slice(0,x) +str.slice(x+1,str.length)
    }
    fourteen_all_alternator_alternate() {
         this.fourteen_all_alternator =  (this.fourteen_all_alternator+1)%(this.num1_options.length * this.num2_options.length)
        //  print(`total numbers in all: ${(this.num1_options.length * this.num2_options.length)}`)
    }
    fourteen_1_alternator_alternate() {
         this.fourteen_1_alternator =  (this.fourteen_1_alternator+1)%25
    }
    fourteen_3_alternator_alternate() {
         this.fourteen_3_alternator =  (this.fourteen_3_alternator+1)%25
    }
    fourteen_5_alternator_alternate() {
         this.fourteen_5_alternator =  (this.fourteen_5_alternator+1)%25
    }
    fourteen_7_alternator_alternate() {
         this.fourteen_7_alternator =  (this.fourteen_7_alternator+1)%25
    }
    fourteen_9_alternator_alternate() {
         this.fourteen_9_alternator =  (this.fourteen_9_alternator+1)%25
    }
    fourteen_11_alternator_alternate() {
         this.fourteen_11_alternator =  (this.fourteen_11_alternator+1)%25
    }
    fourteen_15_alternator_alternate() {
         this.fourteen_15_alternator =  (this.fourteen_15_alternator+1)%25
    }
    fourteen_17_alternator_alternate() {
         this.fourteen_17_alternator =  (this.fourteen_17_alternator+1)%25
    }
    fourteen_19_alternator_alternate() {
         this.fourteen_19_alternator =  (this.fourteen_19_alternator+1)%25
    }
    fourteen_21_alternator_alternate() {
         this.fourteen_21_alternator =  (this.fourteen_21_alternator+1)%25
    }
    fourteen_23_alternator_alternate() {
         this.fourteen_23_alternator =  (this.fourteen_23_alternator+1)%25
    }
    fourteen_25_alternator_alternate() {
         this.fourteen_25_alternator =  (this.fourteen_25_alternator+1)%25
    }
    fourteen_26_alternator_alternate() {
         this.fourteen_26_alternator =  (this.fourteen_26_alternator+1)%25
    }
    random_value_for_a_affine_cipher() {
        let list = [1,3,5,7,9,11,15,17,19,21,23,25]
        return list[this.random(0,list.length)]
    }
    random_word() {
        return this.words[this.random(0,this.words.length)]
    }
    index_to_letter(index) {// give num (0-25 inclusive) -> return the letter 
        return this.alphabet_list[this.mod(index)]
    }
    letter_give_index(letter) { // letter -> index (0-25 inclusive)
        return this.alphabet_list.indexOf(letter.toLowerCase())
    }
    mod(num) {
        let x = num
        if (x < 0) {
            x += 2600
        }
        if (x > 25) {
            return x%26
        }
        return x 
        mod(x)

        // recursive function 
    }
    char_in_list(char,list) {
        let item = ""
        for (item of list) {
            if (item == char) {
                return true
            }
        }
        return false 
    }
    characters_in_list(chars,list) {// or 
        let char = ""
        let item = ""
        for (char of chars) {
            if (this.char_in_list(char,list)) {
                return true
            }
        }
        return false
    }
    atbash(the_word) {// mirror
    let unknown_char = [ "'",".",",",'"'," "]
  

        let final_word = ""
        for (let i=0; i<the_word.length; i++) {
            //  print(this.word[i])
            // print(this.letter_give_index(this.word[i]))
            if (!this.char_in_list(the_word[i],unknown_char)) { // if char not in list of unknown chare 

                final_word += this.index_to_letter(25-this.letter_give_index(the_word[i])) 
            }else {
                final_word += word[i]
            }
        }
        return final_word
    }
    shift(word,num) {
         let final_word = ""
        for (let i=0; i<word.length; i++) {
            //  print(word[i])
            // print(this.letter_give_index(word[i]))
            if (word[i] != " ") {

            final_word += this.index_to_letter(this.letter_give_index(word[i])+num) 
            }else {
                final_word += " "
            }
        }
        return final_word
    }
    affine_encrypt(word,a,b) {
        let unknown_char = [ "'",".",",",'"'," "] 

         
        let final_word = ""

        for (let i=0; i<word.length; i++) {
            if (this.char_in_list(word[i],unknown_char)) {
                // this.char_in_list(word[i],unknown_char)

                final_word += word[i] 
            
            }else {
                final_word += this.index_to_letter(a*this.letter_give_index(word[i])+b) 
            }     
        }
        return final_word
    }
    a_inverse(a) {
        if (a==1) {
            return 1
        }else if (a==3) {
            return 9
        }else if (a==5) {
            return 21
        }else if (a==7) {
            return 15
        }else if (a==9) {
            return 3
        }else if (a==11) {
            return 19
        }else if (a==15) {
            return 7 
        }else if (a==17) {
            return 23
        }else if (a==19) {
            return 11
        }else if (a==21) {
            return 5
        }else if (a==23) {
            return 17
        }else if (a==25) {
            return 25
        }
    }
    list_of_morse() {
        return [".","-","..","--",".-","-.","...","---","..-","--.",".-.","-.-","-..",".--","....","...-","..-.","--.-",".-..","-.--","-...",".---","-..-",".--.","-.-.","--..","-----",".----","..---","...--","....-",".....","-....","--...","---..","----.",]
    }
    random(min, max) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        return Math.round(Math.random() * (max - min) + min);
    }
    random_morse_len_1() {
        // let num = Math.random()
        // if (num <.5) {
        //     return this.list_of_morse[0]
        // }else if (num >.5) {
        //     return this.list_of_morse[1]
        // }
         return this.list_of_morse()[this.random(0,1)]
    }
    random_morse_len_2() { // 2- 5 inclusive 
         return this.list_of_morse()[this.random(2,5)]
    }
    random_morse_len_3() { // 2- 5 inclusive 
         return this.list_of_morse()[this.random(6,13)]
    }
    random_morse_len_4() { // 2- 5 inclusive 
         return this.list_of_morse()[this.random(14,25)]
    }random_morse_len_5() {
         return this.list_of_morse()[this.random(26,35)]

    }
    random_morse_len_all() { // 2- 5 inclusive 
         return this.list_of_morse()[this.random(0,this.list_of_morse().length-1)]
    }
    letter_to_morse(letter) {
        let list = this.list_of_morse()

        for (let i = 0; i< list.length; i++ ) {
            let morse_word = list[i]
            // print(morse_word)
            if (letter == this.morse_to_letter(morse_word)) {
                return morse_word;
            }
        }
    }
    morse_to_letter(morse) {
     
        if (morse == ".") {
            return "e"
        }else if (morse == "-") {
            return "t"
        }else if (morse == "..") {
            return "i"
        }else if (morse == "--") {
            return "m"
        }else if (morse == ".-") {
            return "a"
        }else if (morse == "-.") {
            return "n"
        }else if (morse == "...") {
            return "s"
        }else if (morse == "---") {
            return "o"
        }else if (morse == "..-") {
            return "u"
        }else if (morse == "--.") {
            return "g"
        }else if (morse == ".-.") {
            return "r"
        }else if (morse == "-.-") {
            return "k"
        }else if (morse == "-..") {
            return "d"
        }else if (morse == ".--") {
            return "w"
        }else if (morse == "....") {
            return "h" 
        }else if (morse == "...-") {
            return "v"
        }else if (morse == "..-.") {
            return "f"
        }else if (morse == "--.-") {
            return "q"
        }else if (morse == ".-..") {
            return "l"
        }else if (morse == "-.--") {
            return "y"
        }else if (morse == "-...") {
            return "b"
        }else if (morse == ".---") {
            return "j"
        }else if (morse == "-..-") {
            return "x"
        }else if (morse == ".--.") {
            return "p"
        }else if (morse == "-.-.") {
            return "c"
        }else if (morse == "--..") {
            return "z"
        }else if (morse == "-----") {
            return "0"
        
        }else if (morse == ".----") {
            return "1"
        
        }else if (morse == "..---") {
            return "2"
        
        }else if (morse == "...--") {
            return "3"
        
        }else if (morse == "....-") {
            return "4"
        
        }else if (morse == ".....") {
            return "5"
        
        }else if (morse == "-....") {
            
            return "6"
        
        }else if (morse == "--...") {
            return "7"

        
        }else if (morse == "---..") {

            return "8"
        }
        else if (morse == "----.") {

            return "9"
        }
    } 
    affine_decrypt(word,a,b) {
        let final_word = ""
        for (let i=0; i<word.length; i++) {
             
            let number = this.letter_give_index(word[i]) 
            let a_inverse = this.a_inverse(a)
            if (word[i] != " ") {
            final_word += this.index_to_letter(a_inverse*(number-b)) 

            }else {
                final_word += " "
            }
        }
        return final_word
    }
    random_sentence() {
        return this.sentences[this.random(0,this.sentences.length-1)]
        // return this.sentences[15]
    }
    vigenere_en(word,keyword) {
        let final_result = ""
        let word_len = word.length 
        let keyword_length = keyword.length 
        let repeat_keyword_num = Math.ceil(word_len/keyword_length) 
        let repeat_keyword = this.multiply_word_by_n(keyword,repeat_keyword_num) 
        // #2 add the word 
        for (let i=0; i< word_len; i++) {
            final_result += this.add_letters(word[i],repeat_keyword[i]) 
        }
        return final_result
    }
    vigenere_de(word,keyword) {
        let final_result = ""
        let word_len = word.length 
        let keyword_length = keyword.length 
        let repeat_keyword_num = Math.ceil(word_len/keyword_length) 
        let repeat_keyword = this.multiply_word_by_n(keyword,repeat_keyword_num) 
        // #2 add the word 
        for (let i=0; i< word_len; i++) {
            final_result += this.subtract_letters(word[i],repeat_keyword[i]) 
        }
        return final_result
    }
 
    add_letters(letter1,letter2) {
        let num = this.letter_give_index(letter1) + this.letter_give_index(letter2) 
        return this.index_to_letter(num)
    }
    subtract_letters(letter1,letter2) {
        let num = this.letter_give_index(letter1) - this.letter_give_index(letter2) 
        return this.index_to_letter(num)
    }
    multiply_word_by_n(word,n) {
        let final_result = ""
        for (let i=0; i <n; i++) {
            final_result += word 
        }
        return final_result
    }
    normal_num_to_baconian(num) {
        if (num > 20) {
            return num - 2 
        }else if (num >8) {
            return num - 1 
        }else {
            return num 
        }
    }
    baconian_num_to_normal_num(num) {
        if (num == 8) {// i or j -> use common sense 

        }else if (num == 19) {// u or v -> use common sense 

        }else if (num  >= 20  ) {
            return num + 2 
        }else if (num >8) {
            return num +1
        }
    }
    baconian_encrypt(word) {
        let encrypted_text = ""
        for (letter of word) {
            // norm to baconian 
            let letter_num = this.letter_give_index(letter)
            let baconian_num = this.normal_num_to_baconian(letter_num)
            // baconian to ABAABA form 
            let baconian_aabaa_form = this.num_to_binary(baconian_num)
            encrypted_text += baconian_aabaa_form

        }
        return encrypted_text
    } 
    num_to_binary(num) {
        let number = num // be able to change this value 

        let letter_corresponding_w_zero = "a"
        let letter_corresponding_w_one = "b"


        let list_binary_in_reverse = []
        while (number != 0) {
            let quotient = Math.floor(number /2) 
            let remainder = number % 2 
            list_binary_in_reverse.push(remainder) 
            // print(`quotient ${quotient}`)
            // print(`remainder${remainder}`)
            number = quotient 


        }
        // print(list_binary_in_reverse)
        // create duplicate of list_binary_in_reverse 
        let list_binary = [] 
        for (let i=list_binary_in_reverse.length-1; i >=0 ; i -= 1) {
            list_binary.push(list_binary_in_reverse[i]) 
            // print(`index: ${i}`)
        }

        // print(list_binary)
        // make the binary code length of 5 if it has a length less than 5 

     
        // create string w/ "a" and "b" based on list_binary 
        let final_result = ""  // must be length of 5 
        for (let i = 0; i<list_binary.length; i++) {
            let item = list_binary[i]

            if (item == 0) {
                final_result += letter_corresponding_w_zero
            }else if (item == 1) {

                final_result += letter_corresponding_w_one 
            }
        }

        // make final_result a length of 5 if it is less by inseting zeros in front 
        while (final_result.length <5) {
            final_result = letter_corresponding_w_zero + final_result 
        }
        // print(list_binary_in_reverse)
        return final_result; 
    }
    pollux_encrypt(word) {
        // convert number to letter form 
        // step 1 turn each num to ".","-", or "x"

        let options = [".","-","x"] // can't be the same
        let zero  =  options[0]
        let one   =  options[1]
        let two   =  options[2]
        let three =  options[this.random(0,options.length-1)]
        let four  =  options[this.random(0,options.length-1)]
        let five  =  options[this.random(0,options.length-1)]
        let six   =  options[this.random(0,options.length-1)]
        let seven =  options[this.random(0,options.length-1)]
        let eight =  options[this.random(0,options.length-1)]
        let nine  =  options[this.random(0,options.length-1)]

        // 2 find the morse needed for sentence
        let unknown_char = [".",",",";","'",":","?","/","!",] 
        let morse_needed = ""
        for (let i = 0; i<word.length; i++) {
            let letter = word[i]
            if (letter == " "){
                morse_needed += "x"  
            }else if (!this.char_in_list(letter,unknown_char)) {

                morse_needed += this.letter_to_morse(letter.toLowerCase()) 
            }

            if (!this.char_in_list(letter,unknown_char) && letter != " ") {

            morse_needed += "x"

            } 
        }

        print(` the morse needed is "${morse_needed}"`)
        

    // is morse_needed for the sentence/word length alway even  
    // does the morse_needed need to end in x 
    print(`length : ${morse_needed.length}`)


    // 

    // 3 make list of number w dot and dash and x 
        let dots = []
        let dash = []
        let xs = []
        let list_of_all = [zero,one,two,three,four,five,six, seven,eight,nine] 
        for (let i = 0; i<list_of_all.length; i++) {
            let item = list_of_all[i] 
            
            
            if (item == ".") {
                dots.push(i)  
            }else if (item == "-") {

                dash.push(i)  
              
            }else if (item == "x") { 
            
                xs.push(i)  
            
            }
        }
        //step 4 place the number as needed 
// if (morse_needed.length is even ) continue <= needed for morbit
// else (morse_needed.length is odd) don't use x at the end <= needed for morbit


    let encrypted_text = ""
    for (let i =0; i<morse_needed.length; i++) {
        let letter = morse_needed[i]

            if (letter == ".") {
                encrypted_text += dots[this.random(0,dots.length-1)] 
            }else if (letter == "-") {

                encrypted_text += dash[this.random(0,dash.length-1)] 
                
              
            }else if (letter == "x") { 
            
                encrypted_text += xs[this.random(0,xs.length-1)] 
                 
            
            }
    }
 // add hint 

    // let hint = `0= ${zero} 1= ${one} 2= ${two} 3= ${three} 4= ${four} 5= ${five}`
    // ` 7= ${seven} 8= ${eight} 9= ${nine}`
    // let final_list_return    = []
    // final_list_return.push(encrypted_text)
    let hints = []
    hints.push(new Hint(0,zero)) 
    hints.push(new Hint(1,one)) 
    hints.push(new Hint(2,two)) 
    hints.push(new Hint(3,three)) 
    hints.push(new Hint(4,four)) 
    hints.push(new Hint(5,five)) 
    // final_list_return.push(hint)
    print(encrypted_text)
    print(hints)
    let final_obj = new MorseQuestion(encrypted_text,hints) 
    return final_obj
    // hints.push(new Hint(6,six))
    // hints.push(new Hint(7,seven))
    // hints.push(new Hint(8,eight))
    // hints.push(new Hint(9,nine))
    // hints.push(new Hint(0,zero))

    
    // return [en]
    //  return `${encrypted_text} hint: ${hint}` 
    }
    pollux_decrypt(word,list/*from 0 to 9, of what we know if we dont know leave as a " "*/) {
        let zero,one,two,three,four,five,six,seven,eight,nine 
        let numbers_we_dont_know = []
        for (let i=0; i<list.length; i++) {
            // print(`num: ${i}`)
             let num = list[i]
             if (num != " ") {
                 if (num == 0) {
                    zero = num 
                 }else if (num == 1) {
                
                    one  = num 
                      
            
                }else if (num == 2) {

                    two = num 
                     
            
                 }else if (num == 3) {

                    three = num 
                     
            
                 }else if (num == 4) {
                 
                    four = num 
                      

                 }else if (num == 5) {
                 
                    five = num 
                      

                 }else if (num == 6) {
                 
                    six = num 
                       

                 }else if (num == 7) {
                 
                        
                    seven = num 

                 }else if (num == 8) {
                 
                    eight = num 
                        

                 }else if (num == 9) {
                 
                    nine = num 
                        
                 }

             }else {
                 numbers_we_dont_know.push({
                     "number":num, 
                      'value':" "
                     
                     })
             }
        }

        
        // brute force
        
        
        
        // get list of every guess then check if it is made up of real words somehow 
        


        // after finding what the each numbers are convert to morse then to sentence 



    }
    pollux_decrypt_given_all_num(word,zero,one,two,three,four,five,six,seven,eight,nine) {
        let final_word = ""
        let morse = ""
        for (let i=0; i<word.length; i++) {
            let num = word[i]// number 0-9 inclusive 

            if (num == 0) {
                morse += zero 
            }else if (num == 1) {
                
                morse += one 
            
            }else if (num == 2) {

                morse += two 
            
            }else if (num == 3) {

                morse += three 
            
            }else if (num == 4) {

                morse += four  
            
            }else if (num == 5) {

                morse += five  
            
            }else if (num == 6) {

                morse += six 
            
            }else if (num == 7) {

                morse += seven  

            }else if (num == 8) {

                morse += eight  
            
            }else if (num == 9) {

                morse += nine  
            }
        }




        let list_split_by_word = morse.split("xx")

        // 
        for (word of list_split_by_word) {
            let the_current_word = ""
            let list_split_by_letter = word.split("x")

            let item;
            for (item of list_split_by_letter) {
                the_current_word += this.morse_to_letter(item) 

            }
            final_word += the_current_word + " "

        }
        return final_word
    }
    morbit_encrypt(word,n_hints = 4) {
        let unknown_char = [".",",",";","'",":","?","/","!",] 
        // remove space from beginning and after 
         word  = word.trim()
        let morse_needed = ""
        for (let i = 0; i<word.length; i++) {
            let letter = word[i]
            if (letter == " "){
                morse_needed += "x"  
            }else if (!this.char_in_list(letter,unknown_char)) {

                morse_needed += this.letter_to_morse(letter.toLowerCase()) 
            }

            if (!this.char_in_list(letter,unknown_char) && letter != " " && i != word.length-1) {

            morse_needed += "x"

            } 
        }
        // add x at end if morse_needed is odd or even
        if (morse_needed.length %2 == 1) {
            morse_needed += "x"
        }
        print(`morse needed is "${morse_needed}" \n morse needed length is ${morse_needed.length}`)
        // randomize values of numbers 
        let all_hints = []
        let list_of_num= [1,2,3,4,5,6,7,8,9]
        let values = ['..','.-',".x","-.","--","-x","x.","x-","xx"]
        let item 
     
        for (let i=0; i<list_of_num.length; i++) {
           

            let index = this.random(0,values.length-1)
            let random_thing = values[index]

            // num , random_thing
            all_hints.push(new Hint(i+1,random_thing))
             
            // values.remove(index)
            values = this.list_remove_based_on_index(values,index)
        }
        // print(`hints ->`)
        // print(all_hints)

        // place numbers as necesary based on morse needed 
         values = ['..','.-',".x","-.","--","-x","x.","x-","xx"]
        let final_question = "" // a bunch of numbers 
    // print(`the current_Morse`)
        for (let i=0; i<morse_needed.length; i+= 2) {
            let the_current_morse = morse_needed[i] + morse_needed[i+1]
            // print(the_current_morse)
            // if (the_current_morse == values[0]) {
                for (item of all_hints) {
                    if (item.value == the_current_morse) {
                        final_question += item.num
                    }
                }
            // }
        }
        let hints = []
        for (let i=0; i<n_hints; i++) {
            hints.push(all_hints[i])
        } 
        let return_list = new MorseQuestion(final_question,hints)
        print(return_list)
        return  return_list

  
    }
    list_remove_based_on_index(list,index)  {
        /* const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2, 4)); -> the form [n , m)   index >= n and index < m 

// expected output: Array ["camel", "duck"]

/* 
remove (index) of list 
1) make sure between 0 and list.length -1
2) [a,b,c,d] -> remove 2 which means remove c  is [a,b] + [d]
is list ()
slice(0,index) + slice(index+1, list.length)

*/
        let begin_list = list.slice(0,index)
        let end_list = list.slice(index+1,list.length)


// print(`begin :`)
// print(begin_list)
// print("end_list")
// print(end_list)
        let final_list = []
        let item
        for (item of begin_list) {
            final_list.push(item)
        }
        for (item of end_list) {
            final_list.push(item)
        
        }
        return final_list
    }
    random_all_affine_math_question() {
        
        num1 = this.num1_options[this.random(0,this.num1_options.length-1)] 
        
        num2 = this.num2_options[this.random(0,this.num2_options.length-1)] 

        return [num1,num2]
    }
    random_1_affine_math_question() {
        
        num1 = this.num1_options[0]
        
        num2 = this.num2_options[this.random(0,this.num2_options.length-1)] 

        
        return [num1,num2]
    }
    random_3_affine_math_question() {
         
        
        num1 = this.num1_options[1]
        
        num2 = this.num2_options[this.random(0,this.num2_options.length-1)] 

        
        return [num1,num2]
    }
    random_5_affine_math_question() {
         
        
        num1 = this.num1_options[2]
        
        num2 = this.num2_options[this.random(0,this.num2_options.length-1)] 

        
        return [num1,num2]
    }
    random_7_affine_math_question() {
         
        
        num1 = this.num1_options[3]
        
        num2 = this.num2_options[this.random(0,this.num2_options.length-1)] 

        
        return [num1,num2]
    }
    random_9_affine_math_question() {
         
        
        num1 = this.num1_options[4]
        
        num2 = this.num2_options[this.random(0,this.num2_options.length-1)] 

        
        return [num1,num2]
    }
    random_11_affine_math_question() {
        
        
        num1 = this.num1_options[5]
        
        num2 = this.num2_options[this.random(0,this.num2_options.length-1)] 

        
        return [num1,num2]
    }
    random_15_affine_math_question() {
         
        
        num1 = this.num1_options[6]
        
        num2 = this.num2_options[this.random(0,this.num2_options.length-1)] 

        
        return [num1,num2]
    }
    random_17_affine_math_question() {
         
        
        num1 = this.num1_options[7]
        
        num2 = this.num2_options[this.random(0,this.num2_options.length-1)] 

        
        return [num1,num2]
    }
    random_19_affine_math_question() {
        
        
        num1 = this.num1_options[8]
        
        num2 = this.num2_options[this.random(0,this.num2_options.length-1)] 

        
        return [num1,num2]
    }
    random_21_affine_math_question() {
        
        
        num1 = this.num1_options[9]
        
        num2 = this.num2_options[this.random(0,this.num2_options.length-1)] 

        
        return [num1,num2]
    }
    random_23_affine_math_question() {
        
        
        num1 = this.num1_options[10]
        
        num2 = this.num2_options[this.random(0,this.num2_options.length-1)] 

        
        return [num1,num2]
    }
    random_25_affine_math_question() {
        
        
        num1 = this.num1_options[11]
        
        num2 = this.num2_options[this.random(0,this.num2_options.length-1)] 

        
        return [num1,num2]
    }
    random_26_affine_math_question() {
         
        
        num1 = this.num1_options[12]
        
        num2 = this.num2_options[this.random(0,this.num2_options.length-1)] 

        
        return [num1,num2]
    }
    random_all_affine_math_question_in_order() {
         
        // print(num1_options.length)
        // print(num2_options.length)



        let the_all_order = []
        for (num1 of this.num1_options) {
            // let list1 = []
            for (num2 of this.num2_options) {
                let list = [num1,num2] 
                the_all_order.push(list)

            }
            // the_all_order.push(list1)
        }
        return the_all_order
        // built alternator such 

    }
    random_1_affine_math_question_in_order() {
       
        // print(num1_options.length)
        // print(num2_options.length)



        let the_all_order = []
        for (num1 of this.num1_options) {
            let list1 = []
            for (num2 of this.num2_options) {
                let list = [num1,num2] 
                list1.push(list)

            }
            the_all_order.push(list1)
        }
        return the_all_order[0]
    }
    random_3_affine_math_question_in_order() {
       
        // print(num1_options.length)
        // print(num2_options.length)



        let the_all_order = []
        for (num1 of this.num1_options) {
            let list1 = []
            for (num2 of this.num2_options) {
                let list = [num1,num2] 
                list1.push(list)

            }
            the_all_order.push(list1)
        }
        return the_all_order[1]
    }
    random_5_affine_math_question_in_order() {
       
        // print(num1_options.length)
        // print(num2_options.length)



        let the_all_order = []
        for (num1 of this.num1_options) {
            let list1 = []
            for (num2 of this.num2_options) {
                let list = [num1,num2] 
                list1.push(list)

            }
            the_all_order.push(list1)
        }
        return the_all_order[2]
    }
    random_7_affine_math_question_in_order() {
       
        // print(num1_options.length)
        // print(num2_options.length)



        let the_all_order = []
        for (num1 of this.num1_options) {
            let list1 = []
            for (num2 of this.num2_options) {
                let list = [num1,num2] 
                list1.push(list)

            }
            the_all_order.push(list1)
        }
        return the_all_order[3]
    }
    random_9_affine_math_question_in_order() {
       
        // print(num1_options.length)
        // print(num2_options.length)



        let the_all_order = []
        for (num1 of this.num1_options) {
            let list1 = []
            for (num2 of this.num2_options) {
                let list = [num1,num2] 
                list1.push(list)

            }
            the_all_order.push(list1)
        }
        return the_all_order[4]
    }
    random_11_affine_math_question_in_order() {
       
        // print(num1_options.length)
        // print(num2_options.length)



        let the_all_order = []
        for (num1 of this.num1_options) {
            let list1 = []
            for (num2 of this.num2_options) {
                let list = [num1,num2] 
                list1.push(list)

            }
            the_all_order.push(list1)
        }
        return the_all_order[5]
    }
    random_15_affine_math_question_in_order() {
       
        // print(num1_options.length)
        // print(num2_options.length)



        let the_all_order = []
        for (num1 of this.num1_options) {
            let list1 = []
            for (num2 of this.num2_options) {
                let list = [num1,num2] 
                list1.push(list)

            }
            the_all_order.push(list1)
        }
        return the_all_order[6]
    }
    random_17_affine_math_question_in_order() {
       
        // print(num1_options.length)
        // print(num2_options.length)



        let the_all_order = []
        for (num1 of this.num1_options) {
            let list1 = []
            for (num2 of this.num2_options) {
                let list = [num1,num2] 
                list1.push(list)

            }
            the_all_order.push(list1)
        }
        return the_all_order[7]
    }
    random_19_affine_math_question_in_order() {
       
        // print(num1_options.length)
        // print(num2_options.length)



        let the_all_order = []
        for (num1 of this.num1_options) {
            let list1 = []
            for (num2 of this.num2_options) {
                let list = [num1,num2] 
                list1.push(list)

            }
            the_all_order.push(list1)
        }
        return the_all_order[8]
    }
    random_21_affine_math_question_in_order() {
       
        // print(num1_options.length)
        // print(num2_options.length)



        let the_all_order = []
        for (num1 of this.num1_options) {
            let list1 = []
            for (num2 of this.num2_options) {
                let list = [num1,num2] 
                list1.push(list)

            }
            the_all_order.push(list1)
        }
        return the_all_order[9]
    }
    random_23_affine_math_question_in_order() {
       
        // print(num1_options.length)
        // print(num2_options.length)



        let the_all_order = []
        for (num1 of this.num1_options) {
            let list1 = []
            for (num2 of this.num2_options) {
                let list = [num1,num2] 
                list1.push(list)

            }
            the_all_order.push(list1)
        }
        return the_all_order[10]
    }
    random_25_affine_math_question_in_order() {
       
        // print(num1_options.length)
        // print(num2_options.length)



        let the_all_order = []
        for (num1 of this.num1_options) {
            let list1 = []
            for (num2 of this.num2_options) {
                let list = [num1,num2] 
                list1.push(list)

            }
            the_all_order.push(list1)
        }
        return the_all_order[11]
    }
    random_26_affine_math_question_in_order() {
       
        // print(num1_options.length)
        // print(num2_options.length)



        let the_all_order = []
        for (num1 of this.num1_options) {
            let list1 = []
            for (num2 of this.num2_options) {
                let list = [num1,num2] 
                list1.push(list)

            }
            the_all_order.push(list1)
        }
        return the_all_order[12]
    }
    baconian_string_to_letter(str) {// only a and b
    let item;
        let baconian_str = str.toLowerCase()
        let baconian_num_base_2 = ""
        for (item of baconian_str) {
            if (item == "a") {
                baconian_num_base_2 += "0"
                
            }else if (item == "b") {

                baconian_num_base_2 += "1"
            }
        }
        print(`baconian_num_base_2 "${baconian_num_base_2}"`)
        // print("test ${baconian_num_base_2}")
        // covert str_base_2_num to baconian num
        let random_num = 0
        let baconian_num_base_10 = 0;
        for (let i=baconian_num_base_2.length-1; i >=0; i--) {
            // print(`index ${i}`)
            if (baconian_num_base_2[i] == "1") {
                baconian_num_base_10 += Math.pow(2,random_num)

                // 2^random num 
            }
                random_num += 1 

        }
        // print(`baconian num${baconian_num_base_10}`)
        if (baconian_num_base_10 == 8) {
            return "i/j"
        } 
        else if (baconian_num_base_10 == 19) {
            return "u/v"
        } 
    
        else if (baconian_num_base_10 >= 20) {
            return this.index_to_letter(baconian_num_base_10+2)
        
        }
        else if (baconian_num_base_10 >8) {

            return this.index_to_letter(baconian_num_base_10+1)
        }else {
            return this.index_to_letter(baconian_num_base_10)
        } 

     

    // round_up() {

    }
    current_time() {
        return [hr,mn,sc,ms] 
    }
    subtract_time(time1,time2) { // time is [hr,mn,sc,ms] and // time1 - time2 ex 1hr - 30 min = convert to ms then convert back to whole num 

        let time_diff_in_ms = this.convert_time_to_ms(time1) - this.convert_time_to_ms(time2) 
        return this.convert_ms_to_normal(time_diff_in_ms)
        
    }
    convert_ms_to_normal(ms) {
        let hr = Math.floor(ms/3600000)
        ms -= hr * 3600000
        let mn =  Math.floor(ms/60000)
        ms -= mn * 60000
        let sc =  Math.floor(ms/1000)
        ms -= sc * 1000
        return [hr,mn,sc,ms]
    }
    convert_time_to_ms(time) {
        let hr = time[0] 
        let mn = time[1] 
        let sc = time[2] 
        let ms = time[3] 
        // let sc 
         
        return [ms+1000*sc+60000*mn+3600000 *hr]
    }
    format_time(time_in_sec/*[hr,mn,sc,ms]*/) {
        // let hr = Math.round(time[0])
        // let mn = Math.round(time[1])
        // let sc = Math.round(time[2])
        // let ms = Math.round(time[3]) 

         if (time_in_sec >= 3600) {
        //     return ` ${hr}hr${mn}min ${sc}sec ${ms}ms`
            return ` ${Math.floor(time_in_sec/3600)   }hr ${Math.floor(time_in_sec/60)   }min ${sc}sec `
        }
        else if (time_in_sec >= 60) {

            return ` ${Math.floor(time_in_sec/60)   }min ${sc}sec `
        // }
        // else if (sc != 0) {
        //     return ` ${sc}sec ${ms}ms`

        }else {
            return ` ${time_in_sec}seconds`
        } 
        return " "+ time_in_sec

    }
    all_availible_bacoinian() {
        return ["aaaaa","aaaab","aaaba","aaabb","aabaa","aabab","aabba","aabbb","abaaa","abaab","ababa","ababb","abbaa","abbab","abbba","abbbb","baaaa","baaab","baaba","baabb","babaa","babab","babba","babbb"]

    }
    num_of_chars_in_string(char,string) {
        let num = 0
        let letter;
        let str = string
        for (let i = 0; i<str.length; i++) {
            let letter = str[i]
            if (letter == char) {
                num += 1
                //  print(`index: ${i}`)
            }
        }
        return num
    }
    baconina_with_n_bs(n) {
        let list = []
        for (let i=0; i<this.all_availible_bacoinian().length; i++) {
            // for
            // let letter; 
            // let num_bs = 0; 
            // for (letter of this.all_availible_bacoinian[i]) {
            //     if (letter == "b") {
            //         num_bs += 1 
            //     }
            // } 
            // if (num_bs == n) {
            //     list.push(this.all_availible_bacoinian[i])
            // }
            // print(this.all_availible_bacoinian()[i])
// print(this.num_of_chars_in_string("b",this.all_availible_bacoinian()[i]))
            // if ( == n ) {
            if (this.num_of_chars_in_string("b",this.all_availible_bacoinian()[i]) == n ) {
                 list.push(this.all_availible_bacoinian()[i])
            } 
        }
        // print(list)
        return list
    }
    baconina_with_n_bs_and_b_in_pos(n,index) { /*abaab  the last b is on 4 */ 
        let final_list = []
        let list = this.baconina_with_n_bs(n); 
        for (item of list) {
            if (item[index] == "b") {
                final_list.push(item)
            }
        }
        return final_list
    }
    letter_to_baconian_str_form(letter) {
        letter = letter.toLowerCase()
        
        if (letter == "a") {
            return "aaaaa" 
        }
        else if (letter == "b") {
            return "aaaab" 
        }
        else if (letter == "c") {
            return "aaaba" 
        }
        else if (letter == "d") {
            return "aaabb" 
        }
        else if (letter == "e") {
            return "aabaa" 
        }
        else if (letter == "f") {
            return "aabab" 
        }
        else if (letter == "g") {
            return "aabba" 
        }
        else if (letter == "h") {
            return "aabbb" 
        }
        else if (letter == "i/j") {
            return "abaaa" 
        }
        else if (letter == "k") {
            return "abaab" 
        }
        else if (letter == "l") {
            return "ababa" 
        }
        else if (letter == "m") {
            return "ababb" 
        }
        else if (letter == "n") {
            return "abbaa" 
        }
        else if (letter == "o") {
            return "abbab" 
        }
        else if (letter == "p") {
            return "abbba" 
        }
        else if (letter == "q") {
            return "abbbb" 
        }
        else if (letter == "r") {
            return "baaaa" 
        }
        else if (letter == "s") {
            return "baaab" 
        }
        else if (letter == "t") {
            return "baaba" 
        }
        else if (letter == "u/v") {
            return "baabb" 
        }
        else if (letter == "w") {
            return "babaa" 
        }
        else if (letter == "x") {
            return "babab" 
        }
        else if (letter == "y") {
            return "babba" 
        }
        else if (letter == "z") {
            return "babbb" 
        }else {
            return null 
        }
    }
    test_all_bacoinian() {
        let b;
        for (b of this.all_availible_bacoinian()) {
            print(this.baconian_string_to_letter(b))
        }
    }
    cryptogram_en(word) {
        word = word.toLowerCase()
        print(this.alphabet_list) 

        let ans_list  = []
        let all_26_letters = this.alphabet_list 
        for (let i=0; i<26; i++) {
            let num = this.random(0,all_26_letters.length-1)
            let any_letter = all_26_letters[num]
            ans_list.push( new CryptogramHint(this.alphabet_list[i],any_letter))
            all_26_letters = this.list_remove_based_on_index(all_26_letters,num)
        }
        let encrypted_text = "" 
        for (let i = 0; i < word.length;i ++) {
            let letter = word[i]
            if (this.char_in_list(letter, this.alphabet_list)) {
                print(true)
                // this.char_in_list
                let values = []
                for (let i=0; i<ans_list.length; i++) {
                    values.push(ans_list[i].value)

                }
                // print(values)
                // print(values.indexOf(letter))
                // print(ans_list[values.indexOf(letter)])
                // print(ans_list[values.indexOf(letter)].name)
                encrypted_text+=  ans_list[values.indexOf(letter)].name

            }else {
                // print('false')
                encrypted_text += letter 
            }
        }
        // return ans_list
        print(ans_list)
        let final_return =  new MorseQuestion(encrypted_text,ans_list)
        return final_return
    }
    
}
class CryptogramHint {
    constructor(name,value) {
        this.name = name 
        this.value = value
    }
}
let word = new Word('codebusters')
word.remove_punction()
word.remove_punction()
let length_of_morse_in_string_format = "all";
let   word_morse_var;
 



// function check_if_word_exists(word) {
//     const url = "https://api.wordnik.com/v4/word.json/" + word + "/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

//     $.ajax({
//         type: "GET",
//         url: url
//     }).done(function (result) {
//         console.log("word exists");
//     }).fail(function () {
//         console.log("word does not exist");
//     });
// }






























// (word.affine_encrypt(9,42)) 
let word2 = new Word(word.affine_encrypt(9,42)) 
// print(word2.affine_decrypt(9,42))
// for ()
// print(word.shift(2))
 
 

 

    
 let give_num = document.getElementById('give_num_guess_letter-num')
        random_num = Math.round(Math.random()*25)
        give_num.innerHTML = `num: ${random_num}`
// 1
    function give_number() { // give num {0-25 inclusive}-> guess letter
        // timed 
        let time = timers[1-1].get_time()
        // timers[1-1].reset()
        timers[1-1].stop()
        timers[1-1].reset()
        timers[1-1].start()



        // ans += `\n time `
        // print(time)



        let ans = document.getElementById("give_num_guess_letter-ans")
        let input = document.getElementById("give_num_guess_letter-input").value
        if (input.toLowerCase() == word.index_to_letter(random_num))  {
                
            ans.innerHTML = `<em class="correct">correct</em> ${random_num}-> ${word.index_to_letter(random_num).toUpperCase()} \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`
        }else {
            ans.innerHTML = `<em class="wrong">wrong</em> :( ${random_num}-> "${word.index_to_letter(random_num).toUpperCase()}" you typed "${input.toLowerCase()}"  \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>` 
        }
 
        // Math.random()  -> decimal 0 to 1 -> iclusive 0 and doesn't include 1 -> <1

           let give_num = document.getElementById('give_num_guess_letter-num')
        random_num = Math.round(Math.random()*25)
        give_num.innerHTML = `num: ${random_num}`



        document.getElementById("give_num_guess_letter-input").value = "";

    }
let random_num_letter

let give_letter = document.getElementById('give_letter_guess_num-letter')
        random_num_letter = Math.round(Math.random()*25)
        give_letter.innerHTML = `letter: ${word.index_to_letter(random_num_letter).toUpperCase()}`







// stopwatch  to time questions 
// let current_time_1 = word.current_time(); 
function calculate_time_stuff(n)/*1 is 0*/ { 

    let the_current_time_now = word.current_time()
    print(`old time: ${current_times[n-1]} \n new time ${the_current_time_now}`)
    let time = word.subtract_time(the_current_time_now,current_times[n-1])

    current_times[n-1] = word.current_time() 
    return time 
}
 
function reset_current_times() {
    // current_times = []
    // for (let i=0; i <14; i++) {
        // current_times.push(word.current_time())

    // }
    for (item of timers) {
        item.reset()
        item.stop()
        item.start()
    }
}
        // 2 
function give_letter_f() {
      
     let time = timers[2-1].get_time()
        // timers[1-1].reset()
        timers[2-1].stop()
        timers[2-1].reset()
        timers[2-1].start()

   // \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>

        let input = document.getElementById("give_letter_guess_num-input").value
        if (parseInt(input)== random_num_letter ) {
            let ans = document.getElementById('give_letter_guess_num-ans')
            ans.innerHTML = `<em class="correct">correct</em> ${word.index_to_letter(random_num_letter)} -> ${random_num_letter}  \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`
        }else {
              let ans = document.getElementById('give_letter_guess_num-ans')
            ans.innerHTML = `<em class="wrong">wrong</em> :( ${word.index_to_letter(random_num_letter)} -> ${random_num_letter} you typed "${input}" \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`

        }


         give_letter = document.getElementById('give_letter_guess_num-letter')
        random_num_letter = Math.round(Math.random()*25)
        give_letter.innerHTML = `letter: ${word.index_to_letter(random_num_letter).toUpperCase()}`
        document.getElementById("give_letter_guess_num-input").value = " ";
 }



// function calculate_time_stuff_2() {
//     let the_current_time_now = word.current_time()
//     print(`old time: ${current_time_2} \n new time ${the_current_time_now}`)
//     let time = word.subtract_time(the_current_time_now,current_time_1)

//     current_time_1 = word.current_time() 
//     return time 
// }

// 3

function choose_morse() {
    
    let morse_word; 
    if (length_of_morse_in_string_format == "1") {
        morse_word = word.random_morse_len_1()
    }else if (length_of_morse_in_string_format == "2") {
        morse_word = word.random_morse_len_2()
    }else if (length_of_morse_in_string_format == "3") {
        morse_word = word.random_morse_len_3()
        
    }else if (length_of_morse_in_string_format == "4") {
        morse_word = word.random_morse_len_4()
 
        
    }else if (length_of_morse_in_string_format == "5") {
        morse_word = word.random_morse_len_5()
        
    }else if (length_of_morse_in_string_format == "all") {
        morse_word = word.random_morse_len_all()
        
    }
    //  the_morse.innerHTML = "morse: " + morse_word
    print(length_of_morse_in_string_format)
     return morse_word
}

//  let the_morse = document.getElementById("give_morse_guess_letter-num")

//      word_morse_var = choose_morse()
    
//     the_morse.innerHTML = "morse: " + word_morse_var 

let the_morse = document.getElementById("give_morse_guess_letter-num")

     word_morse_var = choose_morse()
    
    the_morse.innerHTML = "morse: " + word_morse_var

function give_morse() {
       let time = timers[3-1].get_time()
        // timers[1-1].reset()
        timers[3-1].stop()
        timers[3-1].reset()
        timers[3-1].start()
   // \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div> 

    let input = document.getElementById("give_morse_guess_letter-input").value 
    
    if (input.toLowerCase() == word.morse_to_letter( word_morse_var).toLowerCase()) {
        let ans = document.getElementById("give_morse_guess_letter-ans") 
        ans.innerHTML = `<em class="correct">correct</em> "${word_morse_var}" IS "${ word.morse_to_letter(word_morse_var).toUpperCase()}" \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`

    }else {
        print(`input: ${input} \n ans: ${word_morse_var}`)
        let ans = document.getElementById("give_morse_guess_letter-ans") 
        ans.innerHTML = `<em class="wrong">wrong</em> :( "${word_morse_var}" IS "${ word.morse_to_letter(word_morse_var).toUpperCase()}" you typed "${input.toLowerCase()}" and "${input.toLowerCase()}" is "${word.letter_to_morse(input.toLowerCase())}  \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`
    }



    let the_morse = document.getElementById("give_morse_guess_letter-num")

     word_morse_var = choose_morse()
    
    the_morse.innerHTML = "morse: " + word_morse_var
    document.getElementById("give_morse_guess_letter-input").value = ''
    
}





function length_of_morse() {
    // print('changed')

    let option = document.getElementById("give_morse_guess_letter-option").value 
    // print(option) 
    length_of_morse_in_string_format = option



     let the_morse = document.getElementById("give_morse_guess_letter-num")

     word_morse_var = choose_morse()
    
    the_morse.innerHTML = "morse: " + word_morse_var
}

// 4
let option_for_step_4 = "all";
function choose_letter_step4() {
    
    let morse;
    if (option_for_step_4 == "1") {
         morse = word.random_morse_len_1()
    }else if (option_for_step_4 == "2") {
         morse = word.random_morse_len_2()
    }if (option_for_step_4 == "3") {
         morse = word.random_morse_len_3()

    }if (option_for_step_4 == "4") {
         morse = word.random_morse_len_4()

    }if (option_for_step_4 == "5") {
         morse = word.random_morse_len_5() 

    }if (option_for_step_4 == "all") {
         morse = word.random_morse_len_all() 

    }
    return word.morse_to_letter(morse)
}
function option_changes_step_4() {
    let option = document.getElementById("give_letter_guess_morse-option").value
    option_for_step_4 = option

          letter = choose_letter_step4()
 let give_letter_for_morse = document.getElementById('give_letter_guess_morse-letter')
       
        give_letter_for_morse.innerHTML = `letter: ${letter}`
        
// print("#4 changes")

}
let random_num_letter_for_morse; 


 
    let letter = choose_letter_step4()
 let give_letter_for_morse = document.getElementById('give_letter_guess_morse-letter')
       
        give_letter_for_morse.innerHTML = `letter: ${letter.toUpperCase()}`
        


function give_letter_guess_morse_f() {
      let time = timers[4-1].get_time()
        // timers[1-1].reset()
        timers[4-1].stop()
        timers[4-1].reset()
        timers[4-1].start()
   // \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>


    let input = document.getElementById("give_letter_guess_morse-input").value 
    if (word.morse_to_letter(input)  == letter ) {
    
        let ans = document.getElementById("give_letter_guess_morse-ans") 
        ans.innerHTML = `<em class="correct">correct</em> "${word.letter_to_morse(letter)}" IS "${ letter}" \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`
    }else {
        let ans = document.getElementById("give_letter_guess_morse-ans") 
        ans.innerHTML = `<em class="wrong">wrong</em> :( "${word.letter_to_morse(letter)}" IS "${ letter}"   you typed "${input}" and "${input}" is "${word.morse_to_letter(input)}"\n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>` 
    }

          letter = choose_letter_step4()
 let give_letter_for_morse = document.getElementById('give_letter_guess_morse-letter')
       
        give_letter_for_morse.innerHTML = `letter: ${letter.toUpperCase()}`
        document.getElementById(`give_letter_guess_morse-input`).value = ""
}
// 5 -> atbash cipher encrpytion
 let atbash_en_word = word.random_word()

//   atbash_en_word = word.random_word() 
     let question = document.getElementById('atbash_encryption-question') 
     question.innerHTML = `Encrypt "${atbash_en_word}" using atbash cipher` 
function atbash_en_f() {

      let time = timers[5-1].get_time()
        // timers[1-1].reset()
        timers[5-1].stop()
        timers[5-1].reset()
        timers[5-1].start()
        // \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>

     let input = document.getElementById("atbash_encryption-input").value 
     if (input == word.atbash(atbash_en_word)) {
        let ans = document.getElementById('atbash_encryption-ans')
        ans.innerHTML = `<em class="correct">correct</em> "${atbash_en_word}" IS "${word.atbash(atbash_en_word)}"\n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`
     }else {
     let ans = document.getElementById('atbash_encryption-ans')
        ans.innerHTML = `<em class="wrong">wrong</em> :( "${atbash_en_word}" IS "${word.atbash(atbash_en_word)}" you typed "${input}" and the atbash of "${input}" is "${word.atbash(input)}"\n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`
         
     }
     // change word 
     atbash_en_word = word.random_word() 
     let question = document.getElementById('atbash_encryption-question') 
     question.innerHTML = `Encrypt "${atbash_en_word}" using atbash cipher`
     reset_input(5)
     
 }
// 6 -> atbash cipher decrpytion 
 let atbash_en_word_6 = word.random_word()
    let  atbash_de_word = word.atbash(atbash_en_word_6) 
     let question_6 = document.getElementById('atbash_decryption-question') 
     question_6.innerHTML = `Decrypt "${atbash_de_word}" using atbash cipher`
function atbash_de_f() {
      let time = timers[6-1].get_time()
        // timers[1-1].reset()
        timers[6-1].stop()
        timers[6-1].reset()
        timers[6-1].start()
   // \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>

     let input = document.getElementById("atbash_decryption-input").value 
     if (input == word.atbash(atbash_de_word)) {
        let ans = document.getElementById('atbash_decryption-ans')
        ans.innerHTML = `<em class="correct">correct</em> "${atbash_de_word}" IS "${word.atbash(atbash_de_word)}"\n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`
     }else {
     let ans = document.getElementById('atbash_decryption-ans')
        ans.innerHTML = `<em class="wrong">wrong</em> :( "${atbash_de_word}" IS "${word.atbash(atbash_de_word)}" you typed "${input}" and the atbash of "${input}" is "${word.atbash(input)}"\n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`
         
     }
     // change word 
       atbash_en_word_6 = word.random_word()
     atbash_de_word = word.atbash(atbash_en_word_6) 
     let question_6 = document.getElementById('atbash_decryption-question') 
     question_6.innerHTML = `Decrypt "${atbash_de_word}" using atbash cipher`
     reset_input(6)
 }
// 7 -> shift_encrpytion of 
let shift_encrpytion_word = word.random_word()
let title = document.getElementById("shift_encryption-question")

let num = word.random(0,25)
title.innerHTML = `Encrypt "${shift_encrpytion_word}" using caesar cipher by ${num}`
function shift_encryption_f() {


      let time = timers[7-1].get_time()
        // timers[1-1].reset()
        timers[7-1].stop()
        timers[7-1].reset()
        timers[7-1].start() 
   // \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>

     let input = document.getElementById("shift_encryption-input").value 
     if (input == word.shift(shift_encrpytion_word,num)) {
        let ans = document.getElementById('shift_encryption-ans')
        ans.innerHTML = `<em class="correct">correct</em> "${shift_encrpytion_word}" shifted by ${num} IS "${word.shift(shift_encrpytion_word,num)}"\n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`
     }else {
     let ans = document.getElementById('shift_encryption-ans')
        ans.innerHTML = `<em class="wrong">wrong</em> :( "${shift_encrpytion_word}" shifted by ${num} IS "${word.shift(shift_encrpytion_word,num)}" you typed "${input}" \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`
         
     }
     // change word 
     shift_encrpytion_word = word.random_word()
title = document.getElementById("shift_encryption-question")

 num = word.random(0,25)
title.innerHTML = `Encrypt "${shift_encrpytion_word}" using caesar cipher by ${num}`
     reset_input(7)
 }
 // 8 -> shift_decrpytion of 
 let word_8 = word.random_word()
let num_8 = word.random(0,25)


let shift_decrpytion_word = word.shift(word_8,num_8) // word shiffted by num -> the new word 
let title_8 = document.getElementById("shift_decryption-question")

title_8.innerHTML = `Decrypt "${shift_decrpytion_word}" using caesar cipher`

 
function shift_decrpytion_f() {

      let time = timers[8-1].get_time()
        // timers[1-1].reset()
        timers[8-1].stop()
        timers[8-1].reset()
        timers[8-1].start()
   // \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div> 

     let input = document.getElementById("shift_decryption-input").value 
     if (input == word_8) {
        let ans = document.getElementById('shift_decryption-ans')
        ans.innerHTML = `<em class="correct">correct</em> "${shift_decrpytion_word}" IS "${word_8}"\n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`
     }else {
     let ans = document.getElementById('shift_decryption-ans')
        ans.innerHTML = `<em class="wrong">wrong</em> :( "${shift_decrpytion_word}" IS "${word_8}"  you typed "${input}" \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`
         
     }
     // change word 
      word_8 = word.random_word()
num_8 = word.random(0,25)


 shift_decrpytion_word = word.shift(word_8,num_8) // word shiffted by num -> the new word 
let title_8 = document.getElementById("shift_decryption-question")

title_8.innerHTML = `Decrypt "${shift_decrpytion_word}" using caesar cipher`
     reset_input(8)
 }
 // 9 affine_en


 let word_9; 
 let title_9;
 let a_9; 
 let b_9;   
let option_9 = "all"

 change_question_9()

 function affine_en_f() { 

       let time = timers[9-1].get_time()
        // timers[1-1].reset()
        timers[9-1].stop()
        timers[9-1].reset()
        timers[9-1].start()
   // \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>

     let input = document.getElementById("affine_en-input").value 
     if (input == word.affine_encrypt(word_9,a_9,b_9)) {
         let ans = document.getElementById('affine_en-ans')
        ans.innerHTML = `<em class="correct">correct</em> "${word_9}" IS "${ word.affine_encrypt(word_9,a_9,b_9)}" \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`
     }else {
         let ans = document.getElementById('affine_en-ans')
        ans.innerHTML = `<em class="wrong">wrong</em> :( "${word_9}" encrypted with affine cipher and a is ${a_9} and b is ${b_9} IS "${ word.affine_encrypt(word_9,a_9,b_9)}"  you typed "${input}"  \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`

     } 


     change_question_9()
reset_input(9)
 }
function change_question_9() {
    word_9 = word.random_word()
    title_9 = document.getElementById("affine_en-question")
    if (option_9 == "all") {

    a_9 =  word.random_value_for_a_affine_cipher()
    }else {
        a_9 = option_9
    } 

    b_9 = word.random(4,25)
  
    title_9.innerHTML = `Encrypt "${word_9}" using affine cipher with a=${a_9} and b=${b_9}`
}
function onchange_option_9() {
    option_9 = document.getElementById("affine_en-option").value 
    change_question_9()
}


  // 10 affine_de

 let word_10;
 let title_10; 
 let a_10;   
 let b_10;  
 let encrpyted_word_10;  
 let option_10 = "all"; 
//  title_10.innerHTML = `Decrypt "${encrpyted_word_10}" using affine cipher with a=${a_10} and b=${b_10}`
change_question_10()

 function affine_de_f() {
      let time = timers[10-1].get_time()
        // timers[1-1].reset()
        timers[10-1].stop()
        timers[10-1].reset()
        timers[10-1].start()
   // \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>

     let input = document.getElementById("affine_de-input").value 
     if (input == word_10) {
         let ans = document.getElementById('affine_de-ans')
        ans.innerHTML = `<em class="correct">correct</em> "${encrpyted_word_10}" IS "${ word_10}"\n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`
     }else {
           let ans = document.getElementById('affine_de-ans')
        ans.innerHTML = `<em class="wrong">wrong</em> :( "${encrpyted_word_10}"  DecryptED with affine cipher and | a is ${a_10} |  b is ${b_10}  | a inverse or "a^-1 from table" = "${word.a_inverse(a_10)}"| IS "${ word_10}"  you typed "${input}" \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`

     } 

 change_question_10()
 reset_input(10)
 }
function change_question_10() {
    
word_10 = word.random_word()
 title_10 = document.getElementById("affine_de-question")
 if (option_10 == "all") {

    a_10 = word.random_value_for_a_affine_cipher()
 }else {
     a_10 = option_10 
 }
 b_10 = word.random(4,25)
 encrpyted_word_10 = word.affine_encrypt(word_10,a_10,b_10)
  
 title_10.innerHTML = `Decrypt "${encrpyted_word_10}" using affine cipher with a=${a_10} and b=${b_10}`
}

function onchange_option_10() {
    option_10 = document.getElementById("affine_de-option").value 
    change_question_10()
}


// 11 vigenere_en


let word_11 = word.random_word()
let keyword_11 = word.random_word()
document.getElementById("vigenere_en-question").innerHTML = `Encrypt "${word_11}" using vigenere cipher with a key of "${keyword_11}"`


function vigenere_en_f() {
      let time = timers[11-1].get_time()
        // timers[1-1].reset()
        timers[11-1].stop()
        timers[11-1].reset()
        timers[11-1].start()
   // \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>

    let input = document.getElementById("vigenere_en-input").value 
    if (input.toLowerCase() == word.vigenere_en(word_11,keyword_11)) {
        let ans = document.getElementById("vigenere_en-ans") 
        ans.innerHTML = `<em class="correct">correct</em>  "${word_11}" encrpyted with a key of "${keyword_11}" IS "${ word.vigenere_en(word_11,keyword_11)}"\n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`
    }else {
       let ans = document.getElementById("vigenere_en-ans") 
        ans.innerHTML = `<em class="wrong">wrong</em> :( "${word_11}" encrpyted with a key of "${keyword_11}" IS "${ word.vigenere_en(word_11,keyword_11)}"  you typed "${input}" \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`
    }
    let r_input =  document.getElementById("vigenere_en-input")
    r_input.value = ""
    // print("changes")
  
  
  // change question 
      word_11 = word.random_word()
  keyword_11 = word.random_word()
document.getElementById("vigenere_en-question").innerHTML = `Encrypt "${word_11}" using vigenere cipher with a key of "${keyword_11}"`
reset_input(11)
}
// 12 vigenere_de


let keyword_12 = word.random_word()
let word_12 =  word.random_word()
let encrypted_word_12 = word.vigenere_en(word_12,keyword_12)
document.getElementById("vigenere_de-question").innerHTML = `Decrypt "${encrypted_word_12}" using vigenere cipher with a key of "${keyword_12}"`


function vigenere_de_f() {
      let time = timers[12-1].get_time()
        // timers[1-1].reset()
        timers[12-1].stop()
        timers[12-1].reset()
        timers[12-1].start() 
   // \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>
    let input = document.getElementById("vigenere_de-input").value 
    if (input.toLowerCase() == word_12) {
        let ans = document.getElementById("vigenere_de-ans") 
        ans.innerHTML = `<em class="correct">correct</em>  "${encrypted_word_12}" decrpyted with a key of "${keyword_12}" IS "${word_12}" \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>`
    }else {
       let ans = document.getElementById("vigenere_de-ans") 
        ans.innerHTML = `<em class="wrong">wrong</em> :( "${encrypted_word_12}" decrpyted with a key of "${keyword_12}" IS "${word_12}" you typed "${input}" \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>  `
    }

  
  
  // change question 
  keyword_12 = word.random_word()
  word_12 =  word.random_word()
  encrypted_word_12 = word.vigenere_en(word_12,keyword_12)
document.getElementById("vigenere_de-question").innerHTML = `Decrypt "${encrypted_word_12}" using vigenere cipher with a key of "${keyword_12}"`
reset_input(12)
}


// 13 random_multiplication_for_affine
let random_multiplication_for_affine_number = "all";
let question_numbers; 
change_question() 

function random_multiplication_for_affine_f() {
      let time = timers[13-1].get_time()
        // timers[1-1].reset()
        timers[13-1].stop()
        timers[13-1].reset()
        timers[13-1].start()
   // \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>
       let input = document.getElementById("random_multiplication_for_affine-input").value 
    let answer_to_question = question_numbers[0] * question_numbers[1]
    if (parseInt(input)  == answer_to_question) {
        // print("coreect")
        let ans = document.getElementById("random_multiplication_for_affine-ans")
        ans.innerHTML = `<em class="correct">correct</em>    ${question_numbers[0]} * ${question_numbers[1]} = ${answer_to_question} \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div> `


    }else {
        let ans = document.getElementById("random_multiplication_for_affine-ans")
        ans.innerHTML = `<em class="wrong">wrong</em> :(    ${question_numbers[0]} * ${question_numbers[1]} = ${answer_to_question}  you typed "${input}" \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div> `
        // print(`false ${question_numbers[0]} * ${question_numbers[1]} = ${answer_to_question} ` )
    } 
   
    change_question()
    reset_input(13)
}

function random_multiplication_for_affine_changed() {
    let option = document.getElementById("random_multiplication_for_affine-option").value 
    random_multiplication_for_affine_number = option 
    // print(option)
 
     



    // print(change_question())
     change_question()
}
function change_question() {
    if (random_multiplication_for_affine_number == "all") {
        question_numbers = word.random_all_affine_math_question()
    }else if (random_multiplication_for_affine_number == "1") {
        question_numbers = word.random_1_affine_math_question()

    }else if (random_multiplication_for_affine_number == "3") {
        question_numbers = word.random_3_affine_math_question()

    }else if (random_multiplication_for_affine_number == "5") {

        question_numbers = word.random_5_affine_math_question()
    }else if (random_multiplication_for_affine_number == "7") {

        question_numbers = word.random_7_affine_math_question()
    }else if (random_multiplication_for_affine_number == "9") {

        question_numbers = word.random_9_affine_math_question()
    }else if (random_multiplication_for_affine_number == "11") {

        question_numbers = word.random_11_affine_math_question()
    }else if (random_multiplication_for_affine_number == "15") {

        question_numbers = word.random_15_affine_math_question()
    }else if (random_multiplication_for_affine_number == "17") {

        question_numbers = word.random_17_affine_math_question()
    }else if (random_multiplication_for_affine_number == "19") {

        question_numbers = word.random_19_affine_math_question()
    }else if (random_multiplication_for_affine_number == "21") {

        question_numbers = word.random_21_affine_math_question()
    }else if (random_multiplication_for_affine_number == "23") {

        question_numbers = word.random_23_affine_math_question()
    }else if (random_multiplication_for_affine_number == "25") {

        question_numbers = word.random_25_affine_math_question()
    
    }else if (random_multiplication_for_affine_number == "26") {

        question_numbers = word.random_26_affine_math_question()
    }
    let question = document.getElementById("random_multiplication_for_affine-question") 
    question.innerHTML = `what is ${question_numbers[0]} * ${question_numbers[1]}?`// format: what is 3 * 3 

    let input = document.getElementById("random_multiplication_for_affine-input")
    // random_multiplication_for_affine-input
    input.value = ""
    return question_numbers
}





// 14 random_multiplication_for_affine_in_order
let random_multiplication_for_affine_in_order_number = "all";
let question_numbers_14; 
change_question_14() 

function random_multiplication_for_affine_in_order_f() {
  let time = timers[14-1].get_time()
        // timers[1-1].reset()
        timers[14-1].stop()
        timers[14-1].reset()
        timers[14-1].start()
   // \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>
       let input = document.getElementById("random_multiplication_for_affine_in_order-input").value 
    let answer_to_question = question_numbers_14[0] * question_numbers_14[1]
    if (parseInt(input)  == answer_to_question) {
        // print("coreect")
        let ans = document.getElementById("random_multiplication_for_affine_in_order-ans")
        ans.innerHTML = `<em class="correct">correct</em>    ${question_numbers_14[0]} * ${question_numbers_14[1]} = ${answer_to_question} \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>  `


    }else {
        let ans = document.getElementById("random_multiplication_for_affine_in_order-ans")
        ans.innerHTML = `<em class="wrong">wrong</em> :(    ${question_numbers_14[0]} * ${question_numbers_14[1]} = ${answer_to_question}  you typed "${input}" \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div> `
        // print(`false ${question_numbers_14[0]} * ${question_numbers_14[1]} = ${answer_to_question} ` )
    } 
   
    change_question_14()
    reset_input(14)
}

function random_multiplication_for_affine_in_order_changed() {
    let option = document.getElementById("random_multiplication_for_affine_in_order-option").value 
    random_multiplication_for_affine_in_order_number = option 
    // print(option)
 
     



    // print(change_question())
     change_question_14()
}
function change_question_14() {
    if (random_multiplication_for_affine_in_order_number == "all") {
        question_numbers_14 = word.random_all_affine_math_question_in_order()[word.fourteen_all_alternator]
        // print(`number-alternatior before change: ${word.fourteen_all_alternator}`)
      
        word.fourteen_all_alternator_alternate()
      
        // print(`number-alternatior after change: ${word.fourteen_all_alternator}`)
    }else if (random_multiplication_for_affine_in_order_number == "1") {
        question_numbers_14 = word.random_1_affine_math_question_in_order()[word.fourteen_1_alternator]
        // print(`number-alternatior before change: ${word.fourteen_all_alternator}`)
      
        word.fourteen_1_alternator_alternate()
        // question_numbers_14 = word.random_1_affine_math_question()

    }else if (random_multiplication_for_affine_in_order_number == "3") {
        question_numbers_14 = word.random_3_affine_math_question_in_order()[word.fourteen_3_alternator]
        // print(`number-alternatior before change: ${word.fourteen_all_alternator}`)
      
        word.fourteen_3_alternator_alternate()
        // question_numbers_14 = word.random_3_affine_math_question()

    }else if (random_multiplication_for_affine_in_order_number == "5") {

        question_numbers_14 = word.random_5_affine_math_question_in_order()[word.fourteen_5_alternator]
        // print(`number-alternatior before change: ${word.fourteen_all_alternator}`)
      
        word.fourteen_5_alternator_alternate()
        
    }else if (random_multiplication_for_affine_in_order_number == "7") {

        question_numbers_14 = word.random_7_affine_math_question_in_order()[word.fourteen_7_alternator]
        // print(`number-alternatior before change: ${word.fourteen_all_alternator}`)
      
        word.fourteen_7_alternator_alternate()
        
    }else if (random_multiplication_for_affine_in_order_number == "9") {
        question_numbers_14 = word.random_9_affine_math_question_in_order()[word.fourteen_9_alternator]
        // print(`number-alternatior before change: ${word.fourteen_all_alternator}`)
      
        word.fourteen_9_alternator_alternate()

        
    }else if (random_multiplication_for_affine_in_order_number == "11") {
        question_numbers_14 = word.random_11_affine_math_question_in_order()[word.fourteen_11_alternator]
        // print(`number-alternatior before change: ${word.fourteen_all_alternator}`)
      
        word.fourteen_11_alternator_alternate()

        
    }else if (random_multiplication_for_affine_in_order_number == "15") {
        question_numbers_14 = word.random_15_affine_math_question_in_order()[word.fourteen_15_alternator]
        // print(`number-alternatior before change: ${word.fourteen_all_alternator}`)
      
        word.fourteen_15_alternator_alternate()

        
    }else if (random_multiplication_for_affine_in_order_number == "17") {
        question_numbers_14 = word.random_17_affine_math_question_in_order()[word.fourteen_17_alternator]
        // print(`number-alternatior before change: ${word.fourteen_all_alternator}`)
      
        word.fourteen_17_alternator_alternate()

         
    }else if (random_multiplication_for_affine_in_order_number == "19") {

        question_numbers_14 = word.random_19_affine_math_question_in_order()[word.fourteen_19_alternator]
        // print(`number-alternatior before change: ${word.fourteen_all_alternator}`)
      
        word.fourteen_19_alternator_alternate()
        // question_numbers_14 = word.random_19_affine_math_question()
    }else if (random_multiplication_for_affine_in_order_number == "21") {

        question_numbers_14 = word.random_21_affine_math_question_in_order()[word.fourteen_21_alternator]
        // print(`number-alternatior before change: ${word.fourteen_all_alternator}`)
      
        word.fourteen_21_alternator_alternate()
        // question_numbers_14 = word.random_21_affine_math_question()
    }else if (random_multiplication_for_affine_in_order_number == "23") {
        question_numbers_14 = word.random_23_affine_math_question_in_order()[word.fourteen_23_alternator]
        // print(`number-alternatior before change: ${word.fourteen_all_alternator}`)
      
        word.fourteen_23_alternator_alternate()

        // question_numbers_14 = word.random_23_affine_math_question()
    }else if (random_multiplication_for_affine_in_order_number == "25") {
        question_numbers_14 = word.random_25_affine_math_question_in_order()[word.fourteen_25_alternator]
        // print(`number-alternatior before change: ${word.fourteen_all_alternator}`)
      
        word.fourteen_25_alternator_alternate()

        // question_numbers_14 = word.random_25_affine_math_question()
    
    }else if (random_multiplication_for_affine_in_order_number == "26") {
        question_numbers_14 = word.random_26_affine_math_question_in_order()[word.fourteen_26_alternator]
        // print(`number-alternatior before change: ${word.fourteen_all_alternator}`)
      
        word.fourteen_26_alternator_alternate()

        // question_numbers_14 = word.random_26_affine_math_question()
    }
    // print(`new question numbers -> ${question_numbers_14}`)



    let question = document.getElementById("random_multiplication_for_affine_in_order-question") 
    question.innerHTML = `what is ${question_numbers_14[0]} * ${question_numbers_14[1]}?`// format: what is 3 * 3 

    let input = document.getElementById("random_multiplication_for_affine_in_order-input")
    // random_multiplication_for_affine-input
    input.value = ""
    return question_numbers_14
}






let option_15 = "all";
let question_15;   
    change_question_15()
// 15 baconian_letter_str
function baconian_letter_str_on_change() {
    let option = document.getElementById("baconian_letter_str-option").value 
    // random_multiplication_for_affine_in_order_number = option 
    option_15 = option
    // print(question_baconian_str_15)
    change_question_15()
}
function baconian_letter_str_f() {
      let time = timers[15-1].get_time()
        // timers[1-1].reset()
        timers[15-1].stop()
        timers[15-1].reset()
        timers[15-1].start()
   // \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>

    let input = document.getElementById("baconian_letter_str-input").value 
    if ( word.baconian_string_to_letter(question_15) == input.toLowerCase()  ) {
        let ans = document.getElementById("baconian_letter_str-ans")
        ans.innerHTML = `<em class="correct">correct</em>      ${question_15.toUpperCase()} IS ${ word.baconian_string_to_letter(question_15).toUpperCase()}   \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div> `
    }else {
        let ans = document.getElementById("baconian_letter_str-ans")
        ans.innerHTML = `<em class="wrong">wrong</em> :(    ${question_15.toUpperCase()} IS ${ word.baconian_string_to_letter(question_15).toUpperCase()}  you typed "${input}" and "${input}" is "${word.letter_to_baconian_str_form(input)}"  \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div> `

    }

    change_question_15()
    reset_input(15)
}
function change_question_15() {
    // let question;
    if (option_15 == "all") {

        question_15 = word.all_availible_bacoinian()[word.random(0,word.all_availible_bacoinian().length-1 )]
    }
    else if (option_15 == "0") {

        question_15 = word.baconina_with_n_bs(0)[word.random(0,word.baconina_with_n_bs(0).length-1 )]
    }
    else if (option_15 == "1") {
        question_15 = word.baconina_with_n_bs(1)[word.random(0,word.baconina_with_n_bs(1).length-1 )]

    }
    else if (option_15 == "2_4") {

        question_15 = word.baconina_with_n_bs_and_b_in_pos(2,4)[word.random(0, word.baconina_with_n_bs_and_b_in_pos(2,4).length-1 )]
    }
    else if (option_15 == "2_3") {
 question_15 = word.baconina_with_n_bs_and_b_in_pos(2,3)[word.random(0, word.baconina_with_n_bs_and_b_in_pos(2,3).length-1 )]
    }
    else if (option_15 == "2_2") {

         question_15 = word.baconina_with_n_bs_and_b_in_pos(2,2)[word.random(0, word.baconina_with_n_bs_and_b_in_pos(2,4).length-1 )]
    }
    else if (option_15 == "3_4") {

        question_15 = word.baconina_with_n_bs_and_b_in_pos(3,4)[word.random(0, word.baconina_with_n_bs_and_b_in_pos(3,4).length-1 )]
    }
    else if (option_15 == "3_3") {

         question_15 = word.baconina_with_n_bs_and_b_in_pos(3,3)[word.random(0, word.baconina_with_n_bs_and_b_in_pos(3,3).length-1 )]
    }
     
    else if (option_15 == "4") {

        question_15 = word.baconina_with_n_bs(4)[word.random(0,word.baconina_with_n_bs(4).length-1 )]
    }
    let question_id_15 = document.getElementById("baconian_letter_str-question")
    question_id_15.innerHTML = `what is "${question_15.toUpperCase()}"` 

    let input =   document.getElementById("baconian_letter_str-input")
    input.value = "" 
}





// 16 modular_arithmetic
let question_16;  
change_question_16()
function modular_arithmetic_f() {
       let time = timers[16-1].get_time()
        // timers[1-1].reset()
        timers[16-1].stop()
        timers[16-1].reset()
        timers[16-1].start() 

        let input = document.getElementById("modular_arithmetic-input").value 
        if (input == word.mod(question_16)) {
             let ans = document.getElementById("modular_arithmetic-ans")
        ans.innerHTML = `<em class="correct">correct</em>     ${question_16} mod 26 IS ${ word.mod(question_16)}    \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div> \n the num above is "${Math.ceil(question_16/26)*26}" \n the num below is "${Math.floor(question_16/26)*26}"   `
        }
        else  {
             let ans = document.getElementById("modular_arithmetic-ans")
        ans.innerHTML = `<em class="wrong">wrong</em> :(     ${question_16} mod 26 IS ${ word.mod(question_16)}  you typed "${input}" \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div> \n the num above is "${Math.ceil(question_16/26)*26}" \n the num below is "${Math.floor(question_16/26)*26}"  `
            print(false + "16")
        }
        reset_input(16)
        change_question_16()
}

function change_question_16() {
    question_16 = word.random(27,26*26); 
    let question_html_16 = document.getElementById("modular_arithmetic-question")
    question_html_16.innerHTML = `what is ${question_16} mod 26?`   
}
// 17  modular_arithmetic_w_letters 
let question_17;  
change_question_17()
function modular_arithmetic_w_letters_f() {
       let time = timers[17-1].get_time()
        // timers[1-1].reset()
        timers[17-1].stop()
        timers[17-1].reset()
        timers[17-1].start() 

        let input = document.getElementById("modular_arithmetic_w_letters-input").value 
        if (input.toLowerCase() == word.index_to_letter( word.mod(question_17))) {
             let ans = document.getElementById("modular_arithmetic_w_letters-ans")
        ans.innerHTML = `<em class="correct">correct</em>     ${question_17} mod 26 IS ${ word.mod(question_17)}    and ${ word.mod(question_17)}  is ${word.index_to_letter(question_17)}  \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div> \n the num above is "${Math.ceil(question_17/26)*26}" \n the num below is "${Math.floor(question_17/26)*26}"   `
        }
        else  {
        //      let ans = document.getElementById("modular_arithmetic_w_letters-ans")
        // ans.innerHTML = `<em class="wrong">wrong</em> :(     ${question_17} mod 26 IS ${ word.mod(question_17)}  you typed "${input}" \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div> \n the num above is "${Math.ceil(question_17/26)*26}" \n the num below is "${Math.floor(question_17/26)*26}"  `
         let ans = document.getElementById("modular_arithmetic_w_letters-ans")
        ans.innerHTML = `<em class="wrong">wrong</em>     ${question_17} mod 26 IS ${ word.mod(question_17)}    and ${ word.mod(question_17)}  is ${word.index_to_letter(question_17)} you typed "${input}" and "${input}" is ${word.letter_give_index(input)} \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div> \n the num above is "${Math.ceil(question_17/26)*26}" \n the num below is "${Math.floor(question_17/26)*26}"   `
            print(false + "16")
        }
        reset_input(17)
        change_question_17()
}

function change_question_17() {
    question_17 = word.random(27,26*26); 
    let question_html_17 = document.getElementById("modular_arithmetic_w_letters-question")
    question_html_17.innerHTML = `what is ${question_17} mod 26?`   
}


// 18 pollux 

let question_18; 
let quote_18; 
let hint_18; 
let whole_question_18;
function pollux_f() {
     let time = timers[18-1].get_time()
        // timers[1-1].reset()
        timers[18-1].stop()
        timers[18-1].reset()
        timers[18-1].start() 

    let input = document.getElementById('pollux-input').value

    if (input == quote_18.quote) {
       

         let ans = document.getElementById("pollux-ans")
        ans.innerHTML = `<em class="correct">correct</em>    the aswer  IS "${quote_18.quote}" by ${quote_18.author}   \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div> <br> <img src="${quote_18.img_src}">`

        // document.createElement('img')

    }else {
      
    // print(img)
         let ans = document.getElementById("pollux-ans")
        ans.innerHTML = `<em class="wrong">wrong</em> :(   the aswer  IS "${quote_18.quote}" by ${quote_18.author} you typed "${input}" \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>  <br> <img src="${quote_18.img_src}">`

        //  let ans = document.getElementById("modular_arithmetic_w_letters-ans")
        // ans.innerHTML = `<em class="wrong">wrong</em>     ${question_17} mod 26 IS ${ word.mod(question_17)}    and ${ word.mod(question_17)}  is ${word.index_to_letter(question_17)} you typed "${input}" and "${input}" is ${word.letter_give_index(input)} \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div> \n the num above is "${Math.ceil(question_17/26)*26}" \n the num below is "${Math.floor(question_17/26)*26}"   `


        // print(`correct ans "${quote_18.quote}"`)
        // print(`you   "${input}"`)
        
    }
    change_question_18()
}
function change_question_18() {
    // choosing quote
    quote_18 = word.quotes[word.random(0,word.quotes.length-1)]// quote class     
    whole_question_18 = word.pollux_encrypt(quote_18.quote)
    question_18 = whole_question_18.question 
    hint_18 = whole_question_18.hints 
    
    change_hints_18()

    // print(`question: "${question_18}"`)
    // print(`hint: `)
    // print(hint_18)
    

    let items_per_row = 30 


    let table = document.getElementById("pollux-table")
    table.innerHTML = ""
        let row = document.createElement('tr')
    for (let i = 0; i < question_18.length; i++) {
        /* 
                <td> // <- datacell
                    <div>

                    <input class = "pollux-inputs" type="text" item-width="10px" font-size="50px" style="font-size: 50px; width: 50px;" >
                    </div>
                    <div>4</div> 
                </td>
                =>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=> 
                <tr>

         <table>

            <tr>

                <td>
                    <div>

                    <input class = "pollux-inputs" type="text" item-width="10px" font-size="50px" style="font-size: 50px; width: 50px;" >
                    </div>
                    <div>4</div> 
                </td>

                <td>
                    <input class = "pollux-inputs" type="text">
                    <div>9</div> 

                </td>
                
                <td>
                    <input class = "pollux-inputs" type="text">
                    <div>0</div>  
                </td>
                
                <td>
                    <input class = "pollux-inputs" type="text">
                    <div>0</div>  
                </td>
            </tr>
         </table>
            </tr>

                */ 
                let datacell = document.createElement('td')
                let div1 = document.createElement("div") 
                let input_in_div1 = document.createElement('input')
                // print(`before: `)
                // print(input_in_div1) https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput

                // print(`after: `)
                // print(input_in_div1)
                // input_in_div1.class = "pollux-inputs"
                input_in_div1.type = "text" 
                input_in_div1.style = "font-size: 50px; width: 50px;"
                input_in_div1.classList = `${question_18[i]}`
                input_in_div1.id = `${i}`
                input_in_div1.oninput = input_changed_18// won't metion this on html but it's therer 

                
                // document.getElementById(`${i}`).oninput = input_changed_18

                // input_in_div1.oninput = //`input_changed_18(${i})` 
                // input_in_div1.addEventListener('change', input_changed_18(i));

                div1.appendChild(input_in_div1)
                // div1.appendChild(`<input type="text" class="${question_18[i]}" id="${i}" style="font-size: 50px; width: 50px;" oninput="test()">`)


                let div2 = document.createElement("div") 
                div2.innerHTML = question_18[i]
                datacell.appendChild(div1)
                datacell.appendChild(div2)
                row.appendChild(datacell)
                let table_new = document.createElement('table') 
                table_new.appendChild(row)
                let row_new = document.createElement('tr') 
                row_new.appendChild(table_new)
                table.appendChild(row_new)
        
        if ((i%items_per_row == 0 && i!= 0) || i == question_18.length-1) {
            print("new row")
             row = document.createElement('tr')
             let row_for_input = document.createElement('tr')
             let input_new = document.createElement('input')
             input_new.className = "pollux-new-inputs"
             row_for_input.appendChild(input_new) 
             table.appendChild(row_for_input)
        }
    } 
    // change all input width based on items_per_row aroudn 50 * items_per_row 
    let list_of_input = document.getElementsByClassName('pollux-new-inputs')
    print(list_of_input)
    let item; 
    print(`new width ${50*items_per_row}`)
    for (item of list_of_input) {
        // item.style = `width: ${50*items_per_row}; background-color: #3CBC8D; color: white; height: 50px;font-size: 50px;`
        // item.style = `width: ${50*items_per_row}; background-color: #3CBC8D; color: white; height: 50px;font-size: 50px;`
        item.style = `width: ${64*items_per_row}px; background-color: #3CBC8D;  color: white; height: 50px;font-size: 50px;`
        print(`width: ${50*items_per_row}px; background-color: #3CBC8D;`)
        item.width = 50*items_per_row
        
    }

    // change all write - hint to style 
    let list_write = document.getElementsByClassName('hint-table-write')
    // let item
    for (item of list_write) {
        item.style = 'font-size: 50px; width: 50px;'; 

    }





    // change all seven value 
    let zeros = document.getElementsByClassName('0')
    // for ()
}
function test() {
   print( 'input changesd')
}
function handleInput(e) {
  log.textContent = `The field's value is
      ${e.target.value.length} character(s) long.`;
}
change_question_18()   // <=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<= change question
function input_changed_18(e,) {
   
    let id = e.target.id 
    // print(`'changed' =>${id}`)
     let input_changed = document.getElementById(id) 
     let value_to_change_to = input_changed.value
    //  print(input_changed)
    //  print(input_changed)
     let class_value = document.getElementById(id).className 
    //  print(`class => ${class_value}`)
    //  let value = input_changed.value 
     let list = document.getElementsByClassName(class_value)
    //  print(list.length)
    // print(`value => ${value_to_change_to}`)
    //  print(list[])

    let item; 
    for (let i = 0; i<list.length; i++) {
        // print('item')
        // print(list[i])
        list[i].value = value_to_change_to
    }
    // pr list
    //  print(list)


}
function change_input(n,the_value) {
    let list = document.getElementsByClassName(`${n}`)
    for (let i = 0; i< list.length; i++) {
        list[i].value = the_value 
    }
}
function change_hints_18() {
    clear_hints_18()
    let list_of_num_hints = []
    let list = document.getElementsByClassName("pollux-hint-value")
   
    let item
    for (item of hint_18) {
        list_of_num_hints.push(item.num)
        list[item.num].innerHTML = item.value
    }
     print("list_of_num_hints")
    print(list_of_num_hints)
    for (let i=0; i<=9; i++) {
        // print(i)
        if (char_not_in_list(i,list_of_num_hints)) {
            print(i)
             list[i].innerHTML = `<input class="hint-table-write" type="text" style="font-size: 50px; width: 50px;">`
        }
    }
    // print(list)
}
function clear_hints_18() {
    let list = document.getElementsByClassName("pollux-hint-value")
    let item

    for (item of list) {
        item.innerHTML = ""
        // print(item)
    } 
    // print(list)
}
function reset_input_of_player_18() {
    let list = [] 
    for (let i=0; i<=9; i++) {
        let list_num = document.getElementsByClassName(i)
        let item 
        for (item of list_num) {
            list.push(item)
        }
    } 
    let item 
    for (item of list) {
        item.value = ""
    }
}
function fill_in_what_we_know_18() {
    let list = document.getElementsByClassName('pollux-hint-value')
    print(list)
    for (let i=0; i<list.length; i++) {
        let letter = list[i].innerHTML 
        if (word.char_in_list(letter,[".","-","x"])) {
            print(list[i])
            // document.getElementsByClassName(i)[0].innerHTML = letter
            set_18(i,letter)
        }else if (letter == null) {

        }else {
            letter = list[i].children[0].value

            let list_ = document.getElementsByClassName('hint-table-write')
            print("h")
            // print(list_)
            // print(letter)
            if (letter != null)  {

            print(list[i])
            print(list[i].children[0])
            print(list[i].children[0].value)
                set_18(i,list[i].children[0].value)
            }
            // print(letter)
        }
    }
}
function fill_in_the_hints_18() {
    let list = document.getElementsByClassName('pollux-hint-value')
    print(list)
    for (let i=0; i<list.length; i++) {
        let letter = list[i].innerHTML 
        if (word.char_in_list(letter,[".","-","x"])) {
            print(list[i])
            // document.getElementsByClassName(i)[0].innerHTML = letter
            set_18(i,letter)
        }
            // print(letter)
    }
     
}
function set_18(num,text) {
    let list = document.getElementsByClassName(num)
    let item
    for (item of list) {
        item.value = text
    }
}


// 19 morbit
// function morbit_f() {

// }
let question_19; 
let quote_19; 
let hint_19; 
let whole_question_19;
function morbit_f() {
     let time = timers[19-1].get_time()
        // timers[1-1].reset()
        timers[19-1].stop()
        timers[19-1].reset()
        timers[19-1].start() 

        let input = document.getElementById('morbit-input').value

    if (input == quote_19.quote) {
       

         let ans = document.getElementById("morbit-ans")
        ans.innerHTML = `<em class="correct">correct</em>    the aswer  IS "${quote_19.quote}" by ${quote_19.author}   \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div> <br><img src="${quote_19.img_src}">`

        // document.createElement('img')

    }else {
      
    // print(img)
         let ans = document.getElementById("morbit-ans")
        ans.innerHTML = `<em class="wrong">wrong</em> :(   the aswer  IS "${quote_19.quote}" by ${quote_19.author} you typed "${input}" \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div> <br> <img src="${quote_19.img_src}">`

        //  let ans = document.getElementById("modular_arithmetic_w_letters-ans")
        // ans.innerHTML = `<em class="wrong">wrong</em>     ${question_17} mod 26 IS ${ word.mod(question_17)}    and ${ word.mod(question_17)}  is ${word.index_to_letter(question_17)} you typed "${input}" and "${input}" is ${word.letter_give_index(input)} \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div> \n the num above is "${Math.ceil(question_17/26)*26}" \n the num below is "${Math.floor(question_17/26)*26}"   `


        // print(`correct ans "${quote_18.quote}"`)
        // print(`you   "${input}"`)
        
    }
    change_question_19()
}
function change_question_19() {
    // choosing quote
    quote_19 = word.quotes[word.random(0,word.quotes.length-1)]// quote class     
    whole_question_19 = word.morbit_encrypt(quote_19.quote)
    question_19 = whole_question_19.question 
    hint_19 = whole_question_19.hints 
    
    change_hints_19()

    // print(`question: "${question_18}"`)
    // print(`hint: `)
    // print(hint_18)
    

    let items_per_row = 30 


    let table = document.getElementById("morbit-table")
table.innerHTML = ""
        let row = document.createElement('tr')
    for (let i = 0; i < question_19.length; i++) {
        /* 
                <td> // <- datacell
                    <div>

                    <input class = "pollux-inputs" type="text" item-width="10px" font-size="50px" style="font-size: 50px; width: 50px;" >
                    </div>
                    <div>4</div> 
                </td>
                =>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=> 
                <tr>

         <table>

            <tr>

                <td>
                    <div>

                    <input class = "pollux-inputs" type="text" item-width="10px" font-size="50px" style="font-size: 50px; width: 50px;" >
                    </div>
                    <div>4</div> 
                </td>

                <td>
                    <input class = "pollux-inputs" type="text">
                    <div>9</div> 

                </td>
                
                <td>
                    <input class = "pollux-inputs" type="text">
                    <div>0</div>  
                </td>
                
                <td>
                    <input class = "pollux-inputs" type="text">
                    <div>0</div>  
                </td>
            </tr>
         </table>
            </tr>

                */ 
                let datacell = document.createElement('td')
                let div1 = document.createElement("div") 
                let input_in_div1 = document.createElement('input')
                // print(`before: `)
                // print(input_in_div1) https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput

                // print(`after: `)
                // print(input_in_div1)
                // input_in_div1.class = "pollux-inputs"
                input_in_div1.type = "text" 
                input_in_div1.style = "font-size: 50px; width: 50px;"
                input_in_div1.classList = `${format_id_or_class_19( question_19[i])}`
                input_in_div1.id = `${format_id_or_class_19( i)}`
                input_in_div1.oninput = input_changed_19// won't metion this on html but it's therer 

                
                // document.getElementById(`${i}`).oninput = input_changed_18

                // input_in_div1.oninput = //`input_changed_18(${i})` 
                // input_in_div1.addEventListener('change', input_changed_18(i));

                div1.appendChild(input_in_div1)
                // div1.appendChild(`<input type="text" class="${question_18[i]}" id="${i}" style="font-size: 50px; width: 50px;" oninput="test()">`)


                let div2 = document.createElement("div") 
                div2.innerHTML = question_19[i]
                datacell.appendChild(div1)
                datacell.appendChild(div2)
                row.appendChild(datacell)
                let table_new = document.createElement('table') 
                table_new.appendChild(row)
                let row_new = document.createElement('tr') 
                row_new.appendChild(table_new)
                table.appendChild(row_new)
        
        if ((i%items_per_row == 0 && i!= 0) || i == question_19.length-1) {
            print("new row")
             row = document.createElement('tr')
             let row_for_input = document.createElement('tr')
             let input_new = document.createElement('input')
             input_new.className = "morbit-new-inputs"
             row_for_input.appendChild(input_new) 
             table.appendChild(row_for_input)
        }
    } 
    // change all input width based on items_per_row aroudn 50 * items_per_row 
    let list_of_input = document.getElementsByClassName('morbit-new-inputs')
    print(list_of_input)
    let item; 
    print(`new width ${50*items_per_row}`)
    for (item of list_of_input) {
        // item.style = `width: ${50*items_per_row}; background-color: #3CBC8D; color: white; height: 50px;font-size: 50px;`
        // item.style = `width: ${50*items_per_row}; background-color: #3CBC8D; color: white; height: 50px;font-size: 50px;`
        item.style = `width: ${64*items_per_row}px; background-color: #3CBC8D;  color: white; height: 50px;font-size: 50px;`
        print(`width: ${50*items_per_row}px; background-color: #3CBC8D;`)
        item.width = 50*items_per_row
        
    }
    // change all seven value 
    let zeros = document.getElementsByClassName('0')
    // for ()
}
// function test() {
//    print( 'input changesd')
// }
// function handleInput(e) {
//   log.textContent = `The field's value is
//       ${e.target.value.length} character(s) long.`;
// }
  // <=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<= change question
  change_question_19() 
function input_changed_19(e,) {
   
    let id = e.target.id 
    // print(`'changed' =>${id}`)
     let input_changed = document.getElementById(id) 
     let value_to_change_to = input_changed.value
    //  print(input_changed)
    //  print(input_changed)
     let class_value = document.getElementById(id).className 
    //  print(`class => ${class_value}`)
    //  let value = input_changed.value 
     let list = document.getElementsByClassName(class_value)
    //  print(list.length)
    // print(`value => ${value_to_change_to}`)
    //  print(list[])

    let item; 
    for (let i = 0; i<list.length; i++) {
        // print('item')
        // print(list[i])
        list[i].value = value_to_change_to
    }
    // pr list
    //  print(list)


}
// function change_input(n,the_value) {
//     let list = document.getElementsByClassName(`${n}`)
//     for (let i = 0; i< list.length; i++) {
//         list[i].value = the_value 
//     }
// }
function format_id_or_class_19(id_or_class) { // to make sure id has different from pollux 
    return `_${id_or_class}`


}
function change_hints_19() {
    let list_of_num_hints = []
    clear_hints_19()
    let list = document.getElementsByClassName("morbit-hint-value")
print('h')   
//    print(list)
    // let item
    for (item of hint_19) {
        // list_of_num_hints.push(item.num)

        // print(item)
        let list_ = ["..",".-",".x","-.","--","-x","x.","x-","xx"] 
        for (let i=0; i<9; i++) {
            if (item.value == list_[i]) {
                list[i].innerHTML = item.num 
                list_of_num_hints.push(i)
            }
        }
         
    }
    print(list_of_num_hints.sort())

    // add input to rest 

    //  list[0].innerHTML = `<input class="hint-table-write" type="text" style="font-size: 50px; width: 50px;">`
    for (let i=0; i<9; i++) {
        // print(i)
        if (char_not_in_list(i,list_of_num_hints)) {
            print(i)

             list[i].innerHTML = `<input class="hint-table-write" type="text" style="font-size: 50px; width: 50px;">`
        }
    }
    
}
function char_not_in_list(char,list) {
    let item 
    for (item of list ) {
        if (item == char) 
            return false
        
    }
    return true 
}
function clear_hints_19() {
    let list = document.getElementsByClassName("morbit-hint-value")
    let item

    for (item of list) {
        item.innerHTML = ""
        // print(item)
    } 
    // print(list)
}
function reset_input_of_player_19() {
    let list = [] 
    for (let i=0; i<=9; i++) {
        let list_num = document.getElementsByClassName(format_id_or_class_19(i))
        let item 
        for (item of list_num) {
            list.push(item)
        }
    } 
    let item 
    for (item of list) {
        item.value = ""
    }
    let list_ = document.getElementsByClassName('morbit-hint-value') 
    print(list_)
    let item_ 
    for (item_ of list_) {
        print('->')
        if (!word.char_in_list(item_.innerHTML,[1,2,3,4,5,6,7,8,9])) {
            
            print(item_)
            print(item_.children[0])
            print(item_.children[0].value)
            print(item_.innerHTML.value)
            item_.innerHTML.value = ""
            item_.children[0].value = ""
        }
    }
}
function fill_in_what_we_know_19() {
    let list = document.getElementsByClassName('morbit-hint-value')
    for (let i=0; i<list.length; i++) {
        let letter = list[i].innerHTML 
        let morse_opition_for_morbit = [["..",".-",".x","-.","--","-x","x.","x-","xx"]]
        if (word.char_in_list(letter,[1,2,3,4,5,6,7,8,9])) {
            set_19(letter,document.getElementsByClassName("morbit-hint-value-botton")[i].innerHTML)
            // print(list[i])
            // // print(document.getElementsByClassName("morbit-hint-value-botton"))
            print(`#${letter}`)
            print(document.getElementsByClassName("morbit-hint-value-botton")[i])
        }else {
            
            
            letter = list[i].children[0]
            print(`->`)
            print(letter)
            print(document.getElementsByClassName("morbit-hint-value-botton")[i])
            print(document.getElementsByClassName("morbit-hint-value-botton")[i].innerHTML)
            print(`->`)
            if (letter != null)  {
                        set_19(letter.value,document.getElementsByClassName("morbit-hint-value-botton")[i].innerHTML)
            // print(list[i])
            // // print(document.getElementsByClassName("morbit-hint-value-botton"))
            print('-------------------')
            print(`#${i+1}`)
            print(letter)
            print(letter.value)
            print(document.getElementsByClassName("morbit-hint-value-botton")[i])
            print(document.getElementsByClassName("morbit-hint-value-botton")[i].value)
            print('-------------------')
            }
        }
    }
}
function fill_in_the_hints_19() {
     let list = document.getElementsByClassName('morbit-hint-value')
    print(list)
    for (let i=0; i<list.length; i++) {
        let letter = list[i].innerHTML 
        if (word.char_in_list(letter,["..",".-",".x","-.","--","-x","x.","x-","xx"])) {
            set_19(i+1,letter)
        }
    } 
}
function set_19(num,text) {
    let list = document.getElementsByClassName(format_id_or_class_19(num) )
    let item
    for (item of list) {
        item.value = text
    }
} 


// 20 cryptogram_de
let question_20; 
let quote_20; 
let hint_20; 
let whole_question_20;
let whole_quote_20; 
change_question_20()
let alternator_20 = 0
let input_cursor_is_on_id_20 = null;  
function cryptogram_de_f() {
       let time = timers[20-1].get_time()
        // timers[1-1].reset()
        timers[20-1].stop()
        timers[20-1].reset()
        timers[20-1].start() 

    let input = get_ans_20() 
    if (input.toLowerCase() == quote_20.toLowerCase()) {

         let ans = document.getElementById("cryptogram_de-ans")
        ans.innerHTML = `<em class="correct">correct</em>     the aswer  IS "${whole_quote_20.quote}" by ${whole_quote_20.author} you typed "${input}" \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>  <br> <img src="${whole_quote_20.img_src}">`

    }else {
         let ans = document.getElementById("cryptogram_de-ans")
        ans.innerHTML = `<em class="wrong">wrong</em> :(   the aswer  IS "${whole_quote_20.quote}" by ${whole_quote_20.author} you typed "${input}" \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>  <br> <img src="${whole_quote_20.img_src}">`
        // print('wrogn') 
    }
 change_question_20()
 

} 


function get_ans_20() {
    let final_str = ""; 
    for (let i=1; i<= question_20.length; i++) {
        let item = document.getElementById(format_id_or_class_20(i))
        let item_name = item.tagName
        // print(item_name)
        // print(item.getElementsByTagName())
        if (item_name == "INPUT") {
        // print(item)
        // print(item.value)
        // print(item.value == null)
// print(
            final_str += item.value
            if (item.value == "") {
            final_str += " "

            }
        }else if (item_name == "H1") {
        // print(item)
            final_str += item.innerHTML

        }else {

        if (item != null) {
            final_str += item.innerHTML
        
        }
        }
        // if (item[1])
    }
    return final_str
}
function reset_20() {
    for (let i=1; i<= question_20.length; i++) {
        let item = document.getElementById(format_id_or_class_20(i))
        print(item)
        if (item.tagName == "INPUT") {
            item.value = ""
        }

    }
}
function get_hint_20() {
    print(hint_20)
    let vowels = ['a','e',"i","o","u"] 
    for (let i=0; i<5; i++) {

        if (alternator_20 == i) {
            if (char_in_list(vowels[i], whole_quote_20.quote.toLowerCase())) {
                print(`gives hint ${vowels[i]}`)
                give_20(vowels[i])
             }else {
                 if (i ==  4) {
                     i = 0
                 }else {

                    alternator_20 += 1
                 }
             
             }
        }
    }
    // if (alternator_20 == 1) {
    //     if (char_in_list("a", whole_quote_20.quote.toLowerCase())) {
    //         print('gives hint a')
    //      }else {
    //          alternator_20 = 1 
    //      }
    // }
    // if (alternator_20 == 2) {
    //     if (char_in_list("a", whole_quote_20.quote.toLowerCase())) {
    //         print('gives hint a')
    //      }else {
    //          alternator_20 = 1 
    //      }
    // }
    // if (alternator_20 == 3) {
    //     if (char_in_list("a", whole_quote_20.quote.toLowerCase())) {
    //         print('gives hint a')
    //      }else {
    //          alternator_20 = 4 
    //      }
    // }
    // if (alternator_20 == 4) {
    //     if (char_in_list("a", whole_quote_20.quote.toLowerCase())) {
    //         print('gives hint a')
    //      }else {
    //          alternator_20 = 1 
    //      }
    // }
    alternator_20= (alternator_20+1)%5 
    print(alternator_20)
}
function give_20(letter) {/* tells which letter is there */
    print(hint_20)
    for (item of hint_20) {
        if (item.value.toLowerCase() == letter.toLowerCase()) {
            print(item)
            set_20(item.name,item.value)
        }
    }
}
function set_20(item /**/ , text) {
    let list = document.getElementsByClassName(item)
      
    for (let i=0; i<list.length; i++) {
        list[i].value = text 
    }
}
function change_question_20() {
    whole_quote_20 = word.quotes[word.random(0,word.quotes.length-1)]
    quote_20 = whole_quote_20.quote
    whole_question_20 = word.cryptogram_en(quote_20)
    question_20 = whole_question_20.question
    hint_20 = whole_question_20.hints
    print('--------------------------------------------------------------------------')
    print(whole_question_20)
    print(whole_quote_20)
    print('--------------------------------------------------------------------------')
    
    let table = document.getElementById("cryptogram_de-table")
    table.innerHTML = ""
/**
 * 
 * 
 *  
                <td>
                    <div>

                    <input class = "pollux-inputs" type="text" item-width="10px" font-size="50px" style="font-size: 50px; width: 50px;" >
                    </div>
                    <div>4</div> 
                </td>

 */
    let items_per_row = 30
    let item; 
    let row = document.createElement('tr')  
    // for (item of question_20) {
        // print(question_20)
    for (let i=0; i<question_20.length; i++) {
        let item = question_20[i].toLowerCase()
        // print(item)
        if (char_in_list(item.toLowerCase(), word.alphabet_list)) {

            let td = document.createElement('td')
            let div1 = document.createElement('div')
            let div2 = document.createElement('div')
            let input = document.createElement('input')
            input.type = "text"
            input.style = "font-size: 50px; width: 50px;"
            input.className = "cryptogram_de-inputs"
            input.className = item
            input.id = format_id_or_class_20(i+1) 
            input.oninput = input_changed_20
            input.onfocus = on_input_clicked 
            div1.appendChild(input)
            div2.innerHTML = item 
            td.appendChild(div1)
            td.appendChild(div2)
            row.appendChild(td)



        }else {
            // print(item)
            let h1 = document.createElement('h1')
            h1.style = "font-size: 50px; width: 50px;"
            h1.innerHTML = item 
            h1.id = format_id_or_class_20(i+1) 
            // print(h1)
            let td = document.createElement('td')
            td.style = "font-size: 50px; width: 50px;"
            let div1 = document.createElement('div')
            let div2 = document.createElement('div')
            // let input = document.createElement('input')
            // input.type = "text"
            // input.style = "font-size: 50px; width: 50px;"
            // input.className = "cryptogram_de-inputs"
            // input.className = item
            // input.oninput = input_changed_20 
            // div1.appendChild(input)
            div2.appendChild(h1)
            // print(div2)
            // div2.innerHTML = item 
            td.appendChild(div1)
            td.appendChild(div2)
            row.appendChild(td)
            // table.appendChild()

        }
                if ((i%items_per_row == 0 || i== question_20.length-1 ) && i!= 0 ) {
                    table.appendChild(row)
                    row = document.createElement('tr')
                }

    }
     
}
function char_in_list(char,list) {
    let x
    for (x of  list) {
        if (x== char) {
            return true
        }
    }
    return false
}
function input_changed_20(e,) {
   
    let id = e.target.id 
    // print(`'changed' =>${id}`)
     let input_changed = document.getElementById(id) 
     let value_to_change_to = input_changed.value
    //  print(input_changed)
    //  print(input_changed)
     let class_value = document.getElementById(id).className 
    //  print(`class => ${class_value}`)
    //  let value = input_changed.value 
     let list = document.getElementsByClassName(class_value)
    //  print(list.length)
    // print(`value => ${value_to_change_to}`)
    //  print(list[])

    let item; 
    for (let i = 0; i<list.length; i++) {
        // print('item')
        // print(list[i])
        list[i].value = value_to_change_to
    }
    // pr list
    //  print(list)


}

function format_id_or_class_20(id) {
    return "__"+id
}
function un_format_20(id) {
    for (let i=1; i<=question_20.length; i++) {
        if (format_id_or_class_20(i) == id) {
            return i 
        }
    }
    return null
}
function arrowMobility_20(key) {
    let list = ["ArrowLeft","ArrowUp","ArrowRight","ArrowDown",]
    let item 
    for (item of list) {
        if (key == item) {
            print(`${item} is pressed `)
            if (input_cursor_is_on_id_20 != null) {
                print("set")
                print(input_cursor_is_on_id_20)
                let to_next_input=1;
                if (key == list[2]) {
                    
                    for (let i=un_format_20(input_cursor_is_on_id_20)+1; i<=question_20.length;i++) {
                    // let index = un_format_20(input_cursor_is_on_id_20)

                        let item = document.getElementById(format_id_or_class_20(i))
                        if (item.tagName == "INPUT") {
                            to_next_input = i
                            if (i==question_20.length) {
                                to_next_input = 1
                            }
                            break;
                        } 
                        // print(document.getElementById(format_id_or_class_20(i)))
                    }
                    // let index = un_format_20(input_cursor_is_on_id_20)+1 
                    // print(un_format_20(input_cursor_is_on_id_20)+1)
                    set_cursor_to(to_next_input)
                    
                }
                if (key == list[0]) {
                        print("------------------------")
                        print("------------------------")
                        print(1)
                        print(un_format_20(input_cursor_is_on_id_20)-1)
                        print("------------------------")
                        print("------------------------")
                    for (let i=un_format_20(input_cursor_is_on_id_20)-1; i>=1;i--) {
                    // let index = un_format_20(input_cursor_is_on_id_20)

                        let item = document.getElementById(format_id_or_class_20(i))
                        if (item.tagName == "INPUT") {
                            // if (i < )
                            to_next_input = i
                             
                            break;
                        } 
                        // print(document.getElementById(format_id_or_class_20(i)))
                    }
                    // let index = un_format_20(input_cursor_is_on_id_20)+1 
                    // print(un_format_20(input_cursor_is_on_id_20)+1)
                    set_cursor_to(to_next_input)
                    
                }


            }else {
                print('no inpu t beeN pressed')
            }
        }
     }
}
function set_cursor_to(n) {
    let item = document.getElementById(format_id_or_class_20(n))
    // print(document.getElementById(format_id_or_class_20(n)))
// print('->')
    // print(item) 
// print('->')
item.focus()
}
function cursor_is_on_20() {
    for (let i=0; i<question_20.length; i++) {
        // if ()
    }
}
function on_input_clicked(e) {
    // print(e)
    // print(e.target)
    let item = e.target 
    // print(item.id)
    input_cursor_is_on_id_20 = item.id 
    // print(input_cursor_is_on_id_20)
}
// function set_inputs(){
//     var inp = document.getElementsByTagName('INPUT')    ;
//     for(var i = 0; i < inp.length; i++){
//         if(inp[i].type && (inp[i].type=="text")){
//         inp[i].onfocus = function(){alert('The  cursor   is in there!');}

//         }
//         else{continue;}
//     }

// 21 modular_arithmetic_w_negative
let question_21;  
change_question_21()
function modular_arithmetic_w_negative_f() {
       let time = timers[21-1].get_time()
        // timers[1-1].reset()
        timers[21-1].stop()
        timers[21-1].reset()
        timers[21-1].start() 

        let input = document.getElementById("modular_arithmetic_w_negative-input").value 
        if (input.toLowerCase() == word.mod(question_21)) {
             let ans = document.getElementById("modular_arithmetic_w_negative-ans")
        ans.innerHTML = `<em class="correct">correct</em>     ${question_21} mod 26 IS ${ word.mod(question_21)}    and ${ word.mod(question_21)}  is ${word.index_to_letter(question_21)}  \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>   `
        }
        else  {
         
            let ans = document.getElementById("modular_arithmetic_w_negative-ans")
        ans.innerHTML = `<em class="wrong">wrong</em> :(       ${question_21} mod 26 IS ${ word.mod(question_21)}    and ${ word.mod(question_21)}  is ${word.index_to_letter(question_21)}  you typed, "${input}" \n your time is <div class="stopwatch" id="timer-1"><span id="undefinedhi">${word.format_time(time) }</span></div>   `
             
        }
        reset_input(21)
        change_question_21()
}

function change_question_21() {
    question_21 = word.random(-25,-1); 
    let question_html_21 = document.getElementById("modular_arithmetic_w_negative-question")
    question_html_21.innerHTML = `what is ${question_21} mod 26?`   
}

 
// 22 create_question_atbash 
function create_question_atbash_f() {
    let input = document.getElementById('create_question_atbash-input').value 
    let ans = document.getElementById('create_question_atbash-ans')
    let str = `the atbash of "${input}" is  "${word.atbash(input)}"`
    ans.innerHTML = str
}


// 23 to_print_morbit
let question_23; 
let quote_23; 
let hint_23; 
let whole_question_23;
function to_print_morbit_f() {
    let h1 = document.getElementById("to_print_morbit-question")

     quote_23 = word.quotes[word.random(0,word.quotes.length-1)]// quote class     
    whole_question_23 = word.morbit_encrypt(quote_23.quote,6)
    question_23 = whole_question_23.question 
    hint_23 = whole_question_23.hints 
    
    // change_hints_19()/
    print(quote_23)
    print(whole_question_23)
    print(question_23)
    print(hint_23)
    // h1.innerHTML = question_23
    let the_question = ""
    let spacing = 5
    let column = 20; 
    for (let index = 0; index < question_23.length; index++) {
        if (index != 0 && index%column==0) {
        the_question += "<br>"
        the_question += "<br>"
            
        }
        the_question += question_23[index]
        the_question += times(spacing)
    }
    h1.innerHTML = the_question
    // format info abt question to show hints
    let start = "A quote has been encoded using the Morbit Cipher for you to decode. You are told that "
    for (let i = 0; i < hint_23.length; i++) {
        /* 4=-.  */
        let one_num_value  = `${hint_23[i].num} = `
        print(one_num_value)
        for (let index_value = 0; index_value < 2; index_value++) {
            
            if (hint_23[i].value[index_value] == '.') {
                one_num_value +=  "●"
            }else if (hint_23[i].value[index_value] == '-') {
                one_num_value += "–"
            }else {
                one_num_value += "x"
            }
        }
        // print(one_num_value)
        start += one_num_value + ","
        // }else if (hint_23.value == '.') {
    }
    print(`start ${start}`)
    let info = document.getElementById("to_print_morbit-info")
    info.innerHTML = start 
}
function times(n) {
    let final = ""
    for (let index = 0; index < n; index++) {
        final += " "
    }
    return final
}
let n=0
function change_23(css_there) {
     n+= 1 
    if ( css_there) {
        var elements = document.getElementsByClassName("button_kewl");
        for (let item of elements) {
            item.style="font-size:7px;"
        }

    }else {
        var elements = document.getElementsByClassName("button_kewl");
        for (let item of elements) {
            item.style="box-shadow:inset 0px 0px 0px 0px #97c4fe; background:linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%); background-color:#3d94f6; border-radius:7px; border:1px solid #337fed; display:inline-block; cursor:pointer; color:#ffffff; font-family:Arial; font-size:28px; font-weight:bold; padding:19px 24px; text-decoration:none; text-shadow:0px -1px 0px #1570cd;"
        }
        
    }
}

// 24 to_print_pollux
let question_24; 
let quote_24; 
let hint_24; 
let whole_question_24;
function to_print_pollux_f() {
    let h1 = document.getElementById("to_print_pollux-question")

     quote_24 = word.quotes[word.random(0,word.quotes.length-1)]// quote class     
    whole_question_24 = word.pollux_encrypt(quote_24.quote,6)
    question_24 = whole_question_24.question 
    hint_24 = whole_question_24.hints 
    
    // change_hints_19()/
    print(quote_24)
    print(whole_question_24)
    print(question_24)
    print(hint_24)
    // h1.innerHTML = question_23
    let the_question = ""
    let spacing = 2.5
    let column = 40; 
    for (let index = 0; index < question_24.length; index++) {
        if (index != 0 && index%column==0) {
        the_question += "<br>"
        the_question += "<br>"
            
        }
        the_question += question_24[index]
        the_question += times(spacing)
    }
    h1.innerHTML = the_question
    // format info abt question to show hints
    let start = "A quote has been encoded using the Pollux Cipher for you to decode. You are told that "
    for (let i = 0; i < hint_24.length; i++) {
        /* 4=-.  */
        let one_num_value  = `${hint_24[i].num} = `
        print(one_num_value)
        for (let index_value = 0; index_value < 1; index_value++) {
            
            if (hint_24[i].value[index_value] == '.') {
                one_num_value +=  "●"
            }else if (hint_24[i].value[index_value] == '-') {
                one_num_value += "–"
            }else {
                one_num_value += "x"
            }
        }
        // print(one_num_value)
        start += one_num_value + ","
        // }else if (hint_23.value == '.') {
    }
    print(`start ${start}`)
    let info = document.getElementById("to_print_pollux-info")
    info.innerHTML = start 
}
function times(n) {
    let final = ""
    for (let index = 0; index < n; index++) {
        final += " "
    }
    return final
}
let m=0
function change_24(css_there) {
     m+= 1 
    if ( css_there) {
        var elements = document.getElementsByClassName("button_kewl");
        for (let item of elements) {
            item.style="font-size:7px;"
        }

    }else {
        var elements = document.getElementsByClassName("button_kewl");
        for (let item of elements) {
            item.style="box-shadow:inset 0px 0px 0px 0px #97c4fe; background:linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%); background-color:#3d94f6; border-radius:7px; border:1px solid #337fed; display:inline-block; cursor:pointer; color:#ffffff; font-family:Arial; font-size:28px; font-weight:bold; padding:19px 24px; text-decoration:none; text-shadow:0px -1px 0px #1570cd;"
        }
        
    }
}












 // make buttons for each thing 
 // step 1 make hide all button 
let list_of_ids = [
    "give_num_guess_letter",
    "give_letter_guess_num",
    "give_morse_guess_letter",
    "give_letter_guess_morse",
    "atbash_encryption",
    "atbash_decryption",
    "shift_encryption",
    "shift_decryption",
    "affine_en",
    "affine_de",
    "vigenere_en",
    "vigenere_de",
    "random_multiplication_for_affine",
    "random_multiplication_for_affine_in_order",
    "baconian_letter_str",
    "modular_arithmetic",
    "modular_arithmetic_w_letters",
    "pollux", 
    "morbit",
    "cryptogram_de",
    "modular_arithmetic_w_negative",
    "create_question_atbash",
    "to_print_morbit",
    "to_print_pollux",
]
      


function show_createQuestionbutton() {
    let the_div = document.getElementById('create-question-buttions')
    the_div.innerHTML = ""
    the_div.style= 'display:block;'
    if (list_of_ids.length > 18) {
        print("1 down")
        for (let i =19; i< list_of_ids.length; i++)  {
            //   <button onclick="show(19)" class="button_kewl">morbit decryption</button> 
            let button = document.createElement('button')
            // button.onclick = `show(${i+1})`
            // button.onclick = `test_`
            // button.onclick = `test_`
            button.setAttribute('onclick',`show(${i+1})`)
            // https://coderedirect.com/questions/172668/change-onclick-attribute-with-javascript

            // print(`show(${i+1})`)

            button.className = `button_kewl`
            button.innerHTML= `${list_of_ids[i]}`
            the_div.appendChild(button)
        }
    }
}
function clear_createQuestionbutton() {
     let the_div = document.getElementById('create-question-buttions')
    the_div.innerHTML = ""
    print('clear')

}
// document.getElementById('create-question-buttion').addEventListener("mouseover",show_createQuestionbutton) // https://stackoverflow.com/questions/43758941/keep-calling-a-js-function-when-hovering-over-button-html 
// document.getElementById('create-question-buttions').addEventListener("mouseover",show_createQuestionbutton)   

function test_() {
    print("yu benn Clicked")
} 
function reset_input(n) {
    let id = list_of_ids[n-1] + "-input"
    document.getElementById(id).value = ""
}



function hide_all() {
    let id
    for (id of list_of_ids) {
        let x = document.getElementById(id)
        x.style.display = "none";
    }
}

let div_showing = 1;
document.getElementById(list_of_ids[div_showing-1]).addEventListener("mouseover",clear_createQuestionbutton)   
function show(num) {
    hide_all() 
     reset_current_times()
     let x = document.getElementById(list_of_ids[num-1])
        x.style.display = "block";
    // list_of_ids[num-1].style.display = "block"
    div_showing = num 
    let print_id_list = [23, 24]
    
    // if (num == 23 || num == 24) {
    if (word.char_in_list(num,print_id_list)) {
        // for (let item of print_id_list) {
        //     if (num == item) {
                
        //     }
        // }
        change_23(true)
        // change_24(true)
    }else {
        change_23(false)
        
    }
    // if (num == 24) {
    // }else {
    //     change_24(false)
        
    // }
    
}

// hide_all()
div_showing = 24
show(div_showing)
// show(1)



function keyPressed() {
    if (key === "Enter") {
        console.log("enter")
        if (div_showing == 1) {
give_number()
         
        }else if (div_showing == 2) {

        give_letter_f() 
        }else if (div_showing == 3) {

        give_morse()
        
        }else if (div_showing == 4) {
give_letter_guess_morse_f()
        
        }else if (div_showing == 5) {
atbash_en_f()
        
        }else if (div_showing == 6) {
atbash_de_f()
        
        }else if (div_showing == 7) {
shift_encryption_f()
        
        }else if (div_showing == 8) {
shift_decrpytion_f()
        
        }else if (div_showing == 9) {
affine_en_f()
        }else if (div_showing == 10) {
        affine_de_f()    
        
        }else if (div_showing == 11) {
        vigenere_en_f()    
         
        }else if (div_showing == 12) {
        vigenere_de_f()    
        }else if (div_showing == 13) {
            random_multiplication_for_affine_f()    
        
        }else if (div_showing == 14) {
            random_multiplication_for_affine_in_order_f()    
        }else if (div_showing == 15) {
            baconian_letter_str_f()
        
        }else if (div_showing == 16) {
            modular_arithmetic_f()
        
        }else if (div_showing == 17) {
            modular_arithmetic_w_letters_f()
        }else if (div_showing == 18) {
            pollux_f() 
        
        }else if (div_showing == 19) {
            morbit_f() 
    
        }else if (div_showing == 20) {
            cryptogram_de_f()
    
        }else if (div_showing == 21) {
            modular_arithmetic_w_negative_f()
    
        }else if (div_showing == 22) {
             create_question_atbash_f()  
        }else if (div_showing == 23) {
             to_print_morbit_f()  
        }else if (div_showing == 24) {
             to_print_pollux_f()  
        }
        print(div_showing)
        print(list_of_ids[div_showing-1])

    }else {
        console.log(key)
    }
    if (div_showing == 20) {
        arrowMobility_20(key)
    }
    if (key == "e") {
        print(timers[0].get_time() )
    }
      if (keyIsDown(16) && keyIsDown(82)) {
        // print(timers[0].get_time() )
         reset_current_times()
    }
}
// let current_time_1;

function setup() {
       hr = hour();
    mn = minute();
    sc = second();
    ms = millis()
//  current_time_1 = word.current_time()
    // for (let i=0; i <14; i++) {
    //     current_times.push(word.current_time())
    // }
    reset_current_times()
    // print(current_times)
}

function draw() {
    hr = hour();
    mn = minute();
    sc = second();
    ms = millis()
    // print(`${hr} ${mn} ${sc}`)
    //  let the_div = document.getElementById('create-question-buttions')
    //  the_div.innerHTML = ""
    document.getElementById(list_of_ids[div_showing-1]).addEventListener("mouseover",clear_createQuestionbutton)  
}
let num_ = 0 
function num_alternate() {
    let num = num_
    num = (num +1)%3
    num_ = num
    return num 
}
