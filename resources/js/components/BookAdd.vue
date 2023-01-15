<template>
    <h1 class="text-danger">Hello World</h1>
    <input type="text" id="name" v-model="name" class="">
    <input type="file" name="img" @change="changeFile">
    <button type="button" @click="addBook">Add</button>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            name: "",
            img: {},
        }
    },
    methods: {
        changeFile(e) { this.img = e.target.files[0] },
        async addBook() {
            try {
                const formData = new FormData()
                formData.append('name', this.name)
                formData.append('img', this.img)
                const {data} = await axios.post('/api/books', formData, {
                    headers: {
                        "X-CSRF-TOKEN": document.querySelector('meta[name="csrf"]'),
                        'content-type': 'multipart/form-data'
                    }
                });
                
                if(data.success)
                  this.$router.push('/')
                // console.log(resp.data);
            } catch (error) {

            }
            console.log(this.name, this.img);
            this.$router.push('/');
        }
    },
    name: 'BookAdd'
}
</script>
