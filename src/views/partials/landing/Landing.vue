<template>
  <div id="content">
    <section id="mission" class="featured background-purple">
      <header class="container global_title--section-main">
        <h3 data-anchor-id="mission" class="anchor global_subtitle upper">Mission</h3>
      </header>
      <article class="container padding-top__none">
        <p>I prefer to work in a collaborative environment with a team that shares a purpose. My career has always
          centered around empowering people, even as I pursued a masters degree and career in tech. I believe it is possible to obtain both by pursuing a career in accessibility.</p>
        <blockquote>By putting accessibility first, we not only produce better code, but find a purpose for doing so.</blockquote>
      <p>My mission is to join with others who want more out of a career. I partner with people who combine corporate priorities
      with the people that support them, who seek to empower users of all abilities, and who choose compassion over competition. If you are looking for someone like me, <a
          v-smooth-scroll="{ duration: 4000}" href="#contact">I'd love to chat.</a></p>
      </article>
    </section>
    <section id="projects">
      <div class="background-indigo">
        <header class="container global_title--section-main">
          <h3 data-anchor-id="projects" class="anchor upper global_subtitle soft-gray">Recent Projects</h3>
        </header>
      </div>
    <project-items v-bind:projects="projects"></project-items>
    </section>
    <section id="contact" class="contact">
      <div class="background-purple">
        <header class="container global_title--section-main">
          <h3 data-anchor-id="contact" class="anchor global_subtitle upper">Get In Touch</h3>
        </header>
        <article class="container padding-top__none">
          <ul class="contact_links">
            <li>
              <a class="contact_links--item" href="https://github.com/lesliedoherty" target="_blank">
              Github <span class="sr-only">link takes you to new page.</span>
              </a>
            </li>
            <li>
              <a class="contact_links--item" href="https://www.linkedin.com/in/leslied/" target="_blank">
              LinkedIn <span class="sr-only"> link takes you to a new page.</span>
              </a>
            </li>
            <li>
              <a class="contact_links--item" href="https://twitter.com/mrsflinger" target="_blank">
              Twitter <span class="sr-only"> link takes you to a new page with the twitter profile for @mrsflinger.</span>
              </a>
            </li>
            <li>
              <a class="contact_links--item" href="https://instagram.com/mrsflinger" target="_blank">
              Instagram <span class="sr-only">Link takes you to a new page.</span>
              </a>
            </li>
          </ul>
          <p>I'll be incorporating a static contact form here shortly. For now, I apologize for the links to reach me elsewhere.</p>
        </article>
      </div>
    </section>
  </div>
</template>

<script src="./index.js"></script>
