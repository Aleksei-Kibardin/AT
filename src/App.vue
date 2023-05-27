<template>
  <div class="container">
    <header>
      <div class="wrap-nav">
        <img src="./assets/logo.png" alt="logo" class="logo" />
        <div class="btns-header">
          <router-link to="/form">Форма</router-link>
          <div
            :class="{ 'wrap-link': !$store.state.active }"
            data-tooltip="заполните форму полностью!"
          >
            <router-link
              :class="{ 'disabled': !$store.state.active }"
              to="/preview"
            >
              Превью</router-link
            >
          </div>
        </div>
      </div>
    </header>
    <main class="content">
      <router-view></router-view>
    </main>
    <footer>
      <span class="foot-txt">all rights reserved</span>
    </footer>
  </div>
</template>

<script setup></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
* {
  font-family: "Montserrat";
  font-style: normal;
}
a {
  text-decoration: none;
  color: rgba(17, 17, 17, 0.48);
}
body {
  max-width: 1366px;
  margin: auto;
}
header {
  display: flex;
  height: 76px;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
}
.wrap-nav {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  width: 792px;
  align-self: center;
}
.logo {
  width: 93px;
  height: 29px;
  margin-left: 12%;
}
.btns-header {
  display: flex;
  align-items: center;
  gap: 24px;
}
.content {
  height: 616px;
  display: flex;
  justify-content: center;
}
footer {
  display: flex;
  height: 76px;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
}
.foot-txt {
  font-size: 13px;
}
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
.message {
  font-size: 14px;
  position: absolute;
  color: red;
}
.wrap-link {
  position: relative;
}
.wrap-link::after {
  content: attr(data-tooltip);
  position: absolute;
  width: 300px;
  left: 0;
  top: 0;
  background: #c93939;
  color: #fff;
  padding: 0.5em;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  opacity: 0;
  transition: 1s;
}
.wrap-link:hover::after {
  opacity: 1;
  top: 2em;
}
</style>
