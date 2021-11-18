<!-- ------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE LOGIN
------------------------------------------------------------------------------- -->

<template>
    <FormulateForm
        name="login"
        @submit="clickLogin"
    >
        <div class="headlogo">
            <img src="../assets/pics/icon-above-font.svg" />
        </div>
        <div class="titleapp">
            réseau  social  intern<span>e</span>
        </div>
        <div class="titlewin">
            <p v-if="mode === 1">CONNEXION</p>
            <p v-else>CREATION DE COMPTE</p>
        </div>
        <FormulateInput
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
        <FormulateInput v-if="mode === 0"
            type="password"
            name="confirmpwd"
            placeholder="confirmation mot de passe"
            title="Le mot de passe doit contenir au mininum 8 caractères avec au moins une lettre minuscule, une lettre majuscule, un chiffre et un des caractères spéciaux suivants !@_#%"
            :validation-messages="{
                required: `Vous devez saisir un mot de passe.`,
            }"
        />
        <div class="button">
            <a class="btnlink" v-if="mode === 1" href="javascript:alert('Un email vous a été envoyé avec un nouveau mot de passe.')">mot de passe oublié ?</a>
            <FormulateInput v-if="mode === 1"
                type="submit"
                label="je me connecte"
            />
            <FormulateInput v-else
                type="submit"
                label="je crée mon compte"
            />
            <span class="btnlink" v-if="mode === 1" @click="switchToCreateAccount()">créer un compte</span>
            <span class="btnlink" v-else @click="switchToLogin()">je me connecte avec un compte existant</span>
        </div>
    </FormulateForm>
</template>

<script>

    //import { mapState } from 'vuex'
    export default {
        name: 'Login',
        data: function () {
            return {
                mode: 1,        // mode : 1 connexion / 0 create account
                email: '',
                password: '',
            }
        },
        methods: {
           switchToCreateAccount: function () {
                this.mode = 0;
            },
            switchToLogin: function () {
                this.mode = 1;
            },
            clickLogin: function() {
                if (this.mode === 1) {
                    console.log('step 1');
                    this.$store.dispatch("LOGIN", {
                        email: this.email,
                        pwd: this.password
                    })
                    .then(success => {
                        success;
                        this.$router.push('')
                    })
                    .catch(error => {
                        error;
                        this.error = true;
                    })     
                    window.location.reload('true');
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/css/variables";
    
    .headlogo {
        max-width: 300px;
        max-height: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-y: hidden;
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
        color: $color-gpmania-text-secondary;
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
        color: $color-gpmania-text-secondary;
        text-decoration: underline;
        cursor: pointer;
        margin-bottom: 1rem;
    }
</style>
