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
  const videoContainer = document.getElementById('video-container');
  const videoOverlay = document.getElementById('video-overlay-cover');

  if (videoContainer && videoOverlay) {
    videoOverlay.addEventListener('click', () => {
      // Replace video-container with YouTube Short embed optimized for mobile & iOS instant loading
      videoContainer.innerHTML = '<iframe src="https://www.youtube.com/embed/ueEQGYHTebI?autoplay=1&rel=0&playsinline=1&enablejsapi=1&modestbranding=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    });
  }

  // Mobile Sticky Bottom CTA display controller
  const stickyCtaBar = document.getElementById('sticky-cta-bar');
  const firstCta = document.getElementById('first-cta');

  if (stickyCtaBar && firstCta) {
    window.addEventListener('scroll', () => {
      // Check if we are on a mobile screen
      if (window.innerWidth < 768) {
        const firstCtaBottom = firstCta.getBoundingClientRect().bottom + window.scrollY;
        
        // Show sticky bar once scrolled past the first CTA button
        if (window.scrollY > firstCtaBottom - 100) {
          stickyCtaBar.classList.add('visible');
        } else {
          stickyCtaBar.classList.remove('visible');
        }
      } else {
        stickyCtaBar.classList.remove('visible');
      }
    });
  }

  // Countdown Timer Logic (24-Hour real-world timer resetting at midnight)
  const countdownTimer = document.getElementById('countdown-timer');

  if (countdownTimer) {
    function updateTimer() {
      const now = new Date();
      // Set to midnight of the current day (23:59:59.999)
      const midnight = new Date();
      midnight.setHours(23, 59, 59, 999);
      
      let diff = midnight.getTime() - now.getTime();
      if (diff < 0) {
        diff = 0;
      }
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      const formattedTime = 
        (hours < 10 ? '0' : '') + hours + ':' + 
        (minutes < 10 ? '0' : '') + minutes + ':' + 
        (seconds < 10 ? '0' : '') + seconds;
      
      countdownTimer.textContent = formattedTime;
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
  }

});

