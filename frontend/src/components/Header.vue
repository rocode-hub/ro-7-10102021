<!-- ------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE COMPONENT HEADER
------------------------------------------------------------------------------- -->

<template>
    <header class="headband">
        <div class="wrapper">
            <div class="logo">
                <a href="#">
                    <img src="../assets/pics/icon-left-font.svg" />
                </a>
            </div>
            <nav>
                <input type="checkbox" class="switch">
                <div class="hamburger"></div>
                <ul class="menu">
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Compte</a></li>
                    <li><a href="#">Administration</a></li>
                    <li><a href="#">Déconnexion</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data: function () {
            return {}
        }
    }
</script>

<style lang="scss">
    @import "../assets/css/variables";
    header {
        width: 100%;
        height: 56px;
        display: flex;
        justify-content: center;
        margin-bottom: 0.5rem;
        box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12),0px 2px 4px -1px rgba(0,0,0,0.2);
    }
    .wrapper {
        position: relative;
        width: 980px;
        min-width: 300px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;
        transition: 0.3s;
    }
    .nav {
        height: 80px;
        text-decoration: none;
        list-style: none;
    }
    .logo {
        overflow: hidden;
        a {
            display: block;
            img {
                display: block;
                width: 256px;
                margin-top: -6.5rem;
                margin-left: -2rem;
                margin-bottom: -6.5rem;
            }
        }
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        input:checked {
            ~ .hamburger {
                background: transparent;
                &:before {
                    top: 0;
                    transform: rotate(-45deg);
                }
                &:after {
                    top: 0;
                    transform: rotate(45deg);
                }
            }
            ~ .menu {
                right: 0;
                box-shadow: -4px 0px 5px 0px rgba(0,0,0,0.14),-1px 0px 10px 0px rgba(0,0,0,0.12),-2px 0px 4px -1px rgba(0,0,0,0.2);
            }
        }
    }
    .menu {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        z-index: 1;
        li {
            list-style-type: none;
            a {
                color: $color-gpmania-text-secondary;
                text-decoration: none;
                display: block;
                padding: 20px 20px;
                font-size: 1rem;
                line-height: 1;
                transition: 0.3s;
                &:hover {
                    box-shadow: 0 -4px 0 $color-gpmania-primary inset,
                    500px 0 0 $color-gpmania-secondary inset;
                    padding: 17px 20px 23px 20px;
                }
            }
        }
    }
    .hamburger {
        position: relative;
        width: 30px;
        height: 4px;
        background: $color-gpmania-text-secondary;
        border-radius: 10px;
        cursor: pointer;
        z-index: 2;
        transition: 0.3s;
        &:before,
        &:after {
            content: "";
            position: absolute;
            right: 0;
            height: 4px;
            background: $color-gpmania-text-secondary;
            border-radius: 10px;
            transition: 0.3s;
        }
        &:before {
            top: -8px;
            width: 30px;
        }
        &:after {
            top: 8px;
            width: 30px;
        }
    }
    .switch {
        position: absolute;
        width: 30px;
        height: 100%;
        z-index: 3;
        cursor: pointer;
        opacity: 0;

    }
    .hamburger,
    .switch {
        display: none;
    }
    @media screen and (max-width: 688px) {
        .wrapper {
            padding-right: 1rem;
        }
        .hamburger,
        .switch {
            display: block;
        }
        .menu {
            justify-content: start;
            flex-direction: column;
            align-items: center;
            background: #fff;
            position: fixed;
            top: 0;
            right: -200px;
            width: 200px;
            height: 100%;
            padding-top: 56px;
            transition: 0.5s;
            li {
                width: 100%;
                a {
                    text-align: right;
                    padding: 20px;
                    box-shadow: 0 1px 0 rgba(0,0,0,0.12) inset;
                }
            }
        }
    }
</style>
