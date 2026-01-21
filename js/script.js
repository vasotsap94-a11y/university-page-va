// ====================================
// Mobile Menu Toggle
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // ====================================
    // Smooth Scrolling for Anchor Links
    // ====================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ====================================
    // FAQ Accordion
    // ====================================
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // ====================================
    // Contact Form Handling
    // ====================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Simulate form submission
            alert('Thank you for your message! We will get back to you soon.');
            console.log('Form submitted:', formData);
            
            // Reset form
            contactForm.reset();
        });
    }

    // ====================================
    // Program Filtering (Programs Page)
    // ====================================
    const programSearch = document.getElementById('programSearch');
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
    const degreeFilter = document.getElementById('degreeFilter');
    
    function filterPrograms() {
        const searchTerm = programSearch ? programSearch.value.toLowerCase() : '';
        const selectedDepartments = Array.from(filterCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.dataset.filter);
        const selectedDegree = degreeFilter ? degreeFilter.value : 'all';
        
        // Filter program cards
        const programCards = document.querySelectorAll('.program-card-large');
        programCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            const cardDepartment = card.dataset.department;
            const cardDegree = card.dataset.degree;
            
            const matchesSearch = cardText.includes(searchTerm);
            const matchesDepartment = selectedDepartments.length === 0 || selectedDepartments.includes(cardDepartment);
            const matchesDegree = selectedDegree === 'all' || cardDegree === selectedDegree;
            
            if (matchesSearch && matchesDepartment && matchesDegree) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Filter table rows
        const tableRows = document.querySelectorAll('#programsTableBody tr');
        tableRows.forEach(row => {
            const rowText = row.textContent.toLowerCase();
            const rowDepartment = row.dataset.department;
            const rowDegree = row.dataset.degree;
            
            const matchesSearch = rowText.includes(searchTerm);
            const matchesDepartment = selectedDepartments.length === 0 || selectedDepartments.includes(rowDepartment);
            const matchesDegree = selectedDegree === 'all' || rowDegree === selectedDegree;
            
            if (matchesSearch && matchesDepartment && matchesDegree) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }
    
    if (programSearch) {
        programSearch.addEventListener('input', filterPrograms);
    }
    
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterPrograms);
    });
    
    if (degreeFilter) {
        degreeFilter.addEventListener('change', filterPrograms);
    }

    // ====================================
    // Scroll Animation (fade in elements)
    // ====================================
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

    // Add fade-in effect to cards
    const animatedElements = document.querySelectorAll('.program-card, .step-card, .date-card, .form-card, .leader-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ====================================
    // Navbar Background on Scroll
    // ====================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });

    // ====================================
    // Active Navigation Link Highlighting
    // ====================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksAll = document.querySelectorAll('.nav-links a');
    
    navLinksAll.forEach(link => {
        const linkPage = link.getAttribute('href').split('#')[0];
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // ====================================
    // Image Lazy Loading Fallback
    // ====================================
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));

    // ====================================
    // Form Validation Enhancement
    // ====================================
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.style.borderColor = '#ff4444';
                } else {
                    this.style.borderColor = '#00B894';
                }
            });
            
            input.addEventListener('focus', function() {
                this.style.borderColor = '#0066FF';
            });
        });
    });

    // ====================================
    // Counter Animation for Stats
    // ====================================
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }

    const counterElements = document.querySelectorAll('[data-counter]');
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.counter);
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counterElements.forEach(el => counterObserver.observe(el));

    // ====================================
    // Back to Top Button (optional)
    // ====================================
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #0066FF, #0052CC);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 4px 15px rgba(0, 102, 255, 0.3);
        transition: all 0.3s ease;
        z-index: 999;
    `;

    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    backToTopButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 6px 20px rgba(0, 102, 255, 0.4)';
    });

    backToTopButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 15px rgba(0, 102, 255, 0.3)';
    });

    console.log('UniCentral website initialized successfully!');
});
