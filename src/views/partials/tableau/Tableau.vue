<template>
    <section class="parent">
        <article class="container">
            <header>
                <h1>{{ msg }}</h1>
            </header>

            <div :id="vizDiv" style="width:800px; height:700px;"></div>
        </article>
    </section>
</template>


<script src='./index.js'></script>
<style lang="sass" scoped>
    @import './../../../assets/sass/portfolio/components/sandbox-scoped.sass';
</style>
