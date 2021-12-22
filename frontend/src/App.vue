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
    .fade {
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
        min-height: 100vh;
        width: 100vw;
        min-width: 300px;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        color: $color-gpmania-text-primary;
        background: $color-gpmania-back-primary;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        justify-content: center;
    }
    .fullview {
        width: 100vw;
        height: 100vh;
        background: $color-gpmania-back-secondary;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .wrapper {
        width: 100%;
        max-width: 980px;
        min-width: 300px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .m1000 {
        margin: 1rem;
    }
    .mt1000 {
        margin-top: 1rem;
    }
    .pagetitle {
        width: 96%;
        margin: 1rem 0;
        padding: 0 1rem 0.2rem;
        border-bottom: 1px solid $color-gpmania-text-primary;
    }
    .formtitle {
        padding: 0 1rem 0.2rem;
        border-bottom: 1px solid $color-gpmania-text-primary;
        margin: 1rem;
    }
    h1 {
        font-size: 1.1rem;
        font-weight: normal;
        color: $color-gpmania-text-primary;
    }
    h2 {
        font-size: 1.2rem;
        margin: 0.4rem 0;
        color: $color-gpmania-primary;
    }
    .card {
        width: 90%;
        margin: 0 auto;
        padding: 0.4rem;
        background: $color-gpmania-back-primary;
        border: 1px solid gainsboro;
        border-radius: 0.2rem;
    }

</style>
