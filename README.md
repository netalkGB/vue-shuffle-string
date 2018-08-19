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
