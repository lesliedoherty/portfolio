<template>
  <div class="field">
    <div class="control">
      <div class="select is-primary">
        <select @change="heroChanged" v-bind:value="activeHero">
          <option v-for="(class, id) in heroClass" v-bind:value="id">{{hero.class}}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script src='./index.js'></script>
