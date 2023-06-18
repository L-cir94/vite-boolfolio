<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
export default {
    components: {
    AppHeader,
    AppMain,
    AppFooter
},

}
</script>

<template>

    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
    <router-view></router-view>
    
</template>

<style lang="scss">
@use './styles/general.scss';

body::-webkit-scrollbar {
    display: none;
}
body{
    background-color: rgb(252, 241, 241);
}
</style>
