<template>
    <section class="container">
        <article class="columns">
            <div class="column">
                <p class="notification is-info">First column</p>
            </div>
            <div class="column">
                <p class="notification is-success">Second column</p>
            </div>
            <div class="column">
                <p class="notification is-warning">Third column</p>
            </div>
            <div class="column">
                <p class="notification is-danger">Fourth column</p>
            </div>
        </article>
        <article id="grid" class="example-fill columns is-multiline">
        <div class="column is-three-quarters">
        <p><code class="html">is-three-quarters</code></p>
        </div>
        <div class="column">
        <p>Auto</p>
        </div>
        <div class="column">
        <p>Auto</p>
        </div>
        <div class="column is-10 is-offset-1">
        <p><code>is-10 is-offset-1</code></p>
        </div>
        </article>
        <article id="offsetEx" class="example-fill columns">
        <div class="column is-half is-offset-one-quarter">
        <p><code>is-half is-offset-one-quarter</code></p>
        </div>
        </article>
        <article class="example-fill columns">
        <div class="column is-4 is-offset-8">
        <p><code>is-4 is-offset-8</code></p>
        </div>
        </article>
        <article id="multiline" class="example-fill columns">
        <div class="column is-one-quarter">
        <p><code>is-one-quarte</code></p>
        </div>
        <div class="column is-one-quarter">
        <p><code>is-one-quarter</code></p>
        </div>
        <div class="column is-one-quarter">
        <p><code>is-one-quarter</code></p>
        </div>
        <div class="column is-one-quarter">
        <p><code>is-one-quarter</code></p>
        </div>
        </article>


        <article class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification is-primary">
                            <p class="title">Vertical...</p>
                            <p class="subtitle">Top tile</p>
                        </article>
                        <article class="tile is-child notification is-warning">
                            <p class="title">...tiles</p>
                            <p class="subtitle">Bottom tile</p>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-info">
                            <p class="title">Middle tile</p>
                            <p class="subtitle">With an image</p>
                            <figure class="image is-4by3">
                                <img src="http://bulma.io/images/placeholders/640x480.png">
                            </figure>
                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-danger">
                        <p class="title">Wide tile</p>
                        <p class="subtitle">Aligned with the right tile</p>
                        <div class="content">
                            <!-- Content -->
                        </div>
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification is-success">
                    <div class="content">
                        <p class="title">Tall tile</p>
                        <p class="subtitle">With even more content</p>
                        <div class="content">
                            <!-- Content -->
                        </div>
                    </div>
                </article>
            </div>
        </article>

    </section>
</template>

<script src='./index.js'></script>
