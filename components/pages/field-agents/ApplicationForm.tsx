'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Loader as Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { defaultFormData, type FieldAgentFormData, type FormErrors } from './types';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const STEPS = [
  { title: 'Personal & Contact', subtitle: 'Sections 1–3' },
  { title: 'Background', subtitle: 'Sections 4–7' },
  { title: 'References & Equipment', subtitle: 'Sections 8–11' },
  { title: 'Documents & Declaration', subtitle: 'Sections 12–14' },
];

function validateStep(step: number, data: FieldAgentFormData): FormErrors {
  const errors: FormErrors = {};
  if (step === 1) {
    if (!data.fullName.trim()) errors.fullName = 'Full name is required.';
    if (!data.dateOfBirth) errors.dateOfBirth = 'Date of birth is required.';
    if (!data.gender) errors.gender = 'Please select your gender.';
    if (!data.nationality.trim()) errors.nationality = 'Nationality is required.';
    if (!data.phoneNumber.trim()) errors.phoneNumber = 'Phone number is required.';
    if (!data.email.trim()) errors.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Enter a valid email address.';
    if (!data.residentialAddress.trim()) errors.residentialAddress = 'Residential address is required.';
    if (!data.stateOfResidence) errors.stateOfResidence = 'State of residence is required.';
    if (!data.town.trim()) errors.town = 'Town / community is required.';
    if (!data.willingToTravel) errors.willingToTravel = 'Please indicate if you are willing to travel.';
  }
  if (step === 2) {
    if (!data.highestQualification) errors.highestQualification = 'Highest qualification is required.';
    if (!data.fieldOfStudy.trim()) errors.fieldOfStudy = 'Field of study is required.';
    if (!data.institution.trim()) errors.institution = 'Institution name is required.';
    if (!data.currentOccupation.trim()) errors.currentOccupation = 'Current occupation is required.';
    if (!data.totalYearsExperience) errors.totalYearsExperience = 'Total years of experience is required.';
  }
  if (step === 3) {
    if (!data.ref1Name.trim()) errors.ref1Name = 'Reference name is required.';
    if (!data.ref1Relationship.trim()) errors.ref1Relationship = 'Relationship is required.';
    if (!data.ref1Phone.trim()) errors.ref1Phone = 'Phone number is required.';
    if (!data.ref2Name.trim()) errors.ref2Name = 'Reference name is required.';
    if (!data.ref2Relationship.trim()) errors.ref2Relationship = 'Relationship is required.';
    if (!data.ref2Phone.trim()) errors.ref2Phone = 'Phone number is required.';
    if (!data.emergencyName.trim()) errors.emergencyName = 'Emergency contact name is required.';
    if (!data.emergencyRelationship.trim()) errors.emergencyRelationship = 'Relationship is required.';
    if (!data.emergencyPhone.trim()) errors.emergencyPhone = 'Phone number is required.';
  }
  if (step === 4) {
    if (!data.availableImmediately) errors.availableImmediately = 'Please indicate availability.';
    if (!data.availableFullTime) errors.availableFullTime = 'Please indicate availability.';
    if (!data.availablePartTime) errors.availablePartTime = 'Please indicate availability.';
    if (!data.passportPhotographFile) errors.passportPhotographFile = 'Passport photograph is required.';
    if (!data.cvFile) errors.cvFile = 'CV / Resume is required.';
    if (!data.govtIdFile) errors.govtIdFile = 'Government ID is required.';
    if (!data.qualificationCertFile) errors.qualificationCertFile = 'Qualification certificate is required.';
    if (!data.declarationAgreed) errors.declarationAgreed = 'You must agree to the declaration to submit.';
  }
  return errors;
}

async function uploadFile(file: File, applicationId: string, slot: string): Promise<string | null> {
  const ext = file.name.split('.').pop();
  const path = `${applicationId}/${slot}.${ext}`;
  const { error } = await supabase.storage.from('field-agent-documents').upload(path, file, { upsert: true });
  if (error) return null;
  const { data } = supabase.storage.from('field-agent-documents').getPublicUrl(path);
  return data.publicUrl;
}

export default function ApplicationForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FieldAgentFormData>(defaultFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  function onChange(field: keyof FieldAgentFormData, value: string) {
    setFormData(prev => ({ ...prev, [field]: field === 'declarationAgreed' ? value === 'true' : value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  }

  function onMultiChange(field: keyof FieldAgentFormData, value: string, checked: boolean) {
    setFormData(prev => {
      const arr = (prev[field] as string[]) ?? [];
      return { ...prev, [field]: checked ? [...arr, value] : arr.filter((v: string) => v !== value) };
    });
  }

  function onFileChange(field: keyof FieldAgentFormData, file: File | null) {
    setFormData(prev => ({ ...prev, [field]: file }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  }

  function nextStep() {
    const errs = validateStep(step, formData);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStep(s => Math.min(s + 1, 4));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function prevStep() {
    setStep(s => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleSubmit() {
    const errs = validateStep(4, formData);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const applicationId = crypto.randomUUID();
      const [passportUrl, cvUrl, govtIdUrl, qualCertUrl] = await Promise.all([
        uploadFile(formData.passportPhotographFile!, applicationId, 'passport'),
        uploadFile(formData.cvFile!, applicationId, 'cv'),
        uploadFile(formData.govtIdFile!, applicationId, 'govt-id'),
        uploadFile(formData.qualificationCertFile!, applicationId, 'qualification-cert'),
      ]);

      const documentUrls = {
        passportPhotograph: passportUrl,
        cv: cvUrl,
        governmentId: govtIdUrl,
        qualificationCertificate: qualCertUrl,
      };

      const applicationData = {
        personalInfo: {
          fullName: formData.fullName, dateOfBirth: formData.dateOfBirth,
          gender: formData.gender, nationality: formData.nationality, nin: formData.nin,
        },
        contactInfo: {
          phoneNumber: formData.phoneNumber, whatsappNumber: formData.whatsappNumber,
          email: formData.email, residentialAddress: formData.residentialAddress,
          stateOfResidence: formData.stateOfResidence, lga: formData.lga,
          town: formData.town, postalCode: formData.postalCode,
        },
        workLocation: {
          statesWillingToWork: formData.statesWillingToWork,
          preferredLGAs: formData.preferredLGAs, willingToTravel: formData.willingToTravel,
        },
        education: {
          highestQualification: formData.highestQualification,
          fieldOfStudy: formData.fieldOfStudy, institution: formData.institution,
        },
        experience: {
          currentOccupation: formData.currentOccupation,
          totalYearsExperience: formData.totalYearsExperience,
          agricultureExperience: formData.agricultureExperience,
          extensionExperience: formData.extensionExperience,
          salesExperience: formData.salesExperience,
          communityMobilisationExperience: formData.communityMobilisationExperience,
          digitalDataExperience: formData.digitalDataExperience,
        },
        skills: {
          agricultureKnowledge: formData.agricultureKnowledge,
          technicalSkills: formData.technicalSkills,
        },
        equipment: {
          hasAndroidSmartphone: formData.hasAndroidSmartphone,
          hasLaptop: formData.hasLaptop,
          hasReliableInternet: formData.hasReliableInternet,
        },
        languages: { languages: formData.languages, otherLanguage: formData.otherLanguage },
        references: {
          ref1: { name: formData.ref1Name, relationship: formData.ref1Relationship, phone: formData.ref1Phone },
          ref2: { name: formData.ref2Name, relationship: formData.ref2Relationship, phone: formData.ref2Phone },
        },
        emergencyContact: {
          name: formData.emergencyName, relationship: formData.emergencyRelationship, phone: formData.emergencyPhone,
        },
        availability: {
          availableImmediately: formData.availableImmediately,
          availableFullTime: formData.availableFullTime,
          availablePartTime: formData.availablePartTime,
        },
      };

      const { error: dbError } = await supabase.from('field_agent_applications').insert({
        id: applicationId,
        full_name: formData.fullName,
        email: formData.email,
        phone_number: formData.phoneNumber,
        state_of_residence: formData.stateOfResidence,
        application_data: applicationData,
        document_urls: documentUrls,
      });

      if (dbError) throw new Error(dbError.message);

      // Trigger email via edge function (fire and forget — don't block on this)
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      if (supabaseUrl && supabaseKey) {
        fetch(`${supabaseUrl}/functions/v1/field-agent-submit`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${supabaseKey}`,
            apikey: supabaseKey,
          },
          body: JSON.stringify({ applicationId, applicationData, documentUrls }),
        }).catch(() => {});
      }

      router.push('/field-agents-application/success');
    } catch {
      setSubmitError('An error occurred while submitting your application. Please try again.');
      setIsSubmitting(false);
    }
  }

  const stepProps = { data: formData, errors, onChange, onMultiChange, onFileChange };
  const progress = ((step - 1) / (STEPS.length - 1)) * 100;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F0F2F5' }}>
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Logo + Header */}
        <div className="text-center mb-8">
          <img src="/Prexea_logo.png" alt="Prexea Technology Limited" className="h-14 mx-auto mb-5 object-contain" />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A2342] mb-3 uppercase tracking-wide">
            Field Agents Application Form
          </h1>
          <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            Thank you for your interest in becoming a Field Agent with Prexea Technology Limited.
            Please complete this application carefully and ensure that every piece of information
            provided is accurate. Applications with incomplete or false information may not be considered.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {STEPS.map((s, i) => {
              const num = i + 1;
              const isActive = step === num;
              const isDone = step > num;
              return (
                <div key={s.title} className="flex-1 flex flex-col items-center relative">
                  {i < STEPS.length - 1 && (
                    <div className="absolute top-4 left-1/2 w-full h-0.5" style={{ backgroundColor: isDone ? '#0A2342' : '#D1D5DB' }} />
                  )}
                  <div
                    className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? '#0A2342' : isDone ? '#5B8C51' : '#E5E7EB',
                      color: isActive || isDone ? '#fff' : '#6B7280',
                    }}
                  >
                    {isDone ? '✓' : num}
                  </div>
                  <div className="hidden sm:block mt-1 text-center">
                    <p className={`text-xs font-semibold ${isActive ? 'text-[#0A2342]' : 'text-gray-400'}`}>{s.title}</p>
                    <p className="text-xs text-gray-400">{s.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden mt-4">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, backgroundColor: '#0A2342' }}
            />
          </div>
          <p className="text-right text-xs text-gray-400 mt-1">Step {step} of {STEPS.length}</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100" style={{ backgroundColor: '#0A2342' }}>
            <h2 className="text-white font-bold text-base">{STEPS[step - 1].title}</h2>
            <p className="text-white/60 text-xs">{STEPS[step - 1].subtitle}</p>
          </div>

          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                {step === 1 && <Step1 {...stepProps} />}
                {step === 2 && <Step2 {...stepProps} />}
                {step === 3 && <Step3 {...stepProps} />}
                {step === 4 && <Step4 {...stepProps} />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="px-6 sm:px-8 pb-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={prevStep}
              disabled={step === 1 || isSubmitting}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <div className="flex flex-col items-end gap-1">
              {submitError && <p className="text-xs text-red-500 text-right">{submitError}</p>}
              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-lg text-white transition-colors"
                  style={{ backgroundColor: '#0A2342' }}
                >
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-8 py-3 text-sm font-bold rounded-lg text-white uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                  style={{ backgroundColor: isSubmitting ? '#6B7280' : '#0A2342' }}
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" />Submitting...</>
                  ) : 'Submit Application'}
                </button>
              )}
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Fields marked with <span className="text-red-500">*</span> are required.
        </p>
      </div>
    </div>
  );
}
