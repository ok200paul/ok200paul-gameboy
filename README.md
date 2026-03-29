> ### Gameboy emulator written in Rust to WebAssembly

A fork of https://github.com/raphamorim/gameboy, compiled to wasm but protected with a license from https://runlicense.com . Available as an NPM package and can be pulled into JS projects

This is only a proof of concept to show that WASM modules can be protected using cryptographically signed license; I'm not charging anyone for licenses to this project as the core IP is not mine.

To get it working, add this to package.json:

```
"dependencies": {
    "gameboy": "github:ok200paul/ok200paul-gameboy",
    }
```

Then, here's an example using a vue component. Ask me for a license, and I'll email it over!

```vue
<script setup lang="ts">
import { activate } from 'gameboy';
import {onMounted, ref, watch} from "vue";

const licenseString = ref('');

onMounted(async () => {
    try {
        const module = await import('gameboy');
        await module.default();

    } catch (e) {
        console.error('WASM environment error:', e);
    }
});

watch(licenseString, () => {
    activate(licenseString.value, 'gameboy-app');
})

</script>

<template>
    <div class="text-xl mt-32">
        Play a GameBoy
    </div>
    <div>
        <input type="text" v-model="licenseString"
               class="w-2/3 p-4 rounded border"
               placeholder="Enter your license...">
    </div>
    <div id="gameboy-app" style="margin-top: 12px;" class="border h-screen"></div>
</template>
```