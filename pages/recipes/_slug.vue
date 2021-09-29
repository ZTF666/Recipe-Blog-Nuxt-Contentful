<template>
  <v-main class="dark" style="margin-top: -5vh">
    <v-container>
      <v-row>
        <v-col>
          <v-sheet min-height="70vh" rounded="lg" class="bg1">
            <div>
              <br />
              <center>
                <!-- desktop -->
                <v-img
                 :src="'https:'+data[0].fields.thumbnail.fields.file.url"
                  max-height="30%"
                  max-width="30%"
                  contain
                  class="hidden-xs-only"
                />
                <!-- mobile -->
                <v-img
                 :src="'https:'+data[0].fields.thumbnail.fields.file.url"
                  max-height="100%"
                  max-width="100%"
                  contain
                  class="hidden-sm-and-up"
                />
              </center>
              <br />
              <br />
              <div class="mx-10">
                <v-card-title>
                <v-spacer></v-spacer>
                <h4><p class="ztf--text wb">{{data[0].fields.title}}</p></h4>
                <v-spacer></v-spacer>
                </v-card-title>
                <v-card-title class="justify-center">
                <h5> <p class="ztf--text wb">{{(ingredients)}}</p> </h5>
                </v-card-title>
                <hr class="zztf" /><br />
                <article class="wb">
                {{data[0].fields.method.content[0].content[0].value}}
                </article>
                <br />
                 <hr class="zztf" />
                <v-card-actions class="justify-center">
                  <v-btn text nuxt to="/" class="zztf--text mt-5 wb"><h1>Go Back 🔙</h1> </v-btn>
                </v-card-actions>
                <v-card-title class="zztf--text justify-center wb">Latest Posts</v-card-title>
                <LatestPosts />
                <br>
              </div>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()
  export default {
      data(){
          return{ ingredients:[] }
      },
 async asyncData({params}){
     const post = await client.getEntries({content_type:"recipe",'fields.slug':params.slug})
     const data = post.items
     return {data}
 },
  head() {
    const baseTitle = '🌮'
    return {
      meta: [
        { hid: 'description', name: 'description', content: this.data[0].fields.title }
      ],
      htmlAttrs: { lang: 'en', amp: true },
      title: this.data[0].fields.title,
      titleTemplate(title) {
        return `${title} - ${baseTitle}`
      }
    }
  },
 created(){
    //  i macgyver'd the fuck out of this , so yeah see you in r/programing horror lmao
     this.ingredients=(this.data[0].fields.ingedients).map(ing=>(ing)).toString().replace(/,/g,' - ')
 }
  }
</script>
<style scoped>
.wb{
  word-break: normal;
}
</style>