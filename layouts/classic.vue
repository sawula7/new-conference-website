<template>
  <div class="min-h-screen flex flex-col">
    <ClassicNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <ClassicFooter />
  </div>
</template>
