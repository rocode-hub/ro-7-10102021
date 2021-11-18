<!-- ------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE APP
------------------------------------------------------------------------------- -->

<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {}
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
    @import '../node_modules/@braid/vue-formulate/themes/snow/snow.scss';
    @import "../src/assets/css/variables";
    
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    #app {
        height: 100%;
        width: 100%;
        min-width: 320px;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        color: $color-gpmania-text-primary;
        background: $color-gpmania-back-primary;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }
</style>
