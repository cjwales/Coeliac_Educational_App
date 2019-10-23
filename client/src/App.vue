<template>
  <div class="background">

    <h1 class="title">COELIAC AWARENESS</h1>
    <p class="tagline">EMPOWERING YOU TO MAKE AN EDUCATED CHOICE !</p>

    <div class="app">
        <navigation/>
    </div>

    <div class="footer">
      <footer>
        <ul class="podcasts">
          <p>Podcasts</p>
          <li><a href="https://podcasts.apple.com/us/podcast/celiac-straight-talk/id1223772536?mt=2">Celiac Striaght Talk</a></li>
          <li><a href="https://podcasts.apple.com/gb/podcast/oh-crumbs-the-gluten-free-podcast/id1471572662">Oh Crumbs</a></li>
          <li><a href="https://podcasts.google.com/?feed=aHR0cHM6Ly90cmF2ZWxnbHV0ZW5mcmVlLmxpYnN5bi5jb20vcnNz&hl=en-GB">Travel Gluten Free</a></li>
        </ul>

        <ul class="freebies">
          <p>Freebies</p>
          <li><a href="https://www.glutafin.co.uk/">Glutafin</a></li>
          <li><a href="https://www.juvela.co.uk/coeliac-disease/just-diagnosed">Juvela</a></li>
        </ul>

        <ul class="information">
          <p>Extra Inforamtion</p>
          <li><a href="https://www.nhs.uk/conditions/coeliac-disease/">NHS</a></li>
          <li><a href="https://www.coeliac.org.uk/home/">Coeliac UK</a></li>
        </ul>

      </footer>

    </div>

  </div>

</template>

<script>
import RestaurantsList from './components/RestaurantsList.vue'
import RestaurantForm from './components/RestaurantForm.vue'
import Navigation from './components/Navigation.vue'



export default {
  name: 'app',
  components:{
    // 'restaurants-List': RestaurantsList,
    // 'restaurant-form': RestaurantForm,
    'navigation': Navigation
  }
}
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.background {
  /* background-image: url("./assets/background.jpg"); */
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

h1, h2, h3, p, a {
  font-family: 'Oswald', sans-serif;
}

h1 {
  font-size: 50px;
  font-weight: 700;
  padding-top: 40px;
  padding-bottom: 20px;
  padding-left: 40px;
}

p {
  font-size: 28px;
  font-weight: 300;
  padding-left:40px;
}

footer {
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #424953;
  margin-top: 100px;
  padding-top: 30px;
  padding-bottom: 35px;
}

a {
  color: black;
  display: flex;
  justify-content: center;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:visited {
  color: black;
}

ul {
  padding: 0px;
  list-style: none;
}

li {
  padding-top: 7px;

}

.information p {
  text-decoration: underline;
  padding: 0px;
}

.podcasts p {
  text-decoration: underline;
  padding: 0px;
  display: flex;
  justify-content: center;
}

.freebies p {
  text-decoration: underline;
  padding: 0px;
}

</style>
