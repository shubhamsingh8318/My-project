function showSurprise() {
    document.getElementById("surprise").classList.remove("hidden");
}

// Optional: Name from URL
const params = new URLSearchParams(window.location.search);
const personName = params.get("name");

if (personName) {
    document.getElementById("name").innerText = personName;
}
