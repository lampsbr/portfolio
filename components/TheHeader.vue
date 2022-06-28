<template>
    <menu>
        <li><img src="/imgs/square-logo-250.png" alt="Bruno Lamps' portfolio" /></li>
        <li>title</li>
        <li>Apps</li>
        <li>Contact</li>
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