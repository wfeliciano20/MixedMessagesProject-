const determiners = ['a', 'the', 'this', 'that', 'your', 'its'];
const adjectives = ['angry', 'lazy', 'clumpsy', 'happy', 'eager', 'calm']
const nouns = ['programmer', 'software engineer', 'developer', 'engineer'];
const verbs = ['wrote', 'developed', 'tested', 'broke']
const secondNouns = ['virus', 'program', 'database', 'code base', 'server'];
let numberOfSentences = 5;
let mixedMessages = [];

const generateRandomNumber = (length) => {
    return Math.floor(Math.random() * length);
}

const generateMessage = () => {
    let firstDeterminant = determiners[generateRandomNumber(determiners.length)];
    let adjective = adjectives[generateRandomNumber(adjectives.length)];
    let noun = nouns[generateRandomNumber(nouns.length)];
    let verb = verbs[generateRandomNumber(verbs.length)];
    let secondDeterminant = determiners[generateRandomNumber(determiners.length)];
    let secondAdjective = adjectives[generateRandomNumber(adjectives.length)];
    let secondNoun = secondNouns[generateRandomNumber(secondNouns.length)];

    let message = `${firstDeterminant} ${adjective} ${noun} ${verb} ${secondDeterminant} ${secondAdjective} ${secondNoun}.`;
    let firstLetter = message[0];
    message = message.replace(message.charAt(0), firstLetter.toUpperCase());
    return message;
}

const printSentences = (numberOfSentences) => {
    console.log('\n\n');
    for (let i = 0; i < numberOfSentences; i++) {
        mixedMessages.push(generateMessage());
        console.log(mixedMessages[i]);
        console.log('\n');
    }
    console.log('\n\n');
}

printSentences(numberOfSentences);