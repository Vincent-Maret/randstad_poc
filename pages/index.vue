<template>
  <div class="p-4">
    <h1>Tes skills</h1>
    <div>
      <h2>Hard skills</h2>
      <AddSkillButton> ajouter un hard skill </AddSkillButton>
    </div>
    <div>
      <div v-if="skills.length" class="d-flex flex-wrap mt-4">
        <SkillCard
          v-for="skill in skills"
          :key="skill.uri"
          :title="skill.title"
          :clickable="true"
          class="skill-card mb-2 mr-2"
        />
      </div>
      <div v-else>
        You have not yet added any skills. Use the search bar to add one.
      </div>
    </div>
    <div>
      <h2>Add skills</h2>
      <SkillFinder :forbidden-skills="skillsUri" @skill-selected="saveSkill" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import SkillFinder from '@/components/skillFinder.vue'
import SkillCard from '@/components/skillCard.vue'
import AddSkillButton from '@/components/skill/addSkillButton.vue'
import { Skill } from '@/models/domain'

@Component({ components: { AddSkillButton } })
export default class SkillPage extends Vue {
  get skills(): Skill[] {
    return this.$store.state.userSkills
  }

  get skillsUri(): Set<string> {
    const uris: string[] = this.skills.map((s) => s.uri)
    return new Set(uris)
  }

  saveSkill(skill: Skill): void {
    this.$store.commit('ADD_SKILL', skill)
  }
}
</script>
