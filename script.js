        // Service Modal Functionality
        const serviceData = {
            'web-design': {
                icon: '🎨',
                title: 'Web Design',
                description: 'Transform your digital presence with stunning, user-centered web designs that convert visitors into customers.',
                features: [
                    'Responsive Design for All Devices',
                    'User Experience (UX) Optimization',
                    'Modern Visual Design',
                    'Brand Integration',
                    'Performance Optimization',
                    'SEO-Friendly Structure'
                ],
                process: 'Our design process includes research, wireframing, prototyping, visual design, and user testing to ensure your website not only looks amazing but performs exceptionally.',
                pricing: 'Starting at $2,500',
                timeline: '2-4 weeks'
            },
            'web-development': {
                icon: '⚡',
                title: 'Web Development',
                description: 'Build powerful, scalable web applications with cutting-edge technologies and robust backend systems.',
                features: [
                    'Custom Web Applications',
                    'E-commerce Development',
                    'Content Management Systems',
                    'API Integration',
                    'Database Design',
                    'Security Implementation'
                ],
                process: 'We use modern frameworks like React, Node.js, and cloud technologies to build fast, secure, and maintainable web applications.',
                pricing: 'Starting at $5,000',
                timeline: '4-8 weeks'
            },
            'mobile-apps': {
                icon: '📱',
                title: 'Mobile Apps',
                description: 'Create engaging mobile experiences with native and cross-platform applications for iOS and Android.',
                features: [
                    'Native iOS & Android Development',
                    'Cross-Platform Solutions',
                    'UI/UX Design for Mobile',
                    'App Store Optimization',
                    'Push Notifications',
                    'Offline Functionality'
                ],
                process: 'From concept to app store deployment, we handle the entire mobile development lifecycle with focus on user experience and performance.',
                pricing: 'Starting at $8,000',
                timeline: '6-12 weeks'
            },
            'digital-marketing': {
                icon: '🚀',
                title: 'Digital Marketing',
                description: 'Boost your online presence and drive conversions with comprehensive digital marketing strategies.',
                features: [
                    'Search Engine Optimization (SEO)',
                    'Pay-Per-Click Advertising (PPC)',
                    'Social Media Marketing',
                    'Content Marketing',
                    'Email Marketing',
                    'Analytics & Reporting'
                ],
                process: 'We create data-driven marketing campaigns that target your ideal customers and maximize your return on investment.',
                pricing: 'Starting at $1,500/month',
                timeline: 'Ongoing campaigns'
            },
            'brand-identity': {
                icon: '💎',
                title: 'Brand Identity',
                description: 'Develop a memorable brand identity that resonates with your audience and differentiates you from competitors.',
                features: [
                    'Logo Design & Brand Mark',
                    'Brand Guidelines',
                    'Color Palette & Typography',
                    'Business Card Design',
                    'Marketing Materials',
                    'Brand Strategy Consultation'
                ],
                process: 'Our branding process includes market research, concept development, design iterations, and comprehensive brand guideline creation.',
                pricing: 'Starting at $3,000',
                timeline: '3-5 weeks'
            },
            'maintenance': {
                icon: '🔧',
                title: 'Maintenance & Support',
                description: 'Keep your digital assets running smoothly with ongoing maintenance, updates, and technical support.',
                features: [
                    'Regular Security Updates',
                    'Performance Monitoring',
                    'Content Updates',
                    'Bug Fixes & Troubleshooting',
                    '24/7 Technical Support',
                    'Backup & Recovery Services'
                ],
                process: 'Our maintenance packages ensure your website and applications stay secure, fast, and up-to-date with the latest technologies.',
                pricing: 'Starting at $200/month',
                timeline: 'Ongoing support'
            }
        };

        function openServiceModal(serviceId) {
            const service = serviceData[serviceId];
            const modal = document.getElementById('serviceModal');
            
            // Update modal content
            document.getElementById('modalIcon').textContent = service.icon;
            document.getElementById('modalTitle').textContent = service.title;
            
            // Build service details HTML
            const detailsHTML = `
                <p style="font-size: 1.2rem; margin-bottom: 2rem; color: #64748b;">${service.description}</p>
                
                <h3 style="color: #334155; margin-bottom: 1rem;">What's Included:</h3>
                <div class="service-features">
                    ${service.features.map(feature => `
                        <div class="feature-item">
                            <strong>✓</strong> ${feature}
                        </div>
                    `).join('')}
                </div>
                
                <h3 style="color: #334155; margin-bottom: 1rem;">Our Process:</h3>
                <p style="margin-bottom: 2rem; line-height: 1.8;">${service.process}</p>
                
                <div class="pricing-section">
                    <h3 style="margin: 0; font-size: 1.5rem;">Investment</h3>
                    <div class="price">${service.pricing}</div>
                    <p style="margin: 0; opacity: 0.9;">Timeline: ${service.timeline}</p>
                    <button class="cta-modal" onclick="showPage('contact'); closeServiceModal();">Get Started Today</button>
                </div>
            `;
            
            document.getElementById('serviceDetails').innerHTML = detailsHTML;
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeServiceModal() {
            const modal = document.getElementById('serviceModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        document.getElementById('serviceModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeServiceModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeServiceModal();
            }
        });
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Add fade-in animation
            const activePage = document.getElementById(pageId);
            if (pageId !== 'home') {
                activePage.querySelector('.container').classList.add('fade-in');
            }
        }

        // Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Simulate form submission
            alert('Thank you for your message! We will get back to you within 24 hours.');
            this.reset();
        });

        // Smooth scrolling for navigation
        document.addEventListener('DOMContentLoaded', function() {
            // Add smooth transitions
            document.body.style.transition = 'all 0.3s ease';
            
            // Animate service cards on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            // Observe all service cards
            document.querySelectorAll('.service-card, .portfolio-item').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s ease';
                observer.observe(card);
            });
        });

        // Add interactive hover effects
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Portfolio item interactions
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('click', function() {
                const title = this.querySelector('h3').textContent;
                alert(`Opening ${title} project details...`);
            });
        });

        // Dynamic stats counter
        function animateStats() {
            const stats = document.querySelectorAll('.stat-number');
            stats.forEach(stat => {
                const target = parseInt(stat.textContent.replace('+', ''));
                let current = 0;
                const increment = target / 50;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current) + (target > 100 ? '+' : '');
                }, 40);
            });
        }

        // Trigger stats animation when about page is viewed
        const aboutObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target.id === 'about') {
                    animateStats();
                    aboutObserver.unobserve(entry.target);
                }
            });
        });

        document.getElementById('about').addEventListener('transitionend', function() {
            if (this.classList.contains('active')) {
                animateStats();
            }
        });