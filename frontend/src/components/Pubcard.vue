<!-- ------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE COMPONENT PUBLICATION CARD
------------------------------------------------------------------------------- -->

<template>
    <a class="card pubrow" href="#">
        <p class="user">Publié par {{pubRow.userId}} le {{pubRow.createat}}</p>
        <h2>{{pubRow.title}}</h2>
        <p class="message">{{pubRow.description}}</p>
    </a>
</template>

<script>
    export default {
        name: 'Pubcard',
        data: function () {
            return {}
        },
        props: {
            pubRow: {
                id: Number,
                userId: Number,
                title: String,
                description: String,
                photo: String,
                createat: Date,
                updateat: Date
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/css/variables";
    .pubrow {
        margin: 0.4rem 1rem;
        padding: 0.4rem;
        text-decoration: none;
    }
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
