<!-- ------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE VIEW HOME
------------------------------------------------------------------------------- -->

<template>
    <div class="fullview">
        <Header />
        <div class="wrapper">
            <h1 class="pagetitle mv1000">FORUM DES PUBLICATIONS</h1>
            <FormulateInput
                type="button"
                label="ajouter une nouvelle publication"
                @click="linknewpub()"
            />
            <Pubcard v-for="item in pubList" v-bind:pubRow="item" :key="item.id"></Pubcard>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header'
    import Pubcard from '../components/Pubcard'
    import { mapState } from 'vuex'
    export default {
        name: 'Home',
        components: { Header, Pubcard },
        data: function () {
            return {
                pubList: [],
            }
        },
        computed: {
            ...mapState({
                currentUser: state => state.user.userLogged
            }),
        },
        beforeMount() {
            this.getPubs();
        },
        methods: {
            linknewpub() {
                localStorage.setItem('nav', 0);
                this.$router.push('/home/pubnew');
            },
            async getPubs() {
                const optionsFetch = {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + this.currentUser.token,
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify({
                        userId: this.currentUser.id
                    }),
                };
                const url = 'http://localhost:3000/api/pubs/0';
                return fetch( url, optionsFetch )
                    .then( res => {
                        if(res.ok) {
                            res.json()
                                .then( data => {
                                    this.pubList = data.publist;
                                });
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
</style>
