<template>
    <footer>
        <div class="container">
            <div class="row align-items-md-stretch mb-1 px-2 justify-content-between">
                <div class="div d-flex shadow rounded-5 bg-boolean text-white justify-content-between g-1 p-0">
                    <div class="name ms-2 me-2">
                        Luca Cirigliano <!-- <i class="fa-regular fa-registered"></i> --> | 2023
                    </div>
                    
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
.bg-boolean {
    background-color: #001533;

}

footer {
    position: fixed;
    bottom: 0;
    z-index: 3;
    font-size:small;
}
</style>