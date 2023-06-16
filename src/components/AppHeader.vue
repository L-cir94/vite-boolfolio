<template>
    <header>
        <div class="container">
            <div class="row align-items-md-stretch m-2">
                <nav class="nav justify-content-center shadow rounded-5 bg-boolean text-uppercase">
                    <router-link class="nav-link" :to="{ 'name': 'home' }" aria-current="page">Home</router-link>
                    <router-link class="nav-link" :to="{ 'name': 'about' }">About</router-link>
                    <router-link class="nav-link" :to="{ 'name': 'contacts' }">Contacts</router-link>
                    <router-link class="nav-link" :to="{ 'name': 'projects' }">My Projects</router-link>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
.bg-boolean{
    background-color: #001533;
    
}
.nav-link{
    color: #00e165;
}
header{
    position: fixed;
    bottom: 0;
    left: 50px;
    right: 50px;
    z-index: 1;
}
</style>