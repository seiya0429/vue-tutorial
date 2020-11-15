<template>
  <div>
    <Counter name="Counter 1" :initCount="5" @emitUp="getEvent" />
    <Counter name="Counter 2" :initCount="10" @emitUp="getEvent" />
    <p>{{ count }}</p>
    <p>{{ globalCount }}</p>
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'
import primitiveStore from '@/primitiveStore.js'
import { mapState } from "vuex";

export default {
  components: {
    Counter
  },
  data() {
    return {
      primitiveStore
    }
  },
  methods: {
    getEvent() {
      this.$store.commit("globalIncrement")
    }
  },
  computed: {
    count(){
      return this.$store.state.globalCount
    },
    ...mapState(["globalCount"])
  }




  
}
</script>
