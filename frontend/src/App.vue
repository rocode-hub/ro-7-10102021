<template>
    <router-view/>
</template>

<script>
    export default {
        name: 'App',
        components: {}
    }
</script>

<style lang="scss">

    @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;400;700&display=swap');
    @import "./variables.scss";

    * {
        font-family: 'M PLUS Rounded 1c', Helvetica, Arial, sans-serif;
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    #app {
        background: #FFF;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

</style>
