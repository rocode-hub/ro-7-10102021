<!-- ------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE VIEW COMPTE UTILISATEUR
------------------------------------------------------------------------------- -->

<template>
    <div class="fullview">
        <Header></Header>
        <FormulateForm
            class="wrapper mt1000"
            id="newpubform"
            v-model="formValues"
            name="newpub"
        >
            <div class="card">
                <h1 class="formtitle">{{formtitle}}</h1>
                <FormulateInput class="m1000"
                    autofocus
                    type="email"
                    name="email"
                    label="Login"
                    placeholder="adresse mail"
                    help="le format du login est une adresse mail"
                    validation="email"
                    :validation-messages="{
                        email: `Le login n'est pas une adresse email valide.`
                    }"
                />
                <FormulateInput v-if="changepwd" class="m1000"
                    type="password"
                    name="pwd"
                    label="Mot de passe"
                    placeholder="mot de passe"
                    help="min. 8 car. ( a-z, A-Z, 0-9,  et 1 car spécial !@_#%& )"
                    title="Le mot de passe doit contenir au mininum 8 caractères avec au moins une lettre minuscule, une lettre majuscule, un chiffre et un des caractères spéciaux suivants !@_#%"
                    validation="pwdlength|pwdcar"
                    :validation-rules="{
                        pwdlength: ({ value }) => new RegExp(`(?=.{8,})`).test(value),
                        pwdcar: ({ value }) => new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@_#%])(?=.{8,})`).test(value)
                    }"
                    :validation-messages="{
                        pwdlength: `Le mot de passe doit avoir au moins 8 caractères.`,
                        pwdcar: `Le mot de passe ne respecte pas les règles.`
                    }"
                />
                <FormulateInput v-if="changepwd" class="m1000"
                    type="password"
                    name="pwdconfirm"
                    label="Confirmation du mot de passe"
                    placeholder="confirmation mot de passe"
                    title="Le mot de passe doit contenir au mininum 8 caractères avec au moins une lettre minuscule, une lettre majuscule, un chiffre et un des caractères spéciaux suivants !@_#%"
                    :validation-messages="{
                        required: `Vous devez saisir un mot de passe.`,
                    }"
                />
                <FormulateInput class="m1000" 
                    type="checkbox"
                    name="isadmin"
                    label="administrateur"
                    :disabled="!inputadmin"
                />
                <div class="btnwrap">
                    <FormulateInput class="btnmg"
                        type="button"
                        label="enregistrer"
                    />
                    <FormulateInput v-if="!changepwd" class="btnmg"
                        type="button"
                        label="modifier le mot de passe"
                        @click="showInputPwd()"
                    />
                </div>
                <div class="btnwrap">
                    <FormulateInput v-if="(this.id > 1)" class="btnmg"
                        type="button"
                        label="supprimer le compte"
                        @click="delUser()"
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
        </FormulateForm>
    </div>
</template>

<script>
    import Header from '../components/Header'
    import { mapState } from 'vuex'
    export default {
        name: 'Account',
        components: { Header },
        props: {
            id: Number
        },
        data: function () {
            return {
                changepwd: false,
                formValues:  {
                    id: 0,
                    email: '',
                    isadmin: 0
                }
            }
        },
        computed: {
            ...mapState({
                currentUser: state => state.user.userLogged
            }),
            formtitle() {
                return (localStorage.nav == 2) ? 'MON COMPTE' : 'ADMINISTRATION D\'UN COMPTE UTILISATEUR';
            },
            inputadmin() {
                return ((this.id > 1) && (this.currentUser.isadmin)) ? true : false;
            }
        },
        beforeMount() {
            this.getUser();
        },
        methods: {
            showInputPwd() {
                this.changepwd = true;
            },
            async getUser() {
                const optionsFetch = {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + this.currentUser.token,
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify({
                        id: this.id,
                        userId: this.currentUser.id
                    }),
                };
                const url = 'http://localhost:3000/api/users/' + JSON.parse(optionsFetch.body).id;
                return fetch( url, optionsFetch )
                    .then( res => {
                        if(res.ok) {
                            res.json()
                                .then( data => {
                                    this.formValues = data.userlist[0];
                                });
                        }
                    })
                    .catch( err => {
                        console.log(err);
                        alert( 'Erreur interne. La requête n\'a pas aboutie.\n'
                             + 'Veuillez réessayer s\'il vous plaît.');
                   })
            },
            async delUser() {
                if (confirm('Est-ce que vous confirmez la suppression de ce compte utilisateur ?')) {
                    const optionsFetch = {
                        method: 'DELETE',
                        headers: {
                            'Authorization': 'Bearer ' + this.currentUser.token,
                            'Content-Type': 'application/json; charset=UTF-8'
                        },
                        body: JSON.stringify({
                            id: this.id,
                            userId: this.currentUser.id
                        }),
                    };
                    const url = 'http://localhost:3000/api/users/' + JSON.parse(optionsFetch.body).id;
                    return fetch( url, optionsFetch )
                        .then( res => {
                            if(res.ok) {
                                if (this.id == this.currentUser.id ) {
                                    this.$store.dispatch('RESETSTATE')
                                        .then( () => {
                                            localStorage.clear();
                                            this.$router.push('/')
                                                .then( () => {
                                                    this.$router.go();
                                                })
                                        })
                                } else {
                                    localStorage.setItem('nav', 3);
                                    this.$router.push('/admin');
                                }
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
