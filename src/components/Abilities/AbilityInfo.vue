<template>
  <div @click="$emit('click')" class="ability">
    <span class="name">{{ ability.name }}</span>
    <img class="image" :src="ability.image">
    <p class="description">{{ ability.description }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AbilityInfo',
  emits: ['click'],
  props: {
    ability: {
      type: Object,
    },
  },
});
</script>

<style lang="scss" scoped>
.ability {
  display: grid;
  grid-template-areas:
    'image headline'
    'image description';
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  background-color: #65375b;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  border: solid black 1px;
  cursor: pointer;
  user-select: none;
  transition: transform ease-in-out 0.2s;

  &:hover {
    background-color: #405a78;
    transform: translateX(15px);
  }

  &:active {
    background-color: gray;
  }
}

.name {
  margin-top: 0;
  grid-area: headline;
  justify-self: left;
  align-self: start;
  color: white;
  font-size: 26px;
  border-bottom: 2px solid white;
  width: 100%;
  text-align: left;
}

.image {
  grid-area: image;
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 10px;
  border: solid black 2px;
  margin: 0 5px 0 0;
}

.description {
  grid-area: description;
  color: white;
  justify-self: left;
  align-self: start;
  text-align: left;
}
</style>