document.addEventListener('DOMContentLoaded', () => {
  // Elements for Calculator
  const inputSchools = document.getElementById('input-schools');
  const inputStudents = document.getElementById('input-students');
  const inputPrice = document.getElementById('input-price');

  const valSchools = document.getElementById('val-schools');
  const valStudents = document.getElementById('val-students');
  const valPrice = document.getElementById('val-price');

  const resultMonthly = document.getElementById('result-monthly');
  const resultAnnual = document.getElementById('result-annual');

  // Format numbers with space separator
  function formatFCFA(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\n))/g, ' ') + ' FCFA';
  }

  // Update calculator calculations
  function calculateProfits() {
    const schools = parseInt(inputSchools.value, 10);
    const students = parseInt(inputStudents.value, 10);
    const price = parseInt(inputPrice.value, 10);

    // Update label text
    valSchools.textContent = schools;
    valStudents.textContent = students;
    valPrice.textContent = price + ' FCFA';

    // Math calculation
    const monthly = schools * students * price;
    const annual = monthly * 12;

    // Display formatted results
    resultMonthly.textContent = formatFCFA(monthly);
    resultAnnual.textContent = 'Soit ' + formatFCFA(annual) + ' / an';
  }

  // Add event listeners to calculator range controls
  if (inputSchools && inputStudents && inputPrice) {
    inputSchools.addEventListener('input', calculateProfits);
    inputStudents.addEventListener('input', calculateProfits);
    inputPrice.addEventListener('input', calculateProfits);

    // Initialize calculator on page load
    calculateProfits();
  }

  // FAQ Accordion Toggle
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains('active');

      // Close all other open accordion items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      // Toggle current item
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });

  // Video Overlay Cover Handler
  const videoOverlay = document.getElementById('video-overlay-cover');
  const promoVideo = document.getElementById('promo-video');

  if (videoOverlay && promoVideo) {
    videoOverlay.addEventListener('click', () => {
      videoOverlay.style.display = 'none';
      promoVideo.play();
    });
  }

  // Mobile Sticky Bottom CTA display controller
  const stickyCtaBar = document.getElementById('sticky-cta-bar');
  const heroCta = document.getElementById('hero-cta');

  if (stickyCtaBar && heroCta) {
    window.addEventListener('scroll', () => {
      // Check if we are on a mobile screen
      if (window.innerWidth < 768) {
        const heroCtaBottom = heroCta.getBoundingClientRect().bottom + window.scrollY;
        
        // Show sticky bar once scrolled past the main hero CTA button
        if (window.scrollY > heroCtaBottom - 100) {
          stickyCtaBar.classList.add('visible');
        } else {
          stickyCtaBar.classList.remove('visible');
        }
      } else {
        stickyCtaBar.classList.remove('visible');
      }
    });
  }
});
