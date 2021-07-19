const determiners = ['a', 'the', 'this', 'that', 'your', 'its'];
const adjectives = ['angry', 'lazy', 'clumpsy', 'happy', 'eager', 'calm']
const nouns = ['programmer', 'software engineer', 'developer', 'engineer'];
const verbs = ['wrote', 'developed', 'tested', 'broke']
const secondNouns = ['virus', 'program', 'database', 'code base', 'server'];


const generateMessage = () => {
    let firstDeterminant = determiners[Math.floor(Math.random() * determiners.length)];
    let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    let noun = nouns[Math.floor(Math.random() * nouns.length)];
    let verb = verbs[Math.floor(Math.random() * verbs.length)];
    let secondDeterminant = determiners[Math.floor(Math.random() * determiners.length)];
    let secondAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    let secondNoun = secondNouns[Math.floor(Math.random() * secondNouns.length)];

    let message = `${firstDeterminant} ${adjective} ${noun} ${verb} ${secondDeterminant} ${secondAdjective} ${secondNoun}.`;
    let firstLetter = message[0];
    message = message.replace(message.charAt(0), firstLetter.toUpperCase());
    return message;
}
let numberOfSentences = 5;
let mixedMessages = [];

console.log('\n\n');
for (let i = 0; i < numberOfSentences; i++) {
    mixedMessages.push(generateMessage());
    console.log(mixedMessages[i]);
    console.log('\n');
}
console.log('\n\n');