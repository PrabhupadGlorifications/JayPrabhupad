function addFormListener() {
    const formIframe = document.getElementById("donation-form");
    formIframe.onload = () => {
        const message = document.getElementById("thank-you-message");
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has("submitted")) {
            message.style.display = "block";
        }
    }
}