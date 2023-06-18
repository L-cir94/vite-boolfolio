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
                                <button class="btn rounded-4 p-2" aria-label="Previous" v-if="projects.prev_page_url"
                                    @click="prevPage(projects.prev_page_url)">
                                    <span aria-hidden="true">Prev Page</span>
                                </button>
                            </li>
                            <!--                                                     <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li> -->
                            <li class="page-item">
                                <button class="btn rounded-4 p-2" aria-label="Next" v-if="projects.next_page_url"
                                    @click="nextPage(projects.next_page_url)">
                                    <span aria-hidden="true">Next Page</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div v-if="projects && !loading" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-3">
                <div class="col" v-for="project in projects.data">
                    <div class="card h-100 shadow p-2 rounded-5">
                        <img class="card-img-top rounded-5" :src="getImages(project.cover_image)" :alt="project.title">
                        <div class="card-body d-flex flex-column">
                            <h4 class="card-title">{{ project.title }}</h4>
                            <p class="card-text">{{ reduceText(project.content) }}</p>
                            <span class="badge bg-primary"></span>
                            <div class="technologies">
                                <span class="badge mx-1" v-for="technology in project.technologies"> {{
                                    technology.name }}</span>
                            </div>
                            <div class="types">
                                <!-- <span class="badge bg-danger p-2 mx-1" v-for="type in project">{{ type.name }}</span> -->
                            </div>
                        </div>
                        <div class="card-footer text-center">
                            <button type="button" target="_blank" class="btn btn-primary rounded-5 me-1">
                                <a name="" id="" class="text-white" :href="project.repo" target="_blank">Vai alla repo </a>
                            </button>
                            <button type="button" target="_blank" class="btn btn-primary rounded-5">
                                <router-link target="_blank" name="" id="" class="text-white" :to="{ name: 'single-project', params:{'slug':project.slug}}"><i class="fa-solid fa-eye"></i></router-link>
                            </button>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="container mb-4">
        <div class="row">
            <div class="navbar d-flex justify-content-center" v-if="projects">
                <nav aria-label="Page navigation" class="">
                    <ul class="pagination">
                        <li class="page-item">
                            <button class=" btn rounded-4 p-2" aria-label="Previous" v-if="projects.prev_page_url"
                                @click="prevPage(projects.prev_page_url)">
                                <span aria-hidden="true">Prev Page</span>
                            </button>
                        </li>

                        <li class="page-item">
                            <button class="btn rounded-4 p-2" aria-label="Next" v-if="projects.next_page_url"
                                @click="nextPage(projects.next_page_url)">
                                <span aria-hidden="true">Next Page</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
span.badge {
    background-color: #00e165;
}

.types {
    position: absolute;
    top: 0;
    margin-top: 1rem;
}

.btn {
    background-color: #001533;
    color: white;
    border: none;
}

a {
    text-decoration: none;
}
.fa-eye{
    color: #00e165;
}
</style>