// --------- set event handler

const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

// ---- using on<event-name> = function
btn2.onclick = () => {
    console.log("Button 2 click!");
}

// reset all handlers and set this one only
btn2.onclick = () => console.warn("Button 2 click!");

// ---- using .addEventListener('name', function)
btn3.addEventListener('click', function () {
    console.log("Button 3 click!");
});
btn3.addEventListener('click', function () {
    console.warn("Button 3 click!");
});
btn3.addEventListener('click', showMessage);

btn3.removeEventListener('click', showMessage); // clear showMessage function only
//btn3.removeEventListener('click');            // clear all click handlers

// ----- mouse events
btn3.onmousedown = () => console.log("Mouse Down");
btn3.onmouseup = () => console.log("Mouse Up");
btn3.onmouseenter = () => console.log("Mouse Enter");
btn3.onmouseleave = () => console.log("Mouse Leave");

// -------- widnow events
window.onmousemove = (event) => {
    coordsText.textContent = `${event.x} : ${event.y}`;
}

// ---------- [event] parameter
const circles = document.querySelectorAll('.container .circle');

circles.forEach((i) => {
    i.addEventListener('click', function (event) {

        console.log(event);
        // [target] [this] - reference to the object onto which the event was dispatched
        console.log(event.target); // <div class="circle">...
        console.log(this);

        i.classList.toggle('super');
    });
});


// ----------- helpers
function showMessage() {
    console.log("Some message...!");
}