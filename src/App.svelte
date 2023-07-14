<script>
  import { Router, Link, Route } from "svelte-routing";
  import GeneratorWattage from './pages/GeneratorWattage.svelte';

  export let url;
</script>

<Router {url}>
  <nav>
    <Link to="/">Generator Wattage Calc</Link>
  </nav>
  <div>
    <Route path="/"><GeneratorWattage /></Route>
  </div>
</Router>

<style>
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
</style>
