//Mobile menu
let isMobileMenuOpen = false;

function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  const hamburger = document.querySelector('.hamburger');
  
  mobileNav.classList.toggle('active');
  hamburger.classList.toggle('active');

  if (isMobileMenuOpen && document.body.classList.contains('no-scroll')) {
    isMobileMenuOpen = false;
  } else if (!isMobileMenuOpen && !document.body.classList.contains('no-scroll')) {
    isMobileMenuOpen = true;
  }

  handleScrolling();
}

function handleScrolling() {
  const body = document.body;

  if (isMobileMenuOpen) {
    body.classList.add('no-scroll');
  } else if (!isMobileMenuOpen) {
    body.classList.remove('no-scroll');
  }
}


// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-nav .link, .mobile-nav .contact').forEach(link => {
    link.addEventListener('click', () => {
        const mobileNav = document.getElementById('mobileNav');
        const hamburger = document.querySelector('.hamburger');
        
        mobileNav.classList.remove('active');
        hamburger.classList.remove('active');
        isMobileMenuOpen = false;
        handleScrolling();
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const mobileNav = document.getElementById('mobileNav');
    const hamburger = document.querySelector('.hamburger');
    
    if (!e.target.closest('.hamburger') && !e.target.closest('.mobile-nav')) {
        mobileNav.classList.remove('active');
        hamburger.classList.remove('active');

        isMobileMenuOpen = false;
        handleScrolling();
    }
});

