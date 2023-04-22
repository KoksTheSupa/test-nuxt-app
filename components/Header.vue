<template>
  <div class="header">
    <div class="info">
      <AssetsImageInsisLogo />
      <p>8 800 250 60 60</p>
    </div>
    <div class="desc">
      <div class="desc-text">
        <h1>За <strong>разумное</strong> потребление</h1>
        <div class="advantage">
          <AssetsIconStick />
          <p>до <strong>100 Мбит/с</strong> + от <strong>150 каналов</strong> Первый месяц бесплатно</p>
        </div>
      </div>
      <AssetsImagePlanet class="planet" />
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.header {
  @apply bg-insisColorBgPink px-32 pt-16;

  .info {
    @apply flex justify-between items-center;

    p {
      @apply font-bold text-4xl text-insisColorGrey;
    }
  }

  .desc {
    @apply flex justify-between items-center;

    .desc-text {
      @apply flex flex-col justify-center items-start max-w-[542px];

      h1 {
        @apply font-insisFontMA font-bold text-6xl text-insisColorGrey;

        strong {
          @apply text-insisColorTextGreen;
        }
      }

      .advantage {
        @apply flex items-baseline justify-center mt-8;

        p {
          @apply text-2xl ml-7 max-w-[403px];

          strong {
            @apply text-insisColorGrey font-extrabold;
          }
        }
      }
    }
  }
}
</style>
