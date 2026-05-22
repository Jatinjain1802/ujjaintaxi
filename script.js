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
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    const links = document.querySelectorAll('.nav-links li a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) hamburger.classList.remove('active');
            if (navLinks) navLinks.classList.remove('active');
        });
    });

    // ==========================================
    // 2. STICKY NAVBAR EFFECT
    // ==========================================
    // LEARNING TIP: Avoid modifying visual styles directly in JS (presentation/behavior separation).
    // Instead, we toggle a `.navbar-scrolled` class and let our theme-aware CSS handle 
    // the scroll-background color transition seamlessly for both dark and light modes!
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
        }
    });

    // ==========================================
    // 3. BOOKING FORM LOGIC (Trip Tabs & Estimate)
    // ==========================================
    const tabs = document.querySelectorAll('.trip-tabs .tab');
    const returnDateRow = document.getElementById('return-date-row');
    const carSelect = document.getElementById('car-type');
    
    // Handle tab switching (if tabs exist on the page)
    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');

                // Logic: Show return date ONLY if "Round Trip" is selected
                const tripType = tab.getAttribute('data-type');
                if (returnDateRow) {
                    if (tripType === 'roundtrip') {
                        returnDateRow.style.display = 'block';
                    } else {
                        returnDateRow.style.display = 'none';
                    }
                }
            });
        });
    }

    // WhatsApp Booking Button Logic (Primary Form)
    const waBookBtn = document.getElementById('wa-book-btn');
    if (waBookBtn) {
        waBookBtn.addEventListener('click', () => {
            // Gather form data to construct a WhatsApp message
            const pickup = document.getElementById('pickup') ? document.getElementById('pickup').value : 'Not specified';
            const drop = document.getElementById('drop') ? document.getElementById('drop').value : 'Not specified';
            const date = document.getElementById('date') ? document.getElementById('date').value : 'Not specified';
            const carOption = carSelect ? carSelect.options[carSelect.selectedIndex] : null;
            const carType = carOption ? carOption.text : 'Not specified';
            const name = document.getElementById('name') ? document.getElementById('name').value : 'Customer';

            // Construct message string
            const text = `Namaste, I am ${name}. I want to book a cab.\n\nFrom: ${pickup}\nTo: ${drop}\nDate: ${date}\nCar: ${carType}\n\nPlease confirm availability.`;
            
            // Encode for URL (handles spaces, newlines, etc.)
            const encodedText = encodeURIComponent(text);
            // Client's WhatsApp number (9826157552)
            const waURL = `https://wa.me/919826157552?text=${encodedText}`;
            
            // Open WhatsApp in a new tab
            window.open(waURL, '_blank');
        });
    }

    // WhatsApp Booking Button Logic (Secondary/Contact Form)
    const contactForm = document.getElementById('contact-booking');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const inputs = contactForm.querySelectorAll('input');
            const select = contactForm.querySelector('select');
            
            const name = inputs[0] ? inputs[0].value : 'Customer';
            const mobile = inputs[1] ? inputs[1].value : 'Not specified';
            const pickup = inputs[2] ? inputs[2].value : 'Not specified';
            const drop = inputs[3] ? inputs[3].value : 'Not specified';
            const date = inputs[4] ? inputs[4].value : 'Not specified';
            const carType = select ? select.options[select.selectedIndex].text : 'Not specified';

            const text = `Namaste, I am ${name} (Mobile: ${mobile}). I want to book a cab via your Quick Booking Form.\n\nFrom: ${pickup}\nTo: ${drop}\nDate: ${date}\nCar: ${carType}\n\nPlease confirm availability.`;
            
            const encodedText = encodeURIComponent(text);
            const waURL = `https://wa.me/919826157552?text=${encodedText}`;
            
            window.open(waURL, '_blank');
        });
    }

    // ==========================================
    // 4. ANIMATED COUNTERS (Trust Bar)
    // ==========================================
    // This is an advanced concept: Intersection Observer.
    // It runs code ONLY when an element scrolls into the user's view.
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    if (counters.length > 0) {
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
    }

    // ==========================================
    // 5. PREMIUM DYNAMIC THEME SYSTEM (Dark / Light)
    // ==========================================
    // LEARNING TIP: We declare a modular Theme Manager inside our DOMContentLoaded handler.
    // By using vanilla JS, we dynamically inject the theme toggle button into the DOM.
    // This allows us to share the switcher across all 6 subpages without repeating HTML markup.
    // We then persist the user's choice using the browser's LocalStorage API.

    // 1. Core Icons as high-resolution vector SVGs
    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

    // 2. Read saved theme from browser cache or default to dark (Obsidian)
    const savedTheme = localStorage.getItem('theme') || 'dark';

    // 3. Apply the initial theme state on page load (synchronized with head detection)
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-theme');
    }

    // 4. Dynamically inject the Theme Toggle Button into document.body
    const injectThemeToggle = () => {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'theme-toggle-btn';
        toggleBtn.id = 'theme-toggle';
        toggleBtn.setAttribute('aria-label', 'Toggle theme mode');
        
        // Show the sun icon if the current theme is light, otherwise show the moon icon
        toggleBtn.innerHTML = (document.documentElement.classList.contains('light-theme')) ? sunIcon : moonIcon;
        
        document.body.appendChild(toggleBtn);

        // 5. Setup the click event interaction
        toggleBtn.addEventListener('click', () => {
            // Toggle the .light-theme class on html (documentElement)
            const isLightNow = document.documentElement.classList.toggle('light-theme');
            
            // Save state to localStorage so it stays persistent on page transitions
            localStorage.setItem('theme', isLightNow ? 'light' : 'dark');
            
            // Update button SVG icon with a quick rotation spin transition
            const svgEl = toggleBtn.querySelector('svg');
            if (svgEl) {
                svgEl.style.transform = 'scale(0) rotate(180deg)';
            }
            
            setTimeout(() => {
                toggleBtn.innerHTML = isLightNow ? sunIcon : moonIcon;
                const newSvgEl = toggleBtn.querySelector('svg');
                if (newSvgEl) {
                    newSvgEl.style.transform = 'scale(0) rotate(-180deg)';
                    // Trigger reflow to execute rotation transition
                    newSvgEl.getBoundingClientRect();
                    newSvgEl.style.transform = 'scale(1) rotate(0)';
                }
            }, 180);
        });
    };

    // Run the injector
    injectThemeToggle();

});
