<script lang="ts">
  import { YandexMetrikaHit, YandexMap } from 'daks-svelte';
  import Icon from 'daks-svelte/ui/iconify';

  const canonical = new URL(import.meta.env.VITE_APP_CANONICAL).origin;

  import microdata from '$lib/configs/microdata';
  const { itemtype, name, logo, email, telephone, address } = microdata.organization;

  const data = {
    locations: [
      {
        geometry: [55.771174, 37.60589],
        properties: {
          iconContent: '<strong class="tracking-wider">СК «МАСШТАБ»</strong>',
          balloonContentHeader: 'Строительная компания «МАСШТАБ»',
          balloonContentBody: '<img class=mx-auto src=/images/ymap.webp width=192 height=192 />',
          balloonContentFooter:
            '<div class=text-center>время работы: 9 <sup>00</sup> -- 19 <sup>00</sup></div>'
        },
        options: {
          preset: 'islands#nightStretchyIcon'
        }
      }
    ],
    state: {
      center: [55.771174, 37.60589],
      zoom: 17,
      behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch'],
      controls: ['zoomControl', 'fullscreenControl']
    }
  };

  const title = 'СКМ • Контакты';
  const description = 'Контакты предприятия СКМ';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="justify-between min-h-screen"
  itemprop="mainContentOfPage">
  <header class="content mb-0">
    <h1 class="title">Контакты</h1>
  </header>

  <div
    class="content py-4
           flex flex-col justify-between gap-7
           text-base md:text-lg lg:text-xl text-sky-800 dark:text-sky-200 align-middle"
    itemscope
    {itemtype}>
    <a
      class="hover:text-sky-500"
      href="tel://{telephone.replace(/[\s-()]/g, '')}">
      <Icon
        icon="ic:round-phone-in-talk"
        class="w-6 h-6 inline -mt-0.5 mr-2" />
      <span itemprop="telephone">{telephone}</span>
    </a>
    <a
      class="hover:text-sky-500"
      href="mailto:{email}">
      <Icon
        icon="ic:round-mail-outline"
        class="w-6 h-6 inline -mt-0.5 mr-2" />
      <span itemprop="email">{email}</span>
    </a>
    <div
      style:display="contents"
      itemprop="address"
      itemscope
      itemtype={address.itemtype}>
      <a
        rel="nofollow noreferrer"
        class="hover:text-sky-500"
        href={address.url}
        target="_blank"
        itemprop="url">
        <Icon
          icon="ic:outline-location-on"
          class="w-6 h-6 inline -mt-0.5 mr-2" />
        <span itemprop="postalCode">{address.postalCode}</span>,
        <span itemprop="addressLocality">{address.addressLocality}</span>,
        <span itemprop="streetAddress">{@html address.streetAddress}</span>
      </a>
      <meta
        itemprop="addressRegion"
        content={address.addressRegion} />
    </div>
    <meta
      itemprop="name"
      content={name} />
    <link
      itemprop="logo"
      href={`${canonical}${logo}`} />
  </div>

  <YandexMap {data} />
</main>
