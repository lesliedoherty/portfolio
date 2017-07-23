<template>
    <section>
        <article class="container">
            <header>
                <h1>{{ msg }}</h1>
                <p>A little insight in to "How I Work". These are components rendered on the same page for easy reference.
                    Bonus! Quick UI check at breakpoints for the entire site in one place.</p>
            </header>
            <div id="typography" class="container">

                <h1 id="headings">Headings</h1>

                <h1>h1. Heading</h1>
                <h2>h2. Heading</h2>
                <h3>h3. Heading</h3>
                <h4>h4. Heading</h4>
                <h5>h5. Heading</h5>

                <h1 id="paragraph">Paragraph</h1>

                <p>Lorem ipsum dolor sit amet, <a href="#" title="test link">test link</a> adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p>

                <p>Lorem ipsum dolor sit amet, <em>emphasis</em> consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p>
            </div>
        </article>
        <article class="container">
            <header>
                <h1>Example Usages of Components</h1>
                <h2>iPad Animated Background</h2>
            </header>
            <div class="component_usage">
                <p>Based on the animation property in the media object. Example Below:</p>
                <p>The conditional is used inside the for project loop.
                    <code>
                    v-if="project.media.animation"
                    </code>
                </p>
                <p>Next we evaluate the kind of animation frame we are using:
                    <code>
                        v-if="project.media.animation.frame === 'iPad'
                    </code>
                </p>
                <p>Finally we pass the correct props to the component:
                    <code>
                        :image="project.media.animation.image"
                    </code>
                </p>
            </div>
        </article>
            <div class="container animation--iPad">
            <project-ipad
                image="/static/docs/scrollingEx.png"
            ></project-ipad>
             </div>
        <hero></hero>
        <grid></grid>
        <project-item></project-item>
    </section>
</template>

<script src='./index.js'></script>
<style lang="sass" scoped>
    @import './../../../assets/sass/portfolio/components/styleguide-scoped.sass';
</style>
