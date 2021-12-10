<!-- ------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE VIEW PUBLICATION NEW
------------------------------------------------------------------------------- -->

<template>
    <div class="fullview">
        <Header></Header>
        <FormulateForm
            class="wrapper mt0400"
            id="newpubform"
            name="newpub"
            v-model="valuesPub"
            @submit="publish"
        >
            <div class="card">
                <h1 class="formtitle">NOUVELLE PUBLICATION</h1>
                <FormulateInput class="inputspec"
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
                <FormulateInput class="inputspec"
                    name="message"
                    type="textarea"
                    label="Message"
                    placeholder="optionnel"
                />
                <FormulateInput class="inputspec"
                    type="image"
                    name="mediafile"
                    label="Image"
                    help="Vous pouvez sélectionner une image au format png, jpg ou gif."
                    validation="mime:image/jpeg,image/png,image/gif"
                />
                <div class="inputspec btnspec">
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
            publish() {

            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/css/variables";
    .card {
        width: 90%;
        margin: 0 auto;
        padding: 0.4rem;
        background: $color-gpmania-back-primary;
        border: 1px solid gainsboro;
        border-radius: 0.2rem;
    }
    .inputspec {
        margin: 1rem;
    }
    .formulate-input .formulate-input-element {
        max-width: 60em;
    }
    .btnspec {
        width: 80rem;
        margin-bottom: 1rem;
    }
</style>
