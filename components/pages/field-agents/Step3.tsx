'use client';

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

function RadioGroup({ name, value, onChange }: { name: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex gap-6 mt-1">
      {['Yes', 'No'].map(v => (
        <label key={v} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={name}
            value={v}
            checked={value === v}
            onChange={() => onChange(v)}
            className="w-4 h-4 accent-[#0A2342]"
          />
          <span className="text-sm text-gray-700">{v}</span>
        </label>
      ))}
    </div>
  );
}

const languageOptions = ['English', 'Hausa', 'Yoruba', 'Igbo', 'Fulfulde', 'Tiv', 'Kanuri', 'Other'];

export default function Step3({ data, errors, onChange, onMultiChange }: StepProps) {
  return (
    <div className="space-y-8">
      {/* Section 8: Equipment */}
      <div>
        <h3 className={sectionHeader}>Section 8 — Equipment Available</h3>
        <div className="space-y-5">
          <Field label="Android Smartphone" required error={errors.hasAndroidSmartphone}>
            <RadioGroup name="hasAndroidSmartphone" value={data.hasAndroidSmartphone} onChange={v => onChange('hasAndroidSmartphone', v)} />
          </Field>
          <Field label="Laptop" required error={errors.hasLaptop}>
            <RadioGroup name="hasLaptop" value={data.hasLaptop} onChange={v => onChange('hasLaptop', v)} />
          </Field>
          <Field label="Reliable Internet Access" required error={errors.hasReliableInternet}>
            <RadioGroup name="hasReliableInternet" value={data.hasReliableInternet} onChange={v => onChange('hasReliableInternet', v)} />
          </Field>
        </div>
      </div>

      {/* Section 9: Languages */}
      <div>
        <h3 className={sectionHeader}>Section 9 — Language Proficiency</h3>
        <p className="text-sm text-gray-500 mb-4">Select all that apply.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {languageOptions.map(lang => (
            <label key={lang} className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={data.languages.includes(lang)}
                onChange={e => onMultiChange('languages', lang, e.target.checked)}
                className="w-4 h-4 rounded accent-[#0A2342]"
              />
              <span className="text-sm text-gray-700">{lang}</span>
            </label>
          ))}
        </div>
        {data.languages.includes('Other') && (
          <Field label="Other Language (Specify)">
            <input
              type="text"
              value={data.otherLanguage}
              onChange={e => onChange('otherLanguage', e.target.value)}
              placeholder="Specify other language"
              className={`${inputCls} border-gray-300`}
            />
          </Field>
        )}
      </div>

      {/* Section 10: References */}
      <div>
        <h3 className={sectionHeader}>Section 10 — References</h3>
        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm font-semibold text-[#0A2342] mb-4">Reference One</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Field label="Full Name" required error={errors.ref1Name}>
                <input
                  type="text"
                  value={data.ref1Name}
                  onChange={e => onChange('ref1Name', e.target.value)}
                  placeholder="Full name"
                  className={`${inputCls} ${errors.ref1Name ? 'border-red-400' : 'border-gray-300'} bg-white`}
                />
              </Field>
              <Field label="Relationship" required error={errors.ref1Relationship}>
                <input
                  type="text"
                  value={data.ref1Relationship}
                  onChange={e => onChange('ref1Relationship', e.target.value)}
                  placeholder="e.g. Employer, Colleague"
                  className={`${inputCls} ${errors.ref1Relationship ? 'border-red-400' : 'border-gray-300'} bg-white`}
                />
              </Field>
              <Field label="Phone Number" required error={errors.ref1Phone}>
                <input
                  type="tel"
                  value={data.ref1Phone}
                  onChange={e => onChange('ref1Phone', e.target.value)}
                  placeholder="+234..."
                  className={`${inputCls} ${errors.ref1Phone ? 'border-red-400' : 'border-gray-300'} bg-white`}
                />
              </Field>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm font-semibold text-[#0A2342] mb-4">Reference Two</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Field label="Full Name" required error={errors.ref2Name}>
                <input
                  type="text"
                  value={data.ref2Name}
                  onChange={e => onChange('ref2Name', e.target.value)}
                  placeholder="Full name"
                  className={`${inputCls} ${errors.ref2Name ? 'border-red-400' : 'border-gray-300'} bg-white`}
                />
              </Field>
              <Field label="Relationship" required error={errors.ref2Relationship}>
                <input
                  type="text"
                  value={data.ref2Relationship}
                  onChange={e => onChange('ref2Relationship', e.target.value)}
                  placeholder="e.g. Employer, Colleague"
                  className={`${inputCls} ${errors.ref2Relationship ? 'border-red-400' : 'border-gray-300'} bg-white`}
                />
              </Field>
              <Field label="Phone Number" required error={errors.ref2Phone}>
                <input
                  type="tel"
                  value={data.ref2Phone}
                  onChange={e => onChange('ref2Phone', e.target.value)}
                  placeholder="+234..."
                  className={`${inputCls} ${errors.ref2Phone ? 'border-red-400' : 'border-gray-300'} bg-white`}
                />
              </Field>
            </div>
          </div>
        </div>
      </div>

      {/* Section 11: Emergency Contact */}
      <div>
        <h3 className={sectionHeader}>Section 11 — Emergency Contact</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Field label="Full Name" required error={errors.emergencyName}>
            <input
              type="text"
              value={data.emergencyName}
              onChange={e => onChange('emergencyName', e.target.value)}
              placeholder="Full name"
              className={`${inputCls} ${errors.emergencyName ? 'border-red-400' : 'border-gray-300'}`}
            />
          </Field>
          <Field label="Relationship" required error={errors.emergencyRelationship}>
            <input
              type="text"
              value={data.emergencyRelationship}
              onChange={e => onChange('emergencyRelationship', e.target.value)}
              placeholder="e.g. Spouse, Parent"
              className={`${inputCls} ${errors.emergencyRelationship ? 'border-red-400' : 'border-gray-300'}`}
            />
          </Field>
          <Field label="Phone Number" required error={errors.emergencyPhone}>
            <input
              type="tel"
              value={data.emergencyPhone}
              onChange={e => onChange('emergencyPhone', e.target.value)}
              placeholder="+234..."
              className={`${inputCls} ${errors.emergencyPhone ? 'border-red-400' : 'border-gray-300'}`}
            />
          </Field>
        </div>
      </div>
    </div>
  );
}
