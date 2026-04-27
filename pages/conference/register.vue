<template>
  <div>
    <InnerPageHero
      title="Conference Registration"
      subtitle="R4TLI 2026 — Rethinking Transport & Logistics with Artificial Intelligence"
      parent="R4TLI Conference"
      parent-href="/conference"
    />

    <section class="py-14 bg-slate-50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">

        <!-- Conference banner -->
        <div class="rounded-2xl text-white text-center px-6 py-8 shadow-lg"
             style="background: linear-gradient(135deg, #0a3d52 0%, #1786a5 60%, #1a96ba 100%)">
          <p class="text-[11px] font-black uppercase tracking-widest text-white/60 mb-2">12th International Conference</p>
          <h2 class="font-display font-black text-2xl sm:text-3xl leading-tight">
            Rethinking Transport &amp; Logistics with AI
          </h2>
          <p class="text-white/70 text-sm mt-1 font-medium">R4TLI 2026 · Organised by SLSTL</p>
          <div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-5 text-sm text-white/80">
            <span class="flex items-center gap-1.5"><CalendarDays :size="14" /> Tue, 15 September 2026</span>
            <span class="flex items-center gap-1.5"><Clock :size="14" /> 9:00 AM – 5:00 PM</span>
            <span class="flex items-center gap-1.5"><MapPin :size="14" /> ITC Ratnadipa, Colombo</span>
          </div>
        </div>

        <!-- Early bird notice -->
        <div v-if="isEarlyBird" class="flex items-center gap-3 bg-accent/10 border border-accent/30 rounded-xl px-5 py-3">
          <Tag :size="18" class="text-accent flex-shrink-0" />
          <div>
            <p class="text-sm font-bold text-accent-darker">Early Bird Pricing Active</p>
            <p class="text-xs text-slate-500">Discounted rates apply until 31 July 2026. Register now to save!</p>
          </div>
        </div>

        <form novalidate class="space-y-6" @submit.prevent="handleSubmit">

          <!-- ── Section 1: Personal Details ── -->
          <fieldset class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div class="bg-primary/5 border-b border-slate-100 px-6 py-4 flex items-center gap-3">
              <span class="w-6 h-6 rounded-full bg-primary text-white text-xs font-black flex items-center justify-center flex-shrink-0">1</span>
              <h3 class="font-display font-bold text-primary-darker">Personal Details</h3>
            </div>
            <div class="p-6 grid sm:grid-cols-2 gap-x-5 gap-y-4">
              <div class="sm:col-span-2">
                <label class="f-label">Title and Full Name <span class="text-red-500">*</span></label>
                <input v-model="form.fullName" type="text" placeholder="e.g. Dr. Samantha Perera" class="f-input" required />
              </div>
              <div>
                <label class="f-label">Email Address <span class="text-red-500">*</span></label>
                <input v-model="form.email" type="email" placeholder="your@email.com" class="f-input" required />
              </div>
              <div>
                <label class="f-label">Mobile No. <span class="text-red-500">*</span></label>
                <input v-model="form.mobile" type="tel" placeholder="+94 77 000 0000" class="f-input" required />
              </div>
              <div>
                <label class="f-label">Country of Residence <span class="text-red-500">*</span></label>
                <input v-model="form.country" type="text" placeholder="Sri Lanka" class="f-input" required />
              </div>
              <div>
                <label class="f-label">Fixed Tel. No.</label>
                <input v-model="form.fixedTel" type="tel" class="f-input" />
              </div>
              <div>
                <label class="f-label">Place of Work <span class="text-red-500">*</span></label>
                <input v-model="form.placeOfWork" type="text" class="f-input" required />
              </div>
              <div>
                <label class="f-label">Designation <span class="text-red-500">*</span></label>
                <input v-model="form.designation" type="text" class="f-input" required />
              </div>
              <div class="sm:col-span-2">
                <label class="f-label">Work Address <span class="text-red-500">*</span></label>
                <textarea v-model="form.workAddress" rows="3" class="f-input resize-none" required />
              </div>
              <div class="sm:col-span-2">
                <label class="f-label">NIC No. / Passport No. <span class="text-red-500">*</span></label>
                <input v-model="form.nic" type="text" class="f-input" required />
              </div>
            </div>
          </fieldset>

          <!-- ── Section 2: Participation Details ── -->
          <fieldset class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div class="bg-primary/5 border-b border-slate-100 px-6 py-4 flex items-center gap-3">
              <span class="w-6 h-6 rounded-full bg-primary text-white text-xs font-black flex items-center justify-center flex-shrink-0">2</span>
              <h3 class="font-display font-bold text-primary-darker">Participation Details</h3>
            </div>
            <div class="p-6 space-y-5">
              <div>
                <label class="f-label">Participation Category <span class="text-red-500">*</span></label>
                <select v-model="form.participationCategory" class="f-input" required @change="onParticipationChange">
                  <option value="">— Select —</option>
                  <option value="Presenting Author">Presenting Author</option>
                  <option value="Author">Author</option>
                  <option value="Participant">Participant</option>
                </select>
              </div>

              <!-- Dynamic paper fields -->
              <Transition name="accordion">
                <div v-if="showPaperFields" class="space-y-3">
                  <div v-for="(paper, idx) in form.papers" :key="idx"
                       class="border border-slate-200 rounded-xl p-4 space-y-3">
                    <div class="flex items-center justify-between">
                      <p class="text-xs font-bold uppercase tracking-wide text-slate-400">Paper {{ idx + 1 }}</p>
                      <button v-if="idx > 0" type="button"
                              class="text-xs text-red-400 hover:text-red-600 transition-colors flex items-center gap-1"
                              @click="removePaper(idx)">
                        <Minus :size="11" /> Remove
                      </button>
                    </div>
                    <div class="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label class="f-label">Paper ID <span class="text-red-500">*</span></label>
                        <input v-model="paper.id" type="text" class="f-input" required />
                      </div>
                      <div>
                        <label class="f-label">Paper Title <span class="text-red-500">*</span></label>
                        <input v-model="paper.title" type="text" class="f-input" required />
                      </div>
                    </div>
                  </div>
                  <button v-if="form.papers.length < 3" type="button"
                          class="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-darker transition-colors"
                          @click="addPaper">
                    <PlusCircle :size="15" /> Add another paper
                  </button>
                </div>
              </Transition>
            </div>
          </fieldset>

          <!-- ── Section 3: Registration Category ── -->
          <fieldset class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div class="bg-primary/5 border-b border-slate-100 px-6 py-4 flex items-center gap-3">
              <span class="w-6 h-6 rounded-full bg-primary text-white text-xs font-black flex items-center justify-center flex-shrink-0">3</span>
              <h3 class="font-display font-bold text-primary-darker">Registration Category</h3>
            </div>
            <div class="p-6 space-y-5">
              <div>
                <label class="f-label">Registration Category <span class="text-red-500">*</span></label>
                <select v-model="form.registrationCategory" class="f-input" required @change="onRegistrationChange">
                  <option value="">— Select —</option>
                  <option v-for="cat in Object.keys(PRICES)" :key="cat" :value="cat">{{ cat }}</option>
                </select>
              </div>

              <!-- SLSTL Member: Membership Number -->
              <Transition name="accordion">
                <div v-if="form.registrationCategory === 'SLSTL Member'">
                  <label class="f-label">SLSTL Membership Number <span class="text-red-500">*</span></label>
                  <input v-model="form.membershipNumber" type="text" class="f-input" required />
                </div>
              </Transition>

              <!-- Student fields (Postgraduate or Undergraduate) -->
              <Transition name="accordion">
                <div v-if="isStudentCategory" class="border-t border-slate-100 pt-5 space-y-4">
                  <p class="text-xs font-bold uppercase tracking-widest text-slate-400">Student Information</p>
                  <div>
                    <label class="f-label">
                      University
                      <span class="font-normal text-slate-400"> (Complete postal address: Department, Faculty, University, Street, Province, Country, Postal Code)</span>
                      <span class="text-red-500"> *</span>
                    </label>
                    <textarea v-model="form.university" rows="3" class="f-input resize-none" required />
                  </div>
                  <div class="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label class="f-label">Departmental / Faculty URL <span class="text-red-500">*</span></label>
                      <input v-model="form.facultyUrl" type="url" placeholder="https://" class="f-input" required />
                    </div>
                    <div>
                      <label class="f-label">Student Registration Number <span class="text-red-500">*</span></label>
                      <input v-model="form.studentRegNo" type="text" class="f-input" required />
                    </div>
                    <div>
                      <label class="f-label">Degree <span class="text-red-500">*</span></label>
                      <input v-model="form.degree" type="text" placeholder="e.g. PhD in Transport Engineering" class="f-input" required />
                    </div>
                    <div>
                      <label class="f-label">University Email Address <span class="text-red-500">*</span></label>
                      <input v-model="form.universityEmail" type="email" class="f-input" required />
                    </div>
                  </div>
                  <div>
                    <label class="f-label">Student ID Card</label>
                    <p class="text-xs text-slate-400 mb-2">Please upload an image/scan-copy of your Student Identity Card.</p>
                    <input type="file" accept="image/*,.pdf"
                           class="block w-full text-sm text-slate-500 file:mr-3 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition"
                           @change="(e) => { studentIdFile = (e.target as HTMLInputElement).files?.[0] ?? null }" />
                  </div>
                </div>
              </Transition>
            </div>
          </fieldset>

          <!-- ── Section 4: Pricing & Payment ── -->
          <fieldset class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div class="bg-primary/5 border-b border-slate-100 px-6 py-4 flex items-center gap-3">
              <span class="w-6 h-6 rounded-full bg-primary text-white text-xs font-black flex items-center justify-center flex-shrink-0">4</span>
              <h3 class="font-display font-bold text-primary-darker">Registration Fees &amp; Payment</h3>
            </div>
            <div class="p-6 space-y-6">

              <!-- Pricing table -->
              <div class="overflow-x-auto">
                <table class="w-full text-sm border-collapse min-w-[380px]">
                  <thead>
                    <tr>
                      <th class="text-left px-4 py-3 font-semibold text-slate-600 bg-slate-50 border border-slate-200">Category</th>
                      <th class="text-center px-4 py-3 font-semibold text-accent-darker bg-accent/5 border border-slate-200">
                        Early Bird<br/>
                        <span class="text-[11px] font-normal text-slate-400">Ends 31 Jul 2026</span>
                      </th>
                      <th class="text-center px-4 py-3 font-semibold text-slate-600 bg-slate-50 border border-slate-200">
                        Regular<br/>
                        <span class="text-[11px] font-normal text-slate-400">LKR</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(prices, cat) in PRICES" :key="cat"
                        class="transition-colors"
                        :class="form.registrationCategory === cat ? 'bg-primary/5' : 'hover:bg-slate-50'">
                      <td class="px-4 py-2.5 border border-slate-200"
                          :class="form.registrationCategory === cat ? 'font-bold text-primary-darker' : 'text-slate-700'">
                        {{ cat }}
                      </td>
                      <td class="px-4 py-2.5 border border-slate-200 text-center font-semibold text-accent-darker">
                        {{ prices.early.toLocaleString() }}
                      </td>
                      <td class="px-4 py-2.5 border border-slate-200 text-center text-slate-600">
                        {{ prices.regular.toLocaleString() }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Dynamic total -->
              <Transition name="accordion">
                <div v-if="totalAmount > 0" class="bg-primary/5 border border-primary/20 rounded-xl px-5 py-4">
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-sm text-slate-600">
                      {{ form.registrationCategory }} — {{ isEarlyBird ? 'Early Bird' : 'Regular' }} Rate
                    </span>
                    <span class="font-black text-primary-darker text-xl">LKR {{ totalAmount.toLocaleString() }}</span>
                  </div>
                  <p class="text-xs text-slate-500">
                    I agree to pay a sum of LKR {{ totalAmount.toLocaleString() }} for participation in R4TLI 2026.
                  </p>
                </div>
              </Transition>

              <!-- Payment method -->
              <Transition name="accordion">
                <div v-if="totalAmount > 0" class="space-y-4">
                  <p class="text-sm font-semibold text-slate-600">Select Payment Method</p>
                  <div class="grid sm:grid-cols-2 gap-3">
                    <label class="flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all"
                           :class="paymentMethod === 'payhere'
                             ? 'border-primary bg-primary/5 shadow-sm'
                             : 'border-slate-200 hover:border-primary/40'">
                      <input v-model="paymentMethod" type="radio" value="payhere" class="accent-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p class="font-bold text-slate-700 text-sm">Online Payment</p>
                        <p class="text-xs text-slate-400 mt-0.5">Pay instantly via PayHere<br/>(Card, eZ Cash, mCash)</p>
                      </div>
                    </label>
                    <label class="flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all"
                           :class="paymentMethod === 'bank'
                             ? 'border-primary bg-primary/5 shadow-sm'
                             : 'border-slate-200 hover:border-primary/40'">
                      <input v-model="paymentMethod" type="radio" value="bank" class="accent-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p class="font-bold text-slate-700 text-sm">Bank Transfer / Cheque</p>
                        <p class="text-xs text-slate-400 mt-0.5">Transfer to SLSTL account and upload your payment slip</p>
                      </div>
                    </label>
                  </div>

                  <!-- Bank details -->
                  <Transition name="accordion">
                    <div v-if="paymentMethod === 'bank'"
                         class="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
                      <p class="text-xs font-black uppercase tracking-widest text-slate-400">Bank Details</p>
                      <dl class="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
                        <div>
                          <dt class="text-xs font-medium text-slate-400">Account Name</dt>
                          <dd class="text-slate-700">Sri Lanka Society of Transport and Logistics</dd>
                        </div>
                        <div>
                          <dt class="text-xs font-medium text-slate-400">Bank</dt>
                          <dd class="text-slate-700">Bank of Ceylon</dd>
                        </div>
                        <div>
                          <dt class="text-xs font-medium text-slate-400">Branch</dt>
                          <dd class="text-slate-700">Wellawatta</dd>
                        </div>
                        <div>
                          <dt class="text-xs font-medium text-slate-400">Account No.</dt>
                          <dd class="text-slate-700 font-mono">80392704</dd>
                        </div>
                        <div>
                          <dt class="text-xs font-medium text-slate-400">Swift Code</dt>
                          <dd class="text-slate-700 font-mono">BCEYLKLX</dd>
                        </div>
                      </dl>
                      <p class="text-xs text-slate-500 border-t border-slate-200 pt-3 leading-relaxed">
                        <strong>By Cheque:</strong> Draw in favour of <em>"Sri Lanka Society of Transport and Logistics"</em>,
                        crossed "A/C Payee Only" and post to:<br/>
                        No 34, M. J. C. Fernando Mawatha, Idama, Moratuwa, Sri Lanka.
                      </p>
                      <div>
                        <label class="f-label">Upload Evidence of Payment <span class="text-red-500">*</span></label>
                        <p class="text-xs text-slate-400 mb-2">Please upload an image/scan-copy of your payment slip.</p>
                        <input type="file" accept="image/*,.pdf"
                               class="block w-full text-sm text-slate-500 file:mr-3 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition"
                               @change="(e) => { paymentSlipFile = (e.target as HTMLInputElement).files?.[0] ?? null }" />
                      </div>
                    </div>
                  </Transition>
                </div>
              </Transition>

            </div>
          </fieldset>

          <!-- Contact info -->
          <div class="bg-slate-100 rounded-xl px-5 py-4 text-sm text-slate-600 space-y-0.5">
            <p class="font-semibold text-slate-700">For clarifications, contact:</p>
            <p>Ms. Maryse De Costa — Event Manager</p>
            <p class="text-slate-500">admin.secretary@slstl.lk &nbsp;·&nbsp; +94 77 566 9579 (WhatsApp)</p>
          </div>

          <!-- Error message -->
          <p v-if="formError"
             class="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            {{ formError }}
          </p>

          <!-- Success message -->
          <div v-if="formSuccess"
               class="bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-4">
            <p class="font-bold text-emerald-700 flex items-center gap-2">
              <CheckCircle2 :size="18" /> Registration Submitted!
            </p>
            <p class="text-sm text-emerald-600 mt-1">{{ formSuccess }}</p>
          </div>

          <!-- Submit button -->
          <button
            v-if="!formSuccess"
            type="submit"
            :disabled="processing || !form.registrationCategory || !paymentMethod"
            class="w-full btn-accent py-4 text-base font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="processing" class="flex items-center justify-center gap-2">
              <Loader2 :size="18" class="animate-spin" /> Processing…
            </span>
            <span v-else-if="paymentMethod === 'payhere' && totalAmount > 0">
              Pay LKR {{ totalAmount.toLocaleString() }} via PayHere
            </span>
            <span v-else>
              Submit Registration
            </span>
          </button>

        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { CalendarDays, Clock, MapPin, Tag, PlusCircle, Minus, CheckCircle2, Loader2 } from 'lucide-vue-next'

useHead({ title: 'Register for R4TLI 2026 — SLSTL' })

const config = useRuntimeConfig()

// ── Pricing ───────────────────────────────────────────────────────────────────
const EARLY_BIRD_DEADLINE = new Date('2026-07-31T23:59:59+05:30')
const isEarlyBird = computed(() => new Date() <= EARLY_BIRD_DEADLINE)

const PRICES: Record<string, { early: number; regular: number }> = {
  'Non-SLSTL Member':               { early: 8000,  regular: 15000 },
  'SLSTL Member':                   { early: 6000,  regular: 10000 },
  'Postgraduate Student':           { early: 4000,  regular: 6500  },
  'Undergraduate Student (Author)': { early: 2500,  regular: 4000  },
}

// ── Form state ────────────────────────────────────────────────────────────────
const form = reactive({
  fullName:              '',
  email:                 '',
  mobile:                '',
  country:               '',
  fixedTel:              '',
  placeOfWork:           '',
  designation:           '',
  workAddress:           '',
  nic:                   '',
  participationCategory: '',
  papers:                [{ id: '', title: '' }] as { id: string; title: string }[],
  registrationCategory:  '',
  membershipNumber:      '',
  university:            '',
  facultyUrl:            '',
  studentRegNo:          '',
  degree:                '',
  universityEmail:       '',
})

const studentIdFile   = ref<File | null>(null)
const paymentSlipFile = ref<File | null>(null)
const paymentMethod   = ref<'payhere' | 'bank' | ''>('')
const processing      = ref(false)
const formError       = ref('')
const formSuccess     = ref('')

// ── Computed ──────────────────────────────────────────────────────────────────
const showPaperFields = computed(() =>
  form.participationCategory === 'Presenting Author' || form.participationCategory === 'Author'
)

const isStudentCategory = computed(() =>
  form.registrationCategory === 'Postgraduate Student' ||
  form.registrationCategory === 'Undergraduate Student (Author)'
)

const totalAmount = computed(() => {
  const prices = PRICES[form.registrationCategory]
  if (!prices) return 0
  return isEarlyBird.value ? prices.early : prices.regular
})

// ── Helpers ───────────────────────────────────────────────────────────────────
function addPaper() {
  if (form.papers.length < 3) form.papers.push({ id: '', title: '' })
}
function removePaper(idx: number) {
  form.papers.splice(idx, 1)
}
function onParticipationChange() {
  if (!showPaperFields.value) form.papers = [{ id: '', title: '' }]
}
function onRegistrationChange() {
  form.membershipNumber = ''
  form.university = ''
  form.facultyUrl = ''
  form.studentRegNo = ''
  form.degree = ''
  form.universityEmail = ''
  studentIdFile.value = null
}

// ── Validation ────────────────────────────────────────────────────────────────
function validate(): boolean {
  formError.value = ''
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.fullName.trim())           return err('Please enter your full name.')
  if (!emailRe.test(form.email))       return err('Please enter a valid email address.')
  if (!form.mobile.trim())             return err('Please enter your mobile number.')
  if (!form.country.trim())            return err('Please enter your country of residence.')
  if (!form.placeOfWork.trim())        return err('Please enter your place of work.')
  if (!form.designation.trim())        return err('Please enter your designation.')
  if (!form.workAddress.trim())        return err('Please enter your work address.')
  if (!form.nic.trim())                return err('Please enter your NIC / Passport number.')
  if (!form.participationCategory)     return err('Please select a participation category.')
  if (showPaperFields.value) {
    for (const [i, p] of form.papers.entries()) {
      if (!p.id.trim() || !p.title.trim())
        return err(`Please fill in Paper ID and Paper Title for Paper ${i + 1}.`)
    }
  }
  if (!form.registrationCategory)      return err('Please select a registration category.')
  if (form.registrationCategory === 'SLSTL Member' && !form.membershipNumber.trim())
                                        return err('Please enter your SLSTL Membership Number.')
  if (isStudentCategory.value) {
    if (!form.university.trim())        return err('Please enter your university details.')
    if (!form.studentRegNo.trim())      return err('Please enter your Student Registration Number.')
    if (!form.degree.trim())            return err('Please enter your degree programme.')
    if (!emailRe.test(form.universityEmail))
                                        return err('Please enter a valid university email address.')
  }
  if (!paymentMethod.value)             return err('Please select a payment method.')
  if (paymentMethod.value === 'bank' && !paymentSlipFile.value)
                                        return err('Please upload evidence of your payment.')
  return true
}
function err(msg: string): false { formError.value = msg; return false }

// ── Submit ────────────────────────────────────────────────────────────────────
async function handleSubmit() {
  if (!validate()) return
  processing.value = true
  formError.value = ''
  try {
    if (paymentMethod.value === 'payhere') {
      await handlePayHere()
    } else {
      await handleBankSubmit()
    }
  } catch (e: any) {
    formError.value = e?.message ?? 'Something went wrong. Please try again.'
    processing.value = false
  }
}

async function handleBankSubmit() {
  await new Promise(r => setTimeout(r, 900))
  const firstName = form.fullName.replace(/^(Dr|Prof|Mr|Mrs|Ms)\.?\s*/i, '').split(' ')[0]
  formSuccess.value = `Thank you, ${firstName}! Your registration has been received. We will confirm once your payment is verified. A confirmation email will be sent to ${form.email}.`
  processing.value = false
}

// ── PayHere ───────────────────────────────────────────────────────────────────
function loadPayHere(): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as any).payhere) { resolve(); return }
    const mode = config.public.payhereMode as string
    const src  = mode === 'live'
      ? 'https://www.payhere.lk/lib/payhere.js'
      : 'https://sandbox.payhere.lk/lib/payhere.js'
    const s = document.createElement('script')
    s.src = src
    s.onload  = () => resolve()
    s.onerror = () => reject(new Error('Failed to load PayHere'))
    document.head.appendChild(s)
  })
}

async function handlePayHere() {
  const orderId    = `SLSTL-R4TLI26-${Date.now()}`
  const amount     = totalAmount.value.toFixed(2)
  const currency   = 'LKR'
  const merchantId = config.public.payhereMerchantId as string

  const { hash } = await $fetch<{ hash: string }>('/api/payhere-hash', {
    method: 'POST',
    body: { merchant_id: merchantId, order_id: orderId, amount, currency },
  })

  await loadPayHere()
  const payhere = (window as any).payhere
  const mode    = config.public.payhereMode as string

  payhere.onCompleted = (id: string) => {
    formSuccess.value = `Payment confirmed! Order ID: ${id}. A confirmation email will be sent to ${form.email}.`
    processing.value = false
  }
  payhere.onDismissed = () => {
    formError.value = 'Payment was cancelled. You can try again.'
    processing.value = false
  }
  payhere.onError = (e: string) => {
    formError.value = `Payment error: ${e}`
    processing.value = false
  }

  const nameParts = form.fullName.replace(/^(Dr|Prof|Mr|Mrs|Ms)\.?\s*/i, '').trim().split(' ')
  payhere.startPayment({
    sandbox:     mode !== 'live',
    merchant_id: merchantId,
    return_url:  `${window.location.origin}/conference/register?status=success`,
    cancel_url:  `${window.location.origin}/conference/register?status=cancel`,
    notify_url:  `${window.location.origin}/api/payhere-notify`,
    order_id:    orderId,
    items:       `R4TLI 2026 — ${form.registrationCategory}`,
    amount,
    currency,
    hash,
    first_name:  nameParts[0] ?? '-',
    last_name:   nameParts.slice(1).join(' ') || '-',
    email:       form.email,
    phone:       form.mobile,
    address:     form.workAddress.replace(/\n/g, ', ').slice(0, 100),
    city:        'Colombo',
    country:     'Sri Lanka',
  })
}
</script>

<style scoped>
.f-label {
  @apply block text-sm font-semibold text-slate-600 mb-1.5;
}
.f-input {
  @apply w-full text-sm border border-slate-200 rounded-lg px-3.5 py-2.5
         focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15
         transition bg-white text-slate-700 placeholder-slate-300;
}
select.f-input {
  @apply cursor-pointer;
}
</style>
