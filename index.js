function shout(string) {
    return string.toUpperCase();
}
"Hello!".toUpperCase();

function whisper(string) {
    return string.toLowerCase();
}
"HELLO".toLowerCase();

function logShout(string) {
    console.log("hello".toUpperCase());
}
console.log("hello".toUpperCase());

function logWhisper(string) {
    console.log("HELLO".toLowerCase());
}
console.log("HELLO".toLowerCase());

function sayHiToGrandma(string) {
    if (string === 'hello')
    return "I can\'t hear you!"
    else if (string === 'HELLO')
    return "YES INDEED!"
    else (string === "I love you, Grandma.")
    return "I love you, too."
}
console.log(sayHiToGrandma("hello"));