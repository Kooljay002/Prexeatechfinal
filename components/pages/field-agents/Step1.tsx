'use client';

import { nigeriaStates, nigeriaLGAs } from './nigeriaData';
import type { StepProps } from './types';

const inputCls = 'w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#0A2342]/30 transition-colors';
const labelCls = 'block text-sm font-semibold text-[#0A2342] mb-1.5';
const errorCls = 'text-xs text-red-500 mt-1';
const sectionHeader = 'text-base font-bold text-[#0A2342] mb-4 pb-2 border-b border-gray-200';

function Field({ label, required, error, children }: {
  label: string; required?: boolean; error?: string; children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelCls}>
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className={errorCls}>{error}</p>}
    </div>
  );
}

export default function Step1({ data, errors, onChange, onMultiChange }: StepProps) {
  const residenceLGAs = data.stateOfResidence ? (nigeriaLGAs[data.stateOfResidence] ?? []) : [];
  const workLGAs = data.statesWillingToWork.flatMap(s => nigeriaLGAs[s] ?? []);

  return (
    <div className="space-y-8">
      {/* Section 1: Personal Information */}
      <div>
        <h3 className={sectionHeader}>Section 1 — Personal Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2">
            <Field label="Full Name" required error={errors.fullName}>
              <input
                type="text"
                value={data.fullName}
                onChange={e => onChange('fullName', e.target.value)}
                placeholder="Enter your full legal name"
                className={`${inputCls} ${errors.fullName ? 'border-red-400' : 'border-gray-300'}`}
              />
            </Field>
          </div>
          <Field label="Date of Birth" required error={errors.dateOfBirth}>
            <input
              type="date"
              value={data.dateOfBirth}
              onChange={e => onChange('dateOfBirth', e.target.value)}
              className={`${inputCls} ${errors.dateOfBirth ? 'border-red-400' : 'border-gray-300'}`}
            />
          </Field>
          <Field label="Gender" required error={errors.gender}>
            <select
              value={data.gender}
              onChange={e => onChange('gender', e.target.value)}
              className={`${inputCls} ${errors.gender ? 'border-red-400' : 'border-gray-300'}`}
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </Field>
          <Field label="Nationality" required error={errors.nationality}>
            <input
              type="text"
              value={data.nationality}
              onChange={e => onChange('nationality', e.target.value)}
              placeholder="e.g. Nigerian"
              className={`${inputCls} ${errors.nationality ? 'border-red-400' : 'border-gray-300'}`}
            />
          </Field>
          <Field label="National Identification Number (NIN)" error={errors.nin}>
            <input
              type="text"
              value={data.nin}
              onChange={e => onChange('nin', e.target.value)}
              placeholder="Optional"
              className={`${inputCls} border-gray-300`}
            />
          </Field>
        </div>
      </div>

      {/* Section 2: Contact Information */}
      <div>
        <h3 className={sectionHeader}>Section 2 — Contact Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Phone Number" required error={errors.phoneNumber}>
            <input
              type="tel"
              value={data.phoneNumber}
              onChange={e => onChange('phoneNumber', e.target.value)}
              placeholder="+234..."
              className={`${inputCls} ${errors.phoneNumber ? 'border-red-400' : 'border-gray-300'}`}
            />
          </Field>
          <Field label="WhatsApp Number" error={errors.whatsappNumber}>
            <input
              type="tel"
              value={data.whatsappNumber}
              onChange={e => onChange('whatsappNumber', e.target.value)}
              placeholder="If different from phone number"
              className={`${inputCls} border-gray-300`}
            />
          </Field>
          <Field label="Email Address" required error={errors.email}>
            <input
              type="email"
              value={data.email}
              onChange={e => onChange('email', e.target.value)}
              placeholder="you@example.com"
              className={`${inputCls} ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
            />
          </Field>
          <Field label="Postal Code" error={errors.postalCode}>
            <input
              type="text"
              value={data.postalCode}
              onChange={e => onChange('postalCode', e.target.value)}
              placeholder="Optional"
              className={`${inputCls} border-gray-300`}
            />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Residential Address" required error={errors.residentialAddress}>
              <textarea
                value={data.residentialAddress}
                onChange={e => onChange('residentialAddress', e.target.value)}
                placeholder="Enter your full residential address"
                rows={2}
                className={`${inputCls} resize-none ${errors.residentialAddress ? 'border-red-400' : 'border-gray-300'}`}
              />
            </Field>
          </div>
          <Field label="State of Residence" required error={errors.stateOfResidence}>
            <select
              value={data.stateOfResidence}
              onChange={e => { onChange('stateOfResidence', e.target.value); onChange('lga', ''); }}
              className={`${inputCls} ${errors.stateOfResidence ? 'border-red-400' : 'border-gray-300'}`}
            >
              <option value="">Select state</option>
              {nigeriaStates.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </Field>
          <Field label="Local Government Area" error={errors.lga}>
            <select
              value={data.lga}
              onChange={e => onChange('lga', e.target.value)}
              disabled={!data.stateOfResidence}
              className={`${inputCls} border-gray-300 disabled:bg-gray-100 disabled:text-gray-400`}
            >
              <option value="">Select LGA</option>
              {residenceLGAs.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </Field>
          <div className="sm:col-span-2">
            <Field label="Town / Community" required error={errors.town}>
              <input
                type="text"
                value={data.town}
                onChange={e => onChange('town', e.target.value)}
                placeholder="Enter your town or community"
                className={`${inputCls} ${errors.town ? 'border-red-400' : 'border-gray-300'}`}
              />
            </Field>
          </div>
        </div>
      </div>

      {/* Section 3: Preferred Work Location */}
      <div>
        <h3 className={sectionHeader}>Section 3 — Preferred Work Location</h3>
        <div className="space-y-5">
          <Field label="State(s) Willing to Work" error={errors.statesWillingToWork as string}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-4 border border-gray-200 rounded-lg max-h-48 overflow-y-auto">
              {nigeriaStates.map(s => (
                <label key={s} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={data.statesWillingToWork.includes(s)}
                    onChange={e => onMultiChange('statesWillingToWork', s, e.target.checked)}
                    className="w-4 h-4 rounded accent-[#0A2342]"
                  />
                  <span className="text-sm text-gray-700">{s}</span>
                </label>
              ))}
            </div>
          </Field>

          {data.statesWillingToWork.length > 0 && (
            <Field label="Preferred LGA(s)" error={errors.preferredLGAs as string}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-4 border border-gray-200 rounded-lg max-h-48 overflow-y-auto">
                {workLGAs.map(l => (
                  <label key={l} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={data.preferredLGAs.includes(l)}
                      onChange={e => onMultiChange('preferredLGAs', l, e.target.checked)}
                      className="w-4 h-4 rounded accent-[#0A2342]"
                    />
                    <span className="text-sm text-gray-700">{l}</span>
                  </label>
                ))}
              </div>
            </Field>
          )}

          <Field label="Are you willing to travel?" required error={errors.willingToTravel}>
            <div className="flex gap-6 mt-1">
              {['Yes', 'No'].map(v => (
                <label key={v} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="willingToTravel"
                    value={v}
                    checked={data.willingToTravel === v}
                    onChange={() => onChange('willingToTravel', v)}
                    className="w-4 h-4 accent-[#0A2342]"
                  />
                  <span className="text-sm text-gray-700">{v}</span>
                </label>
              ))}
            </div>
          </Field>
        </div>
      </div>
    </div>
  );
}
