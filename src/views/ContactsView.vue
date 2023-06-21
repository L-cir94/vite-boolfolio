<template>
    <AppBanner title="Contacts"></AppBanner>
    <section class="contact-me">
        <div class="container py-4">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-2">
                <div class="col">
                    <div class="alert alert-primary" role="alert" v-if="success">
                        <strong>Messaggio inviato!</strong> Presto riceverai una risposta
                    </div>

                    <form action="" @submit.prevent="submitform()">

                        <div class="mb-3">
                            <label for="" class="form-label">Nome</label>
                            <input type="text" name="" id="" class="form-control" placeholder="Piermario Rossi"
                                aria-describedby="nameHelper" v-model="name">
                            <small id="nameHelper" class="text-muted">Inserisci il tuo nome qui</small>
                        </div>
                        <div class="alert alert-primary" role="alert" v-for="(error, index) in errors.name"
                            :key="`message-error-${index}`" :class="invalid - feedback">
                            <strong>{{ error }}</strong>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" name="email" id="email" class="form-control"
                                placeholder="Piermariorossi@gmail.com" aria-describedby="emailHelper" v-model="email">
                            <small id="emailHelper" class="text-muted">Inserisci la tua email qui</small>
                        </div>
                        <div class="alert alert-primary" role="alert" v-for="(error, index) in errors.email"
                            :key="`message-error-${index}`" :class="invalid - feedback">
                            <strong>{{ error }}</strong>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Inserisci il tuo messaggio qui</label>
                            <textarea class="form-control" name="message" id="message" rows="3"
                                placeholder="Ciao vorrei contattarti in merito a..." v-model="message"></textarea>
                        </div>
                        <div class="alert alert-primary" role="alert" v-for="(error, index) in errors.message"
                            :key="`message-error-${index}`" :class="invalid - feedback">
                            <strong>{{ error }}</strong>
                        </div>
                        <button type="submit" class="btn btn-primary" :disable="loading">Invia</button>
                    </form>
                </div>
                <div class="col pt-5 pt-sm-0 pt-lg-0 pt-md-0">
                    <h3>Altri modi per contattarmi</h3>
                    <h6>Email</h6>
                    <p> <a
                            href="mailto:luca.cirigliano.1994@gmail.it?subject=Message from portfolio form&body=Ciao, ti contatto perchè ho visto il tuo portfolio e...">
                            luca.cirigliano.1994@gmail.com
                        </a></p>
                    <h6>Telefono Cellulare</h6>
                    <p> <a href="tel:+390123456789">+39-0123-456789
                        </a></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import AppBanner from '../components/AppBanner.vue';

export default {
    name: "ContactsView",
    components: { AppBanner },
    data() {
        return {
            name: '',
            email: '',
            message: '',
            errors: {},
            loading: false,
            success: false
        }
    }, methods: {
        submitform() {
            /*             console.log(this.name);
                        console.log(this.email);
                        console.log(this.message); */
            this.loading = true
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }
            this.error = {}
            axios
                .post('http://127.0.0.1:8000/api/contacts', data)
                .then(response => {
                    /* console.log(response); */
                    this.success = response.data.success
                    if (!response.data.success) {
                        this.errors = response.data.errors
                    } else {
                        this.name = '',
                            this.email = '',
                            this.message = ''
                    }
                    this.loading = false
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
}
</script>

<style lang="scss" scoped></style>