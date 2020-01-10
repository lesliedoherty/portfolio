<template>
    <div class="ipad" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
        <img src="/static/base/ipad-frame.png" :alt="'iPad with ' + name + ' image on the screen.'" />
    </div>
</template>

<script src='./index.js'></script>
