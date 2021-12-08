<!-- ------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE VIEW LOGIN
------------------------------------------------------------------------------- -->

<template>
    <FormulateForm
        id="loginform"
        name="login"
        v-model="valuesLogin"
        @submit="clickLogin"
    >
        <div class="headlogo">
            <img src="../assets/pics/icon-above-font.svg" />
        </div>
        <div class="titleapp">
            réseau  social  intern<span>e</span>
        </div>
        <div class="titlewin">
            <p v-if="startMode">CONNEXION</p>
            <p v-else>CREATION DE COMPTE</p>
        </div>
        <FormulateInput
            autofocus
            type="email"
            name="email"
            placeholder="login"
            help="le format du login est une adresse mail"
            validation="^required|email"
            :validation-messages="{
                required: `Vous devez saisir un login.`,
                email: `Le login n'est pas une adresse email valide.`
            }"
        />
        <FormulateInput
            type="password"
            name="pwd"
            placeholder="mot de passe"
            help="min. 8 car. ( a-z, A-Z, 0-9,  et 1 car spécial !@_#%& )"
            title="Le mot de passe doit contenir au mininum 8 caractères avec au moins une lettre minuscule, une lettre majuscule, un chiffre et un des caractères spéciaux suivants !@_#%"
            validation="^required|pwdlength|pwdcar"
            :validation-rules="{
                pwdlength: ({ value }) => new RegExp(`(?=.{8,})`).test(value),
                pwdcar: ({ value }) => new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@_#%])(?=.{8,})`).test(value)
            }"
            :validation-messages="{
                required: `Vous devez saisir un mot de passe.`,
                pwdlength: `Le mot de passe doit avoir au moins 8 caractères.`,
                pwdcar: `Le mot de passe ne respecte pas les règles.`
            }"
        />
        <FormulateInput v-if="!startMode"
            type="password"
            name="pwdconfirm"
            placeholder="confirmation mot de passe"
            title="Le mot de passe doit contenir au mininum 8 caractères avec au moins une lettre minuscule, une lettre majuscule, un chiffre et un des caractères spéciaux suivants !@_#%"
            :validation-messages="{
                required: `Vous devez saisir un mot de passe.`,
            }"
        />
        <div class="button">
            <a class="btnlink" v-if="startMode" href="javascript:alert('Un email vous a été envoyé avec un nouveau mot de passe.')">mot de passe oublié ?</a>
            <FormulateInput v-if="startMode"
                type="submit"
                label="je me connecte"
            />
            <FormulateInput v-else
                type="submit"
                label="je crée mon compte"
            />
            <span class="btnlink" v-if="startMode" @click="switchToCreateAccount()">créer un compte</span>
            <span class="btnlink" v-else @click="switchToLogin()">je me connecte avec un compte existant</span>
        </div>
    </FormulateForm>
</template>

<script>

    export default {
        name: 'Login',
        data: function () {
            return {
                startMode: true,        // mode : true connexion / false create account
                valuesLogin: {
                    email: '',
                    pwd: '',
                    pwdconfirm:'',
                }
            }
        },
        methods: {
           switchToCreateAccount() {
                this.startMode = false;
            },
            switchToLogin() {
                this.startMode = true;
            },
            clickLogin() {
                if (!this.startMode && !(this.valuesLogin.pwd === this.valuesLogin.pwdconfirm)) {
                    alert( 'Les mots de passe saisis sont différents !');
                    return;
                }
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
                return this.$store.dispatch('LOGSIGN', optionsFetch)
                    .then ( response => {
                        if ( response.status === 200 ) {
                            if (this.startMode) {
                                this.$router.push('/home');
                            } else {
                                alert('Le compte est créé.\n'
                                    + 'Vous allez recevoir un mail de confirmation.\n'
                                    + 'Vous pouvez dès à présent vous connecter.'); 
                                window.location.reload('true');
                           } 
                        }
                    })
                    .catch ( err => {
                        if ( err === 400 ) {
                            alert( 'Un compte avec ce login existe déjà !' );
                        } else if ( err === 401 ) {
                            alert( 'Les identifiants saisis sont invalides' );
                        } else {
                            alert('Erreur interne. La requête n\'a pas aboutie.\n'
                                + 'Veuillez réessayer s\'il vous plaît.');
                        }
                        window.location.reload('true');
                    })
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/css/variables";
    #loginform {
        width: 300px;
        display: flex;
        flex-direction: column;
    }
    .headlogo {
        margin-top: -3rem;
        margin-bottom: -4rem;
    }
    .titleapp {
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: .4rem;
        text-align: center;
        border-bottom: 1px solid $color-gpmania-back-secondary;
        span {
            letter-spacing: initial;
        }
    }
    .titlewin {
        min-width: 300px;
        margin-top: 1rem;
        margin-bottom: 1rem;
        color: $color-gpmania-text-primary;
        font-size: 1.4rem;
        font-weight: 700;
        line-height: 3rem;
        text-align: center;
    }
    .button {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .btnlink {
        font-size: 0.7rem;
        color: $color-gpmania-text-primary;
        text-decoration: underline;
        cursor: pointer;
        margin-bottom: 1rem;
    }
</style>
