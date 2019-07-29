<script>
  //import "../node_modules/materialize-css/dist/css/materialize.min.css";
  //import "../node_modules/materialize-css/dist/js/materialize.min.js";

  import Header from "./components/Header.svelte";
  import Body from "./components/body/Body.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Overpass&display=swap");

  .grid {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 7% 89% 4%;
  }

  @media only screen and (min-device-width: 300px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    .grid {
      height: 100%;
      width: 100%;
      display: block;
      overflow: auto;
    }
  }
</style>

<div class="grid">
  <Header />
  <Body />
  <Footer />
</div>
