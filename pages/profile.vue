<template>
  <div>
    <header class="header">Mon profil</header>
    <div class="section-selector">
      <div
        v-for="section in availableSections"
        :key="section"
        class="item"
        :class="{ active: section === activeSection }"
        @click="activeSection = section"
      >
        {{ section }}
      </div>
    </div>
    <component :is="activeComponent" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import CV from '@/components/profile/cv.vue'
import Preferences from '@/components/profile/preferences.vue'

const AVAILABLE_SECTIONS = ['CV virutel', 'Préférences'] as const
type Section = typeof AVAILABLE_SECTIONS[number]

@Component({ components: { CV, Preferences } })
export default class Profile extends Vue {
  activeSection: Section = 'CV virutel'
  availableSections = AVAILABLE_SECTIONS

  get activeComponent(): typeof CV | typeof Preferences {
    return this.activeSection === 'CV virutel' ? CV : Preferences
  }
}
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  background: var(--primary-color-light);
  padding: 1rem 0;
  font-family: 'Graphik-Medium';
  font-size: 1.2rem;
}

.section-selector {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  .item {
    margin: 0 1rem;
    cursor: pointer;
    font-size: 1.2rem;

    &.active {
      font-family: 'Graphik-Medium';
      border-bottom: 2px solid var(--primary-color);
    }
  }
}
</style>