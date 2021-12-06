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
        data: function () {
            return {}
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
    @import '../node_modules/@braid/vue-formulate/themes/snow/snow.scss';
    @import "../src/assets/css/variables";
    
    * {
        margin:0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        animation: fadeIn ease 600ms;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    #app {
        height: 100%;
        width: 100%;
        min-width: 300px;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        color: $color-gpmania-text-primary;
        background: $color-gpmania-back-primary;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
