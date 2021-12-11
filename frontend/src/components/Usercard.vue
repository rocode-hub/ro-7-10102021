<!-- ------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE COMPONENT USER CARD
------------------------------------------------------------------------------- -->

<template>
    <a class="row" href="#" @click="goAccount()">
        <p class="rowcol1">{{userRow.email}}</p>
        <p class="rowcol2">{{userAdmin}}</p>
    </a>
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
                return (this.userRow.isadmin) ? 'admin' : '';
            }
        },
        methods: {
            goAccount() {
                localStorage.setItem('nav', 0);
                this.$router.push({name: 'account', params: { id: this.userRow.id }} );
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/css/variables";
    .row {
        color: $color-gpmania-text-primary;
        margin: 0.4rem 1rem;
        padding: 0.4rem;
        background: $color-gpmania-back-secondary;
        display: flex;
        flex-direction: row;
        justify-content: right;
        text-decoration: none;
        &:hover {
            background: $color-gpmania-secondary;
        }
    }
    .rowcol1 {
        font-weight: 500;
        font-style: italic;
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .rowcol2 {
        width: 60px;
        color: $color-gpmania-tertiary;
        text-align: end;
    }
</style>
