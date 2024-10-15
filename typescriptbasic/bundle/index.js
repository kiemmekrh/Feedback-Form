"use strict";
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("address");
const messageInput = document.getElementById("messages");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const messages = messageInput.value.trim();
    if (name === "") {
        alert("Name can not be empty");
        return;
    }
    if (email === "") {
        alert("Email can not be empty");
        return;
    }
    if (phone === "") {
        alert("Phone can not be empty");
        return;
    }
    if (messages === "") {
        alert("Messages can not be empty");
        return;
    }
    prompt("Form submitted!");
    form.submit();
});
