<template>
  <div>
    <BInputGroup class="search-bar">
      <BInputGroupPrepend>
        <BFormSelect v-model="searchedType" :options="availableSearchType" />
      </BInputGroupPrepend>
      <BFormInput v-model="searchedTerm" @keyup.enter="search" />
      <BInputGroupAppend>
        <BButton @click="search">Search</BButton>
      </BInputGroupAppend>
    </BInputGroup>
    <div v-if="skills.length" class="d-flex flex-wrap mt-4">
      <SkillCard
        v-for="skill in skills"
        :key="skill.uri"
        :title="skill.title"
        :clickable="true"
        :disabled="forbiddenSkills.has(skill.uri)"
        class="skill-card mb-2 mr-2"
        @click="selectSkill(skill)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { searchSkill } from '@/services/esco'
import { SearchResult, Type } from '@/models/esco'
import { Skill } from '@/models/domain'
import SkillCard from '@/components/skillCard.vue'

@Component({ components: { SkillCard } })
export default class SkillFinder extends Vue {
  @Prop({ required: true }) readonly forbiddenSkills!: Set<string>

  searchedTerm: string = ''
  searchedType: Type = 'skill'
  searchResult: SearchResult | null = null
  availableSearchType: Type[] = ['skill', 'occupation', 'concept']

  get skills(): Skill[] {
    if (!this.searchResult) {
      return []
    }

    return this.searchResult._embedded.results.map((e) => {
      const skill: Skill = {
        title: e.title,
        uri: e.uri,
      }

      if (e.broaderHierarchyConcept) {
        skill.broaderHierarchyConcept = e.broaderHierarchyConcept
      }
      if (e.broaderSkill) {
        skill.broaderSkill = e.broaderSkill
      }

      return skill
    })
  }

  async search(): Promise<void> {
    if (this.searchedTerm.length < 2) {
      return
    }

    const res = await searchSkill(this.searchedTerm, this.searchedType)
    this.searchResult = res
  }

  selectSkill(skill: Skill): void {
    if (!this.forbiddenSkills.has(skill.uri)) {
      this.$store.commit('ADD_SKILL', skill)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  max-width: 600px;
}
</style>