<template>
  <div>
    <AppNavbar />
    <main>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ThemesSection />
      <ImportantDates />
      <SpeakersSection />
      <ScheduleSection />
      <CallForPapers />
      <RegistrationSection />
      <VenueSection />
      <SponsorsSection />
      <PreviousEditions />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useScrollReveal()

useHead({
  title: 'R4TLI 2026 — Research for Transport & Logistics Industry',
  meta: [
    {
      name: 'description',
      content:
        'R4TLI 2026 — 12th International Research Conference for Transport & Logistics Industry. Organised by SLSTL. Colombo, Sri Lanka, August 5–7, 2026.',
    },
    { property: 'og:title',       content: 'R4TLI 2026 — SLSTL International Conference' },
    { property: 'og:description', content: 'Submit your research to R4TLI 2026, the premier transport & logistics conference in South Asia.' },
    { name: 'theme-color',        content: '#1786a5' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
})
</script>
