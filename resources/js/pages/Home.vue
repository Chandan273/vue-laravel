<template lang="">
    <div>
        <h1>Home</h1>
        <router-link to="addbook" class="btn btn-success">Add Book</router-link>        
        <p v-if="isLoading">loading..</p>
        <ul v-else>
            <li v-for="book in books" :key="book">
                
                <router-link :to="{path:`/${book.id}`}">{{ book.name }}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            isLoading: false,
            books: [],
        }
    },
    name: "Home",
    methods: {
        async fetchBooks() {
            this.isLoading = true;
            try {
                const { data } = await axios.get("/api/books");
                this.books = data;
            } catch (error) {
                console.log(error)
            }
            // axios.get("/api/books").then(res => {
            //     this.books = res.data;
            // })
            // .catch(err => console.log(err))
            this.isLoading = false;
        }
    },
    mounted() {
        this.fetchBooks();
    }
}
</script>
<style lang="">
    
</style>