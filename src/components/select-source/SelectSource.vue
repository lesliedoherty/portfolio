<template>
  <div class="field">
    <div class="control">
      <div class="select is-primary">
        <select @change="sourceChanged" v-bind:value="activeSource">
          <option v-for="(source, id) in sources" v-bind:value="id">{{source.name}}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script src='./index.js'></script>
