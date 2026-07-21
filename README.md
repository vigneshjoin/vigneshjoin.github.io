<html>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Vignesh BG - Senior Software Engineer & Full Stack Web Developer with 8+ years of experience in Laravel, PHP, WordPress, CRM, and ERP platforms.">
    <meta name="keywords" content="Vignesh BG, Senior Software Engineer, Full Stack Developer, Laravel, PHP, WordPress, Bengaluru, Web Developer Portfolio">
    <meta name="author" content="Vignesh BG">
    <title>Vignesh BG | Senior Software Engineer & Full Stack Developer</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Custom CSS -->
    <style>
        /* ==========================================================================
   DESIGN SYSTEM & CSS VARIABLES
   ========================================================================== */
:root {
    --bg-dark: #0F172A;
    --card-bg: rgba(30, 41, 59, 0.65);
    --card-bg-alt: rgba(15, 23, 42, 0.75);
    --glass-border: rgba(255, 255, 255, 0.08);
    --glass-hover-border: rgba(37, 99, 235, 0.4);
    
    --primary: #2563EB;
    --primary-glow: rgba(37, 99, 235, 0.35);
    --secondary: #7C3AED;
    --secondary-glow: rgba(124, 58, 237, 0.35);
    --accent: #06B6D4;
    
    --text-main: #F8FAFC;
    --text-muted: #94A3B8;
    
    --font-family: 'Poppins', sans-serif;
    --transition-fast: 0.25s ease;
    --transition-normal: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* RESET & GLOBAL STYLES */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    color-scheme: dark;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-main);
    font-family: var(--font-family);
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
}

a {
    color: inherit;
    text-decoration: none;
    transition: var(--transition-fast);
}

ul {
    list-style: none;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.section {
    padding: 5rem 0;
    position: relative;
    z-index: 2;
}

.bg-card-alt {
    background: linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(30, 41, 59, 0.3) 50%, rgba(15, 23, 42, 0) 100%);
}

.text-center {
    text-align: center;
}

/* PROGRESS BAR */
#progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
    width: 0%;
    z-index: 1000;
}

/* BACKGROUND BLOBS */
.bg-glow {
    position: fixed;
    border-radius: 50%;
    filter: blur(120px);
    z-index: 1;
    pointer-events: none;
    opacity: 0.35;
    animation: floatBlob 20s infinite alternate ease-in-out;
}

.blob-1 {
    width: 450px;
    height: 450px;
    background: var(--primary);
    top: -100px;
    left: -100px;
}

.blob-2 {
    width: 500px;
    height: 500px;
    background: var(--secondary);
    bottom: 10%;
    right: -100px;
    animation-delay: -7s;
}

.blob-3 {
    width: 350px;
    height: 350px;
    background: var(--accent);
    top: 50%;
    left: 30%;
    animation-delay: -12s;
}

@keyframes floatBlob {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(60px, 80px) scale(1.15); }
}

/* TYPOGRAPHY & UTILITIES */
.gradient-text {
    background: linear-gradient(135deg, #60A5FA 0%, #A78BFA 50%, #22D3EE 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.section-title {
    margin-bottom: 3.5rem;
}

.section-title h2 {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
}

.section-title p {
    color: var(--text-muted);
    font-size: 1rem;
}

/* GLASS CARDS & BUTTONS */
.glass-card {
    background: var(--card-bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    transition: var(--transition-normal);
}

.glass-card:hover {
    border-color: var(--glass-hover-border);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px 0 rgba(37, 99, 235, 0.15);
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.85rem 1.75rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    border: none;
    transition: var(--transition-fast);
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: var(--text-main);
    box-shadow: 0 4px 20px var(--primary-glow);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(124, 58, 237, 0.5);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-main);
    border: 1px solid var(--glass-border);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
}

.btn-sm {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    border-radius: 8px;
}

.btn-block {
    width: 100%;
}

/* NAVBAR & NAVIGATION */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1.25rem 0;
    z-index: 9999;
    transition: var(--transition-fast);
}

.navbar.scrolled {
    padding: 0.85rem 0;
    background: rgba(15, 23, 42, 0.92);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--glass-border);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.nav-logo {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text-main);
    z-index: 9999;
}

.nav-logo span {
    color: var(--accent);
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.nav-link {
    font-weight: 500;
    font-size: 0.95rem;
    color: var(--text-muted);
}

.nav-link:hover, .nav-link.active {
    color: var(--text-main);
}

.btn-glow {
    padding: 0.5rem 1.25rem;
    border-radius: 8px;
    background: rgba(37, 99, 235, 0.15);
    border: 1px solid var(--primary);
    color: #60A5FA !important;
}

.btn-glow:hover {
    background: var(--primary);
    color: #FFF !important;
}

.nav-toggle {
    display: none;
    background: rgba(30, 41, 59, 0.8);
    border: 1px solid var(--glass-border);
    color: var(--text-main);
    width: 44px;
    height: 44px;
    border-radius: 10px;
    font-size: 1.25rem;
    cursor: pointer;
    z-index: 10001;
    align-items: center;
    justify-content: center;
    transition: var(--transition-fast);
}

.nav-toggle:hover {
    border-color: var(--primary);
    color: var(--accent);
}

/* HERO SECTION */
.hero-section {
    min-height: 100vh;
    padding-top: 8rem;
    padding-bottom: 4rem;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
}

.hero-container {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 3rem;
    align-items: center;
}

.badge-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 1rem;
    background: rgba(37, 99, 235, 0.1);
    border: 1px solid rgba(37, 99, 235, 0.3);
    border-radius: 50px;
    font-size: 0.85rem;
    color: #60A5FA;
    margin-bottom: 1.5rem;
}

.pulse-dot {
    width: 8px;
    height: 8px;
    background-color: var(--accent);
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7);
    animation: pulse 1.8s infinite;
}

@keyframes pulse {
    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7); }
    70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(6, 182, 212, 0); }
    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(6, 182, 212, 0); }
}

.hero-title {
    font-size: 3.25rem;
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 1rem;
}

.hero-subtitle {
    font-size: 1.35rem;
    font-weight: 600;
    color: var(--text-muted);
    margin-bottom: 1.25rem;
    min-height: 2.25rem;
}

.cursor {
    display: inline-block;
    background-color: var(--accent);
    margin-left: 2px;
    width: 3px;
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

.hero-desc {
    font-size: 1rem;
    color: var(--text-muted);
    margin-bottom: 2rem;
    max-width: 600px;
}

.hero-btns {
    display: flex;
    gap: 1rem;
}

/* CODE WINDOW VISUAL */
.code-window {
    padding: 0;
    position: relative;
    overflow: hidden;
    background: rgba(15, 23, 42, 0.85);
    width: 100%;
}

.window-header {
    background: rgba(30, 41, 59, 0.8);
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--glass-border);
}

.dots {
    display: flex;
    gap: 6px;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.red { background-color: #EF4444; }
.yellow { background-color: #F59E0B; }
.green { background-color: #10B981; }

.window-title {
    margin-left: auto;
    margin-right: auto;
    font-size: 0.8rem;
    color: var(--text-muted);
    font-family: monospace;
}

.window-body {
    padding: 1.25rem;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.82rem;
    line-height: 1.5;
    overflow-x: auto;
}

.kwd { color: #F472B6; }
.cls { color: #FBBF24; }
.var { color: #60A5FA; }
.str { color: #34D399; }
.func { color: #A78BFA; }

.floating-badge {
    position: absolute;
    padding: 0.4rem 0.85rem;
    border-radius: 50px;
    background: rgba(30, 41, 59, 0.95);
    border: 1px solid var(--glass-border);
    font-size: 0.75rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    animation: float 4s ease-in-out infinite;
    z-index: 3;
}

.fb-1 { top: 10%; right: 10px; animation-delay: 0s; color: #F05340; }
.fb-2 { bottom: 20%; left: 10px; animation-delay: -1.3s; color: #777BB4; }
.fb-3 { bottom: 10px; right: 20%; animation-delay: -2.6s; color: #00758F; }

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
}

/* ABOUT SECTION & COUNTER CARDS */
.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.about-card h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: #60A5FA;
}

.about-card p {
    color: var(--text-muted);
    margin-bottom: 1rem;
    font-size: 0.95rem;
}

.about-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1.5rem;
}

.about-tags span {
    background: rgba(37, 99, 235, 0.1);
    border: 1px solid rgba(37, 99, 235, 0.2);
    color: #93C5FD;
    padding: 0.25rem 0.75rem;
    border-radius: 6px;
    font-size: 0.8rem;
}

.counters-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
}

.counter-card {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 1rem;
}

.counter-icon {
    font-size: 1.75rem;
    color: var(--accent);
    margin-bottom: 0.5rem;
}

.counter-val {
    display: flex;
    align-items: center;
    justify-content: center;
}

.counter-card h3 {
    font-size: 2.25rem;
    font-weight: 800;
    line-height: 1;
}

.counter-card .plus {
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--primary);
}

.counter-card p {
    color: var(--text-muted);
    font-size: 0.85rem;
    margin-top: 0.25rem;
}

/* TECHNICAL SKILLS */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.skill-category-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 0.75rem;
}

.skill-category-header i {
    font-size: 1.35rem;
    color: var(--accent);
}

.skill-category-header h3 {
    font-size: 1.2rem;
}

.skill-list li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.85rem;
    color: var(--text-muted);
    font-size: 0.9rem;
}

.skill-list li i {
    color: var(--primary);
    width: 20px;
    text-align: center;
}

.full-width-category {
    grid-column: span 2;
}

.skills-inline-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.skill-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(124, 58, 237, 0.1);
    border: 1px solid rgba(124, 58, 237, 0.25);
    border-radius: 30px;
    font-size: 0.85rem;
    color: var(--text-main);
    transition: var(--transition-fast);
}

/* EXPERIENCE TIMELINE */
.timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.timeline::after {
    content: '';
    position: absolute;
    width: 2px;
    background: linear-gradient(180deg, var(--primary), var(--secondary));
    top: 0;
    bottom: 0;
    left: 20px;
}

.timeline-item {
    position: relative;
    padding-left: 55px;
    margin-bottom: 2rem;
}

.timeline-dot {
    position: absolute;
    left: 11px;
    top: 5px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--bg-dark);
    border: 3px solid var(--accent);
    box-shadow: 0 0 10px var(--accent);
    z-index: 2;
}

.timeline-date {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    background: rgba(37, 99, 235, 0.15);
    color: #60A5FA;
    border-radius: 4px;
    font-size: 0.78rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.timeline-content h3 {
    font-size: 1.15rem;
    margin-bottom: 0.2rem;
}

.timeline-content h4 {
    font-size: 0.9rem;
    color: var(--text-muted);
    font-weight: 500;
    margin-bottom: 0.75rem;
}

.timeline-content p {
    color: var(--text-muted);
    font-size: 0.88rem;
}

/* PROJECTS GRID */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.project-card {
    padding: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.project-img-placeholder {
    height: 160px;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(124, 58, 237, 0.2));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid var(--glass-border);
    transition: var(--transition-normal);
}

.project-body {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.project-body h3 {
    font-size: 1.15rem;
    margin-bottom: 0.5rem;
}

.project-body p {
    color: var(--text-muted);
    font-size: 0.88rem;
    margin-bottom: 1rem;
    flex-grow: 1;
}

.project-techs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1rem;
}

.project-techs span {
    font-size: 0.72rem;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--glass-border);
    color: var(--text-muted);
}

.project-links {
    display: flex;
    gap: 0.75rem;
}

/* SERVICES & WHY CHOOSE ME */
.services-grid, .why-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.25rem;
}

.service-card {
    text-align: center;
    padding: 1.5rem;
}

.service-icon {
    width: 55px;
    height: 55px;
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(124, 58, 237, 0.2));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.35rem;
    color: var(--accent);
    margin: 0 auto 1rem auto;
    border: 1px solid var(--glass-border);
}

.service-card h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}

.service-card p {
    color: var(--text-muted);
    font-size: 0.85rem;
}

.why-card {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.25rem;
}

.why-card i {
    font-size: 1.35rem;
    color: var(--accent);
    margin-top: 0.2rem;
}

.why-card h3 {
    font-size: 1rem;
    margin-bottom: 0.2rem;
}

.why-card p {
    color: var(--text-muted);
    font-size: 0.82rem;
}

/* TESTIMONIALS */
.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.25rem;
}

.testimonial-card {
    position: relative;
    padding: 1.5rem;
}

.quote-icon {
    font-size: 1.5rem;
    color: rgba(37, 99, 235, 0.3);
    margin-bottom: 0.5rem;
}

.testimonial-text {
    color: var(--text-muted);
    font-size: 0.88rem;
    font-style: italic;
    margin-bottom: 1.25rem;
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.author-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
}

.testimonial-author h4 {
    font-size: 0.9rem;
}

.testimonial-author p {
    font-size: 0.78rem;
    color: var(--text-muted);
}

/* CONTACT SECTION */
.contact-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 1.5rem;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.35rem;
    font-size: 0.85rem;
    color: var(--text-muted);
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid var(--glass-border);
    border-radius: 8px;
    color: var(--text-main);
    font-family: inherit;
    font-size: 0.9rem;
    transition: var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 10px var(--primary-glow);
}

.contact-info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.info-item:last-child {
    margin-bottom: 0;
}

.info-icon {
    width: 42px;
    height: 42px;
    border-radius: 10px;
    background: rgba(37, 99, 235, 0.15);
    border: 1px solid rgba(37, 99, 235, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #60A5FA;
    font-size: 1rem;
}

.info-item h4 {
    font-size: 0.82rem;
    color: var(--text-muted);
}

.info-item p {
    font-size: 0.92rem;
    font-weight: 500;
}

.social-connect-card h4 {
    margin-bottom: 1rem;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.social-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--glass-border);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-main);
    font-size: 1rem;
}

.social-icon:hover {
    background: var(--primary);
    border-color: var(--primary);
    transform: translateY(-3px);
}

/* FOOTER */
.footer {
    padding: 1.75rem 0;
    border-top: 1px solid var(--glass-border);
    background: rgba(15, 23, 42, 0.95);
    position: relative;
    z-index: 2;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    color: var(--text-muted);
}

.heart-icon {
    color: #EF4444;
    margin: 0 2px;
}

/* ANIMATIONS & REVEAL */
.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

/* ==========================================================================
   RESPONSIVE BREAKPOINTS (FIXED MOBILE & TABLET ISSUES)
   ========================================================================== */

@media (max-width: 992px) {
    .hero-container, .about-grid, .contact-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }

    .hero-visual {
        order: 2;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .full-width-category {
        grid-column: span 1;
    }
}

@media (max-width: 768px) {
    .section {
        padding: 4rem 0;
    }

    .section-title {
        margin-bottom: 2.5rem;
    }

    .section-title h2 {
        font-size: 1.85rem;
    }

    /* FIX MOBILE TOGGLE & MENU */
    .nav-toggle {
        display: flex;
    }

    .nav-menu {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        max-width: 320px;
        height: 60vh;
        background: rgba(15, 23, 42, 0.98);
        backdrop-filter: blur(25px);
        -webkit-backdrop-filter: blur(25px);
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 3rem 2rem;
        gap: 1.5rem;
        transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        border-left: 1px solid var(--glass-border);
        box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
        z-index: 10000;
    }

    .nav-menu.open {
        right: 0;
    }

    .nav-link {
        font-size: 1.1rem;
        width: 100%;
        display: block;
    }

    .hero-section {
        padding-top: 6.5rem;
        padding-bottom: 2.5rem;
    }

    .hero-title {
        font-size: 2.35rem;
    }

    .hero-subtitle {
        font-size: 1.15rem;
    }

    .floating-badge {
        display: none; /* Hide floating badges on mobile to prevent overflow */
    }

    .counters-grid {
        grid-template-columns: 1fr 1fr;
    }

    .footer-content {
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }

    .hero-btns {
        flex-direction: column;
        width: 100%;
    }

    .hero-btns .btn {
        width: 100%;
    }

    .counters-grid {
        grid-template-columns: 1fr;
    }

    .projects-grid, .services-grid, .why-grid, .testimonials-grid {
        grid-template-columns: 1fr;
    }

    .timeline-item {
        padding-left: 40px;
    }

    .timeline::after {
        left: 15px;
    }

    .timeline-dot {
        left: 6px;
    }

    .window-body pre {
        font-size: 0.75rem;
    }
}
    </style>

    <!-- Scroll Progress Bar -->
    <div id="progress-bar"></div>

    <!-- Navigation Bar -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="#hero" class="nav-logo"><span>{Vignesh}</span></a>
            
            <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation menu">
                <i class="fas fa-bars"></i>
            </button>

            <ul class="nav-menu" id="nav-menu">
                <li><a href="#hero" class="nav-link active">Home</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#skills" class="nav-link">Skills</a></li>
                <li><a href="#experience" class="nav-link">Experience</a></li>
                <li><a href="#projects" class="nav-link">Projects</a></li>
                <li><a href="#services" class="nav-link">Services</a></li>
                <li><a href="#contact" class="nav-link btn-glow">Contact Me</a></li>
            </ul>
        </div>
    </nav>

    <!-- Animated Background Glows -->
    <div class="bg-glow blob-1"></div>
    <div class="bg-glow blob-2"></div>
    <div class="bg-glow blob-3"></div>

    <!-- 1. Hero Section -->
    <section id="hero" class="hero-section">
        <div class="container hero-container">
            <div class="hero-content">
                <div class="badge-pill">
                    <span class="pulse-dot"></span> Available for Enterprise Solutions
                </div>
                <h1 class="hero-title">Hi, I'm <span class="gradient-text">Vignesh BG</span></h1>
                <h2 class="hero-subtitle"><span id="typing-text"></span><span class="cursor">&nbsp;</span></h2>
                <p class="hero-desc">
                    I build scalable web applications, enterprise software, CRM systems, ERP platforms, WordPress solutions, and Laravel applications with over 8 years of professional experience.
                </p>
                <div class="hero-btns">
                    <a href="#projects" class="btn btn-primary"><i class="fas fa-rocket"></i> View Projects</a>
                    <a href="#contact" class="btn btn-secondary"><i class="fas fa-paper-plane"></i> Contact Me</a>
                </div>
            </div>
            <div class="hero-visual">
                <div class="glass-card code-window">
                    <div class="window-header">
                        <div class="dots">
                            <span class="dot red"></span>
                            <span class="dot yellow"></span>
                            <span class="dot green"></span>
                        </div>
                        <span class="window-title">Developer.php</span>
                    </div>
                    <div class="window-body">
                        <pre><code><span class="kwd">class</span> <span class="cls">SeniorDeveloper</span> {
    <span class="kwd">public</span> <span class="var">$name</span> = <span class="str">'Vignesh BG'</span>;
    <span class="kwd">public</span> <span class="var">$role</span> = <span class="str">'Full Stack Engineer'</span>;
    <span class="kwd">public</span> <span class="var">$experience</span> = <span class="str">'8+ Years'</span>;
    <span class="kwd">public</span> <span class="var">$location</span> = <span class="str">'Bengaluru, India'</span>;

    <span class="kwd">public function</span> <span class="func">getCoreSkills</span>() {
        <span class="kwd">return</span> [
            <span class="str">'PHP'</span>, <span class="str">'Laravel'</span>, <span class="str">'CodeIgniter'</span>, 
            <span class="str">'MySQL'</span>, <span class="str">'JavaScript'</span>, <span class="str">'WordPress'</span>
        ];
    }
}</code></pre>
                    </div>
                    <div class="floating-badge fb-1"><i class="fab fa-laravel"></i> Laravel</div>
                    <div class="floating-badge fb-2"><i class="fab fa-php"></i> Core PHP</div>
                    <div class="floating-badge fb-3"><i class="fas fa-database"></i> MySQL</div>
                </div>
            </div>
        </div>
    </section>

    <!-- 2. About Me Section -->
    <section id="about" class="section">
        <div class="container">
            <div class="section-title text-center">
                <h2>About <span class="gradient-text">Me</span></h2>
                <p>Delivering robust, scalable, and high-performance web applications</p>
            </div>
            
            <div class="about-grid">
                <div class="glass-card about-card">
                    <h3>Enterprise Web Solutions Architect</h3>
                    <p>
                        With over 8 years in full-stack web software development, I specialize in crafting secure, high-throughput enterprise applications, modular CRM and ERP suites, and custom web systems.
                    </p>
                    <p>
                        My expertise spans deep backend development in <strong>Core PHP, Laravel, and CodeIgniter</strong> alongside robust relational database management using <strong>MySQL</strong>. On the web front, I craft rich, dynamic interfaces utilizing <strong>JavaScript, jQuery, and AJAX</strong>, complemented by deep experience in <strong>WordPress, custom plugin architecture, and API integrations</strong>.
                    </p>
                    <div class="about-tags">
                        <span>PHP</span><span>Laravel</span><span>CodeIgniter</span><span>WordPress</span><span>MySQL</span>
                        <span>JavaScript</span><span>jQuery</span><span>AJAX</span><span>Git</span><span>REST APIs</span><span>Enterprise Dev</span>
                    </div>
                </div>
                
                <div class="counters-grid">
                    <div class="glass-card counter-card">
                        <i class="fas fa-briefcase counter-icon"></i>
                        <div class="counter-val">
                            <h3 class="counter" data-target="8">0</h3>
                            <span class="plus">+</span>
                        </div>
                        <p>Years Experience</p>
                    </div>
                    <div class="glass-card counter-card">
                        <i class="fas fa-project-diagram counter-icon"></i>
                        <div class="counter-val">
                            <h3 class="counter" data-target="25">0</h3>
                            <span class="plus">+</span>
                        </div>
                        <p>Projects Delivered</p>
                    </div>
                    <div class="glass-card counter-card">
                        <i class="fas fa-building counter-icon"></i>
                        <div class="counter-val">
                            <h3 class="counter" data-target="10">0</h3>
                            <span class="plus">+</span>
                        </div>
                        <p>Enterprise Apps</p>
                    </div>
                    <div class="glass-card counter-card">
                        <i class="fas fa-smile counter-icon"></i>
                        <div class="counter-val">
                            <h3 class="counter" data-target="100">0</h3>
                            <span class="plus">%</span>
                        </div>
                        <p>Client Satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 3. Technical Skills Section -->
    <section id="skills" class="section bg-card-alt">
        <div class="container">
            <div class="section-title text-center">
                <h2>Technical <span class="gradient-text">Skills</span></h2>
                <p>My tech stack and development toolset</p>
            </div>

            <div class="skills-grid">
                <!-- Backend -->
                <div class="glass-card skill-category">
                    <div class="skill-category-header">
                        <i class="fas fa-server"></i>
                        <h3>Backend</h3>
                    </div>
                    <ul class="skill-list">
                        <li><i class="fab fa-php"></i> Core PHP</li>
                        <li><i class="fab fa-laravel"></i> Laravel Framework</li>
                        <li><i class="fas fa-fire"></i> CodeIgniter</li>
                    </ul>
                </div>

                <!-- Frontend -->
                <div class="glass-card skill-category">
                    <div class="skill-category-header">
                        <i class="fas fa-code"></i>
                        <h3>Frontend</h3>
                    </div>
                    <ul class="skill-list">
                        <li><i class="fab fa-html5"></i> HTML5</li>
                        <li><i class="fab fa-css3-alt"></i> CSS3</li>
                        <li><i class="fab fa-js"></i> JavaScript</li>
                        <li><i class="fas fa-code-branch"></i> jQuery & AJAX</li>
                        <li><i class="fab fa-angular"></i> Angular Basics</li>
                    </ul>
                </div>

                <!-- Database -->
                <div class="glass-card skill-category">
                    <div class="skill-category-header">
                        <i class="fas fa-database"></i>
                        <h3>Database</h3>
                    </div>
                    <ul class="skill-list">
                        <li><i class="fas fa-table"></i> MySQL</li>
                        <li><i class="fas fa-cogs"></i> Query Optimization</li>
                        <li><i class="fas fa-sitemap"></i> Relational Schema Design</li>
                    </ul>
                </div>

                <!-- CMS -->
                <div class="glass-card skill-category">
                    <div class="skill-category-header">
                        <i class="fab fa-wordpress"></i>
                        <h3>CMS</h3>
                    </div>
                    <ul class="skill-list">
                        <li><i class="fab fa-wordpress-simple"></i> WordPress</li>
                        <li><i class="fas fa-shopping-cart"></i> WooCommerce</li>
                        <li><i class="fas fa-cubes"></i> Advanced Custom Fields (ACF)</li>
                    </ul>
                </div>

                <!-- Tools & Integrations -->
                <div class="glass-card skill-category full-width-category">
                    <div class="skill-category-header">
                        <i class="fas fa-plug"></i>
                        <h3>Tools & Integrations</h3>
                    </div>
                    <div class="skills-inline-list">
                        <span class="skill-pill"><i class="fab fa-git-alt"></i> Git Version Control</span>
                        <span class="skill-pill"><i class="fas fa-network-wired"></i> RESTful APIs</span>
                        <span class="skill-pill"><i class="fas fa-credit-card"></i> Razorpay Integration</span>
                        <span class="skill-pill"><i class="fab fa-paypal"></i> PayPal Integration</span>
                        <span class="skill-pill"><i class="fas fa-credit-card"></i> Stripe Integration</span>
                        <span class="skill-pill"><i class="fas fa-cloud-upload-alt"></i> Cloudinary</span>
                        <span class="skill-pill"><i class="fab fa-google-drive"></i> Google Drive API</span>
                        <span class="skill-pill"><i class="fab fa-youtube"></i> YouTube API</span>
                        <span class="skill-pill"><i class="fas fa-flask"></i> VWO Test Setup</span>
                        <span class="skill-pill"><i class="fas fa-cookie-bite"></i> OneTrust Cookie Setup</span>
                        <span class="skill-pill"><i class="fas fa-credit-card"></i>All Payment Integration</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 4. Experience Timeline Section -->
    <section id="experience" class="section">
        <div class="container">
            <div class="section-title text-center">
                <h2>Experience <span class="gradient-text">Timeline</span></h2>
                <p>8+ years of steady engineering growth and impact</p>
            </div>

            <div class="timeline">
                <div class="timeline-item reveal">
                    <div class="timeline-dot"></div>
                    <div class="glass-card timeline-content">
                        <span class="timeline-date"><i class="far fa-calendar-alt"></i> 2023 – Present</span>
                        <h3>Senior Software Engineer</h3>
                        <h4>iQuanti India Pvt Ltd</h4>
                        <p>Architecting enterprise digital marketing engines, performance dashboards, complex backend APIs, and scalable Web solutions.</p>
                    </div>
                </div>

                <div class="timeline-item reveal">
                    <div class="timeline-dot"></div>
                    <div class="glass-card timeline-content">
                        <span class="timeline-date"><i class="far fa-calendar-alt"></i> 2022 – 2023</span>
                        <h3>Software Engineer</h3>
                        <h4>Vijay Global Services</h4>
                        <p>Engineered customized web applications, full-stack Laravel solutions, complex MySQL architectures, and REST API suites.</p>
                    </div>
                </div>

                <div class="timeline-item reveal">
                    <div class="timeline-dot"></div>
                    <div class="glass-card timeline-content">
                        <span class="timeline-date"><i class="far fa-calendar-alt"></i> 2020 – 2022</span>
                        <h3>Software Engineer</h3>
                        <h4>Knackforge Soft Solutions</h4>
                        <p>Developed custom PHP/CodeIgniter systems, ERP integrations, dynamic database setups, and WooCommerce solutions.</p>
                    </div>
                </div>

                <div class="timeline-item reveal">
                    <div class="timeline-dot"></div>
                    <div class="glass-card timeline-content">
                        <span class="timeline-date"><i class="far fa-calendar-alt"></i> 2018 – 2020</span>
                        <h3>Web Developer</h3>
                        <h4>CAP Digi</h4>
                        <p>Managed full lifecycle client builds, custom plugin development, dynamic web layouts, and site speed optimizations.</p>
                    </div>
                </div>

                <div class="timeline-item reveal">
                    <div class="timeline-dot"></div>
                    <div class="glass-card timeline-content">
                        <span class="timeline-date"><i class="far fa-calendar-alt"></i> 2017 – 2018</span>
                        <h3>Web Developer</h3>
                        <h4>ITflex Solutions</h4>
                        <p>Crafted interactive web portals, MySQL-driven web features, client admin interfaces, and custom frontend templates.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 5. Featured Projects Section -->
    <section id="projects" class="section bg-card-alt">
        <div class="container">
            <div class="section-title text-center">
                <h2>Featured <span class="gradient-text">Projects</span></h2>
                <p>Enterprise platforms, integrations, and web systems</p>
            </div>

            <div class="projects-grid">
                <!-- Project 1 -->
                <div class="glass-card project-card reveal">
                    <div class="project-img-placeholder">
                        <i class="fas fa-file-invoice-dollar"></i>
                    </div>
                    <div class="project-body">
                        <h3>ERP Billing System</h3>
                        <p>End-to-end billing platform featuring custom invoice generation, automated payment processing via Razorpay, dynamic reports, and a central admin panel.</p>
                        <div class="project-techs">
                            <span>Laravel</span><span>MySQL</span><span>Razorpay</span><span>JS</span>
                        </div>
                        <div class="project-links">
                            <a href="#contact" class="btn btn-sm btn-primary"><i class="fas fa-external-link-alt"></i> Demo</a>
                            <a href="https://github.com" target="_blank" class="btn btn-sm btn-secondary"><i class="fab fa-github"></i> GitHub</a>
                        </div>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="glass-card project-card reveal">
                    <div class="project-img-placeholder">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div class="project-body">
                        <h3>E-Learning Platform</h3>
                        <p>Comprehensive learning portal featuring modular course management, automated YouTube API video fetching, and personalized student dashboards.</p>
                        <div class="project-techs">
                            <span>CodeIgniter</span><span>YouTube API</span><span>MySQL</span><span>AJAX</span>
                        </div>
                        <div class="project-links">
                            <a href="#contact" class="btn btn-sm btn-primary"><i class="fas fa-external-link-alt"></i> Demo</a>
                            <a href="https://github.com" target="_blank" class="btn btn-sm btn-secondary"><i class="fab fa-github"></i> GitHub</a>
                        </div>
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="glass-card project-card reveal">
                    <div class="project-img-placeholder">
                        <i class="fas fa-users-cog"></i>
                    </div>
                    <div class="project-body">
                        <h3>CRM System</h3>
                        <p>Enterprise customer relationship platform with automated lead management pipelines, interactive analytics dashboards, and exportable financial reports.</p>
                        <div class="project-techs">
                            <span>PHP</span><span>Laravel</span><span>jQuery</span><span>MySQL</span>
                        </div>
                        <div class="project-links">
                            <a href="#contact" class="btn btn-sm btn-primary"><i class="fas fa-external-link-alt"></i> Demo</a>
                            <a href="https://github.com" target="_blank" class="btn btn-sm btn-secondary"><i class="fab fa-github"></i> GitHub</a>
                        </div>
                    </div>
                </div>

                <!-- Project 4 -->
                <div class="glass-card project-card reveal">
                    <div class="project-img-placeholder">
                        <i class="fas fa-folder-open"></i>
                    </div>
                    <div class="project-body">
                        <h3>Document Management System</h3>
                        <p>Secure file storage platform integrated with Google Drive API, role-based access control (RBAC), and encrypted file-sharing channels.</p>
                        <div class="project-techs">
                            <span>PHP</span><span>Google Drive API</span><span>REST API</span><span>MySQL</span>
                        </div>
                        <div class="project-links">
                            <a href="#contact" class="btn btn-sm btn-primary"><i class="fas fa-external-link-alt"></i> Demo</a>
                            <a href="https://github.com" target="_blank" class="btn btn-sm btn-secondary"><i class="fab fa-github"></i> GitHub</a>
                        </div>
                    </div>
                </div>

                <!-- Project 5 -->
                <div class="glass-card project-card reveal">
                    <div class="project-img-placeholder">
                        <i class="fas fa-school"></i>
                    </div>
                    <div class="project-body">
                        <h3>School Management System</h3>
                        <p>All-in-one educational ecosystem managing student records, teacher allocations, class timetables, fee processing, and examination portals.</p>
                        <div class="project-techs">
                            <span>CodeIgniter</span><span>MySQL</span><span>Bootstrap</span><span>AJAX</span>
                        </div>
                        <div class="project-links">
                            <a href="#contact" class="btn btn-sm btn-primary"><i class="fas fa-external-link-alt"></i> Demo</a>
                            <a href="https://github.com" target="_blank" class="btn btn-sm btn-secondary"><i class="fab fa-github"></i> GitHub</a>
                        </div>
                    </div>
                </div>

                <!-- Project 6 -->
                <div class="glass-card project-card reveal">
                    <div class="project-img-placeholder">
                        <i class="fab fa-wordpress"></i>
                    </div>
                    <div class="project-body">
                        <h3>WordPress Enterprise Solutions</h3>
                        <p>Custom plugin architecture, WooCommerce multi-vendor integrations, custom REST API endpoints, and heavy ACF structural setups.</p>
                        <div class="project-techs">
                            <span>WordPress</span><span>WooCommerce</span><span>ACF</span><span>REST API</span>
                        </div>
                        <div class="project-links">
                            <a href="#contact" class="btn btn-sm btn-primary"><i class="fas fa-external-link-alt"></i> Demo</a>
                            <a href="https://github.com" target="_blank" class="btn btn-sm btn-secondary"><i class="fab fa-github"></i> GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 6. Services Section -->
    <section id="services" class="section">
        <div class="container">
            <div class="section-title text-center">
                <h2>Services <span class="gradient-text">Offered</span></h2>
                <p>Tailored full-stack development solutions for your business needs</p>
            </div>

            <div class="services-grid">
                <div class="glass-card service-card reveal">
                    <div class="service-icon"><i class="fas fa-laptop-code"></i></div>
                    <h3>Full Stack Development</h3>
                    <p>Building complete, secure end-to-end web applications with clean backend architectures and interactive user interfaces.</p>
                </div>

                <div class="glass-card service-card reveal">
                    <div class="service-icon"><i class="fab fa-laravel"></i></div>
                    <h3>Laravel Development</h3>
                    <p>Engineered Web applications, SaaS platforms, and enterprise solutions leveraging modern Laravel practices.</p>
                </div>

                <div class="glass-card service-card reveal">
                    <div class="service-icon"><i class="fab fa-wordpress"></i></div>
                    <h3>WordPress Development</h3>
                    <p>Custom theme building, bespoke plugin creation, performance tuning, and scalable WooCommerce architectures.</p>
                </div>

                <div class="glass-card service-card reveal">
                    <div class="service-icon"><i class="fas fa-network-wired"></i></div>
                    <h3>API Integration</h3>
                    <p>Connecting your systems via custom REST APIs, OAuth authentication, Google, Cloudinary, and payment gateways.</p>
                </div>

                <div class="glass-card service-card reveal">
                    <div class="service-icon"><i class="fas fa-users"></i></div>
                    <h3>CRM Development</h3>
                    <p>Custom-built CRM platforms engineered to streamline your lead generation, customer pipelines, and internal teams.</p>
                </div>

                <div class="glass-card service-card reveal">
                    <div class="service-icon"><i class="fas fa-chart-line"></i></div>
                    <h3>ERP Development</h3>
                    <p>Robust enterprise management tools for inventory, billing engines, organizational workflows, and reporting tools.</p>
                </div>

                <div class="glass-card service-card reveal">
                    <div class="service-icon"><i class="fas fa-credit-card"></i></div>
                    <h3>Payment Gateways</h3>
                    <p>Seamless and secure Razorpay, Stripe, and custom payment checkout flows with automated webhooks and invoicing.</p>
                </div>

                <div class="glass-card service-card reveal">
                    <div class="service-icon"><i class="fas fa-shield-alt"></i></div>
                    <h3>Website Maintenance</h3>
                    <p>Continuous database optimization, routine security audits, performance profiling, and feature upgrades.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 7. Why Choose Me Section -->
    <section class="section bg-card-alt">
        <div class="container">
            <div class="section-title text-center">
                <h2>Why Choose <span class="gradient-text">Me</span></h2>
                <p>Delivering engineering excellence and measurable quality</p>
            </div>

            <div class="why-grid">
                <div class="glass-card why-card reveal">
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <h3>Clean Code</h3>
                        <p>Strict adhere to PSR standards, modular pattern design, and easy-to-maintain codebases.</p>
                    </div>
                </div>

                <div class="glass-card why-card reveal">
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <h3>Scalable Architecture</h3>
                        <p>Designing system infrastructures capable of scaling effortlessly alongside business traffic grow.</p>
                    </div>
                </div>

                <div class="glass-card why-card reveal">
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <h3>Fast Delivery</h3>
                        <p>Agile development cycle ensuring structured progress, regular updates, and on-time delivery.</p>
                    </div>
                </div>

                <div class="glass-card why-card reveal">
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <h3>Responsive Design</h3>
                        <p>Pixel-perfect, fluid web experiences across mobile devices, tablets, desktop, and large displays.</p>
                    </div>
                </div>

                <div class="glass-card why-card reveal">
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <h3>Performance Tuning</h3>
                        <p>Lighthouse optimization, efficient database queries, server-side caching, and speedy load times.</p>
                    </div>
                </div>

                <div class="glass-card why-card reveal">
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <h3>Enterprise Experience</h3>
                        <p>Proven track record of managing large-scale application infrastructures for high-growth firms.</p>
                    </div>
                </div>

                <div class="glass-card why-card reveal">
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <h3>Secure Applications</h3>
                        <p>Defensive design implementations shielding against OWASP threats, SQL injection, and XSS exploits.</p>
                    </div>
                </div>

                <div class="glass-card why-card reveal">
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <h3>Long-Term Support</h3>
                        <p>Reliable technical collaboration, post-launch documentation, monitoring, and ongoing updates.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 8. Testimonials Section -->
    <section class="section">
        <div class="container">
            <div class="section-title text-center">
                <h2>Client <span class="gradient-text">Testimonials</span></h2>
                <p>Feedback from project leaders and client collaborators</p>
            </div>

            <div class="testimonials-grid">
                <div class="glass-card testimonial-card reveal">
                    <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                    <p class="testimonial-text">"Vignesh architected our enterprise ERP platform seamlessly. His mastery over PHP, Laravel, and database query optimization transformed our operational speed completely."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar"><i class="fas fa-user-tie"></i></div>
                        <div>
                            <h4>Santhosh Kumar</h4>
                            <p>VP of Technology, Enterprise Solutions</p>
                        </div>
                    </div>
                </div>

                <div class="glass-card testimonial-card reveal">
                    <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                    <p class="testimonial-text">"Working alongside Vignesh was a effortless experience. He executed our custom WordPress WooCommerce setup and API integrations ahead of schedule with zero post-launch bugs."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar"><i class="fas fa-user-astronaut"></i></div>
                        <div>
                            <h4>Priya Sharma</h4>
                            <p>Product Manager, Global Digital</p>
                        </div>
                    </div>
                </div>

                <div class="glass-card testimonial-card reveal">
                    <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                    <p class="testimonial-text">"Vignesh's deep understanding of full-stack engineering, combined with his proactive problem-solving mindset, makes him an invaluable asset for any complex engineering project."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar"><i class="fas fa-user-ninja"></i></div>
                        <div>
                            <h4>Rajesh Nair</h4>
                            <p>Technical Lead, Software Services</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 9. Contact Section -->
    <section id="contact" class="section bg-card-alt">
        <div class="container">
            <div class="section-title text-center">
                <h2>Get In <span class="gradient-text">Touch</span></h2>
                <p>Have a project in mind? Let's build something remarkable together.</p>
            </div>

            <div class="contact-grid">
                <!-- Contact Form -->
                <div class="glass-card contact-form-card">
                    <form id="contact-form">
                        <div class="form-group">
                            <label for="name">Your Name</label>
                            <input type="text" id="name" name="name" required placeholder="John Doe">
                        </div>
                        <div class="form-group">
                            <label for="email">Your Email</label>
                            <input type="email" id="email" name="email" required placeholder="john@example.com">
                        </div>
                        <div class="form-group">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required placeholder="Project Consultation / Business Inquiry">
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project scope..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block"><i class="fas fa-paper-plane"></i> Send Message</button>
                    </form>
                </div>

                <!-- Contact Info -->
                <div class="contact-info-wrapper">
                    <div class="glass-card contact-info-card">
                        <div class="info-item">
                            <div class="info-icon"><i class="fas fa-phone-alt"></i></div>
                            <div>
                                <h4>Phone</h4>
                                <p><a href="tel:+919876543210">+91 (987) 654-3210</a></p>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="info-icon"><i class="fas fa-envelope"></i></div>
                            <div>
                                <h4>Email</h4>
                                <p><a href="mailto:vignesh.bg@example.com">vignesh.bg@example.com</a></p>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="info-icon"><i class="fas fa-map-marker-alt"></i></div>
                            <div>
                                <h4>Location</h4>
                                <p>Bengaluru, Karnataka, India</p>
                            </div>
                        </div>
                    </div>

                    <div class="glass-card social-connect-card text-center">
                        <h4>Connect With Me</h4>
                        <div class="social-links">
                            <a href="https://linkedin.com" target="_blank" class="social-icon" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://github.com" target="_blank" class="social-icon" aria-label="GitHub"><i class="fab fa-github"></i></a>
                            <a href="mailto:vignesh.bg@example.com" class="social-icon" aria-label="Email"><i class="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 10. Footer -->
    <footer class="footer">
        <div class="container footer-content">
            <p>&copy; <span id="year"></span> Vignesh BG. All rights reserved.</p>
            <p>Made with <i class="fas fa-heart heart-icon"></i> by <strong>Vignesh BG</strong></p>
        </div>
    </footer>

    <!-- Custom JS -->
    <script>
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
    </script>
</html>