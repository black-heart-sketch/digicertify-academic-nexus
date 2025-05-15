
import { ref } from 'vue';

interface Toast {
  id: string;
  title: string;
  description?: string;
  type: 'default' | 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

const toasts = ref<Toast[]>([]);

export function useToast() {
  const addToast = (toast: Omit<Toast, 'id'>) => {
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

  const removeToast = (id: string) => {
    toasts.value = toasts.value.filter(toast => toast.id !== id);
  };

  return {
    toasts,
    addToast,
    removeToast,
  };
}

// Standalone toast function
export const toast = {
  default(props: { title: string; description?: string; duration?: number }) {
    const { addToast } = useToast();
    return addToast({ ...props, type: 'default' });
  },
  success(props: { title: string; description?: string; duration?: number }) {
    const { addToast } = useToast();
    return addToast({ ...props, type: 'success' });
  },
  error(props: { title: string; description?: string; duration?: number }) {
    const { addToast } = useToast();
    return addToast({ ...props, type: 'error' });
  },
  warning(props: { title: string; description?: string; duration?: number }) {
    const { addToast } = useToast();
    return addToast({ ...props, type: 'warning' });
  },
  info(props: { title: string; description?: string; duration?: number }) {
    const { addToast } = useToast();
    return addToast({ ...props, type: 'info' });
  },
};
