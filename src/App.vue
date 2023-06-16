<script>
export default {
    components: {

    },

}
</script>

<template>
    <header>
        <nav class="nav justify-content-center  ">
          <router-link class="nav-link" :to="{'name':'home'}">Home</router-link>
          <router-link class="nav-link" :to="{'name':'about'}">About Me</router-link>
          <router-link class="nav-link" :to="{'name':'contacts'}">Contacts</router-link>
          <router-link class="nav-link" :to="{'name':'projects'}">My Projects</router-link>
        </nav>
    </header>
<router-view></router-view>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
