<!-- ------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE APP
------------------------------------------------------------------------------- -->

<template>
    <div class="nothing">
        <h1>Data clear vue</h1>
    </div>
</template>

<script>
    export default {
        name: 'Dataclear',
        data: function () {
            return {}
        },
        beforeCreate() {
            if (localStorage.nav != undefined) {
                localStorage.clear();
                this.$store.dispatch('RESETSTATE');
            }
        },
    }
</script>

<style lang="scss">
    .nothing {
        opacity: 0;
    }
</style>
