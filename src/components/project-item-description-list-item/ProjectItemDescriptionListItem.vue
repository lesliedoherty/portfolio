<template>
    <div class="project_item--description">
        <dt :id="'project_' + label + '_' + id">{{ label }} :</dt>
        <dd :aria-labelledby="'project_' + label + '_' + id">{{ content }}</dd>
    </div>
</template>

<script src='./index.js'></script>
