<script>
import promiseSleep from '../other/promiseSleep'

const startCharCode = 33
const endCharCode = 126

export default {
  name: 'v-shuffle-string',
  data () {
    return {
      shuffled: []
    }
  },
  props: {
    immediately: {
      type: Boolean,
      default: true,
      required: false
    },
    string: {
      type: String,
      required: true,
      validator: function (value) {
        return value.length > 0
      }
    },
    time1: {
      required: false,
      default: '20',
      validator: function (value) {
        return parseInt(value, 10) > 0
      }
    },
    time2: {
      required: false,
      default: '40',
      validator: function (value) {
        return parseInt(value, 10) > 0
      }
    },
    count: {
      required: false,
      default: '2',
      validator: function (value) {
        return parseInt(value, 10) >= 0
      }
    }
  },
  watch: {
    string () {
      if (this.immediately === true) this.generateShuffleString()
    }
  },
  computed: {
    shuffledString () {
      return this.shuffled.join('')
    }
  },
  methods: {
    generateShuffleChar () {
      return String.fromCharCode(Math.floor(Math.random() * (endCharCode - startCharCode)) + startCharCode)
    },
    generateShuffleString: async function () {
      const time1 = parseInt(this.time1, 10)
      const time2 = parseInt(this.time2, 10)
      const count = parseInt(this.count, 10)

      this.shuffled = []
      for (let i = 0; i < this.string.length; i++) {
        this.shuffled = [...this.shuffled, '']
      }
      for (let i = 0; i < this.string.length; i++) {
        let shuffleChar
        for (let j = i; j < this.string.length; j++) {
          shuffleChar = this.generateShuffleChar()
          this.$set(this.shuffled, j, shuffleChar)
        }
        for (let j = 0; j < count; j++) {
          shuffleChar = this.generateShuffleChar()
          this.$set(this.shuffled, i, shuffleChar)
          await promiseSleep(time1)
        }
        this.$set(this.shuffled, i, this.string[i])
        await promiseSleep(time2)
      }
      this.$emit('done')
    }
  },
  mounted () {
    if (this.immediately === true) this.generateShuffleString()
  }
}
</script>

<template>
  <span>
    {{ shuffledString }}
  </span>
</template>
