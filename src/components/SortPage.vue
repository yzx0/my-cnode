<template>
  <div class="sort-page">
    <p class="go-begin">«</p>
    <p v-show="showPoint">...</p>
    <p
      v-for="(item,index) in pageArr"
      :key="index"
      @click="changePage(item)"
      :class="{active:item === currentPage}"
    >{{item}}</p>
    <p>...</p>
    <p class="go-end">»</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageArr: [1, 2, 3, 4, 5],
      showPoint: false,
      currentPage: 1
    };
  },
  methods: {
    changePage(item) {
      this.currentPage = item;
      if (item > 3) {
        this.showPoint = true;
        this.changePageNum(item);
      } else {
        this.showPoint = false;
        this.pageArr = [1, 2, 3, 4, 5];
      }
      this.$emit('changePage',item)
    },
    changePageNum(num) {
      let temp = -2;
      for (let i = 0; i < this.pageArr.length; i++) {
        this.pageArr.splice(i, 1, num + temp);
        temp++;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.sort-page {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #888;
  background-color: #fff;
  padding-top: 30px;
  padding-bottom: 20px;
  padding-left: 10px;
  p {
    cursor: pointer;
    padding: 4px 10px;
    border: 1px solid #aaa;
    &:not(:last-child) {
      border-right: none;
    }
    &.active {
      color: #80bd01;
    }
  }
}
</style>