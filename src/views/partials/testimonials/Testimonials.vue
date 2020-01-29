<template>
    <section class="parent project_item--display-testimony">
        <article class="container">
            <header>
                <h1>{{ msg }}</h1>
            </header>
            <ul v-if="items && items.length">
                <li v-for="item of items">
                    <!-- todo loop if there are more than a single testimonial per item -->
                    <template v-if="item.testimonial[0].quote">
                        <h2>{{ item.client }}</h2>
                        <project-testimonial
                                :id="item.id"
                                :link="item.testimonial[0].link"
                                :quote="item.testimonial[0].quote"
                                :name="item.testimonial[0].name"
                                :role="item.testimonial[0].role"
                        ></project-testimonial>
                    </template>
                    <template v-else="!item.testimonial[0].quote"></template>
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


<script
        src='./index.js'></script>
<style lang="sass" scoped>
    @import './../../../assets/sass/portfolio/components/linkedin-testimonials.sass';
</style>
