<template>
  <div class="min-h-screen bg-base text-text p-6">
    <!-- 頂部區塊 -->
    <header class="flex items-center justify-between mb-6">
      <NuxtLink to="/" class="bg-button text-button-text px-4 py-2 rounded-xl shadow">
        ← 首頁
      </NuxtLink>
      <h1 class="text-2xl font-bold">單字練習 Words</h1>
      <button class="bg-card px-3 py-2 rounded-xl shadow">⚙️ 設定</button>
    </header>

    <!-- 分類與搜尋 -->
    <div class="flex flex-wrap items-center gap-4 mb-6">
      <select v-model="selectedCategory" class="bg-card text-text px-3 py-2 rounded-xl">
        <option value="">全部分類</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="搜尋單字..."
        class="bg-card text-text px-3 py-2 rounded-xl flex-1"
      />
    </div>

    <!-- 單字清單 -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="word in filteredWords"
        :key="word.korean"
        class="bg-card rounded-xl p-4 flex flex-col items-center justify-center shadow"
      >
        <p class="text-xl font-bold">{{ word.korean }}</p>
        <p class="text-sm opacity-70">{{ word.roman }}</p>
        <p class="mt-2">{{ word.meaning }}</p>
        <button class="mt-3 text-sm bg-button text-button-text px-3 py-1 rounded-lg">
          🔊 發音
        </button>
      </div>
    </div>

    <!-- 底部操作 -->
    <div class="mt-8 flex justify-center gap-4">
      <button class="bg-success text-base px-6 py-2 rounded-xl font-bold">
        開始測驗
      </button>
      <button @click="shuffleWords" class="bg-warning text-base px-6 py-2 rounded-xl font-bold">
        隨機打亂
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ['日常生活', '食物', '地點', '動物']

const words = ref([
  { korean: '사과', roman: 'sagwa', meaning: '蘋果', category: '食物' },
  { korean: '학교', roman: 'hakgyo', meaning: '學校', category: '地點' },
  { korean: '고양이', roman: 'goyangi', meaning: '貓', category: '動物' },
  { korean: '물', roman: 'mul', meaning: '水', category: '食物' },
])

const selectedCategory = ref('')
const searchQuery = ref('')

// 過濾單字
const filteredWords = computed(() => {
  return words.value.filter((w) => {
    const matchesCategory = selectedCategory.value
      ? w.category === selectedCategory.value
      : true
    const matchesSearch = searchQuery.value
      ? w.korean.includes(searchQuery.value) ||
        w.meaning.includes(searchQuery.value) ||
        w.roman.includes(searchQuery.value)
      : true
    return matchesCategory && matchesSearch
  })
})

// 打亂順序
const shuffleWords = () => {
  words.value = [...words.value].sort(() => Math.random() - 0.5)
}
</script>
