
import { ref } from 'vue';

const toasts = ref([]);

export function useToast() {
  const addToast = (toast) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = {
      ...toast,
      id,
      duration: toast.duration || 5000,
    };
    toasts.value.push(newToast);
    
    setTimeout(() => {
      removeToast(id);
    }, newToast.duration);
    
    return id;
  };

  const removeToast = (id) => {
    toasts.value = toasts.value.filter(toast => toast.id !== id);
  };

  return {
    toasts,
    removeToast,
    addToast
  };
}

// Standalone toast function
export const toast = {
  default(props) {
    const { addToast } = useToast();
    return addToast({ ...props, type: 'default' });
  },
  success(props) {
    const { addToast } = useToast();
    return addToast({ ...props, type: 'success' });
  },
  error(props) {
    const { addToast } = useToast();
    return addToast({ ...props, type: 'error' });
  },
  warning(props) {
    const { addToast } = useToast();
    return addToast({ ...props, type: 'warning' });
  },
  info(props) {
    const { addToast } = useToast();
    return addToast({ ...props, type: 'info' });
  },
};
