<template>
  <v-app dark>
    <AppBar />
    <v-main class="bg1">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer fixed app color="black" >
      <span class="zztf--text">&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer></v-spacer>
        <v-img
        alt="Vuetify Logo"
        class="shrink mr-2 img"
        contain
        :src="logo"
        transition="scale-transition"
        width="25"
        dense
        :lazy-src="logo"
      />
      <v-spacer></v-spacer>
      Made by &nbsp;<a href="https://ztfportfolio.web.app/" target="_blank" class="zztf--text">ZTF</a>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      fixed: false,
      logo:'https://ztf-shop.web.app/9.png',
    }
  }
}
</script>
<style >
.bg {
 background: rgb(32,5,41);
background: -moz-linear-gradient(0deg, rgba(32,5,41,1) 0%, rgba(53,240,180,1) 100%);
background: -webkit-linear-gradient(0deg, rgba(32,5,41,1) 0%, rgba(53,240,180,1) 100%);
background: linear-gradient(0deg, rgba(32,5,41,1) 0%, rgba(53,240,180,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#200529",endColorstr="#35f0b4",GradientType=1);  
}
.bg1{
 background: rgb(0,0,0);
background: -moz-linear-gradient(4deg, rgba(0,0,0,1) 0%, rgba(32,207,246,1) 100%);
background: -webkit-linear-gradient(4deg, rgba(0,0,0,1) 0%, rgba(32,207,246,1) 100%);
background: linear-gradient(4deg, rgba(0,0,0,1) 0%, rgba(32,207,246,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#20cff6",GradientType=1); 
}
</style>