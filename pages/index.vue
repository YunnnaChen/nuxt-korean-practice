<script setup></script>
<template>
  <div class="bg-img min-h-screen text-text p-6 box-border h-[100vh]">
    <div
      class="grid gap-4 grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-2 h-full"
      style="
        grid-template-areas:
          'words center center topics'
          'words grammar conversation topics'
          'tools grammar conversation topics';
      "
    >
      <!-- 單字 -->
      <div class="bg-card yutou p-6 rounded-xl flex flex-col justify-between" style="grid-area: words">
        <h2 class="text-6xl font-bold">01</h2>
        <p class="text-lg">單字</p>
      </div>

      <!-- 文法 -->
      <div class="bg-card lanmei p-6 rounded-xl flex flex-col justify-between" style="grid-area: grammar">
        <h2 class="text-3xl font-bold">02</h2>
        <p class="text-lg">文法</p>
      </div>

      <!-- 對話 -->
      <div class="bg-card mochas mochas p-6 rounded-xl flex flex-col justify-between" style="grid-area: conversation">
        <h2 class="text-3xl font-bold">03</h2>
        <p class="text-lg">對話</p>
      </div>

      <!-- 時事 -->
      <div class="bg-card hojicha p-6 rounded-xl flex flex-col justify-between" style="grid-area: topics">
        <h2 class="text-3xl font-bold">04</h2>
        <p class="text-lg">時事</p>
      </div>

      <!-- 工具 -->
      <div class="bg-card caomei p-6 rounded-xl flex flex-col justify-between" style="grid-area: tools">
        <h2 class="text-3xl font-bold">05</h2>
        <p class="text-lg">工具類</p>
      </div>

      <!-- 中央區塊 -->
      <div class="bg-card p-6 rounded-xl flex flex-col justify-center items-center text-center" style="grid-area: center">
        <h2 class="text-2xl font-bold">K-Word Lab</h2>
        <p class="mt-2 opacity-80">緩慢學習韓文，緩慢更新中</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.bg-img{
  background: url('@/assets/images/bg/background_1920x1080.png') no-repeat center center;
  background-size: cover;
}
</style>
