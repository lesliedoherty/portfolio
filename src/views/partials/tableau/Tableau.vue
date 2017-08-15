<template>
    <section class="parent tableau">
        <article class="container">
            <header>
                <h1>{{ msg }}</h1>
            </header>
            <ul class="tableau__list" v-if="items && items.length">
                <li class="columns tableau__list--item" v-for="item of items">
                    <div class="column is-2 is-offset-1">
                        <a :href="'https://www.tableau.com/' + item.url">
                            <img :src="item['tile-path'].src" />
                        </a>
                    </div>
                    <div class="column is-7">
                    <h2>{{ item.title }}</h2>
                    <aside class="tableau__list--aside">
                        <a :href="'https://www.tableau.com/' + item.url">Read Article</a>
                        Tag: <span v-html="item.tags"></span>
                    </aside>
                    </div>
                </li>
            </ul>

            <ul v-if="errors && errors.length">
                <li v-for="error of errors">
                    {{error.message}}
                </li>
            </ul>

        </article>
    </section>
</template>


<script src='./index.js'></script>
<style lang="sass" scoped>
    @import './../../../assets/sass/portfolio/scoped/tableau.sass';
</style>
