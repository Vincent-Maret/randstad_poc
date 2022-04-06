// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue, { ComponentOptions } from 'vue'

declare module 'vue/types/options' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ComponentOptions<V extends Vue> {
    layout?: any
  }
}
