// put other functions and code here

const exampleMeow = (count) => {
    const meowElement = $('#meow-container')[0];
    const meow = "meow";
    for (let i = 0; i < count; i++) {
        meowElement.innerHTML += meow + " ";
    }
}

const exampleMeowAlert = () => {
    alert('Meow!')
}

const main = () => {
    console.log("Hello, world!");

    // random count between 5 and 10
    const meowCount = Math.floor(Math.random() * 6) + 5;
    exampleMeow(meowCount);
};
main();