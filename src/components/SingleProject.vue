<template>
    <AppBanner :title="$route.params.slug"></AppBanner>
    <div v-if="project">
        {{ project.title }}
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

    },
    mounted() {

        const url = this.baseAPI + this.projectPath + this.$route.params.slug
        console.log(url);
        axios
            .get(url)
            .then(response => {
                console.log(response);

                    this.project = response.data.result


            })
            .catch(error => {
                console.log(error);
            })
    }

}
</script>

<style lang="scss" scoped></style>