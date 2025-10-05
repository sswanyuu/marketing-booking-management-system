import { onMounted, onUnmounted } from 'vue';

export function useHeaderHeight() {
  const updateBodyPadding = () => {
    const header = document.querySelector('.header');
    if (header) {
      const headerHeight = header.offsetHeight;
      document.body.style.paddingTop = `${headerHeight}px`;
    }
  };

  onMounted(() => {
    updateBodyPadding();
    window.addEventListener('resize', updateBodyPadding);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateBodyPadding);
  });

  return {
    updateBodyPadding,
  };
}
