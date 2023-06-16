<template>
<AppBanner title="About Me"></AppBanner>
<div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-3">
        <div class="col">
            <div class="card">
                <img class="card-img-top" src="holder.js/100x180/" alt="Title">
                <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img class="card-img-top" src="holder.js/100x180/" alt="Title">
                <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import AppBanner from '../components/AppBanner.vue';

export default {
    name: "AboutView",
    components: { AppBanner }
}
</script>

<style lang="scss" scoped></style>