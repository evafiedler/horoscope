var messages = ["Stay away from tall bridges and people named Margaret.", "You are like a salmon; swim upstream.",
    "Plan for the end of the world. You never know when it's coming.",
    "Always remember: sticking your finger in a socket is more fun when you're wet.",
    "Your long lost twin is out there looking for  you; go find them.",
    "Dogs don't like you, stop trying to befriend them.",
    "Money is the solution to all your problems.",
    "You're perfect already. You don't need my advice.",
    "Try yoga; it might help with your back problems.",
    "Love is like a heavy blanket; warm but slighty suffocating.",
    "Follow the ants",
    "Honestly, do whatever you want. I'm too tired to come up with another horoscope."];
var source = ["images/aquarius.png", "images/pisces.png", "images/aries.png", "images/taurus.png",
    "images/gemini.png", "images/cancer.png", "images/leo.png", "images/virgo.png", "images/libra.png",
    "images/scorpio.png", "images/sagittarius.png", "images/capricorn.svg"];
var yearOf = ["Year of the Monkey", "Year of the Rooster", "Year of the Dog", "Year of the Boar",
    "Year of the Rat", "Year of the Ox", "Year of the Tiger", "Year of the Rabbit", "Year of the Dragon",
    "Year of the Snake", "Year of the Horse", "Year of the Sheep"];
var astSign = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra",
    "Scorpio", "Sagittarius", "Not a date"];

function onSubmit(){
    var sign = determineSign(document.getElementById("month").value, document.getElementById("day").value);
    document.getElementById("sign").innerHTML = sign;

    var horoscope = determineHoroscope(sign);
    document.getElementById("horoscope").innerHTML = horoscope;

    var image = determineImage(sign);
    document.getElementById("image").src = image;

    var name = determineName(document.getElementById("name").value);
    document.getElementById("intro").innerHTML = name;

    var zodiac = determineChineseZodiac(document.getElementById("year").value);
    document.getElementById("zodiac").innerHTML = zodiac;
}


function determineSign(month, day){
    var mon = month;
    var day = day;
    var sign = "";
    if(mon == 0){
        if(day <= 19){
            sign = astSign[0];
        }else{
            sign = astSign[1];
        }
    }else if(mon == 1){
        if(day <= 18){
            sign = astSign[1];
        }else if(day > 19 && day < 29){
            sign = astSign[2];
        }else{
            sign = astSign[12];
        }
    }else if(mon == 2){
        if(day <= 20){
            sign = astSign[2];
        }else{
            sign = astSign[3];
        }
    }else if(mon == 3){
        if(day <= 19){
            sign = astSign[3];
        }else if(day > 19 && day < 31){
            sign = astSign[4];
        }else{
            sign = astSign[12];
        }
    }else if(mon == 4){
        if(day <= 20){
            sign = astSign[4];
        }else{
            sign = astSign[5];
        }
    }else if(mon == 5){
        if(day <= 20){
            sign = astSign[5];
        }else if(day > 20 && day < 31){
            sign = astSign[6];
        }else{
            sign = astSign[12];
        }
    }else if(mon == 6){
        if(day <= 22){
            sign = astSign[6];
        }else{
            sign = astSign[7];
        }
    }else if(mon == 7){
        if(day <= 22){
            sign = astSign[7];
        }else{
            sign = astSign[8];
        }
    }else if(mon == 8){
        if(day <= 22){
            sign = astSign[8];
        }else if(day > 22 && day < 31){
            sign = astSign[9];
        }else{
            sign = astSign[12];
        }
    }else if(mon == 9){
        if(day <= 22){
            sign = astSign[9];
        }else{
            sign = astSign[10];
        }
    }else if(mon == 10){
        if(day <= 21){
            sign = astSign[10];
        }else if(day > 21 && day < 31){
            sign = astSign[11];
        }else{
            sign = astSign[12];
        }
    }else{
        if(day <= 21){
            sign = astSign[11];
        }else{
            sign = astSign[0];
        }
    }
    return sign;
}

function determineHoroscope(zodiac){
    var sign = zodiac;
    var horoscope = "";
    if(sign == "Aquarius"){
        horoscope = messages[0];
    }else if(sign == "Pisces"){
        horoscope = messages[1];
    }else if(sign == "Aries") {
        horoscope = messages[2];
    }else if(sign == "Taurus"){
        horoscope = messages[3];
    }else if(sign == "Gemini"){
        horoscope = messages[4];
    }else if(sign == "Cancer"){
        horoscope = messages[5];
    }else if(sign == "Leo"){
        horoscope = messages[6];
    }else if(sign == "Virgo"){
        horoscope = messages[7];
    }else if(sign == "Libra"){
        horoscope = messages[8];
    }else if(sign == "Scorpio"){
        horoscope = messages[9];
    }else if(sign == "Sagittarius"){
        horoscope = messages[10];
    }else{
        horoscope = messages[11];
    }
    return horoscope;
}

function determineImage(zodiac){
    var sign = zodiac;
    var image = "";
    if(sign == "Aquarius"){
        image = source[0];
    }else if(sign == "Pisces"){
        image = source[1];
    }else if(sign == "Aries") {
        image = source[2];
    }else if(sign == "Taurus"){
        image = source[3];
    }else if(sign == "Gemini"){
        image = source[4];
    }else if(sign == "Cancer"){
        image = source[5];
    }else if(sign == "Leo"){
        image = source[6];
    }else if(sign == "Virgo"){
        image = source[7];
    }else if(sign == "Libra"){
        image = source[8];
    }else if(sign == "Scorpio"){
        image = source[9];
    }else if(sign == "Sagittarius"){
        image = source[10];
    }else{
        image = source[11];
    }
    return image;
}

function determineName(name){
    var intro = name + ", your sign, horoscope, and Chinese zodiac are:";
    return intro;
}

function determineChineseZodiac(year){
    var zodiac = "";
    if(year % 12 == 0){
        zodiac = yearOf[0];
    }else if(year % 12 == 1){
        zodiac = yearOf[1];
    }else if(year % 12 == 2){
        zodiac = yearOf[2];
    }else if(year % 12 == 3){
        zodiac = yearOf[3];
    }else if(year % 12 == 4){
        zodiac = yearOf[4];
    }else if(year % 12 == 5){
        zodiac = yearOf[5];
    }else if(year % 12 == 6){
        zodiac = yearOf[6];
    }else if(year % 12 == 7){
        zodiac = yearOf[7];
    }else if(year % 12 == 8){
        zodiac = yearOf[8];
    }else if(year % 12 == 9){
        zodiac = yearOf[9];
    }else if(year % 12 == 10){
        zodiac = yearOf[10];
    }else if(year % 12 == 11){
        zodiac = yearOf[11];
    }
    return zodiac;
}