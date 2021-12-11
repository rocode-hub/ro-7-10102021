<!-- ------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE VIEW PUBLICATION NEW
------------------------------------------------------------------------------- -->

<template>
    <div class="fullview">
        <Header></Header>
        <FormulateForm
            class="wrapper mt1000"
            id="newpubform"
            name="newpub"
            v-model="valuesPub"
            @submit="clickPublish"
        >
            <div class="card">
                <h1 class="formtitle">NOUVELLE PUBLICATION</h1>
                <FormulateInput class="m1000"
                    autofocus
                    name="title"
                    type="text"
                    label="Titre"
                    placeholder="obligatoire"
                    validation="required"
                    :validation-messages="{
                        required: `Vous devez saisir un titre.`,
                    }"
                />
                <FormulateInput class="m1000"
                    name="message"
                    type="textarea"
                    label="Message"
                    placeholder="optionnel"
                />
                <FormulateInput class="m1000"
                    type="image"
                    name="mediafile"
                    label="Image"
                    help="Vous ne pouvez sélectionner ( optionnel ) qu'une image au format PNG, GIF, JPG ou JPEG."
                    validation="mime:image/jpg,image/jpeg,image/png,image/gif"
                    :validation-messages="{
                        mime: `Le fichier sélectionné n'a pas un format attendu.`,
                    }"
                />
                <div class="btnspec m1000">
                    <FormulateInput
                        type="submit"
                        label="publier"
                    />
                </div>
            </div>
        </FormulateForm>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    export default {
        name: 'Pubnew',
        components: { Header },
        data: function () {
            return {
                valuesPub: {
                    title: '',
                    content: '',
                    media:'',
                }
            }
        },
        methods: {
            clickPublish() {
                const optionsFetch = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify({
                        email: this.valuesLogin.email,
                        pwd: this.valuesLogin.pwd,
                        mode: this.startMode,
                    }),
                };
                this.$store.dispatch( 'LOGSIGN', optionsFetch )
                    .then ( response => {
                        if (response.status === 200) {
                            if ( this.startMode ) {
                                localStorage.setItem('nav', 1);
                                this.$router.push('/home');
                            } else {
                                alert( 'Le compte est créé.\n'
                                     + 'Vous allez recevoir un mail de confirmation.\n'
                                     + 'Vous pouvez dès à présent vous connecter.'); 
                                this.$router.go();
                           } 
                        }
                    })
                    .catch ( err => {
                        if (err === 400) {
                            alert( 'Un compte avec ce login existe déjà !' );
                        } else if (err === 401) {
                            alert( 'Les identifiants saisis sont invalides' );
                        } else {
                            alert( 'Erreur interne. La requête n\'a pas aboutie.\n'
                                 + 'Veuillez réessayer s\'il vous plaît.');
                        }
                        this.$router.go();
                    })
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/css/variables";
    .formulate-input .formulate-input-element {
        max-width: 60em;
    }
    .btnspec {
        width: 80rem;
        margin-bottom: 1rem;
    }
</style>
