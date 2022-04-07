<template>
  <div>
    <div class="wrapper">
      <input
        v-model="value"
        type="text"
        :placeholder="placeholder"
        @keyup="submit"
      />
      <Icon name="search" size="1" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { debounce } from 'helpful-decorators'
import Icon from '@/components/ui/icon/index.vue'

@Component({ components: { Icon } })
export default class SearchBar extends Vue {
  @Prop({ default: 'rechercher' }) readonly placeholder!: string

  value: string = ''

  @debounce(1000)
  submit(): void {
    this.$emit('submitted')
  }
}
</script>

<style lang="scss" scoped>
input[type='text'] {
  background: transparent;
  border: none;
  color: var(--primary-color);
  flex-grow: 1;

  &::placeholder {
    color: var(--primary-color-lighter);
  }

  &:focus {
    outline: none;
  }
}

.wrapper {
  border-bottom: 2px solid var(--primary-color);
  display: flex;
  justify-content: space-between;
}
</style>