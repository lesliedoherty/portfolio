<template>
    <div class="project_item--testimonial-wrapper">
        <blockquote :key="id" :cite="link" class="project_item--testimonial">
            {{ quote }}
            <cite>
                <span class="testimonial_name">{{ name }}</span>
                <span class="testimonial_role">{{ role }}</span>
            </cite>
        </blockquote>
    </div>
</template>

<script src='./index.js'></script>
