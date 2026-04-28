<template>
  <div>
    <InnerPageHero title="Membership Application" subtitle="Apply online to become an SLSTL member." parent="Membership" parent-href="/membership" />

    <section class="py-10 bg-slate-50 min-h-screen">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">

        <!-- Already have account -->
        <div class="text-center text-sm text-slate-500">
          Already have an account?
          <NuxtLink to="/login" class="text-primary font-semibold hover:underline">Sign in</NuxtLink>
        </div>

        <form @submit.prevent="submit" class="space-y-8">

          <!-- 1. Account credentials -->
          <FormCard title="Account Credentials">
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="sm:col-span-2">
                <FLabel required>Email Address</FLabel>
                <input v-model="form.email" type="email" class="f-input" placeholder="you@example.com" required />
              </div>
              <div>
                <FLabel required>Password</FLabel>
                <input v-model="form.password" type="password" class="f-input" placeholder="Min. 8 characters" required minlength="8" />
              </div>
              <div>
                <FLabel required>Confirm Password</FLabel>
                <input v-model="form.confirmPassword" type="password" class="f-input" required />
              </div>
            </div>
          </FormCard>

          <!-- 2. Personal Information -->
          <FormCard title="Personal Information">
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <FLabel required>Title</FLabel>
                <select v-model="form.title" class="f-input" required>
                  <option value="">— Select —</option>
                  <option v-for="t in TITLES" :key="t" :value="t">{{ t }}</option>
                </select>
              </div>
              <div>
                <FLabel required>Gender</FLabel>
                <select v-model="form.gender" class="f-input" required>
                  <option value="">— Select —</option>
                  <option>Male</option><option>Female</option><option>Other</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <FLabel required>Full Name (as in NIC / Passport)</FLabel>
                <input v-model="form.full_name" type="text" class="f-input" placeholder="E.g. Amal Bandara Perera" required />
              </div>
              <div class="sm:col-span-2">
                <FLabel required>Last Name with Initials</FLabel>
                <input v-model="form.name_with_initials" type="text" class="f-input" placeholder="E.g. A.B. Perera" required />
              </div>
              <div>
                <FLabel required>NIC Number</FLabel>
                <input v-model="form.nic_no" type="text" class="f-input" placeholder="e.g. 199012345678" required />
              </div>
              <div>
                <FLabel required>Age</FLabel>
                <input v-model="form.age" type="number" min="18" max="120" class="f-input" required />
              </div>
            </div>
          </FormCard>

          <!-- 3. Contact Information -->
          <FormCard title="Contact Information">
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="sm:col-span-2">
                <FLabel required>Correspondence Address</FLabel>
                <textarea v-model="form.address" rows="2" class="f-input resize-none" required />
              </div>
              <div>
                <FLabel required>Mobile</FLabel>
                <input v-model="form.mobile" type="tel" class="f-input" placeholder="+94 77 000 0000" required />
              </div>
              <div>
                <FLabel>Home Phone</FLabel>
                <input v-model="form.phone_home" type="tel" class="f-input" />
              </div>
              <div>
                <FLabel>Office Phone</FLabel>
                <input v-model="form.phone_office" type="tel" class="f-input" />
              </div>
              <div>
                <FLabel>Fax</FLabel>
                <input v-model="form.fax" type="tel" class="f-input" />
              </div>
            </div>
          </FormCard>

          <!-- 4. Employment History -->
          <FormCard title="Employment History">
            <p class="text-xs text-slate-400 mb-4">List positions starting from the most recent.</p>
            <div class="space-y-4">
              <div v-for="(emp, i) in form.employment" :key="i"
                   class="border border-slate-100 rounded-xl p-4 relative">
                <button type="button" v-if="form.employment.length > 1"
                        class="absolute top-3 right-3 text-slate-300 hover:text-red-400 transition-colors text-xs"
                        @click="form.employment.splice(i, 1)">✕ Remove</button>
                <div class="grid sm:grid-cols-2 gap-3">
                  <div class="sm:col-span-2">
                    <FLabel>Organisation / Institute</FLabel>
                    <input v-model="emp.organisation" type="text" class="f-input" />
                  </div>
                  <div class="sm:col-span-2">
                    <FLabel>Position Held</FLabel>
                    <input v-model="emp.position" type="text" class="f-input" />
                  </div>
                  <div>
                    <FLabel>From</FLabel>
                    <input v-model="emp.from_date" type="month" class="f-input" />
                  </div>
                  <div>
                    <FLabel>To</FLabel>
                    <input v-model="emp.to_date" type="month" class="f-input" placeholder="Present" />
                  </div>
                </div>
              </div>
            </div>
            <button type="button" class="mt-3 text-xs text-primary font-semibold hover:underline" @click="addEmployment">
              + Add Another Position
            </button>
          </FormCard>

          <!-- 5. Academic Qualifications -->
          <FormCard title="Academic Qualifications">
            <p class="text-xs text-slate-400 mb-4">List up to 4 qualifications (highest first).</p>
            <div class="space-y-4">
              <div v-for="(qual, i) in form.qualifications" :key="i"
                   class="border border-slate-100 rounded-xl p-4 relative">
                <button type="button" v-if="form.qualifications.length > 1"
                        class="absolute top-3 right-3 text-slate-300 hover:text-red-400 transition-colors text-xs"
                        @click="form.qualifications.splice(i, 1)">✕ Remove</button>
                <div class="grid sm:grid-cols-2 gap-3">
                  <div class="sm:col-span-2">
                    <FLabel>Degree / Diploma / Certificate</FLabel>
                    <input v-model="qual.degree" type="text" class="f-input" />
                  </div>
                  <div class="sm:col-span-2">
                    <FLabel>University / Institution</FLabel>
                    <input v-model="qual.institution" type="text" class="f-input" />
                  </div>
                  <div>
                    <FLabel>Year Awarded</FLabel>
                    <input v-model="qual.year" type="number" min="1950" max="2099" class="f-input" />
                  </div>
                </div>
              </div>
            </div>
            <button type="button" v-if="form.qualifications.length < 4"
                    class="mt-3 text-xs text-primary font-semibold hover:underline" @click="addQualification">
              + Add Qualification
            </button>
          </FormCard>

          <!-- 6. Professional Works -->
          <FormCard title="Professional Works / Publications">
            <p class="text-xs text-slate-400 mb-4">List up to 4 notable works, papers, or publications.</p>
            <div class="space-y-4">
              <div v-for="(work, i) in form.professional_works" :key="i"
                   class="border border-slate-100 rounded-xl p-4 relative">
                <button type="button" v-if="form.professional_works.length > 1"
                        class="absolute top-3 right-3 text-slate-300 hover:text-red-400 transition-colors text-xs"
                        @click="form.professional_works.splice(i, 1)">✕ Remove</button>
                <div class="grid gap-3">
                  <div>
                    <FLabel>Title / Description</FLabel>
                    <input v-model="work.title" type="text" class="f-input" />
                  </div>
                  <div>
                    <FLabel>Journal / Conference / Publisher</FLabel>
                    <input v-model="work.publisher" type="text" class="f-input" />
                  </div>
                  <div>
                    <FLabel>Year</FLabel>
                    <input v-model="work.year" type="number" min="1950" max="2099" class="f-input" />
                  </div>
                </div>
              </div>
            </div>
            <button type="button" v-if="form.professional_works.length < 4"
                    class="mt-3 text-xs text-primary font-semibold hover:underline" @click="addWork">
              + Add Work
            </button>
          </FormCard>

          <!-- 7. Areas of Interest -->
          <FormCard title="Areas of Interest in Transport &amp; Logistics">
            <div class="grid sm:grid-cols-2 gap-2">
              <label v-for="area in INTEREST_AREAS" :key="area" class="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                <input type="checkbox" :value="area" v-model="form.areas_of_interest" class="rounded border-slate-300 text-primary focus:ring-primary/30" />
                {{ area }}
              </label>
            </div>
            <div class="mt-3">
              <FLabel>Other (please specify)</FLabel>
              <input v-model="form.areas_other" type="text" class="f-input" />
            </div>
          </FormCard>

          <!-- 8. Membership Declaration -->
          <FormCard title="Membership Declaration">
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="sm:col-span-2">
                <FLabel required>Applying for Membership Category</FLabel>
                <select v-model="form.apply_for" class="f-input" required>
                  <option value="">— Select Category —</option>
                  <option v-for="cat in CATEGORIES" :key="cat" :value="cat">{{ cat }}</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <FLabel>Upgrading From (if applicable)</FLabel>
                <select v-model="form.upgrade_from" class="f-input">
                  <option value="">— N/A —</option>
                  <option v-for="cat in CATEGORIES" :key="cat" :value="cat">{{ cat }}</option>
                </select>
              </div>
              <div>
                <FLabel>Current Membership No. (if upgrading)</FLabel>
                <input v-model="form.current_mem_no" type="text" class="f-input" />
              </div>
              <div>
                <FLabel>MS Number (if applicable)</FLabel>
                <input v-model="form.ms_number" type="text" class="f-input" />
              </div>
            </div>
          </FormCard>

          <!-- 9. Proposers -->
          <FormCard title="Proposers">
            <p class="text-xs text-slate-400 mb-4">Two SLSTL members must propose your application.</p>
            <div class="space-y-4">
              <div v-for="(proposer, i) in form.proposers" :key="i"
                   class="border border-slate-100 rounded-xl p-4">
                <p class="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Proposer {{ i + 1 }}</p>
                <div class="grid sm:grid-cols-2 gap-3">
                  <div class="sm:col-span-2">
                    <FLabel :required="i === 0">Full Name</FLabel>
                    <input v-model="proposer.name" type="text" class="f-input" :required="i === 0" />
                  </div>
                  <div>
                    <FLabel :required="i === 0">Membership No.</FLabel>
                    <input v-model="proposer.mem_no" type="text" class="f-input" :required="i === 0" />
                  </div>
                </div>
              </div>
            </div>
          </FormCard>

          <!-- Submit -->
          <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
            <p class="text-sm text-slate-600">
              By submitting this application, I declare that the information provided is true and correct to the best of my knowledge.
              I agree to abide by the Constitution and By-laws of SLSTL.
            </p>
            <p v-if="error" class="text-sm text-red-500 bg-red-50 rounded-lg px-4 py-3">{{ error }}</p>
            <p v-if="success" class="text-sm text-emerald-700 bg-emerald-50 rounded-lg px-4 py-3">{{ success }}</p>
            <button type="submit" :disabled="submitting"
                    class="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
              <span v-if="submitting">Submitting Application…</span>
              <span v-else>Submit Application</span>
            </button>
          </div>

        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Apply for Membership — SLSTL' })

const TITLES = ['Mr.', 'Mrs.', 'Ms.', 'Miss', 'Dr.', 'Prof.', 'Eng.', 'Rev.']

const CATEGORIES = [
  'Temporary Member', 'Graduate Student Member', 'Associate Member',
  'Regular Member', 'Fellow Member', 'Life Member', 'Honorary Member',
]

const INTEREST_AREAS = [
  'Urban Transport Planning', 'Rural Transport', 'Public Transport',
  'Road Safety', 'Traffic Engineering', 'Freight & Logistics',
  'Maritime Transport', 'Air Transport', 'Rail Transport',
  'Sustainable Transport', 'Transport Economics', 'Transport Policy & Regulation',
  'Intelligent Transport Systems', 'Non-motorised Transport',
]

function emptyEmployment() {
  return { organisation: '', position: '', from_date: '', to_date: '' }
}
function emptyQual() {
  return { degree: '', institution: '', year: '' }
}
function emptyWork() {
  return { title: '', publisher: '', year: '' }
}

const form = reactive({
  // account
  email: '', password: '', confirmPassword: '',
  // personal
  title: '', full_name: '', name_with_initials: '', gender: '', nic_no: '', age: '',
  // contact
  address: '', mobile: '', phone_home: '', phone_office: '', fax: '',
  // arrays
  employment: [emptyEmployment()],
  qualifications: [emptyQual()],
  professional_works: [emptyWork()],
  areas_of_interest: [] as string[],
  areas_other: '',
  // membership
  apply_for: '', upgrade_from: '', current_mem_no: '', ms_number: '',
  // proposers
  proposers: [{ name: '', mem_no: '' }, { name: '', mem_no: '' }],
})

function addEmployment()   { form.employment.push(emptyEmployment()) }
function addQualification(){ form.qualifications.push(emptyQual()) }
function addWork()         { form.professional_works.push(emptyWork()) }

const submitting = ref(false)
const error      = ref('')
const success    = ref('')

async function submit() {
  error.value   = ''
  success.value = ''

  if (form.password !== form.confirmPassword) {
    error.value = 'Passwords do not match.'
    return
  }

  submitting.value = true
  try {
    const areas = [
      ...form.areas_of_interest,
      ...(form.areas_other ? [form.areas_other] : []),
    ]

    await $fetch('/api/auth/register', {
      method: 'POST',
      body: {
        email:              form.email,
        password:           form.password,
        title:              form.title,
        full_name:          form.full_name,
        name_with_initials: form.name_with_initials,
        gender:             form.gender,
        nic_no:             form.nic_no,
        age:                form.age,
        address:            form.address,
        mobile:             form.mobile,
        phone_home:         form.phone_home,
        phone_office:       form.phone_office,
        fax:                form.fax,
        employment:         form.employment.filter(e => e.organisation || e.position),
        qualifications:     form.qualifications.filter(q => q.degree),
        professional_works: form.professional_works.filter(w => w.title),
        areas_of_interest:  areas,
        apply_for:          form.apply_for,
        upgrade_from:       form.upgrade_from,
        current_mem_no:     form.current_mem_no,
        ms_number:          form.ms_number,
        proposers:          form.proposers,
      },
    })

    success.value = 'Your application has been submitted. You will receive a confirmation once reviewed by our team. Please log in to track your status.'
    await navigateTo('/pending')
  } catch (e: any) {
    error.value = e?.data?.statusMessage ?? 'Submission failed. Please try again.'
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.f-input {
  @apply w-full text-sm border border-slate-200 rounded-lg px-3.5 py-2.5
         focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition;
}
</style>
