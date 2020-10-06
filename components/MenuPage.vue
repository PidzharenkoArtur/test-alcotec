<template>
  <div class="menu">
    <a
      v-for="(item, index) in menuList"
      :key="item.name"
      class="menu__link"
      :class="{ menu__link_active: index === indexActive }"
      @click="onClick(index, item.link)"
    >
      {{ item.name }}
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexActive: 0,
      menuList: [
        {
          name: 'Главная',
          link: '/',
        },
        {
          name: 'Вакууматоры',
          link: '/evacuators',
        },
        {
          name: 'Дозаторы',
          link: '/dispensers',
        },
        {
          name: 'Условия возврата',
          link: '/purchase-returns',
        },
        {
          name: 'Условия оплаты',
          link: '/payment',
        },
      ],
    }
  },
  methods: {
    onClick(i, link) {
      this.indexActive = i
      this.$router.push(link)
    },
  },
}
</script>

<style lang="scss" scoped>
.menu {
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  &__link {
    color: black;
    text-decoration: underline;
    margin-left: 10px;
    &:hover {
      color: #28bc86;
      cursor: pointer;
    }
    &_active {
      color: #28bc86;
    }
  }
}
</style>
