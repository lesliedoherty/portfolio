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
        <div class="styleguide__break"><h1>Colors</h1></div>
        <article class="container">
            <header>
                <h1>Color Variables</h1>
                <p>Note the background color and invert color used for text.</p>
            </header>

            <colors></colors>
        </article>

        <div class="styleguide__break"><h1>Contact</h1></div>
        <article class="container">
            <header>
                <h1>Contact Component</h1>
                <p>Section layout will depend on parent. <code>class="contact"</code> will set the width and layout on the landing page. Without the contact container, form responds as seen:</p>
            </header>
            <div class="container">
                <contact></contact>
            </div>
        </article>
        <div class="styleguide__break"><h1>Animations</h1></div>

        <article class="container">
            <header>
                <h1>iPad Animated Background**</h1>
                <p>Revisiting this: CSS Keyframe is a crab.</p>
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
            <!--<project-tablet-->
                    <!--image="/static/docs/scrollingEx.png"-->
            <!--&gt;</project-tablet>-->
        </div>
        <div class="styleguide__break"><h1>Hero Component* Needs review</h1></div>

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
        <div class="styleguide__break"><h1>Project Item Layouts</h1></div>

        <article id="layouts" class="container">
            <header>
                <h1>Layout Classes</h1>
            </header>
            <div class="component_usage">
                <p>Classes are passed in with the data for each project as part of the JSON Schema for projectItem. The following classes and results are available and demonstrated:</p>
            </div>
            <aside>
                <h2>Select A Source</h2>
                <select-source
                        v-bind:activeSource="activeSource"
                        v-bind:sources="sources"
                        v-on:source-changed="onSourceChanged"
                ></select-source>
            </aside>
        </article>
        <project-items v-bind:projects="projects"></project-items>
        <div class="styleguide__break"><h1>In Progress</h1></div>

        <article class="container">
            <header>
                <h1>Testing Hero Backgrounds</h1>
                <h2>IN PROGRESS</h2>
            </header>

            <p>Pick a class to change the hero background.<br />
                <small>Coming Soon: Write up of vue and styleguides to help clients and designers visualize in the browser like this.</small></p>
            <p>For other cool stuff that you can do with a styleguide, check out the <a href="#layouts" v-smooth-scroll="{ duration: 3500}">Layout Options</a></p>
            <div class="control">
                <label class="radio" for="one">From June 2017 in <a href="https://goo.gl/maps/U85xFTNvxgn">Langland Bay</a>
                    <input type="radio" id="one" value="wales" v-model="heroWrapperClass">
                </label>
            </div>

            <div class="control">
                <label class="radio" for="two">My son as a toddler on a hill
                    <input type="radio" id="two" value="bc" v-model="heroWrapperClass">
                </label>
            </div>


            <h3>You're viewing: {{ heroWrapperClass }}</h3>

        </article>

        <article class="container">
            <header>
                <h1>TABS</h1>
                <h2>IN PROGRESS: TBD</h2>
            </header>
            <h4 id="tab-items">Items to do:</h4>
            <ul aria-labelledby="tab-items">
                <li>Create For Loop for tab headers and icon classes</li>
                <li>Add slots for content</li>
                <li>Hook up json data for content</li>
            </ul>
            <tabs></tabs>
        </article>
    </section>
</template>

<script src='./index.js'></script>
<style lang="sass" scoped>
    @import './../../../assets/sass/portfolio/components/styleguide-scoped.sass';
</style>
