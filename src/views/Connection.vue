<template>
  <b-container class="mt-5">
    <b-row>
      <b-col v-for="item in items" cols="3">
          <b-card
            :title="item.title"
            :img-src="item.img"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              {{ item.text }}
            </b-card-text>

            <b-button :href="item.website" variant="primary">前往</b-button>
          </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Shop',
  data () {
    return {
      items: [
        { title: '台南Josh', img: 'https://yt3.ggpht.com/ytc/AAUvwnh5ggXERPWShXZod-Kc5hzZj5cXPOmYVzp0b1-7HA=s176-c-k-c0x00ffffff-no-rj', text: 'youtube頻道', website: 'https://www.youtube.com/user/kenpmges' },
        { title: '¡Ánimo!運動吧', img: 'https://yt3.ggpht.com/ytc/AAUvwnhFk2K-3VUxp2WvcRl_Sj6IxHdzNnuIxyoc-XvZ=s176-c-k-c0x00ffffff-no-rj', text: 'youtube頻道', website: 'https://www.youtube.com/channel/UClq4yOwDHqnu9VDm9mmkiJA' },
        { title: 'Yahoo好棒棒', img: 'https://yt3.ggpht.com/ytc/AAUvwnhV47gYD2aXYjVxnbiKgx_ZUHGL_1403DhVH1v2=s176-c-k-c0x00ffffff-no-rj', text: 'youtube頻道', website: 'https://www.youtube.com/channel/UCLEy8come0NWSxsZyw9M8Jg' },
        { title: 'elevensportstw', img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/be48eb4c-7e96-4f42-bf24-303cf5224d0f-profile_image-70x70.png', text: 'twitch棒球轉播', website: 'https://www.twitch.tv/elevensportstw' },
        { title: 'momo_sports', img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/02481208-fbc8-4db3-85c4-e8897e915473-profile_image-70x70.png', text: '富邦twitch棒球轉播', website: 'https://www.twitch.tv/momo_sports' },
        { title: '中信兄弟官方頻道', img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/90b812c4-b031-4287-943f-17ebea48d394-profile_image-70x70.png', text: '中信兄弟youtube轉播', website: 'https://www.twitch.tv/brothers_baseball' },
        { title: 'PTT棒球版', img: 'https://img.gq.com.tw/_rs/645/userfiles/sm/sm1024_images_A1/37951/2018120362799153.jpg', text: '圖片為中信兄弟啦啦隊', website: 'https://www.ptt.cc/bbs/Baseball/index.html' }
      ]
    }
  }
}
</script>
