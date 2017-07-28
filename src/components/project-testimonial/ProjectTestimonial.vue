<template>
    <div class="project_item--testimonial-wrapper">
        <blockquote :key="id" :cite="link" class="project_item--testimonial">
            {{ quote }}
            <cite>{{ name }}</cite>
        </blockquote>
    </div>
</template>

<script src='./index.js'></script>
