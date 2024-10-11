const sentences = [
    "Tangled lanterns overlooking Fantasyland",
    "Fostering ideas of creativity and magic",
    "Being a kid meant dreaming big and forcing all my little siblings to learn dance routines",
    "Each glowing lantern is a wish waiting to be fulfilled, illuminating the darkness with the promise of new beginnings",
    "Even in the darkest moments, let your dreams rise like lanterns-small lights that guide you home."
];

function changeText() {
    const textBox = document.getElementById('text-box');
    const randomIndex = Math.floor(Math.random() * sentences.length); // Generate a random index
    textBox.innerText = sentences[randomIndex]; // Change the text to a random sentence
}