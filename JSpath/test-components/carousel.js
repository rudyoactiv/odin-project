export class Carousel {
  constructor(container) {
    this.container = container;
    this.track = container.querySelector("[data-carousel-track]");
    this.slides = [...container.querySelectorAll("[data-carousel-slide]")];
    this.prevButton = container.querySelector("[data-carousel-prev]");
    this.nextButton = container.querySelector("[data-carousel-next]");
    this.dotsContainer = container.querySelector("[data-carousel-dots]");
    this.currentIndex = 0;
    this.slideCount = this.slides.length;
    this.interval = null;

    this.timerText = container.querySelector("[data-carousel-timer]");
    this.countdown = 5;
    this.countdownInterval = null;


    this._createDots();
    this._goToSlide(0);
    this._setupEvents();
    this._startAutoSlide();
  }

  _createDots() {
    this.dots = this.slides.map((_, index) => {
      const btn = document.createElement("button");
      btn.addEventListener("click", () => {
        this._goToSlide(index);
      });
      this.dotsContainer.appendChild(btn);
      return btn;
    });
  }

  _goToSlide(index) {
    this.currentIndex = index;
    const offset = -index * 100;
    this.track.style.transform = `translateX(${offset}%)`;
    this._updateDots();
    this._startAutoSlide();
  }

  _updateDots() {
    this.dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === this.currentIndex);
    });
  }

  _setupEvents() {
    this.prevButton.addEventListener("click", () => {
      this._goToSlide(
        (this.currentIndex - 1 + this.slideCount) % this.slideCount
      );
      this._startAutoSlide();
    });

    this.nextButton.addEventListener("click", () => {
      this._goToSlide((this.currentIndex + 1) % this.slideCount);
      this._startAutoSlide();
    });
  }

  _startAutoSlide() {
    this._stopAutoSlide();

    this._stopCountdown();
    this.countdown = 5;
    this._startCountdown();
        
    this.interval = setInterval(() => {
      this._goToSlide((this.currentIndex + 1) % this.slideCount);
    }, 5000);
  }

  _stopAutoSlide() {
    if(this.interval) {
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
