<template>
<div class="container mt-1">
    <div class="row align-items-md-stretch m-1 mt-5 mt-sm-0">
        <div class="col-md-12">
            <div class="p-4 d-sm-flex align-items-center text-white bg-boolean rounded-5 shadow text-center text-sm-start text-uppercase">
                <img width="50" class="rounded-5 me-3" src="../assets/img/Foto-Luca-3.jpg" alt="">
                <h2>{{title}}</h2>
<!--                 <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then,
                    mix and match with additional component themes and more.</p>
                <button class="btn btn-outline-primary" type="button">Example button</button> -->
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'AppBanner',
    props:{
        title: String,
    }
}
</script>

<style lang="scss" scoped>
.bg-boolean{
    background-color: #001533;
    
}

</style>