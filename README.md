# vue-shuffle-string

shuffle string Vue component.

## demo

[here](https://jsfiddle.net/d6v0wxh8/).

## Usage

### Browser

#### example

```
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-shuffle-string"></script>
<body>
    <div id="demo1">
        <div>
            <v-shuffle-string string="Loading..." />
        </div>
    </div>
</body>
<script>
    new Vue({ el: '#demo1' })
</script>
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
| required | yes    | no          | no    | no    | no    |
| default  |        | true        | '20'  | '40'  | '2'   |

## Example

```
<v-shuffle-string string="Loading..." />
```

[demo](https://jsfiddle.net/c9b5pdvz/)

```
<div>
  <button @click="$refs.shuffleString.generateShuffleString()">start</button>
  <v-shuffle-string ref="shuffleString" :immediately="false" class="shuffle" string="Loading..." />
</div>
```

[demo](https://jsfiddle.net/ct1sazf8/)

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
      console.log('done')
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

[demo](https://jsfiddle.net/oztjdy07/)

```
<div>
  <v-shuffle-string time1="16" time2="32" count="16" string="Loading..." />
</div>
```

[demo](https://jsfiddle.net/abtq37kh/)
