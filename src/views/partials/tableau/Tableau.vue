<template>
    <section class="parent">
        <table v-for="item in term_map">
            <tr v-for="language in item.languages">
                {{ language.name }}
                    <th>
                        <tr v-for="term in item.terms">
                             <th>{{ term.name }}</th>
                             <th><a :href="item.urlPrefix + language.shortCode + term.url">{{item.urlPrefix }}{{ language.shortCode }}{{ term.url }}</a></th>
                        </tr>
                    </th>
            </tr>
        </table>
    </section>
</template>


<script src='./index.js'></script>
