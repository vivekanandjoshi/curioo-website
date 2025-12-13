// ============================================
// CURIOO - Landing Page JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.querySelector('.navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load
    
    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('mobile-open');
        });
    }
    
    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navLinks.classList.remove('mobile-open');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });
    
    // ============================================
    // FAQ ACCORDION
    // ============================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ============================================
    // TABLET CAROUSEL AUTO-ROTATION
    // ============================================
    const previewSlides = document.querySelectorAll('.preview-slide');
    const previewDots = document.querySelectorAll('.preview-dots .dot');
    let currentPreviewSlide = 0;
    
    function rotatePreviewCarousel() {
        previewSlides.forEach(slide => slide.classList.remove('active'));
        previewDots.forEach(dot => dot.classList.remove('active'));
        currentPreviewSlide = (currentPreviewSlide + 1) % previewSlides.length;
        previewSlides[currentPreviewSlide].classList.add('active');
        previewDots[currentPreviewSlide].classList.add('active');
    }
    
    if (previewSlides.length > 0) {
        setInterval(rotatePreviewCarousel, 4000); // Change every 4 seconds
    }
    
    // Dot click handlers
    previewDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            previewSlides.forEach(slide => slide.classList.remove('active'));
            previewDots.forEach(d => d.classList.remove('active'));
            currentPreviewSlide = index;
            previewSlides[index].classList.add('active');
            dot.classList.add('active');
        });
    });
    
    // ============================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ============================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .step, .testimonial-card, .pricing-card').forEach(el => {
        el.classList.add('animate-ready');
        animateOnScroll.observe(el);
    });
    
    // ============================================
    // STATS COUNTER ANIMATION
    // ============================================
    const stats = document.querySelectorAll('.stat-number');
    let statsAnimated = false;
    
    function animateStats() {
        if (statsAnimated) return;
        
        stats.forEach(stat => {
            const text = stat.textContent;
            const match = text.match(/(\d+)/);
            if (match) {
                const target = parseInt(match[0]);
                const suffix = text.replace(match[0], '');
                let current = 0;
                const increment = target / 50;
                const duration = 1500;
                const stepTime = duration / 50;
                
                const counter = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(counter);
                    }
                    stat.textContent = Math.floor(current) + suffix;
                }, stepTime);
            }
        });
        
        statsAnimated = true;
    }
    
    // Trigger stats animation when hero section is visible
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateStats();
                statsObserver.unobserve(heroStats);
            }
        }, { threshold: 0.5 });
        
        statsObserver.observe(heroStats);
    }
    
    // ============================================
    // GALLERY AUTO-SCROLL PAUSE ON HOVER
    // ============================================
    const galleryTrack = document.querySelector('.gallery-track');
    
    if (galleryTrack) {
        galleryTrack.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        galleryTrack.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }
    
    // ============================================
    // FLOATING CARDS PARALLAX EFFECT
    // ============================================
    const floatingCards = document.querySelectorAll('.floating-card');
    
    if (floatingCards.length > 0) {
        document.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            floatingCards.forEach((card, index) => {
                const speed = (index + 1) * 10;
                const x = mouseX * speed;
                const y = mouseY * speed;
                card.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }
    
    // ============================================
    // PHONE MOCKUP TILT EFFECT
    // ============================================
    const phoneMockup = document.querySelector('.phone-mockup');
    
    if (phoneMockup) {
        const heroVisual = document.querySelector('.hero-visual');
        
        heroVisual.addEventListener('mousemove', function(e) {
            const rect = heroVisual.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            phoneMockup.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        heroVisual.addEventListener('mouseleave', function() {
            phoneMockup.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
    
    // ============================================
    // ADD ANIMATION STYLES
    // ============================================
    const style = document.createElement('style');
    style.textContent = `
        .animate-ready {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .nav-links.mobile-open {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background: white;
            padding: 20px;
            box-shadow: var(--shadow-lg);
            border-radius: 0 0 16px 16px;
        }
        
        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        .phone-mockup {
            transition: transform 0.1s ease-out;
        }
    `;
    document.head.appendChild(style);
    
    console.log('🦉 Curioo website loaded successfully!');
});
