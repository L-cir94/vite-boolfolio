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
        },
        nextPage(imagePath) {
            console.log(imagePath);
        },
        prevPage(imagePath) {
            console.log(imagePath);
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
    <section class="vue-home">
        <div class="container" v-if="projects">
            <h1>I miei progetti</h1>
            <div class="row ">
                <nav aria-label="Page navigation">
                    <ul class="pagination    ">
                        <li class="page-item">
                            <button class="page-link" href="#" aria-label="Previous" v-if="projects.prev_page_url"
                                @click="prevPage(projects.prev_page_url)">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <button class="page-link" href="#" aria-label="Next" v-if="projects.next_page_url"
                                @click="nextPage(projects.next_page_url)">
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div v-if="loading === false" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-3">
                <div class="col" v-for="project in projects.data">
                    <div class="card h-100">
                        <img class="card-img-top" :src="getImages(project.cover_image)" :alt="project.title">
                        <div class="card-body">
                            <h4 class="card-title">{{ project.title }}</h4>
                            <p class="card-text">{{ project.content }}</p>
                            <span class="badge bg-primary"></span>
                        </div>
                        <div class="card-footer">
                            <a name="" id="" class="btn btn-primary" href="#" role="button">{{ project.repo }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="container">
        <div class="row">
            <nav aria-label="Page navigation">
                <ul class="pagination    ">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
