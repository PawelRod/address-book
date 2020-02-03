<template>
    <div ref="list">
        <p>{{ form.name }}</p>
        <p>{{ form.address }}</p>
        <p>{{ form.city }}</p>
        <p>{{ form.phone }}</p>
    </div>
</template>

<script>
// import {bus} from '../main'

export default {
    name: 'List',
    props: {

    },
    data() {
        return {
            form: []
        }
    },
    created() {

    }
}
</script>

<style lang="css" scoped>

</style>