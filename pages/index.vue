<script setup></script>

<template>
  <div class="bg-img min-h-screen p-6 box-border h-[100vh]">
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
      <div class="card bg-card yutou p-6 rounded-xl flex flex-col justify-between" style="grid-area: words">
        <h2 class="text-6xl font-bold text-shadow-drak">01</h2>
        <p class="text-4xl text-shadow-drak font-bold">單字</p>
      </div>

      <!-- 文法 -->
      <div class="card bg-card lanmei p-6 rounded-xl flex flex-col justify-between" style="grid-area: grammar">
        <h2 class="text-6xl font-bold text-shadow-drak">02</h2>
        <p class="text-4xl text-shadow-drak font-bold">文法</p>
      </div>

      <!-- 對話 -->
      <div class="card bg-card mochas p-6 rounded-xl flex flex-col justify-between" style="grid-area: conversation">
        <h2 class="text-6xl font-bold text-shadow-drak">03</h2>
        <p class="text-4xl text-shadow-drak font-bold">對話</p>
      </div>

      <!-- 時事 -->
      <div class="card bg-card hojicha p-6 rounded-xl flex flex-col justify-between" style="grid-area: topics">
        <h2 class="text-6xl font-bold text-shadow-drak">04</h2>
        <p class="text-4xl text-shadow-drak font-bold">時事</p>
      </div>

      <!-- 工具 -->
      <div class="card bg-card caomei p-6 rounded-xl flex flex-col justify-between" style="grid-area: tools">
        <h2 class="text-4xl font-bold text-shadow-drak">05</h2>
        <p class="text-4xl text-shadow-drak font-bold">工具類</p>
      </div>

      <!-- 中央區塊 -->
      <div class="bg-container card-blur p-6 rounded-xl flex flex-col justify-center items-center text-center" style="grid-area: center">
        <div class="content">
          <h2 class="text-6xl font-bold">K-Word Lab</h2>
          <p class="text-lg mt-2 font-bold opacity-80">緩慢學習韓文，緩慢更新中</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.bg-img {
  background: url('@/assets/images/bg/background_1920x1080.png') no-repeat center center;
  background-size: cover;
}
.bg-container {
  position: relative;
  overflow: hidden;
  color: #A5B3D3;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url('@/assets/images/bg/background_1920x1080.png') no-repeat center center;
    opacity: 0.5;
    backdrop-filter: blur(10px);
    z-index: 1;
  }
  .content {
    position: relative;
    z-index: 10;
  }
}
.card {
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
}
</style>
