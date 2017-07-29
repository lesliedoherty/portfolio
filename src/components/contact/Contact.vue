<template>
  <div class="contact_form--group">
    <vue-form v-if="finished === false" class="contact_form" :state="formstate" @submit.prevent="onSubmit">

      <validate auto-label class="field" :class="fieldClassName(formstate.name)">
        <label class="label" label-for="name">Name</label>
        <div class="control">
          <input class="input" id="name" type="text" name="name" placeholder="Hello! My name is" required v-model="model.name">
        </div>
        <field-messages auto-label name="name" show="$touched || $submitted" class="form-control-feedback">
          <div>Nice to meet you, {{ model.name }}</div>
          <div slot="required">Let me know how to address you.</div>
        </field-messages>
      </validate>


      <validate auto-label class="field" :class="fieldClassName(formstate._replyto)">
        <label class="label" label-for="email">Email</label>
        <div class="control">
          <input id="email" class="input" type="email" placeholder="Email" name="_replyto" required v-model="model._replyto" >
        </div>
        <field-messages auto-label name="_replyto" show="$touched || $submitted" class="form-control-feedback">
          <div slot="required">Email is a required field</div>
          <div slot="email">Email is not valid</div>
        </field-messages>
      </validate>


      <validate auto-label class="field">
        <label class="label" label-for="message">Message</label>
        <div class="control">
          <textarea id="message" class="textarea" name="message" placeholder="What can I do for you?" v-model="model.message"></textarea>
        </div>
      </validate>

      <input type="text" name="_gotcha" style="display:none" />

      <div class="field">
        <div class="control">
          <button class="button is-large is-outlined is-primary">Say Hello</button>
        </div>
      </div>

    </vue-form>
    <div v-if="finished === true" class="contact_form-finished">
      <h3>Thank you for your mail.</h3>
      <p>You should hear back within 24 hours. While you wait, here's a great clip to demonstrate the famous Edison Quote, “I have not failed. I've just found 10,000 ways that won't work.”</p>
      <p>Let's work together and discover the 10,001<sup>st</sup> way that works. I'm looking forward to it.</p>
      <div class="video-container">
        <iframe width="853px" height="480px" src="https://www.youtube.com/embed/Awf45u6zrP0" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script src='./index.js'></script>
