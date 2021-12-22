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
    import { mapState } from 'vuex'
    export default {
        name: 'Pubnew',
        components: { Header },
        data: function () {
            return {
                valuesPub: {
                    title: '',
                    message: '',
                    mediafile: null
                }
            }
        },
        computed: {
            ...mapState({
                currentUser: state => state.user.userLogged
            }),
        },
        methods: {
            async clickPublish() {
                const path = await this.valuesPub.mediafile.upload()
                console.log(path[0].url);
                const optionsFetch = {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + this.currentUser.token,
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify({
                        title: this.valuesPub.title,
                        description: this.valuesPub.message,
                        //file: this.valuesPub.mediafile,
                        userId: this.currentUser.id
                    }),
                };
                const url = 'http://localhost:3000/api/pubs/new';
                return fetch( url, optionsFetch )
                    .then( res => {
                        if(res.ok) {
                            localStorage.setItem('nav', 1);
                            this.$router.push('/home');
                        }
                    })
                    .catch( err => {
                        console.log(err);
                        alert( 'Erreur interne. La requête n\'a pas aboutie.\n'
                             + 'Veuillez réessayer s\'il vous plaît.');
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
