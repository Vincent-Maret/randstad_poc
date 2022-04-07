<template>
  <div class="py-3 px-4">
    <header class="d-flex flex-column align-items-center">
      <Avatar />
      <div class="name mt-3">Thomas H., 25ans</div>
      <div class="qualification">BAC+5 - UX Design</div>
    </header>
    <div class="separator" />
    <section>
      <h2>Mes skills</h2>
      <div class="hard-skills mb-2">
        <div class="d-flex justify-content-between justify-items-center">
          <div class="mb-2">Hard skills</div>
          <button class="transparent-button" @click="showSkillModal('hard')">
            <Icon name="edit" size="1.5" color="var(--primary-color)" />
          </button>
        </div>
        <div class="skills">
          <CustomButton
            v-for="skill in hardSkills"
            :key="skill.id"
            class="mb-2 mr-2"
          >
            {{ skill.title }}
          </CustomButton>
        </div>
      </div>

      <div class="soft-skills mb-2">
        <div class="d-flex justify-content-between justify-items-center">
          <div class="mb-2">Soft skills</div>
          <button class="transparent-button" @click="showSkillModal('soft')">
            <Icon name="edit" size="1.5" color="var(--primary-color)" />
          </button>
        </div>
        <div class="skills">
          <CustomButton
            v-for="skill in softSkills"
            :key="skill.id"
            class="mb-2 mr-2"
          >
            {{ skill.title }}
          </CustomButton>
        </div>
      </div>

      <div class="lang-skills mb-2">
        <div class="d-flex justify-content-between justify-items-center">
          <div class="mb-2">Langues</div>
          <button class="transparent-button" @click="showSkillModal('lang')">
            <Icon name="edit" size="1.5" color="var(--primary-color)" />
          </button>
        </div>
        <div class="skills">
          <CustomButton
            v-for="skill in langSkills"
            :key="skill.id"
            class="mb-2 mr-2"
          >
            {{ skill.title }}
          </CustomButton>
        </div>
      </div>
    </section>

    <div class="separator" />

    <section class="d-flex align-items-center justify-content-between">
      <h2>Vidéo de présentation</h2>
      <div>
        <Icon name="play" size="1.5" color="var(--primary-color)" />
        <Icon
          class="ml-2"
          name="edit"
          size="1.5"
          color="var(--primary-color)"
        />
      </div>
    </section>

    <div class="separator" />

    <section>
      <h2>Expérience</h2>
      <div class="mb-2">
        <div>ALTEN - 1 an - CDI</div>
        <div class="bold">UX/UI Designer</div>
      </div>
      <div class="mb-2">
        <div>PAYLIB - 6 mois - stage</div>
        <div class="bold">UX Designer</div>
      </div>
    </section>

    <CustomButton class="w-100 mt-4" height="3" font-size="1.2" @click="save">
      Mes matchs
    </CustomButton>

    <SkillModal ref="skillModal" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator'
import Avatar from '@/components/ui/avatar.vue'
import SkillModal from '@/components/profile/skillModal.vue'
import Icon from '@/components/ui/icon/index.vue'
import { SkillType, Skill } from '@/models/domain'
import CustomButton from '@/components/ui/customButton.vue'

@Component({ components: { Avatar, SkillModal, Icon, CustomButton } })
export default class CV extends Vue {
  @Ref() readonly skillModal!: SkillModal

  get hardSkills(): Skill[] {
    return this.$store.state.user.skills.filter((s: Skill) => s.type === 'hard')
  }

  get softSkills(): Skill[] {
    return this.$store.state.user.skills.filter((s: Skill) => s.type === 'soft')
  }

  get langSkills(): Skill[] {
    return this.$store.state.user.skills.filter((s: Skill) => s.type === 'lang')
  }

  showSkillModal(type: SkillType): void {
    this.skillModal.show(type)
  }
}
</script>

<style lang="scss" scoped>
.name {
  font-family: 'Graphik-Medium';
  font-size: 1.5rem;
}

.bold {
  font-family: 'Graphik-Semibold';
}

.qualification {
  font-size: 1.2rem;
}

.separator {
  height: 2px;
  background: #f0f0f0;
  margin: 1.5rem 0;
}

h2 {
  font-size: 1.2rem;
  font-family: 'Graphik-Semibold';
}

.skills {
  min-height: 10px;
}
</style>