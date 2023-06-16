<template>
    <AppBanner title="My Projects"></AppBanner>

    <ProjectsList></ProjectsList>
</template>

<script>
export default {
    name: "ProjectsView",
    components: { AppBanner, ProjectsList }
}
import AppBanner from '../components/AppBanner.vue';
import ProjectsList from '../components/ProjectsList.vue';
</script>

<style lang="scss" scoped></style>