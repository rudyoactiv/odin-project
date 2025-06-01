export class Carousel {
  constructor(container) {
    this.container = container;
    this.track = container.querySelector("[data-carousel-track]");
    this.slides = [...container.querySelectorAll("[data-carousel-slide]")];

    
    const firstClone = this.slides[0].cloneNode(true);
    const lastClone = this.slides[this.slides.length - 1].cloneNode(true);

    this.track.appendChild(firstClone);
    this.track.insertBefore(lastClone, this.slides[0]);

    
    this.slides = [...this.track.querySelectorAll("[data-carousel-slide]")];
    this.slideCount = this.slides.length;

    this.prevButton = container.querySelector("[data-carousel-prev]");
    this.nextButton = container.querySelector("[data-carousel-next]");
    this.dotsContainer = container.querySelector("[data-carousel-dots]");
    
    this.currentIndex = 1; 

    this.isTransitioning = false; 
    
    this.interval = null;
    this.timerText = container.querySelector("[data-carousel-timer]");
    this.countdown = 5;
    this.countdownInterval = null;

    this._createDots();
    this._goToSlide(this.currentIndex, false); 
    this._setupEvents();
    this._startAutoSlide();

    
    this.track.addEventListener('transitionend', () => {
      this.isTransitioning = false;
      this._updateButtons();

      if (this.currentIndex === 0) {
        
        this._goToSlide(this.slideCount - 2, false);
      } else if (this.currentIndex === this.slideCount - 1) {
        
        this._goToSlide(1, false);
      }
    });
  }

  _createDots() {
    this.dotsContainer.innerHTML = '';
    this.dots = [];

    for (let i = 0; i < this.slideCount - 2; i++) {
      const btn = document.createElement("button");
      btn.addEventListener("click", () => {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        this._updateButtons();
        this._goToSlide(i + 1);
      });
      this.dotsContainer.appendChild(btn);
      this.dots.push(btn);
    }
  }

  _goToSlide(index, withTransition = true) {
    this.currentIndex = index;
    if (withTransition) {
      this.track.style.transition = 'transform 0.4s ease';
    } else {
      this.track.style.transition = 'none';
    }

    const offset = -index * 100;
    this.track.style.transform = `translateX(${offset}%)`;
    this._updateDots();

    if (withTransition) {
      this._startAutoSlide();
    }
  }

  _updateDots() {
    this.dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === this.currentIndex - 1);
    });
  }

  _setupEvents() {
    this.prevButton.addEventListener("click", () => {
      if (this.isTransitioning) return;
      this.isTransitioning = true;
      this._updateButtons();
      this._goToSlide(this.currentIndex - 1);
    });

    this.nextButton.addEventListener("click", () => {
      if (this.isTransitioning) return;
      this.isTransitioning = true;
      this._updateButtons();
      this._goToSlide(this.currentIndex + 1);
    });
  }

  _updateButtons() {
    
    this.prevButton.disabled = this.isTransitioning;
    this.nextButton.disabled = this.isTransitioning;
  }

  _startAutoSlide() {
    this._stopAutoSlide();

    this._stopCountdown();
    this.countdown = 5;
    this._startCountdown();

    this.interval = setInterval(() => {
      if (this.isTransitioning) return;  
      this.isTransitioning = true;
      this._updateButtons();
      this._goToSlide(this.currentIndex + 1);
    }, 5000);
  }

  _stopAutoSlide() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this._stopCountdown();
  }

  _startCountdown() {
    this.timerText.textContent = `Changing in ${this.countdown}`;
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown > 0) {
        this.timerText.textContent = `Changing in ${this.countdown}`;
      }
    }, 1000);
  }

  _stopCountdown() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }
  }
}
