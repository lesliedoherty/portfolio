<template>
  <lists>
    <h2>French</h2>
    <ul><li>
      Term: Getting Started.
      Url: .....

    </li></ul>
    <ul v-for="language in Languages">
      <li>{{ language.name }}
          <ul>
            <li>{{ language.term }}: {{ language.urls.start }}{{ language.shortCode }}{{ language.urls.end }}</li>
              <ul>
                <li>

                </li>
              </ul>
          </ul>
      </li>
    </ul>
  </lists>
</template>

<script src='./index.js'></script>
