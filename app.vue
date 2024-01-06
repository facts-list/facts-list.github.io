<template>
  <VaLayout style="width: 98%">
    <template #top>
      <VaNavbar>
        <template #left>
          <VaNavbarItem>
            <NuxtLink to="/"><VaIcon name="home" /></NuxtLink>
          </VaNavbarItem>
        </template>
        <template #right>
          <VaNavbarItem class="hidden sm:block">
            <NuxtLink to="/about">About</NuxtLink>
          </VaNavbarItem>
        </template>
        <template #center>
          <VaNavbarItem class="hidden sm:block">
            Freely Available Computer Technology Standards
          </VaNavbarItem>
        </template>
      </VaNavbar>
    </template>
    <template #content>
      <main>
        <NuxtPage />
      </main>
      <div class="va-title">
        <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://facts-list.github.io/">Freely Available Computer Technology Standards</a> &#169; 2024 is licensed under Creative Commons <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International<img style="height:14px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"><img style="height:14px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg"></a>. To contribute, visit <a href="https://github.com/facts-list">https://github.com/facts-list</a></p>
      </div>
    </template>
  </VaLayout>
</template>
