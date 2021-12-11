<!-- ------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE COMPONENT USER CARD
------------------------------------------------------------------------------- -->

<template>
    <div class="card">
        <p class="userlogin">{{userRow.email}} - {{userAdmin}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Pubcard',
        props: {
            userRow: {
                id: Number,
                email: String,
                isadmin: Boolean
            }
        },
        data: function () {
            return {}
        },
        computed: {
            userAdmin: function () {
                return (this.userRow.isadmin) ? 'administrateur' : '';
            }
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
