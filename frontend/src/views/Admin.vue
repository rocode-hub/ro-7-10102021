<!-- ------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE VIEW PUBLICATION NEW
------------------------------------------------------------------------------- -->

<template>
    <div class="fullview">
        <Header/>
        <div class="wrapper mt1000">
            <div class="card">
                <h1 class="formtitle">ADMINISTRATION - GESTION DES UTILISATEURS</h1>
                <UserCard v-for="item in userList" v-bind:userRow="item" :key="item.id"></UserCard>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header'
    import UserCard from '../components/Usercard'
    import { mapState } from 'vuex'
    export default {
        name: 'Admin',
        components: { Header, UserCard },
        data: function () {
            return {
                userList: [],
            }
        },
        computed: {
            ...mapState({
                currentUser: state => state.user.userLogged
            }),
        },
        beforeMount() {
            this.getUsers();
        },
        methods: {
            async getUsers() {
                const optionsFetch = {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + this.currentUser.token,
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify({
                        id: 0,
                        userId: this.currentUser.id
                    }),
                };
                const url = 'http://localhost:3000/api/users/' + JSON.parse(optionsFetch.body).id;
                return fetch( url, optionsFetch )
                    .then( res => {
                        if(res.ok) {
                            res.json()
                                .then( data => {
                                    this.userList = data.userlist;
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
