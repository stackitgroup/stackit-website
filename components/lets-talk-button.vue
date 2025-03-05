<template>
  <div ref="buttonContainer" />
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: 'https://calendar.google.com/calendar/scheduling-button-script.js',
          async: true,
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://calendar.google.com/calendar/scheduling-button-script.css',
        },
      ],
    }
  },
  mounted() {
    const target = this.$refs.buttonContainer

    // Ensure the script has loaded before trying to use it
    if (window.calendar && window.calendar.schedulingButton) {
      this.loadSchedulingButton(target)
    } else {
      // Polling mechanism to wait for the script to load
      const interval = setInterval(() => {
        if (window.calendar && window.calendar.schedulingButton) {
          clearInterval(interval)
          this.loadSchedulingButton(target)
        }
      }, 100)
    }
  },
  methods: {
    loadSchedulingButton(target) {
      // @TODO: Change this URL when changing the account
      window.calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1aae0zdRTd-lEcOTIb2Nzzm3ews0vtXPOwD6P6TuU8WkNQOwN_dS9liDCEYLsId3ql3pixtUCK?gv=true',
        color: '#016fce',
        label: "Let's Talk",
        target,
      })

      this.$nextTick(() => {
        const button = target.querySelector('.gcb-scheduling-button')
        if (button) {
          button.classList.add('btn-main')
        }
      })
    },
  },
}
</script>

<style>
@import '../styles/global.scss';
</style>
