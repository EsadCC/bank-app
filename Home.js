document.addEventListener("DOMContentLoaded", () => {
    const loginDialog = document.getElementById("box");
    const signupDialog = document.getElementById("box2");
    const loginBtn = document.getElementById("inlogknop");
    const signupBtn = document.getElementById("accountmaken");
    const closeLoginBtn = document.getElementById("closeLogin");
    const closeSignupBtn = document.getElementById("closeSignup");
    const linkToSignup = document.getElementById("linkToSignup");
    const linkToLogin = document.getElementById("linkToLogin");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const loginMessage = document.getElementById("notification");
    const signupMessage = document.getElementById("signup-notification");

    const users = [
        { username: "gebruiker1", password: "Abc!" },
        { username: "gebruiker2", password: "Def!" },
        { username: "gebruiker3", password: "Ghi!" }
    ];

    function showMessage(element, text, ok) {
        element.textContent = text;
        element.style.color = ok ? "#15803d" : "#b91c1c";
    }

    function openDialog(dialog) {
        if (!dialog) return;
        if (typeof dialog.showModal === "function") {
            dialog.showModal();
        } else {
            dialog.setAttribute("open", "");
        }
    }

    function closeDialog(dialog) {
        if (!dialog) return;
        if (typeof dialog.close === "function") {
            dialog.close();
        } else {
            dialog.removeAttribute("open");
        }
    }

    loginBtn?.addEventListener("click", () => openDialog(loginDialog));
    signupBtn?.addEventListener("click", () => openDialog(signupDialog));
    closeLoginBtn?.addEventListener("click", () => closeDialog(loginDialog));
    closeSignupBtn?.addEventListener("click", () => closeDialog(signupDialog));

    linkToSignup?.addEventListener("click", (event) => {
        event.preventDefault();
        closeDialog(loginDialog);
        openDialog(signupDialog);
    });

    linkToLogin?.addEventListener("click", (event) => {
        event.preventDefault();
        closeDialog(signupDialog);
        openDialog(loginDialog);
    });

    loginDialog?.addEventListener("click", (event) => {
        if (event.target === loginDialog) closeDialog(loginDialog);
    });

    signupDialog?.addEventListener("click", (event) => {
        if (event.target === signupDialog) closeDialog(signupDialog);
    });

    loginForm?.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("gebruikersnaam")?.value.trim();
        const password = document.getElementById("wachtwoord")?.value;

        if (!username || !password) {
            showMessage(loginMessage, "Vul gebruikersnaam en wachtwoord in.", false);
            return;
        }

        const validUser = users.find((user) => user.username === username && user.password === password);
        if (!validUser) {
            showMessage(loginMessage, "Ongeldige gebruikersnaam of wachtwoord.", false);
            return;
        }

        showMessage(loginMessage, "Inloggen gelukt! Je wordt doorgestuurd...", true);
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 500);
    });

    signupForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        showMessage(signupMessage, "Account aangemaakt! Je wordt doorgestuurd...", true);
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 500);
    });
});