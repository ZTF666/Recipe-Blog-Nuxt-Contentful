<template>
<v-container app>
    <v-card-title class="justify-center ma-10 ztf--text"> <h1 class="wb">My Fancy Recipes</h1> </v-card-title>
    <v-row justify="space-around">
  <v-card class="mx-auto my-12 bg1" max-width="330" v-for="(post,index) in data" :key="index">
    <v-img
      height="250"
      :src="post.fields.thumbnail.fields.file.url"
    ></v-img>
    <v-card-title class="justify-center zztf--text text--h6">
       <h5>{{post.fields.title}}</h5> 
        </v-card-title>
    <v-card-text justify-center>
    <v-chip color="ztf" class="zztf--text">{{post.fields.cookingTime}} Mins</v-chip>
      <div class="mt-2 zztf--text">
          {{(post.fields.method.content[0].content[0].value).slice(0,50)}}...
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-actions>  
      <v-spacer></v-spacer>
      <v-btn color="zztf" nuxt :to="'/recipes/'+post.fields.slug" text >
        Read More 🍜
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
    </v-row>
</v-container>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
  const client = createClient()
export default {
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
 data: () => ({
      loading: false,
      selection: 1,
      data:[] 
    }),
    async fetch(){
    const res = await client.getEntries({content_type:"recipe"})
    this.data=res.items
        },
}
</script>

<style scoped>
.wb{
  word-break: normal;
}
</style>