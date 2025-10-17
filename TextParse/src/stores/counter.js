import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//stores实例代码
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

//因为向外部接口获取响应需要时间，在获取响应的这段时间，阻塞用户从输入框提交文本的功能
export const processFileStateStore = defineStore('processState', {
  state: () => ({
    //提交功能初始为true
    state: false,
  }),
  actions: {
    //当用户点击提交后，阻塞提交功能
    active() {
      this.state = true
    },
    //当清空输入或者完成提交，重置提交功能状态
    deactive() {
      this.state = false
    },
  },
})

export const processIsLoadingState = defineStore('isLoading', {
  state: () => ({
    //文本是否向接口请求结果
    state: false,
  }),
  actions: {
    active() {
      this.state = true
    },
    deactive() {
      this.state = false
    },
  },
})
