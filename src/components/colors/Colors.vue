<template>
    <article id="colors" class="columns is-multiline">
        <div v-for="color in colorVars" class="column is-4">
        <div class="colors" :class="'is-' + color.name">
            <h2>{{ color.name }}</h2>
            <p>Variable: <code class="html">{{ color.var }}</code></p>
            <p>Invert: <code class="html">{{ color.invert }}</code></p>

        </div>
        </div>
    </article>
</template>

<script src='./index.js'></script>
<style lang="sass" scoped>
    @import './../../assets/sass/portfolio/components/colors.sass'
</style>
