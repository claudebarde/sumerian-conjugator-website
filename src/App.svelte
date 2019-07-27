<script>
  import Header from "./components/Header.svelte";
  import Body from "./components/body/Body.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Overpass&display=swap");

  .grid {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 7% 89% 4%;
  }
</style>

<div class="grid">
  <Header />
  <Body />
  <Footer />
</div>
