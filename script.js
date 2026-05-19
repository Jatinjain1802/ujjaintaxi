/**
 * Taxi In Ujjain - Core Interactions
 * This script handles the Navbar, Tabs, Accordions, and animations.
 * Perfect for learning basic vanilla JS DOM manipulation!
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. MOBILE NAVBAR (Hamburger Menu)
    // ==========================================
    // We select the hamburger icon and the list of links.
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    // When the hamburger is clicked, toggle the 'active' class on both elements.
    // In CSS, .active makes the menu slide in and changes the hamburger icon to an 'X'.
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    const links = document.querySelectorAll('.nav-links li a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // ==========================================
    // 2. STICKY NAVBAR EFFECT
    // ==========================================
    // Adds a slight shadow or opacity change when scrolling down.
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.92)';
            navbar.style.boxShadow = 'none';
        }
    });

    // ==========================================
    // 3. BOOKING FORM LOGIC (Trip Tabs & Estimate)
    // ==========================================
    const tabs = document.querySelectorAll('.trip-tabs .tab');
    const returnDateRow = document.getElementById('return-date-row');
    const carSelect = document.getElementById('car-type');
    const fareEstimateBox = document.querySelector('#fare-estimate span');
    
    // Handle tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            // Logic: Show return date ONLY if "Round Trip" is selected
            const tripType = tab.getAttribute('data-type');
            if (tripType === 'roundtrip') {
                returnDateRow.style.display = 'block';
            } else {
                returnDateRow.style.display = 'none';
            }
        });
    });

    // Basic Fare Estimator (Client-Side Simulation)
    // We listen for changes on the car type dropdown to update the UI
    carSelect.addEventListener('change', (e) => {
        // Get the selected option element
        const selectedOption = e.target.options[e.target.selectedIndex];
        // Get the rate stored in the custom attribute 'data-rate'
        const rate = selectedOption.getAttribute('data-rate');
        
        if (rate) {
            fareEstimateBox.textContent = `₹${rate}/km base rate`;
        } else {
            fareEstimateBox.textContent = `Call for Pricing`;
        }
    });

    // WhatsApp Booking Button Logic (Primary Form)
    const waBookBtn = document.getElementById('wa-book-btn');
    waBookBtn.addEventListener('click', () => {
        // Gather form data to construct a WhatsApp message
        const pickup = document.getElementById('pickup').value || 'Not specified';
        const drop = document.getElementById('drop').value || 'Not specified';
        const date = document.getElementById('date').value || 'Not specified';
        const carOption = carSelect.options[carSelect.selectedIndex];
        const carType = carOption ? carOption.text : 'Not specified';
        const name = document.getElementById('name').value || 'Customer';

        // Construct message string
        const text = `Namaste, I am ${name}. I want to book a cab.\n\nFrom: ${pickup}\nTo: ${drop}\nDate: ${date}\nCar: ${carType}\n\nPlease confirm availability.`;
        
        // Encode for URL (handles spaces, newlines, etc.)
        const encodedText = encodeURIComponent(text);
        // Client's WhatsApp number (9826157552)
        const waURL = `https://wa.me/919826157552?text=${encodedText}`;
        
        // Open WhatsApp in a new tab
        window.open(waURL, '_blank');
    });

    // WhatsApp Booking Button Logic (Secondary/Contact Form)
    const contactForm = document.getElementById('contact-booking');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputs = contactForm.querySelectorAll('input');
        const select = contactForm.querySelector('select');
        
        const name = inputs[0].value || 'Customer';
        const mobile = inputs[1].value || 'Not specified';
        const pickup = inputs[2].value || 'Not specified';
        const drop = inputs[3].value || 'Not specified';
        const date = inputs[4].value || 'Not specified';
        const carType = select.options[select.selectedIndex].text || 'Not specified';

        const text = `Namaste, I am ${name} (Mobile: ${mobile}). I want to book a cab via your Quick Booking Form.\n\nFrom: ${pickup}\nTo: ${drop}\nDate: ${date}\nCar: ${carType}\n\nPlease confirm availability.`;
        
        const encodedText = encodeURIComponent(text);
        const waURL = `https://wa.me/919826157552?text=${encodedText}`;
        
        window.open(waURL, '_blank');
    });

    // ==========================================
    // 4. ANIMATED COUNTERS (Trust Bar)
    // ==========================================
    // This is an advanced concept: Intersection Observer.
    // It runs code ONLY when an element scrolls into the user's view.
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const animateCounters = (entries, observer) => {
        entries.forEach(entry => {
            // If the section is visible on screen
            if (entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    // target value from data-target attribute (e.g., 284)
                    const target = +counter.getAttribute('data-target');
                    // current number displayed
                    const count = +counter.innerText;
                    // increment calculated based on total and speed
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
                // Stop observing once animated
                observer.unobserve(counter);
            }
        });
    };

    // Create the observer
    const counterObserver = new IntersectionObserver(animateCounters, {
        threshold: 0.5 // trigger when 50% of the element is visible
    });

    // Attach observer to each counter element
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // ==========================================
    // 5. ACCORDION LOGIC (Terms & Conditions)
    // ==========================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle active class on header for styling (changing + to -)
            header.classList.toggle('active');
            
            // The content div is the immediate next sibling
            const content = header.nextElementSibling;
            
            // Scroll height gives the height of the element's content
            if (content.style.maxHeight) {
                // If it's open, close it
                content.style.maxHeight = null;
            } else {
                // If it's closed, open it by setting max-height
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
