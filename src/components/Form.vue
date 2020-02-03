<template>
    <div id="form">
        <form class="form">
            <label for="full-name">Full name:</label>
            <input type="text" id="full-name" v-model="form.name" required>
            <label for="address">Address:</label>
            <input type="text" id="address" v-model="form.address" required>
            <label for="city">City:</label>
            <input type="text" id="city" v-model="form.city" required>
            <label for="phone">Phone:</label>
            <input type="text" id="phone" v-model="form.phone" required>
            <button type="submit" @click.prevent="itemsPush">Add</button>
        </form>
        <ul>
            <li v-for="(item, i) in items" :key="i">
                <p>{{item.name}}</p>
                <p>{{item.address}}</p>
                <p>{{item.city}}</p>
                <p>{{item.phone}}</p>
                <button @click="deleteItem(i)">Delete</button>
            </li>
            <button type="submit" @click="sortBy('name')">Sort by name</button>
        </ul>
    </div>
</template>

<script>
// import _ from 'lodash'

export default {
    name: 'Form',
    props: {

    },
    data() {
        return {
            form: {
                name: '',
                address: '',
                city: '',
                phone: ''
            },
            items: [],
        }
    },
    methods: {
        itemsPush: function() {
            this.items.push({
                name: this.form.name,
                address: this.form.address,
                city: this.form.city,
                phone: this.form.phone,
                // id: new Date().valeOf()
            });
            this.form.name = '';
            this.form.address = '';
            this.form.city = '';
            this.form.phone = '';
        },
        deleteItem(i) {
            this.items.splice(i, 1);
        },
        sortBy(prop) {
            this.items.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
        }
    },
    computed: {

    }
}
</script>

<style lang="css" scoped>
    .form {
        margin: 50px auto;
        text-align: center;
        max-width: 380px;
    }
    input {
        margin: 5px 0;
        width: 200px;
    }
    label {
        display: inline-block;
        width: 120px;
    }
    .btn {
        margin: 10px 0;
        padding: 5px 20px;
        font-size: 16px;
    }
    button {
        display: block;
        margin: 20px auto;
        width: 100px;
    }
    li {
        background: lightgrey;
        margin: 10px 0;
    }
</style>