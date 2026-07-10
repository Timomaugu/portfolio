/**
 * Maugu Portfolio - Homepage Interactivity
 * Typewriter effect, stat counters, scroll animations
 */

document.addEventListener('DOMContentLoaded', function() {

    // ============================================================
    // TYPEWRITER EFFECT
    // ============================================================
    const roles = [
        'Full Stack Developer',
        'Mobile App Developer',
        'UI/UX Enthusiast',
        'Data Analyst',
        'Freelancer'
    ];

    const typedRoleEl = document.getElementById('typed-role');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeEffect() {
        if (!typedRoleEl) return;

        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typedRoleEl.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typedRoleEl.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500; // Pause before next word
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // Start typewriter after a short delay
    setTimeout(typeEffect, 1000);


    // ============================================================
    // STAT COUNTER ANIMATION
    // ============================================================
    function animateCounters() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(function(el) {
            const target = parseInt(el.getAttribute('data-target'));
            const step = Math.max(1, Math.floor(target / 60));
            let current = 0;

            const updateCounter = function() {
                current += step;
                if (current >= target) {
                    el.textContent = target;
                    return;
                }
                el.textContent = current;
                requestAnimationFrame(updateCounter);
            };

            // Reset first
            el.textContent = '0';
            updateCounter();
        });
    }


    // ============================================================
    // SCROLL REVEAL ANIMATIONS
    // ============================================================
    function setupScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal');
        
        if (revealElements.length === 0) return;

        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const revealObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // If this is the stats section, trigger counter animation
                    if (entry.target.classList.contains('stats')) {
                        animateCounters();
                    }
                    
                    revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(function(el) {
            revealObserver.observe(el);
        });
    }

    // ============================================================
    // PORTFOLIO FILTERING
    // ============================================================
    function setupPortfolioFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        if (filterBtns.length === 0 || projectCards.length === 0) return;

        filterBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                // Update active button
                filterBtns.forEach(function(b) { b.classList.remove('active'); });
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(function(card) {
                    const category = card.getAttribute('data-category');
                    const shouldShow = filterValue === 'all' || category === filterValue;

                    if (shouldShow) {
                        card.style.display = 'block';
                        // Force reflow so the browser registers the display change
                        void card.offsetHeight;
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px) scale(0.95)';
                        setTimeout(function() {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // ============================================================
    // SCROLL TO TOP BUTTON
    // ============================================================
    function setupScrollToTop() {
        // Create button element
        const btn = document.createElement('button');
        btn.className = 'scroll-to-top';
        btn.setAttribute('aria-label', 'Scroll to top');
        btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        document.body.appendChild(btn);

        let isVisible = false;
        const scrollThreshold = 400;

        function checkScroll() {
            const scrollY = window.scrollY || window.pageYOffset;
            if (scrollY > scrollThreshold && !isVisible) {
                isVisible = true;
                btn.classList.add('visible');
            } else if (scrollY <= scrollThreshold && isVisible) {
                isVisible = false;
                btn.classList.remove('visible');
            }
        }

        // Throttled scroll listener
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    checkScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Click to scroll to top
        btn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Check initial scroll position
        checkScroll();
    }

    // ============================================================
    // HAMBURGER MENU TOGGLE
    // ============================================================
    function setupNavToggle() {
        const header = document.querySelector('.top-header');
        const toggle = document.querySelector('.nav-toggle');

        if (!header || !toggle) return;

        toggle.addEventListener('click', function() {
            header.classList.toggle('open');
        });

        // Close menu when a nav link is clicked
        const navLinks = header.querySelectorAll('.nav-menu a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                header.classList.remove('open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!header.contains(e.target)) {
                header.classList.remove('open');
            }
        });
    }

    // ============================================================
    // INIT
    // ============================================================
    setupScrollReveal();
    setupPortfolioFilters();
    setupScrollToTop();
    setupNavToggle();
});
