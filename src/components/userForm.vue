<template>
  <form class="form">
    <div class="user-data">
      <h5 class="title user-title">Персональные данные</h5>
      <div class="entry-field">
        <input
          @change="validationName(user)"
          v-model="user.name"
          class="input"
          placeholder=" "
        />
        <label class="label">Имя</label>
      </div>
      <div class="entry-field">
        <input
          @change="validationAge(user)"
          v-model="user.age"
          class="input"
          placeholder=" "
        />
        <label class="label">Возраст</label>
      </div>
    </div>
    <div class="chaild-data">
      <div class="chaild-head">
        <h5 class="title chaild-title">Дети (макс. 5)</h5>
        <button
          v-if="chaild.length < 5"
          @click="addChaildCards()"
          class="btn-add"
        >
          <div class="plus"></div>
          <span class="btn-txt">Добавить ребенка</span>
        </button>
      </div>
      <div v-for="t in chaild" :key="t" class="chaild-form">
        <div class="entry-field">
          <input
            @change="validationName(t)"
            v-model="t.name"
            class="input"
            placeholder=" "
          />
          <label class="label">Имя</label>
        </div>
        <div class="entry-field">
          <input
            @change="validationAge(t)"
            v-model="t.age"
            class="input"
            placeholder=" "
          />
          <label class="label">Возраст</label>
        </div>
        <button @click="chaildRemove(t)" class="remove">Удалить</button>
      </div>
      <button @click="save()" class="save">Сохранить</button>
    </div>
  </form>
</template>

<script setup>
import store from "../store";
import { ref } from "vue";

const chaild = ref([]);
const user = ref({
  name: null,
  age: null,
});

const addChaildCards = () => {
  if (chaild.value.length < 5) {
    chaild.value.push({
      name: null,
      age: null,
      id: Math.floor(Math.random() * 101),
    });
  }
};

const chaildRemove = (t) => {
  chaild.value = chaild.value.filter((i) => {
    return i !== t;
  });
};

const validationName = (i) => {
  const regexp = /\d/g;
  if (i.name.length < 2) {
    alert("Имя должно состоять больее чем из 2х символов");
    i.name = null;
    store.state.active = false;
  } else if (i.name.length > 15) {
    alert("Имя должно состоять менее чем из 15 символов");
    i.name = null;
    store.state.active = false;
  } else if (i.name.match(regexp)) {
    alert("Имя должно состоять из букв");
    i.name = null;
    store.state.active = false;
  }
  return i.name;
};
const validationAge = (i) => {
  const regexp = /\D/g;
  if (i.age > 130) {
    alert("укажите настоящий возрат, он должен быть менее 130");
    i.age = null;
    store.state.active = false;
  } else if (i.age.match(regexp)) {
    alert("возраст должен содержать только цифры");
    i.age = null;
    store.state.active = false;
  } else if (i.age < 0) {
    alert("возраст не может быть отрицательным");
    i.age = null;
    store.state.active = false;
  }
  return i.age;
};

const checkNull = (i) => {
  for (var key in i) {
    if (key !== "id") {
      if (i[key] !== null && i[key] !== "") {
        store.state.active = true;
      } else {
        store.state.active = false;
        break
      }
    }
  }
};
const save = () => {
  checkNull(user.value);
  chaild.value.forEach((i) => {
    checkNull(i);
  });
  store.state.user = user.value;
  store.state.chaild = chaild.value;
};
</script>

<style>
.form {
  height: 450px;
  width: 616px;
  margin-top: 32px;
}
.user-data {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.chaild-data {
  position: relative;
  top: 33px;
}
.title {
  position: relative;
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 11px;
}
.chaild-title {
  top: 11px;
}

.entry-field {
  display: flex;
  position: relative;
  max-width: 614px;
  min-width: 260px;
  height: 56px;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
}
.input {
  position: absolute;
  left: 13px;
  outline: 0;
  width: 90%;
  height: 90%;
  font-size: 14px;
  border: 0px;
  transition: 0.3s;
}
.label {
  position: absolute;
  top: 16px;
  left: 15px;
  color: rgb(17, 17, 17);
  transition: 0.3s;
}

.input:focus ~ .label,
.input:not(:placeholder-shown) ~ .label {
  top: 10px;
  font-size: 13px;
  color: rgba(17, 17, 17, 0.48);
}

.input:focus,
.input:not(:placeholder-shown) {
  top: 26px;
  height: 46%;
}

.chaild-head {
  display: flex;
  justify-content: space-between;
}
.chaild-form {
  display: flex;
  flex-direction: row;
  margin-top: 11px;
  gap: 18px;
}
button {
  outline: none;
  background: none;
}
.btn-add {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 201px;
  height: 39px;
  border: 2px solid #01a7fd;
  border-radius: 100px;
}
.btn-txt {
  color: #01a7fd;
  font-size: 14px;
  left: 4px;
}
.plus {
  margin-left: 11px;
  background: #01a7fd;
  border-radius: 138.148px;
  height: 16.02px;
  width: 2.29px;
}
.plus:after {
  content: "";
  height: 2.29px;
  width: 16.02px;
  background: #01a7fd;
  border-radius: 138.148px;
  position: absolute;
  margin-left: -7.9px;
  margin-top: 7.1px;
}
.remove {
  color: #01a7fd;
  font-size: 14px;
  align-self: center;
  border: none;
}
.save {
  margin-top: 30px;
  width: 118px;
  height: 44px;
  border: none;
  background: #01a7fd;
  border-radius: 100px;
  font-size: 14px;
  color: #fff;
}
</style>
