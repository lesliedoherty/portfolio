<template>
  <div class="field">
    <div class="control">
      <div class="select is-primary">
        <select @change="sourceChanged">
          <option v-for="source in sources" v-bind:value="source.id">{{source.name}}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script src='./index.js'></script>
