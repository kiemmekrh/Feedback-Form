const form = document.querySelector("form") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("address") as HTMLInputElement;
const messageInput = document.getElementById("messages") as HTMLTextAreaElement;

form.addEventListener("submit", (event: Event) => {
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
