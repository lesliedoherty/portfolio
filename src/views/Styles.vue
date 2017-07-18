<template>
    <section>
        <header>
            <h1>{{ msg }}</h1>
            <p>A little insight in to "How I Work". These are components rendered on the same page for easy reference.
                Bonus! Quick UI check at breakpoints for the entire site in one place.</p>
        </header>
        <v-layout row wrap>
            <v-flex xs5>
                <article id="typography">

                    <h1 id="headings">Headings</h1>

                    <h1>h1. Heading</h1>
                    <h2>h2. Heading</h2>
                    <h3>h3. Heading</h3>
                    <h4>h4. Heading</h4>
                    <h5>h5. Heading</h5>
                    <h6>h6. Heading</h6>


                    <h1 id="paragraph">Paragraph</h1>

                    <p>Lorem ipsum dolor sit amet, <a href="#" title="test link">test link</a> adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p>

                    <p>Lorem ipsum dolor sit amet, <em>emphasis</em> consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p>

                </article>
            </v-flex>
            <v-flex xs5 offset-xs1>

                <article id="forms">



                </article>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12>
                <v-layout>
                  <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                      <v-card-media
                        class="white--text"
                        height="200px"
                        src="/static/docs/ex1.jpeg"
                      >
                        <v-container fill-height fluid>
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                              <span class="headline">Top 10 Australian beaches</span>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-media>
                      <v-card-title>
                        <div>
                          <span class="grey--text">Number 10</span><br>
                          <span>Whitehaven Beach</span><br>
                          <span>Whitsunday Island, Whitsunday Islands</span>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat class="orange--text">Share</v-btn>
                        <v-btn flat class="orange--text">Explore</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>

    </section>
</template>

<script src='./partials/styleguide/index.js'></script>

