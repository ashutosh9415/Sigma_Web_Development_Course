const messages = [
        "Initializing Hacking",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"
    ];

    const terminal = document.getElementById("terminal");

    function randomDelay() {
        return Math.floor(Math.random() * 7000) + 1000; // 1–7 sec
    }

    function showMessage(message) {
        return new Promise((resolve) => {
            const div = document.createElement("div");
            div.classList.add("line", "dots");
            div.textContent = message;
            terminal.appendChild(div);

            setTimeout(() => {
                div.classList.remove("dots");
                div.textContent = message + "...";
                resolve();
            }, randomDelay());
        });
    }

    async function startHacking() {
        for (let msg of messages) {
            await showMessage(msg);
        }
    }

    startHacking();