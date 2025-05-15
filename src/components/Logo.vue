
<template>
  <div :class="['flex items-center gap-2', className]">
    <div :class="['relative', sizeClasses[size]]">
      <div class="absolute inset-0 bg-digicertify-primary rounded-lg rotate-45 transform -translate-y-1 translate-x-1"></div>
      <div class="absolute inset-0 bg-digicertify-secondary rounded-lg -rotate-45"></div>
      <div class="absolute inset-0 flex items-center justify-center text-white font-bold">
        D
      </div>
    </div>
    
    <span v-if="withText" :class="['font-display font-bold', textSizeClasses[size], textColor]">
      DigiCertify
    </span>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    className: {
      type: String,
      default: ''
    },
    withText: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    textColor: {
      type: String,
      default: 'text-digicertify-primary dark:text-white'
    }
  },
  setup(props) {
    const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12'
    };

    const textSizeClasses = {
      sm: 'text-lg',
      md: 'text-xl',
      lg: 'text-2xl'
    };

    return {
      sizeClasses,
      textSizeClasses
    };
  }
}
</script>
