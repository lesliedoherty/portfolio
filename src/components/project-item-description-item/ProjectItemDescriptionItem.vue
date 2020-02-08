<template>
  <div :class="'project_item--content__' + label" class="project_item--content-wrap">
  <h6 :id="'project_' + label + '_' + id">{{ label }} </h6>
        <p>{{ content }}</p>
    </div>
</template>

<script src='./index.js'></script>
