/* --- STICKY NAVIGATION EFFECT --- */
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.opacity = '0.95';
    } else {
        navbar.style.opacity = '1';
    }
});

/* --- ADD TO CART ALERT --- */
function addToOrder(itemName) {
    // A simple visual feedback
    alert(`${itemName} has been added to your order! ☕`);
}

/* --- CONTACT FORM HANDLER --- */
function submitForm(event) {
    event.preventDefault(); // Stop page refresh
    const btn = event.target.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = "Sending...";
    
    setTimeout(() => {
        btn.innerText = "Sent Successfully!";
        btn.style.backgroundColor = "#27ae60"; // Green color
        btn.style.color = "white";
        event.target.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = "";
            btn.style.color = "";
        }, 3000);
    }, 1500);
}