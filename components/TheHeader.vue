<template>
    <menu>
        <li>
            <NuxtLink to="/">
                <picture>
                    <source srcset="/imgs/logo-200w.png" media="(min-width: 576px)" width="200" height="80" />
                    <img src="/imgs/logo-100w.png" alt="Bruno Lamps' portfolio" width="100" height="40" />
                </picture>
            </NuxtLink>
        </li>
        <li>
            <NuxtLink to="/apps">Apps</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
    </menu>
</template>
<style scoped>
menu {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: space-evenly;
    background: gray;
    border-radius: 0 0 1rem 1rem;
    margin-top: 0;
}

@media screen and (orientation: landscape) {
    menu {
        flex-direction: column;
        border-radius: 0 1rem 1rem 0;
    }
}
</style>