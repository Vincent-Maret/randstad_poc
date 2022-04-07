<template>
  <BModal v-model="displayState" hide-header hide-footer>
    <div class="contents p-5">
      <div>
        <button class="transparent-button mb-5" @click="hide">
          <Icon name="cross" size="2.2" color="var(--primary-color)" />
        </button>
        <h2>Tes soft skills</h2>

        <SkillFinder
          :skill-type="skillType"
          :user-skills="userSkills"
          @skill-added="addSkill"
        />

        <section class="user-skills mt-5">
          <CustomButton
            v-for="skill in userSkills"
            :key="skill.id"
            variant="dark"
            class="ml-2 mb-2"
            @click="removeSkill(skill.id)"
          >
            <div class="d-flex align-items-center">
              {{ skill.title }}
              <Icon name="cross" color="white" size="1" class="ml-2" />
            </div>
          </CustomButton>
        </section>
      </div>

      <CustomButton height="4" font-size="1.3" @click="save">
        Enregistrer
      </CustomButton>
    </div>
  </BModal>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Icon from '@/components/ui/icon/index.vue'
import SkillFinder from '@/components/skillFinder.vue'
import CustomButton from '@/components/ui/customButton.vue'
import { SkillType, Skill } from '@/models/domain'
// import { saveUser } from '@/services/nocodb'

@Component({ components: { Icon, SkillFinder, CustomButton } })
export default class SkillModal extends Vue {
  displayState: boolean = false
  skillType: SkillType = 'hard'
  userSkills: Skill[] = []

  get userSkillsId(): Set<number> {
    return new Set(this.userSkills.map((s) => s.id))
  }

  mounted(): void {}

  show(skillType: SkillType): void {
    this.userSkills = [...this.$store.state.user.skills]
    this.skillType = skillType
    this.displayState = true
  }

  hide(): void {
    this.displayState = false
  }

  addSkill(skill: Skill): void {
    if (!this.userSkillsId.has(skill.id)) {
      this.userSkills.push(skill)
    }
  }

  removeSkill(skillId: number): void {
    const index: number = this.userSkills.findIndex((s) => s.id === skillId)

    if (index !== -1) {
      this.userSkills.splice(index, 1)
    }
  }

  save(): void {
    const updatedUser = { ...this.$store.state.user, skills: this.userSkills }

    this.$store.commit('SET_USER', updatedUser)

    this.hide()
  }
}
</script>

<style lang="scss" scoped>
.contents {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    color: var(--primary-color);
  }

  .user-skills {
    display: flex;
    flex-wrap: wrap;
  }
}

::v-deep {
  .modal {
    padding: 0 !important;
  }

  .modal-body {
    background: var(--primary-color-light);
    padding: 0;

    width: 100vw;
    height: 100vh;
  }

  .modal-dialog,
  .modal-dialog-centered {
    max-width: none;
    min-height: 100%;
    margin: 0;

    .modal-content {
      min-height: 100%;
      border-radius: 0;
      border: 0;
    }
  }
}
</style>