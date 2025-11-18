// Horoscope widget (demo)
function showHoroscope() {
    const period = document.getElementById('period').value;
    const sign = document.getElementById('zodiac-sign').value;
    const el = document.getElementById('horoscope-result');
    el.innerHTML = `<b>${sign} (${period}) Horoscope:</b> Expect unique cosmic vibes today! 🌟 [This is demo text.]`;
}

// Compatibility checker (demo)
function checkCompatibility(event) {
    event.preventDefault();
    const sign1 = document.getElementById('sign1').value;
    const sign2 = document.getElementById('sign2').value;
    const el = document.getElementById('compatibility-result');
    if (sign1 === sign2) {
        el.textContent = `Both are ${sign1}. Cosmic harmony! ✨`;
    } else {
        el.textContent = `${sign1} + ${sign2}: Curious chemistry! Explore & see. [Demo result]`;
    }
}

// Contact form (demo)
function submitContact(event) {
    event.preventDefault();
    document.getElementById('contact-message').textContent = "Thank you for contacting us! We'll reach out soon.";
    event.target.reset();
}

// Newsletter (demo)
function subscribeNewsletter(event) {
    event.preventDefault();
    document.getElementById('newsletter-message').textContent = "Subscribed! Welcome to our cosmic updates. 🌌";
    event.target.reset();
}

// Astrology calculator (demo)
function calculateChart(event) {
    event.preventDefault();
    document.getElementById('calculator-result').innerHTML = "Birth chart calculator coming soon! [Demo]";
}