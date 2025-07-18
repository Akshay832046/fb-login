document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Send data to the backend (local server)
    fetch('/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.text())
    .then(msg => {
        document.getElementById("message").innerText = msg;
    })
    .catch(err => {
        document.getElementById("message").innerText = "Error saving data.";
    });
});
