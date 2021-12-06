<!-- ------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE VIEW HOME
------------------------------------------------------------------------------- -->

<template>
    <div class="blankpage">
        <Header></Header>
    </div>
</template>

<script>
    import Header from '../components/Header'
    export default {
        name: 'Home',
        components: { Header },
        data: function () {
            return {}
        }
    }
</script>

<style lang="scss">
    @import "../assets/css/variables";
    .blankpage {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }
</style>
