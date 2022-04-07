<template>
  <div class="skills-selection">
    <SearchBar :placeholder="placeholder" @submitted="search" />

    <section class="search-result mt-5">
      <CustomButton
        v-for="skill in searchResult"
        :key="skill.id"
        variant="light"
        class="ml-2 mb-2"
        @click="addSkill(skill)"
      >
        {{ skill.title }}
      </CustomButton>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Skill, SkillType } from '@/models/domain'
import SearchBar from '@/components/ui/searchBar.vue'
import CustomButton from '@/components/ui/customButton.vue'
import Icon from '@/components/ui/icon/index.vue'
import { searchSkillsByType } from '@/services/nocodb'

@Component({ components: { SearchBar, CustomButton, Icon } })
export default class SkillFinder extends Vue {
  @Prop({ required: true }) readonly skillType!: SkillType
  @Prop({ required: true }) readonly userSkills!: Skill[]

  searchResult: Skill[] = []

  get placeholder(): string {
    switch (this.skillType) {
      case 'hard':
        return 'rechercher un hard skill'
      case 'soft':
        return 'rechercher un soft skill'
      case 'lang':
        return 'rechercher une langue'
    }
  }

  async search(searchedText: string): Promise<void> {
    this.searchResult = await searchSkillsByType(this.skillType, searchedText)
  }

  addSkill(skill: Skill): void {
    this.$emit('skill-added', skill)
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  max-width: 600px;
}

.search-results {
  display: flex;
  flex-wrap: wrap;
}
</style>