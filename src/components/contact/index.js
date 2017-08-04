var options = {
  inputClasses: {
    valid: 'is-success',
    invalid: 'is-danger'
  }
};
import VueForm from 'vue-form'
import jQuery from 'jquery'
export default {
  name: 'contact',
  mixins: [new VueForm(options)],
  data () {
    return {
      formstate: {},
      finished: false,
      model: {
        name: '',
        _replyto: '',
        message: '',
        _subject: 'You\'ve Got Mail!'
      }
    }
  },
  methods: {
    fieldClassName: function (field) {
      if (!field) {
        return '';
      }
      if ((field.$touched || field.$submitted) && field.$valid) {
        return 'has-success';
      }
      if ((field.$touched || field.$submitted) && field.$invalid) {
        return 'has-danger';
      }
    },
    onSubmit: function () {
      var host = 'https://formspree.io/leslie@catapultwebdevelopment.com';
      if (this.formstate.$invalid) {
        // alert user and exit early
        console.log('uhoh');
      }
      else {
        // otherwise submit form
        var postData = this.model;
        jQuery.ajax({
          url: host,
          method: "POST",
          data: postData,
          dataType: "json",
          success: function (data) {
            this.finished = true;

          }.bind(this),
          error: function (err) {
            console.log('reply error ' + err)
          },
          complete: function (jqXHR, status) {
          }
        })
      }
    }
  }
}