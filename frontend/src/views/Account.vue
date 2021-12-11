<!-- ------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE VIEW COMPTE UTILISATEUR
------------------------------------------------------------------------------- -->

<template>
    <div class="fullview">
        <Header></Header>
        <div class="wrapper mt1000">
            <div class="card">
                <h1 class="formtitle">COMPTE UTILISATEUR</h1>
                <h2 class="m1000">compte@oc.com</h2>
                <div class="btnwrap">
                    <FormulateInput class="btnmg"
                        type="button"
                        label="supprimer le compte"
                    />
                    <FormulateInput class="btnmg"
                        type="button"
                        label="supprimer les publications"
                    />
                    <FormulateInput class="btnmg"
                        type="button"
                        label="supprimer les réponses"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header'
    export default {
        name: 'Account',
        components: { Header },
        data: function () {
            return {}
        },
        methods: {
        }
    }
</script>

<style lang="scss">
    @import "../assets/css/variables";
    .btnmg {
        margin: 0.5rem;
    }
    .btnwrap {
        margin: 0.5rem 0 0.5rem 0.5rem;
        display: flex;
        flex-flow: row wrap;
    }
</style>
