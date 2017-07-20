<template>
    <section>
        <header>
            <h1>{{ msg }}</h1>
            <p>A little insight in to "How I Work". These are components rendered on the same page for easy reference.
                Bonus! Quick UI check at breakpoints for the entire site in one place.</p>
        </header>
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


                <article id="forms">



                </article>
        <article id="grid">
            <header>Default Grid Example</header>
        <div class="columns">
          <div class="column is-three-quarters">
            <p class="notification is-info">
              <code class="html">is-three-quarters</code>
            </p>
          </div>
          <div class="column">
            <p class="notification is-warning">Auto</p>
          </div>
          <div class="column">
            <p class="notification is-danger">Auto</p>
          </div>
        </div>

        <div class="columns">
          <div class="column is-two-thirds">
            <p class="notification is-info">
              <code class="html">is-two-thirds</code>
            </p>
          </div>
          <div class="column">
            <p class="notification is-warning">Auto</p>
          </div>
          <div class="column">
            <p class="notification is-danger">Auto</p>
          </div>
        </div>

        <div class="columns">
          <div class="column is-half">
            <p class="notification is-info">
              <code class="html">is-half</code>
            </p>
          </div>
          <div class="column">
            <p class="notification is-warning">Auto</p>
          </div>
          <div class="column">
            <p class="notification is-danger">Auto</p>
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-third">
            <p class="notification is-info">
              <code class="html">is-one-third</code>
            </p>
          </div>
          <div class="column">
            <p class="notification is-success">Auto</p>
          </div>
          <div class="column">
            <p class="notification is-warning">Auto</p>
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-quarter">
            <p class="notification is-info">
              <code class="html">is-one-quarter</code>
            </p>
          </div>
          <div class="column">
            <p class="notification is-success">Auto</p>
          </div>
        </div>
        </article>
        <article id="offsetEx">
            <header>
                <h1>Offsets</h1>
            </header>
            <div class="columns">
              <div class="column notification is-warning is-half is-offset-one-quarter">
                  <code>is-half is-offset-one-quarter</code>
              </div>
            </div>

            <div class="columns is-mobile">
              <div class="column is-4 is-offset-8">
                  <code>is-4 is-offset-8</code>
              </div>
            </div>

            <div class="columns is-mobile">
              <div class="column is-11 is-offset-1"></div>
            </div>
        </article>
        <article id="multiline">
            <header>
                <h1>We will come back to this</h1>
            </header>

            <div class="columns is-multiline is-mobile">
              <div class="column notification is-info is-one-quarter">
                <code>is-one-quarter</code>
              </div>
              <div class="notification column is-one-quarter">
                <code>is-one-quarter</code>
              </div>
              <div class="column is-one-quarter">
                <code>is-one-quarter</code>
              </div>
              <div class="column is-one-quarter">
                <code>is-one-quarter</code>
              </div>
              <div class="column is-half">
                <code>is-half</code>
              </div>
              <div class="column is-one-quarter">
                <code>is-one-quarter</code>
              </div>
              <div class="column is-one-quarter">
                <code>is-one-quarter</code>
              </div>
              <div class="column notification is-info">
                Auto
              </div>
            </div>
        </article>

      <project-item>

      </project-item>

    </section>
</template>

<script src='./partials/styleguide/index.js'></script>

