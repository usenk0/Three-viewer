<template>
  <div class="home">
    <GenerateTreeForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import GenerateTreeForm from '@/components/GenerateTreeForm.vue'

export default {
  name: 'home',
  components: {
    GenerateTreeForm
  }
}
</script>
