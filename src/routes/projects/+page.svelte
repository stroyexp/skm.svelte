<script lang="ts">
  import { YandexMetrikaHit } from 'daks-svelte';
  import Grid from './Grid.svelte';
  import { sources, squares } from '$lib/assets/images/gallery';

  const data = async () => ({
    images: await sources(),
    thumbnails: await squares()
  });

  const title = 'СКМ • Проекты';
  const description = 'Проекты предпрятия СКМ';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Недавние проекты</h1>
  </header>

  <Grid {data} />
</main>
