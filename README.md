# vue-shuffle-string

shuffle string Vue component.

## Usage

### Browser

#### example

```
<body>
    <v-shuffle-string string="Loading..." />
</body>
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-shuffle-string.umd.min.js"></script>
```

### Module(Single File Component)

#### Installation

```
# npm
npm install --save vue-shuffle-string
```

```
# yarn
yarn add vue-shuffle-string
```

#### example

```
<template>
  <div>
    <v-shuffle-string string="Loading..." />
  </div>
</template>

<script>
import VShuffleString from 'vue-shuffle-string';
export default {
  name: 'app',
  components: {
    VShuffleString
  }
}
</script>

<style>
</style>
```

## props

|          | string | immediately | time1 | time2 | count |
| -------- | ------ | ----------- | ----- | ----- | ----- |
| required | ○      | x           | x     | x     | x     |
| default  |        | true        | '20'  | '40'  | '2'   |

## Example

```
<v-shuffle-string string="Loading..." />
```

```
<div>
  <button @click="$refs.shuffleString.generateShuffleString()">start</button>
  <v-shuffle-string ref="shuffleString" :immediately="false" class="shuffle" string="Loading..." />
</div>
```

```
<template>
  <div>
    <v-shuffle-string ref="shuffleString" @done="done" class="shuffle" string="Loading..." />
  </div>
</template>

<script>
import VShuffleString from 'vue-shuffle-string'
export default {
  name: 'app',
  components: {
    VShuffleString
  },
  methods: {
    done () {
      alert('done')
    }
  }
}
</script>

<style>
.shuffle {
  font-family: monospace;
}
</style>
```

```
<div>
  <v-shuffle-string time1="16" time2="32" count="16" string="Loading..." />
</div>
```
