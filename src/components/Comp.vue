<template>
    <div class="contact">
        <p>{{ index }}</p>
        <p class="name">Name: {{ item[index].name }}</p>
        <p class="address">Address: {{ item[index].address }}</p>
        <p class="city">City: {{ item[index].city }}</p>
        <p class="phone">Phone: {{ item[index].phone }}</p>
    </div>
</template>

<script>
import {bus} from '../main'

export default {
    name: 'comp',
    data() {
        return {
          item: [],
          index: -1
        }
    },
    created() {
        bus.$on('formData', (data) => {
            this.item.push(data);
            this.index++;
        });
    }
}
</script>

<style scoped>
    .contact {
        background: lightgrey;
        width: 400px;
        margin: 10px auto;
    }
    p {
        padding: 5px 15px;
    }
</style>