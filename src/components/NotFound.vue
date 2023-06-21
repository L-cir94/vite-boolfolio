<template>
    <div class="container">
        <div class="row mt-5 " >
            <h1>Page not found</h1>
            <route-link :to="{ name: 'home' }">
                Torna alla HomePage
            </route-link>
        </div>
    </div>
</template>

<script>

export default {
    name: "Notfound",
}
</script>

<style lang="scss" scoped></style>