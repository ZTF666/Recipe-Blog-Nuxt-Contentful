<template>
 <v-container app  >
   <v-card-title class="justify-center ma-10 ztf--text"> <h1 class="wb">My Fancy Recipes</h1> </v-card-title>
    <v-row justify="space-around">
      <v-card width="330" v-for="(post,index) in data" :key="index" class="ma-5" color="ztff">
        <v-img height="200px" :src="post.fields.thumbnail.fields.file.url"  >
          <v-app-bar flat color="transparent" dense >
          </v-app-bar>
        </v-img>
        <v-card-actions class="justify-center">
            <v-toolbar-title class="text--h6 zztf--text">
             <h5>{{post.fields.title}}</h5>
            </v-toolbar-title>
        </v-card-actions>
        <v-card-actions >
        <v-spacer></v-spacer>
          <v-btn text nuxt :to="'/recipes/'+post.fields.slug" class="zztf--text">Cook It !</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
  import {createClient} from '~/plugins/contentful.js'
  const client = createClient()
  export default {
      data(){
          return{ data:[] }
      },
        async fetch(){
            const res = await client.getEntries({content_type:"recipe"})
            this.data=res.items
        },
      head() {
    const baseTitle = '🌮'
    return {
      meta: [
        { hid: 'description', name: 'description', content: 'Recipe Blog Home Page 🌮 ' }
      ],
      htmlAttrs: { lang: 'en', amp: true },
      title: 'Home',
      titleTemplate(title) {
        return `${title} - ${baseTitle}`
      }
    }
  },
  }
</script>
<style scoped>
.wb{
  word-break: normal;
}
</style>