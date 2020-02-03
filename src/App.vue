<template>
  <div id="app">
    <Heading />
    <Form :lodash="lodash"/>
    <List :lodash="lodash"/>
  </div>
</template>

<script>
import Heading from './components/Heading.vue';
import Form from './components/Form.vue';
import List from './components/List.vue';

export default {
  name: 'app',
  components: {
    Heading,
    Form,
    List,
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
#app {

}
</style>
