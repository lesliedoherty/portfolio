<template>
  <section class="hero" :class="modifier_class">
    <div :id="curtainId">
      <div class="hero__content" :style="{ 'background-image': 'url(' + background + ')' }">
        <div class="hero__content-inner" :class="container">
            <p v-if="eyebrow" class="hero__eyebrow">
              {{ eyebrow }}
            </p>
            <h1 v-if="title" class="hero__title">
              {{ title }}
            </h1>
            <h5 v-if="subtitle" class="hero__subtitle">
              {{ subtitle }}
            </h5>

            <div v-if="content" class="hero__extra-content">
              {{ content }}
            </div>
        </div>
      </div>
    </div>
      <template v-if="revealHelper">
      {{revealHelper}}
      </template>
  </section>
</template>

<script src='./index.js'></script>
