<template>
  <div class="job-card">
    <div class="afinity">
      <div class="d-flex">
        <div class="progress-bar">
          <div class="bar" :style="barStyle" />
        </div>
        <div class="score">
          {{ score }}%
          <Icon name="heart" size="1.5" />
        </div>
      </div>
    </div>
    <div class="contents">
      <h2 class="title">{{ job.title }}</h2>
      <div class="type">{{ job.type }}</div>
      <div class="location d-flex align-items-center justify-content-end">
        <Icon name="location" size="0.8" />
        <div class="ml-2">{{ job.location }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { JobOffer } from '@/models/domain'
import Icon from '@/components/ui/icon/index.vue'

@Component({ components: { Icon } })
export default class JobCard extends Vue {
  @Prop({ required: true }) readonly job!: JobOffer
  @Prop({ required: true }) readonly score!: number

  get barStyle(): Record<string, string> {
    return {
      width: `${this.score}%`,
    }
  }
}
</script>

<style lang="scss" scoped>
.job-card {
  padding: 1rem;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
}

.title {
  font-family: 'Graphik-Semibold';
  max-width: 70%;
}

.progress-bar {
  background: var(--pink-light);
  width: 100%;
  height: 2px;
  margin-top: 8px;
  .bar {
    height: 2px;
    background: var(--custom-pink);
  }
}

.score {
  font-family: 'Graphik-Semibold';
  color: var(--custom-pink);
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>