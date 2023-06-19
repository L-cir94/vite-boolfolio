<template>
    <div class="container">
        <div class="row">
            <AppBanner :title="$route.params.slug"></AppBanner>
            <div v-if="project" class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-xl-2 g-3 justify-content-center">
                <div class="col">
                    <div class="card shadow p-2 rounded-5">
                        <img class="img-fluid rounded-5" :src="getImages(project.cover_image)" :alt="project.title">
                        <div class="card-body d-flex flex-column">
                            <h4 class="card-title">{{ project.title }}</h4>
                            <p>{{ project.content }}</p>
                            <span class="badge bg-primary"></span>
                            <div class="technologies">
                                <h3>Tipologia e tecnologie utilizzate nel progetto</h3>
                                <span class="badge mx-1" v-for="technology in project.technologies"> {{
                                    technology.name }}</span>
                                <span class="badge bg-danger p-2 mx-1" v-for="type in project">{{ type.name }}</span>
                            </div>
                        </div>
                        <div class="card-footer text-center">
                            <button type="button" target="_blank" class="btn btn-primary rounded-5 me-1">
                                <a name="" id="" class="text-white" :href="project.repo" target="_blank">Vai alla repo </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppBanner from './AppBanner.vue'
import axios from 'axios'
export default {
    components: { AppBanner },
    data() {
        return {
            project: null,
            loading: true,
            baseAPI: 'http://127.0.0.1:8000/',
            projectPath: 'api/projects/'

        }
    },
    methods: {
        getImages(imagePath) {
            return this.baseAPI + 'storage/' + imagePath;
        },
    },
    mounted() {

        const url = this.baseAPI + this.projectPath + this.$route.params.slug
        console.log(url);
        axios
            .get(url)
            .then(response => {
                console.log(response);

                if (response.data.success) {
                    this.project = response.data.result
                } else {
                    this.$router.push({ name: 'not-found' })
                }


            })
            .catch(error => {
                console.log(error);
            })
    }

}
</script>

<style lang="scss" scoped>
.btn {
    background-color: #001533;
    color: white;
    border: none;

}

a {
    text-decoration: none;
}

span.badge {
    background-color: #00e165;
}
</style>