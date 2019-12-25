<template>
  <div class="sort-page">
    <p class="go-begin" @click="gotoBegin">«</p>
    <p v-show="showPoint" class="noClick">...</p>
    <p
      v-for="(item,index) in pageArr"
      :key="index"
      @click="changePage(item)"
      :class="{active:item === currentPage}"
    >{{item}}</p>
    <p v-show="showEndPoint" class="noClick">...</p>
    <p class="go-end" @click="gotoEnd">»</p>
  </div>
</template>

<script>
export default {
  props:{
    initLength:Number
  },
  created(){
    for (let index = 0; index < this.initLength; index++) {
      this.pageArr.push(index+1)
    }
  },
  data() {
    return {
      pageArr: [],
      showPoint: false,
      currentPage: 1,
      pageLength:this.initLength,
      showEndPoint:true
    };
  },
  watch:{
    initLength(){
      this.pageLength = this.initLength
    }
  },
  methods: {
    changePage(item) {
      this.currentPage = item;
      if (item > 3) {
        this.showPoint = true;
        this.changePageNum(item);
      } else {
        this.showEndPoint = true
        this.showPoint = false;
        this.pageArr = [1, 2, 3, 4, 5];
      }
      this.$emit('changePage',item)
    },
    changePageNum(num) {
      if(num === 50){
        this.pageArr = [46,47,48,49,50]
        this.showEndPoint = false
        return
      }else{
        this.showEndPoint = true
      }
      let temp = -2;
      for (let i = 0; i < this.pageArr.length; i++) {
        this.pageArr.splice(i, 1, num + temp);
        temp++;
      }
    },
    gotoBegin(){
      this.changePage(1)
    },
    gotoEnd(){
      this.changePage(50)
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
  .noClick{
    cursor: default;
  }
}
</style>