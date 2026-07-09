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

const agricultureKnowledgeOptions = [
  'Maize Production', 'Horticulture', 'Fall Armyworm Identification',
  'Pest Management', 'Farmer Training', 'Crop Monitoring',
];

const technicalSkillsOptions = [
  'Smartphone Proficiency', 'GPS Navigation', 'Microsoft Excel', 'Google Forms',
  'Mobile Data Collection Applications', 'Email Communication', 'Report Writing',
  'Photography', 'Video Documentation',
];

const qualificationOptions = [
  'Secondary School Certificate', 'OND', 'HND', "Bachelor's Degree",
  "Master's Degree", 'PhD', 'Professional Certification', 'Other',
];

const experienceYears = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10+', '15+', '20+'];

export default function Step2({ data, errors, onChange, onMultiChange }: StepProps) {
  return (
    <div className="space-y-8">
      {/* Section 4: Education */}
      <div>
        <h3 className={sectionHeader}>Section 4 — Educational Background</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2">
            <Field label="Highest Qualification" required error={errors.highestQualification}>
              <select
                value={data.highestQualification}
                onChange={e => onChange('highestQualification', e.target.value)}
                className={`${inputCls} ${errors.highestQualification ? 'border-red-400' : 'border-gray-300'}`}
              >
                <option value="">Select qualification</option>
                {qualificationOptions.map(q => <option key={q} value={q}>{q}</option>)}
              </select>
            </Field>
          </div>
          <Field label="Field of Study" required error={errors.fieldOfStudy}>
            <input
              type="text"
              value={data.fieldOfStudy}
              onChange={e => onChange('fieldOfStudy', e.target.value)}
              placeholder="e.g. Agriculture, Biology"
              className={`${inputCls} ${errors.fieldOfStudy ? 'border-red-400' : 'border-gray-300'}`}
            />
          </Field>
          <Field label="Institution" required error={errors.institution}>
            <input
              type="text"
              value={data.institution}
              onChange={e => onChange('institution', e.target.value)}
              placeholder="Name of institution"
              className={`${inputCls} ${errors.institution ? 'border-red-400' : 'border-gray-300'}`}
            />
          </Field>
        </div>
      </div>

      {/* Section 5: Experience */}
      <div>
        <h3 className={sectionHeader}>Section 5 — Professional Experience</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2">
            <Field label="Current Occupation" required error={errors.currentOccupation}>
              <input
                type="text"
                value={data.currentOccupation}
                onChange={e => onChange('currentOccupation', e.target.value)}
                placeholder="Your current job or role"
                className={`${inputCls} ${errors.currentOccupation ? 'border-red-400' : 'border-gray-300'}`}
              />
            </Field>
          </div>
          <Field label="Total Years of Professional Experience" required error={errors.totalYearsExperience}>
            <select
              value={data.totalYearsExperience}
              onChange={e => onChange('totalYearsExperience', e.target.value)}
              className={`${inputCls} ${errors.totalYearsExperience ? 'border-red-400' : 'border-gray-300'}`}
            >
              <option value="">Select years</option>
              {experienceYears.map(y => <option key={y} value={y}>{y} {y === '1' ? 'year' : 'years'}</option>)}
            </select>
          </Field>
          {[
            { field: 'agricultureExperience' as const, label: 'Agriculture Experience (Years)' },
            { field: 'extensionExperience' as const, label: 'Extension Services Experience (Years)' },
            { field: 'salesExperience' as const, label: 'Sales Experience (Years)' },
            { field: 'communityMobilisationExperience' as const, label: 'Community Mobilisation Experience (Years)' },
            { field: 'digitalDataExperience' as const, label: 'Digital Data Collection Experience (Years)' },
          ].map(({ field, label }) => (
            <Field key={field} label={label}>
              <select
                value={data[field] as string}
                onChange={e => onChange(field, e.target.value)}
                className={`${inputCls} border-gray-300`}
              >
                <option value="">Select years</option>
                {experienceYears.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </Field>
          ))}
        </div>
      </div>

      {/* Section 6: Agriculture Knowledge */}
      <div>
        <h3 className={sectionHeader}>Section 6 — Agriculture Knowledge</h3>
        <p className="text-sm text-gray-500 mb-4">Select all that apply.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {agricultureKnowledgeOptions.map(opt => (
            <label key={opt} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={data.agricultureKnowledge.includes(opt)}
                onChange={e => onMultiChange('agricultureKnowledge', opt, e.target.checked)}
                className="w-4 h-4 rounded accent-[#0A2342]"
              />
              <span className="text-sm text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Section 7: Technical Skills */}
      <div>
        <h3 className={sectionHeader}>Section 7 — Technical Skills</h3>
        <p className="text-sm text-gray-500 mb-4">Select all that apply.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {technicalSkillsOptions.map(opt => (
            <label key={opt} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={data.technicalSkills.includes(opt)}
                onChange={e => onMultiChange('technicalSkills', opt, e.target.checked)}
                className="w-4 h-4 rounded accent-[#0A2342]"
              />
              <span className="text-sm text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
