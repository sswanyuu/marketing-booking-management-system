import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';

export function useMobileMenu(isOpen) {
  const menuRef = ref(null);

  const updateMenuPosition = () => {
    if (!menuRef.value) return;

    const header = document.querySelector('.header');
    if (header) {
      menuRef.value.style.top = `${header.offsetHeight}px`;
    }
  };

  const toggleBodyScroll = shouldLock => {
    document.body.style.overflow = shouldLock ? 'hidden' : '';
  };

  // Watch for menu open/close
  watch(isOpen, async newValue => {
    if (newValue) {
      await nextTick();
      updateMenuPosition();
      toggleBodyScroll(true);
    } else {
      toggleBodyScroll(false);
    }
  });

  // Handle resize
  const handleResize = () => {
    if (isOpen.value) {
      updateMenuPosition();
    }
  };

  onMounted(() => {
    window.addEventListener('resize', handleResize);
    if (isOpen.value) {
      updateMenuPosition();
    }
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    toggleBodyScroll(false);
  });

  return {
    menuRef,
    updateMenuPosition,
  };
}
