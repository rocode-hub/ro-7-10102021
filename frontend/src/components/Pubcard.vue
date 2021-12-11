<!-- ------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE COMPONENT PUBLICATION CARD
------------------------------------------------------------------------------- -->

<template>
    <div class="card">
        <p class="user">Publié par user le date à heure</p>
        <h2>Titre</h2>
        <p class="message">Voici écrit ici le message que l'utilisateur peut rajouter</p>
    </div>
</template>

<script>
    export default {
        name: 'Pubcard',
        data: function () {
            return {}
        },
        props: {
            
        }

    }
</script>

<style lang="scss">
    @import "../assets/css/variables";
    .user {
        font-size: 0.7rem;
        font-style: italic;
        color: $color-gpmania-back-tertiary;
    }
    .message {
        width: 100%;
        padding: 0.4rem;
        font-size: 0.9rem;
        background: $color-gpmania-back-secondary;
        border-radius: 0.2rem;
    }
</style>
