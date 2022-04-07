<template>
  <button
    class="custom-button"
    :class="variant"
    :style="style"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class CustomButton extends Vue {
  @Prop({ default: 'dark' }) readonly variant!: 'dark' | 'light'
  @Prop({ default: 1 }) readonly fontSize!: number
  @Prop() readonly height?: number

  get style(): Record<string, string> {
    const style: Record<string, string> = {
      fontSize: `${this.fontSize}rem`,
    }

    if (this.height) {
      style.height = `${this.height}rem`
    }

    return style
  }
}
</script>

<style lang="scss" scoped>
.custom-button {
  border: none;
  border-radius: 4rem / 5rem;
  padding: 0.4rem 0.8rem;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);

  &.dark {
    background: var(--primary-color);
    color: white;
  }
  &.light {
    background: white;
    color: var(--primary-color);
  }
}
</style>