
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
    <link rel="stylesheet" href="style.css">

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
    <script src="script.js"></script>
