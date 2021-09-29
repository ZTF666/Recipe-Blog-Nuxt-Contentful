# My Recipes Blog 🌮

<div align="center">
A take on contentful headless CMS with a Nuxt frontend .
 
<p>This is made using :</p>
<img src="https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg" alt="nuxtjs" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/AliasIO/wappalyzer/master/src/drivers/webextension/images/icons/Contentful.svg" alt="Contentful cms" width="40" height="40"/>
<img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" alt="vuejs" width="40" height="40"/>
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FV%2Fvuetify-logo-3BCF73C928-seeklogo.com.png&f=1&nofb=1" alt="vuetifyjs" width="40" height="40"/>
</div>

<div align="center">
<img src="/assets/homepage.png" alt="nuxtjs"/>

</div>

## Contentful Config

<div align="center">
Create a .env file in your project , and get your space_id and accesstoken from your contentful settings.  
<p>The .env file structure should be as following : </p>
</div>

```
SPACE = YOUR_SPACE_ID
TOKEN = YOUR_ACCESS_TOKEN
```

<div align="center">
<p> As for the CONTENT MODEL , the one i'm using on this project is the following :</p>
<img src="/assets/contentmodel.png" alt="vuetifyjs" />

</div>

## Additional Config/Tweak

<div align="center">
The component that shows the latest recipes is called LatestPosts .The number of visible posts can be changed to your liking since i'm using slice() on the array of recipes and they are already sorted by creation date , so tweak the ...slice(0,2) to whatever amount of posts you'd want to show .
</div>

```javascript
   async fetch(){
            const res = await client.getEntries({content_type:"recipe"})
            const array = (res.items).slice(0,YOUR_NUMBER_GOES_HERE)
            this.data=array
        }
```

## Disclaimer

<div align="center">
 <p> i am aware of my unconventional ways of doing things , so try to fix what you think should be done better and good luck .</p>
</div>

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

# Contact

<div align="center">
<p>you can contact me at ZTF666@protonmail.ch or via my portfolio</p>

</div>

<div align="center">
<table>
  <tr>
    <td align="center"><a href="https://ztfportfolio.web.app/" target='_blank'><img src="https://avatars1.githubusercontent.com/u/32502988?v=4" width="100px;" alt=""/><br /><sub><b>ZTF666</b></sub></a></td>
  </tr>
</table>

</div>

## License

<div align="center">

**My Recipes Blog 🌮**
released under the [MIT](LICENSE) License.
<br><br>

<strong><p>Made with 💜 by ZTF - N.EA | 2021 </p> </strong>

</div>
