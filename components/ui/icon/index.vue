<template>
  <component :is="componentName" :style="iconStyle" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

const availableIcons = [
  'job',
  'cv',
  'cross',
  'search',
  'edit',
  'play',
  'location',
  'heart',
] as const
type AvailableIcons = typeof availableIcons[number]

@Component({
  components: {
    job: () => import('./job.vue'),
    cv: () => import('./cv.vue'),
    cross: () => import('./cross.vue'),
    search: () => import('./search.vue'),
    edit: () => import('./edit.vue'),
    play: () => import('./play.vue'),
    heart: () => import('./heart.vue'),
    location: () => import('./location.vue'),
  },
})
export default class IconWrapper extends Vue {
  @Prop({ required: true }) readonly name!: AvailableIcons
  @Prop({ default: 3 }) readonly size!: number
  @Prop({ default: 'transparent' }) readonly color!: string

  get componentName(): AvailableIcons {
    if (!availableIcons.includes(this.name)) {
      throw new Error(`Icon ${this.name} is not available`)
    }

    return this.name
  }

  get iconStyle(): Record<string, string> {
    return {
      width: `${this.size}rem`,
      height: `${this.size}rem`,
      color: this.color,
    }
  }
}
</script>