<script setup lang="ts">
    import { Icon } from '@iconify/vue';
    import { SideBarProps } from '../interfaces';

    const props=defineProps<SideBarProps>();
</script>

<template>
    <aside :class="`${props.isExpanded ? 'aside-visible' : ''}`">
        <button @click="$emit('closeSideBar')" class="close-menu" id="close-menu">
            <Icon icon="material-symbols:close-rounded" width="36" height="36" />
        </button>
        <header>
            <h1 class="logo">PokeApp</h1>
        </header>

        <nav>
            <ul class="menu">
                <li>
                    <router-link to="/team" 
                        class="boton-menu boton-carrito"
                        activeClass="active"
                    >
                        <Icon icon="mdi:arrow-left-bold-box" width="36" height="36" />
                        Volver a Teams
                        <span id="numerito" class="numerito">0</span>
                    </router-link>
                </li>
            </ul>
        </nav>
        <div>
            <p class="texto-footer">© 2024 Jonathan Monroy</p>
        </div>
    </aside>
</template>

<style lang="scss">
    @use "../assets/scss/components/sideBar.scss";
</style>

