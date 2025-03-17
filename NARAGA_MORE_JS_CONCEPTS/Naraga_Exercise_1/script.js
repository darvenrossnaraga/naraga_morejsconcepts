// Select the button and paragraph elements
const button = document.getElementById('changeTextBtn');
const paragraph = document.getElementById('message');

// Add an event listener to the button
button.addEventListener('click', function() {
    paragraph.textContent = 'You clicked the button!';
});
