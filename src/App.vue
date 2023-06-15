<script>
import axios from 'axios'



export default {
    components: {

    },
    data() {
        return {
            baseAPI: 'http://127.0.0.1:8000/',
            projectPath: 'api/projects',
            loading: true,
            projects: null,
            error: null
        }
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response)
                    this.projects = response.data.projects
                    this.loading = false
                })
                .catch(error => {
                    console.log(error);
                    this.error = error.message
                })
        },
        getImages(imagePath) {
            return this.baseAPI + 'storage/' + imagePath;
        }
    },
    mounted() {
        const url = this.baseAPI +  this.projectPath
        this.getProjects(url)
        /*   console.log(url) */
    }
}
</script>

<template>
    <section class="vue-home">
        <div class="container">
            <h1>I miei progetti</h1>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-3">
                <div class="col" v-for="project in projects">
                    <div class="card h-100">
                        <img class="card-img-top" :src="getImages(project.cover_image)" :alt="project.title">
                        <div class="card-body">
                            <h4 class="card-title">{{ project.title }}</h4>
                            <p class="card-text">{{ project.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
