<template>
    <section class="parent">
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
        <div class="break"><h1>Contact</h1></div>
        <article class="container">
            <header>
                <h1>Contact Component</h1>
                <p>Section layout will depend on parent. <code>class="contact"</code> will set the width and layout on the landing page. Without the contact container, form responds as seen:</p>
            </header>
            <div class="container">
                <contact></contact>
            </div>
        </article>
        <div class="break"><h1>Animations</h1></div>

        <article class="container">
            <header>
                <h1>iPad Animated Background</h1>
            </header>
            <div class="component_usage">
                <p>Based on the animation property in the media object. I <a href="https://github.com/lesliedoherty/portfolio/commit/853a10b4fcda03f7322ae8d0f145a181dd4a64ac">decided</a> to make use of <code>transform: rotateZ(360deg)</code> to use the GPU power more than the CPU since it was running high at ~40% in Chrome.
                </p>
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
            <project-tablet
                    image="/static/docs/scrollingEx.png"
            ></project-tablet>
        </div>
        <div class="break"><h1>Hero Component* Needs review</h1></div>

        <article class="container">
            <header>
                <h1>Hero Component</h1>
                <p>Originally had two backgrounds I couldn't decide between: </p>
            </header>
            <div class="component_usage">
                <p>Based on the class used when embedding the component.</p>
                <p>Pass in the following when used to see the picture from Wales (used above the router view so on all pages at the top):
                    <code>
                        class="wales"
                    </code>
                </p>
                <p>I used a dark background placeholder for the swing photo for now:
                    <code>
                        class="bc"
                    </code>
                </p>
                <p>Or for the Old Photo Of Me:
                    <code>
                        class="default"
                    </code>
                </p>
            </div>
        </article>
        <hero
                heroClass="bc"
        ></hero>
        <hero
                heroClass="default"
        >
        </hero>
        <div class="break"><h1>Project Item Loop</h1></div>
        <project-item
                parentClass="use-block"
        ></project-item>


    </section>
</template>

<script src='./index.js'></script>
<style lang="sass" scoped>
    @import './../../../assets/sass/portfolio/components/styleguide-scoped.sass';
</style>
