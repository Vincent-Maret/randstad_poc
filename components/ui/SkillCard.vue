<template>
  <div
    class="skill-card"
    :class="{ clickable: clickable, disabled: disabled }"
    :style="style"
    @click="click"
  >
    {{ formatedTitle }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class SkillCard extends Vue {
  @Prop({ required: true }) readonly title!: string
  @Prop({ default: false }) readonly clickable!: boolean
  @Prop({ default: false }) readonly disabled!: boolean

  get formatedTitle(): string {
    return `${this.title.charAt(0).toUpperCase()}${this.title.slice(1)}`
  }

  get style(): Record<string, string> {
    const style: Record<string, string> = {}

    if (this.clickable && !this.disabled) {
      style.cursor = 'pointer'
    }

    return style
  }

  click(): void {
    if (!this.disabled) {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.skill-card {
  display: inline-block;
  position: relative;
  background: rgb(216, 216, 216);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.8rem;

  &.clickable:hover {
    background: rgb(150, 150, 150);
  }

  &.disabled {
    background: rgb(150, 150, 150);
  }
}
</style>