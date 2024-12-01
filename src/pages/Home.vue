<script setup lang="ts">
    import { ref } from 'vue'
    import { Icon } from '@iconify/vue';

    const is_expanded = ref(localStorage.getItem("is_expanded") === "true")


    const ToggleMenu = () => {
	    is_expanded.value = !is_expanded.value
	    localStorage.setItem("is_expanded", (is_expanded.value).toString())
    }
</script>

<template>
    <div class="wrapper">

        <header class="header-mobile">
            <h1 class="logo">PokeApp</h1>
            <button @click="ToggleMenu" class="open-menu" id="open-menu">
                <Icon icon="material-symbols:menu-rounded" width="36" height="36" />
            </button>
        </header>
        
        <aside :class="`${is_expanded ? 'aside-visible' : ''}`">
            <button @click="ToggleMenu" class="close-menu" id="close-menu">
                <Icon icon="material-symbols:close-rounded" width="36" height="36" />
            </button>
            <header>
                <h1 class="logo">PokeApp</h1>
            </header>

            <nav>
                <ul class="menu">
                    <li>
                        <button id="todos" class="boton-menu active"><Icon icon="material-symbols:home-outline" width="36" height="36" />Principal</button>
                    </li>
                    <li>
                        <a class="boton-menu boton-carrito" href="#">
                            <Icon icon="healthicons:heart-outline" width="36" height="36" /> Teams <span id="numerito" class="numerito">0</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
        <main>
            <h2 class="title" id="title">Lista Pokemones</h2>
            <div id="container" class="container">
            </div>
        </main>
     </div>
</template>

<style lang="scss">
    @use "../assets/scss/pages/home";
</style>

