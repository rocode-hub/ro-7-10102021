<!-- ------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE VIEW HOME
------------------------------------------------------------------------------- -->

<template>
    <div class="fullview">
        <Header></Header>
        <div class="wrapper">
            <h1 class="pagetitle mv1000">FORUM DES PUBLICATIONS</h1>
            <FormulateInput
                type="button"
                label="ajouter une nouvelle publication"
                @click="linknewpub()"
            />
            <Pubcard></Pubcard>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header'
    import Pubcard from '../components/Pubcard'
    export default {
        name: 'Home',
        components: { Header, Pubcard },
        data: function () {
            return {}
        },
        methods: {
            linknewpub() {
                localStorage.setItem('nav', 0);
                this.$router.push('/home/pubnew');
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/css/variables";
    h1 {
        font-size: 1.2rem;
    }
</style>
