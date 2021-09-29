<template>
  <v-layout>
    <v-flex class="text-center scrollz">
      <img src="https://ztf-shop.web.app/9.png" alt="avatar" width="350"  />
        
      <center>
        <p>
          Hello There , I'm a software engineer with a lot of time to waste .
        </p>
        <p>I'm a web fanatic , hobbyist game developer and JAMstack lover😊.</p>
        <p>My Work is available on github or portfolio if you're interested</p>
        <button
          type="button"
          class="btn btn-outline-dark btn-sm"
          onclick="window.open('https://github.com/ztf666')"
        >
          <img
            src="https://maxcdn.icons8.com/Share/icon/nolan/logos/github1600.png"
            width="40"
            height="40"
            alt="github"
          />
        </button>
        <button
          type="button"
          class="btn btn-outline-dark btn-sm"
          onclick="window.open('https://ztfportfolio.web.app')"
        >
          <img
            src="https://ztf-shop.web.app/9.png"
            width="40"
            height="40"
            alt="portfolio"
          />
        </button>
        <p>I'm open for work, as a freelancer or full time</p>
        <p>Thank you for visiting.</p>
      </center>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  head: {
    title: ' About Me page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'About me  page',
      },
    ],
  },
}
</script>
