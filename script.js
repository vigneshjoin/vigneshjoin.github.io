/**
 * Vignesh BG - Portfolio Interactive Script Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Footer Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Mobile Navigation Toggle & Outside Click Handler
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        const toggleMenu = (e) => {
            if (e) e.stopPropagation();
            navMenu.classList.toggle('open');
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        };

        navToggle.addEventListener('click', toggleMenu);

        // Close when clicking nav items
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('open')) {
                    toggleMenu();
                }
            });
        });

        // Close menu when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('open') && 
                !navMenu.contains(e.target) && 
                !navToggle.contains(e.target)) {
                toggleMenu();
            }
        });
    }

    // 3. Navbar Sticky Effect & Scroll Progress Bar
    const navbar = document.getElementById('navbar');
    const progressBar = document.getElementById('progress-bar');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        // Progress bar calculation
        if (progressBar && docHeight > 0) {
            const progress = (scrollTop / docHeight) * 100;
            progressBar.style.width = `${progress}%`;
        }

        // Navbar blur state
        if (navbar) {
            if (scrollTop > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Active link dynamic highlight
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // 4. Hero Subtitle Typing Animation Effect
    const typingSpan = document.getElementById('typing-text');
    const phrases = [
        "Senior Software Engineer",
        "Full Stack Web Developer",
        "Laravel & PHP Specialist",
        "Enterprise System Architect",
        "WordPress & API Engineer"
    ];
    
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const delayBetween = 2000;

    function typeEffect() {
        if (!typingSpan) return;

        const currentPhrase = phrases[phraseIdx];

        if (isDeleting) {
            typingSpan.textContent = currentPhrase.substring(0, charIdx - 1);
            charIdx--;
        } else {
            typingSpan.textContent = currentPhrase.substring(0, charIdx + 1);
            charIdx++;
        }

        let currentSpeed = isDeleting ? deleteSpeed : typeSpeed;

        if (!isDeleting && charIdx === currentPhrase.length) {
            currentSpeed = delayBetween;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            currentSpeed = 300;
        }

        setTimeout(typeEffect, currentSpeed);
    }

    typeEffect();

    // 5. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 80;

        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // 6. Stat Counter Increment Animation
    const counters = document.querySelectorAll('.counter');
    let counterAnimated = false;

    const animateCounters = () => {
        const aboutSection = document.getElementById('about');
        if (!aboutSection) return;

        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 80 && !counterAnimated) {
            counterAnimated = true;
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 1800;
                const stepTime = 30;
                const increment = target / (duration / stepTime);
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.ceil(current);
                    }
                }, stepTime);
            });
        }
    };

    window.addEventListener('scroll', animateCounters);
    animateCounters();

    // 7. Contact Form Simulation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending...`;

            setTimeout(() => {
                alert('Thank you, Vignesh BG will review your inquiry and get back to you shortly!');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }, 1200);
        });
    }
});