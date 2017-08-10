<template>
    <section class="parent">
        <article class="container">
            <header>
                <h1>{{ msg }}</h1>
            </header>
            <p>I've been playing with your software and I think I've found my happy spot. I might love data visualization more than my children. I'm kidding, of course. The best thing in the world is gathering data on your children and then showing them how often they forget to feed the dog. Graphs are the new parenting tactic.</p>
            <p>I'm using vue for my portfolio and got the tableu api set up but I have an error that google was very unhelpful with. </p>
            <p><code>"Viz resize limit hit. The calculated iframe size did not stabilize after 10 resizes."</code></p>
            <p>I believe it's something about the canvas / object / vue something or other. I'll revisit this shortly. In the mean time, here's a downloaded image of the data I played with and a link to the public worksheet. I plan on doing much, much more with this.</p>
            <p><a href="https://public.tableau.com/views/Technologies_0/Sheet1?:embed=y&:display_count=yes&publish=yes"><img src="/static/base/tableauTech.png" alt="DATA Visualization is The Most Fun" /></a></p>
        </article>
        <!-- come back to this <div :id="vizDiv" style="width: 800px; height: 800px;"></div> -->
    </section>
</template>


<script src='./index.js'></script>
<style lang="sass" scoped>
    @import './../../../assets/sass/portfolio/components/sandbox-scoped.sass';
</style>
