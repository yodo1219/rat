// スムーズスクロール（アンカーリンク用）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
  
  // Intersection Observerによるフェードインアニメーション
  const animatedElements = document.querySelectorAll(
    ".content-section, .service-item, .trainer-box, .testimonial-item"
  );
  
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  
  animatedElements.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = "translateY(50px)";
    observer.observe(element);
  });
  
  // パララックス効果：各セクションの背景位置をスクロールに合わせて更新
  window.addEventListener("scroll", function () {
    const scrollPos = window.pageYOffset;
    document.querySelectorAll(".content-section").forEach(section => {
      section.style.backgroundPositionY = `${scrollPos * 0.5}px`;
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.getElementById('back-to-top');
  
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });
  
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const trainerCards = document.querySelectorAll('.trainer-card');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const trainerCount = document.getElementById('trainer-count');
    
    let currentIndex = 0;
    const total = trainerCards.length;
    

    
    // 初期表示
    function showTrainer(index) {
      // 全カード非表示
      trainerCards.forEach(card => {
        card.classList.remove('active');
      });
      // index のカードのみ表示
      trainerCards[index].classList.add('active');
      // カウンター更新 (1-based 表記)
      trainerCount.textContent = `${index + 1} / ${total}`;
    }
    
    // 次へ
    nextBtn.addEventListener('click', () => {
      currentIndex++;
      if (currentIndex >= total) currentIndex = 0; // ループする場合
      showTrainer(currentIndex);
    });
    
    // 前へ
    prevBtn.addEventListener('click', () => {
      currentIndex--;
      if (currentIndex < 0) currentIndex = total - 1; // ループする場合
      showTrainer(currentIndex);
    });
    
    // 初回
    showTrainer(currentIndex);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
  });