<template>
    <div class="macbook" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
        <img src="/static/base/macbook-frame.png" :alt="'Macbook with image of ' + name + '.'" />
    </div>
</template>

<script src='./index.js'></script>
