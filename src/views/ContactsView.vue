<template>
    <AppBanner title="Contacts"></AppBanner>
    <section class="contact-me">
        <div class="container py-4">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-2">
                <div class="col">
                    <form action="">
                        <div class="mb-3">
                            <label for="" class="form-label">Nome</label>
                            <input type="text" name="" id="" class="form-control" placeholder="Piermario Rossi"
                                aria-describedby="nameHelper">
                            <small id="nameHelper" class="text-muted">Inserisci il tuo nome qui</small>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" name="email" id="email" class="form-control"
                                placeholder="Piermariorossi@gmail.com" aria-describedby="emailHelper">
                            <small id="emailHelper" class="text-muted">Inserisci la tua email qui</small>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Inserisci il tuo messaggio qui</label>
                            <textarea class="form-control" name="message" id="message" rows="3"
                                placeholder="Ciao vorrei contattarti in merito a..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Invia</button>
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
import AppBanner from '../components/AppBanner.vue';

export default {
    name: "ContactsView",
    components: { AppBanner }
}
</script>

<style lang="scss" scoped></style>