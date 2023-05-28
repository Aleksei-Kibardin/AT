<template>
  <div class="preview">
    <div class="user-preview">
      <h5 class="title user-title">Персональные данные</h5>
      <p class="user">
        {{ $store.state.user.name }}, {{ $store.state.user.age }} лет
      </p>
      <div class="chaild-preview">
        <h5 v-if="chaildCheck" class="title chaild-title">Дети</h5>
        <div v-for="t in $store.state.chaild" :key="t" class="chaild-card">
          {{ t.name }}, {{ t.age }} Лет
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from "../store";

  const chaildCheck = (store.state.chaild.length > 0) ? true : false

</script>

<style>
.preview {
  margin-top: 32px;
  margin-right: 420px;
}
.user {
  font-weight: 700;
  font-size: 16px;
}
.chaild-preview {
  margin-top: 53px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}
.chaild-card {
  padding: 10px 20px 10px 20px;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
  border-radius: 5px;
}
</style>
