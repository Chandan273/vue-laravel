<template>
    <h1>Book Show</h1>
    <!-- <p v-if=""></p>{{ book }} -->
</template>

<script>
import axios from 'axios';
export default {
    name: 'BookShow',
    data() {
        return {
            books: {}
        }
    },
    methods: {
        async getData() {
            try {
                const { data } = await axios.get(`/api/books/${this.$route.params.id}`);
                console.log(data);
                this.books = data;
            } catch (err) {
                console.log(err)
            }
        }
    },
    mounted() {
        this.getData();
    }
}
</script>