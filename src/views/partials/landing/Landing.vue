<template>
  <div id="content">
    <section id="a11y" class="project_item">
      <header class="container global_title--section-main">
        <h2 class="h1 global_subtitle">Accessibility Experience</h2>
      </header>
      <article class="container">
      <p>In my most recent position as a web developer at Tableau, I established an accessibility program for our
        marketing website. I've been working with product teams looking to integrate end to end testing as well as
        reporting progress regularly to executive stakeholders. I wrote about <a href="http://bit.ly/bringing-a11y" target="_blank">bringing accessibility to Tableau <span class="sr-only">opens a new window</span> </a> and how <a href="http://bit.ly/tableau-a11y" target="_blank">I used Tableau to
          accomplish these goals <span class="sr-only">opens a new window</span></a>.</p>
        <p>As an ongoing pursuit for transparency, <a href="https://github.com/lesliedoherty/portfolio/issues" target="blank">I created github issues for accessibility errors <span class="sr-only"> link opens in a new window</span></a> on this portfolio.
          You can submit an issue or <a href="#contact" v-smooth-scroll>contact me <span class="sr-only">link scrolls to bottom</span> </a> with any concerns or trouble you have accessing information here.
          I'm committed to quality and will continue to work towards WCAGAA compliance on every website I have the authority to.
        </p>
      </article>
    </section>
    <section id="projects">
    <header class="container global_title--section-main">
      <h2 class="h1 global_subtitle">Projects</h2>
    </header>
    <project-items v-bind:projects="projects"></project-items>
    </section>

  </div>
</template>

<script src="./index.js"></script>
