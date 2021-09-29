<template>
    <v-row justify="center">
          <v-card color="ztff" dark  v-for="(post,index) in data" :key="index" class="mt-5 mb-5 ma-5" max-width="320">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h6 zztf--text hidden-xs-only"  v-text="(post.fields.title).slice(0,10)+'...'" ></v-card-title>
                <!-- <v-card-subtitle v-text="item.date" class="zztf--text hidden-xs-only"></v-card-subtitle> -->
                <br class="hidden-sm-and-up">
                <br class="hidden-sm-and-up">
                <v-card-actions class="zztf--text justify-center">
                  <v-btn class="ml-2 mt-5 zztf--text" outlined  rounded  small nuxt :to="'/recipes/'+post.fields.slug">
                    Read 
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar  class="ma-3" size="125" tile >
                <v-img :src="post.fields.thumbnail.fields.file.url"></v-img>
              </v-avatar>
            </div>
          </v-card>
    </v-row>
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
            const array = (res.items).slice(0,2)
            this.data=array
        }
  }
</script>