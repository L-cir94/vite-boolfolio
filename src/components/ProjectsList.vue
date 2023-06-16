<script>
import axios from 'axios'
export default {
    name: "ProjectsList",
    data() {
        return {
            baseAPI: 'http://127.0.0.1:8000/',
            projectPath: 'api/projects',
            loading: true,
            projects: null,
            error: null,
            maxTextLength: 50,
        }
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    /*                     console.log(response) */
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
        },
        nextPage(imagePath) {
            /* console.log(imagePath); */
            this.getProjects(imagePath)
        },
        prevPage(imagePath) {
            /* console.log(imagePath); */
            this.getProjects(imagePath)
        },
        reduceText(text) {
            if (text.length > this.maxTextLength) {
                return text.substring(0, this.maxTextLength) + '...'
            }
            return text
        }
    },
    mounted() {
        const url = this.baseAPI + this.projectPath
        this.getProjects(url)
        /*   console.log(url) */

    }
}
</script>

<template>
    <section class="projects">
        <div class="container" v-if="projects">
            <div class="row">
                <div class="navbar d-flex justify-content-center">
                    <nav aria-label="Page navigation" class="">
                        <ul class="pagination">
                            <li class="page-item">
                                <button class="page-link" aria-label="Previous" v-if="projects.prev_page_url"
                                    @click="prevPage(projects.prev_page_url)">
                                    <span aria-hidden="true">&laquo;</span>
                                </button>
                            </li>
                            <!--                         <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li> -->
                            <li class="page-item">
                                <button class="page-link" aria-label="Next" v-if="projects.next_page_url"
                                    @click="nextPage(projects.next_page_url)">
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div v-if="loading === false" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-3">
                <div class="col" v-for="project in projects.data">
                    <div class="card h-100 shadow p-2 rounded-5">
                        <img class="card-img-top" width="20" :src="getImages(project.cover_image)" :alt="project.title">
                        <div class="card-body">
                            <h4 class="card-title">{{ project.title }}</h4>
                            <p class="card-text">{{ reduceText(project.content) }}</p>
                            <span class="badge bg-primary"></span>
                            <div class="Technologies">
                                <h3>Technologies</h3>
                                <ul>
                                    <li v-for="technology in project.technologies">{{ technology.name }}</li>
                                </ul>

                            </div>
                            <div class="Types">
                                <h3>Type of project</h3>
                                <ul>
                                    <li v-for="types in project.type">{{ types.name }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-footer text-center">
                            <a name="" id="" class="" :href="project.repo" target="_blank">{{ project.repo }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="container" v-if="projects">
        <div class="row">
            <div class="navbar d-flex justify-content-center">
                    <nav aria-label="Page navigation" class="">
                        <ul class="pagination">
                            <li class="page-item">
                                <button class="page-link" aria-label="Previous" v-if="projects.prev_page_url"
                                    @click="prevPage(projects.prev_page_url)">
                                    <span aria-hidden="true">&laquo;</span>
                                </button>
                            </li>
                            <!--                         <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li> -->
                            <li class="page-item">
                                <button class="page-link" aria-label="Next" v-if="projects.next_page_url"
                                    @click="nextPage(projects.next_page_url)">
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

ul{
    list-style: none;
}
</style>