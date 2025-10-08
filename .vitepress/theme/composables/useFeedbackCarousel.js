/* eslint-env browser */
/* global setTimeout, clearTimeout */
import { ref, onMounted, onUnmounted } from 'vue';

export function useFeedbackCarousel(feedbackData) {
  // ===== FEEDBACK CAROUSEL LOGIC =====
  const trackRef = ref(null);

  // Animation state
  let animationId = null;
  let isPaused = false;
  let isHovered = false;
  let scrollPosition = 0;

  // Configuration
  const SCROLL_SPEED = 0.5; // pixels per frame
  const CARD_WIDTH = 600;
  const CARD_GAP = 24;
  const TOTAL_CARD_WIDTH = CARD_WIDTH + CARD_GAP;
  const PAUSE_DURATION = 2000; // 2 seconds

  // ===== CORE ANIMATION FUNCTIONS =====
  const updateTrackPosition = () => {
    if (trackRef.value) {
      trackRef.value.style.transform = `translateX(-${scrollPosition}px)`;
    }
  };

  const animateToPosition = (targetPosition, duration = 400) => {
    if (!trackRef.value) return;

    const startPosition = scrollPosition;
    const distance = targetPosition - startPosition;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easing function (ease-out-cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      scrollPosition = startPosition + distance * easeOut;
      updateTrackPosition();

      if (progress < 1) {
        setTimeout(animate, 16); // ~60fps
      } else {
        // Animation complete, update button states
        updateButtonStates();
      }
    };

    animate();
  };

  // ===== BUTTON STATE COMPUTED =====
  const updateButtonStates = () => {
    // For seamless carousel, buttons are always enabled
    // Users can always navigate in both directions
  };

  const startContinuousScroll = () => {
    const animate = () => {
      // Only animate if not paused and not hovered
      if (!isPaused && !isHovered && trackRef.value) {
        scrollPosition += SCROLL_SPEED;

        // Reset position for seamless loop
        if (scrollPosition >= TOTAL_CARD_WIDTH * feedbackData.length) {
          scrollPosition = 0;
        }

        updateTrackPosition();
        updateButtonStates();
      }

      animationId = setTimeout(animate, 16); // ~60fps
    };

    animate();
  };

  const pauseScroll = () => {
    isPaused = true;
  };

  const resumeScroll = () => {
    isPaused = false;
  };

  // ===== NAVIGATION FUNCTIONS =====
  const moveToNextCard = () => {
    const targetPosition = scrollPosition + TOTAL_CARD_WIDTH;

    // Reset if past the end (seamless loop)
    if (targetPosition >= TOTAL_CARD_WIDTH * feedbackData.length) {
      scrollPosition = 0;
      updateTrackPosition();
      updateButtonStates();
    } else {
      animateToPosition(targetPosition);
    }
  };

  const moveToPrevCard = () => {
    const targetPosition = scrollPosition - TOTAL_CARD_WIDTH;

    // Reset if before the start (seamless loop)
    if (targetPosition < 0) {
      scrollPosition = TOTAL_CARD_WIDTH * (feedbackData.length - 1);
      updateTrackPosition();
      updateButtonStates();
    } else {
      animateToPosition(targetPosition);
    }
  };

  const nextFeedback = () => {
    pauseScroll();
    moveToNextCard();

    // Resume after pause duration
    setTimeout(() => {
      resumeScroll();
    }, PAUSE_DURATION);
  };

  const prevFeedback = () => {
    pauseScroll();
    moveToPrevCard();

    // Resume after pause duration
    setTimeout(() => {
      resumeScroll();
    }, PAUSE_DURATION);
  };

  // ===== HOVER HANDLERS =====
  const handleMouseEnter = () => {
    isHovered = true;
  };

  const handleMouseLeave = () => {
    isHovered = false;
  };

  // ===== BUTTON HOVER HANDLERS =====
  const handleButtonMouseEnter = () => {
    isHovered = true;
  };

  const handleButtonMouseLeave = () => {
    isHovered = false;
  };

  onMounted(() => {
    // Initialize button states
    updateButtonStates();

    // Start continuous scrolling
    startContinuousScroll();
  });

  onUnmounted(() => {
    if (animationId) {
      clearTimeout(animationId);
    }
  });

  return {
    // Refs
    trackRef,

    // Methods
    nextFeedback,
    prevFeedback,
    handleMouseEnter,
    handleMouseLeave,
    handleButtonMouseEnter,
    handleButtonMouseLeave,
  };
}
