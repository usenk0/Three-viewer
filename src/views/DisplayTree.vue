<template>
  <div class="home">
    <DisplayTreeBuild/>
  </div>
</template>

<script>
// @ is an alias to /src
import DisplayTreeBuild from '@/components/DisplayTreeBuild.vue'

export default {
  name: 'home',
  components: {
    DisplayTreeBuild
  }
}
</script>
