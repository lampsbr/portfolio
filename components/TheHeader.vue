<template>
    <menu>
        <li>logo</li>
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
}

@media screen and (orientation: landscape) {
    menu {
        flex-direction: column;
    }
}
</style>