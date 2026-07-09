'use client';

import { useRef, useState } from 'react';
import { Upload, File, X, CircleCheck as CheckCircle } from 'lucide-react';
import type { StepProps, FieldAgentFormData } from './types';

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

const ACCEPTED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
const MAX_SIZE = 10 * 1024 * 1024;

function FileUpload({
  label, required, error, file, fieldKey, onFileChange,
}: {
  label: string; required?: boolean; error?: string; file: File | null;
  fieldKey: keyof FieldAgentFormData; onFileChange: StepProps['onFileChange'];
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [fileError, setFileError] = useState('');

  function validateAndSet(f: File) {
    setFileError('');
    if (!ACCEPTED_TYPES.includes(f.type)) {
      setFileError('Unsupported format. Please use PDF, JPG, JPEG, or PNG.');
      return;
    }
    if (f.size > MAX_SIZE) {
      setFileError('File size exceeds 10 MB limit.');
      return;
    }
    onFileChange(fieldKey, f);
  }

  return (
    <Field label={label} required={required} error={error || fileError}>
      <div
        className={`relative border-2 border-dashed rounded-lg p-4 text-center transition-colors cursor-pointer ${
          dragging ? 'border-[#0A2342] bg-blue-50' : file ? 'border-green-400 bg-green-50' : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={e => {
          e.preventDefault(); setDragging(false);
          const f = e.dataTransfer.files[0];
          if (f) validateAndSet(f);
        }}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          className="sr-only"
          onChange={e => { const f = e.target.files?.[0]; if (f) validateAndSet(f); }}
        />
        {file ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div className="flex items-center gap-1 min-w-0">
                <File className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-700 truncate">{file.name}</span>
              </div>
              <span className="text-xs text-gray-400 flex-shrink-0">
                ({(file.size / 1024).toFixed(0)} KB)
              </span>
            </div>
            <button
              type="button"
              onClick={e => { e.stopPropagation(); onFileChange(fieldKey, null); }}
              className="ml-2 text-gray-400 hover:text-red-500 flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1 py-2">
            <Upload className="w-6 h-6 text-gray-400" />
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-[#0A2342]">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-400">PDF, JPG, JPEG, PNG — max 10 MB</p>
          </div>
        )}
      </div>
    </Field>
  );
}

export default function Step4({ data, errors, onChange, onFileChange }: StepProps) {
  return (
    <div className="space-y-8">
      {/* Section 12: Availability */}
      <div>
        <h3 className={sectionHeader}>Section 12 — Availability</h3>
        <div className="space-y-5">
          <Field label="Available Immediately?" required error={errors.availableImmediately}>
            <RadioGroup name="availableImmediately" value={data.availableImmediately} onChange={v => onChange('availableImmediately', v)} />
          </Field>
          <Field label="Available Full-Time?" required error={errors.availableFullTime}>
            <RadioGroup name="availableFullTime" value={data.availableFullTime} onChange={v => onChange('availableFullTime', v)} />
          </Field>
          <Field label="Available Part-Time?" required error={errors.availablePartTime}>
            <RadioGroup name="availablePartTime" value={data.availablePartTime} onChange={v => onChange('availablePartTime', v)} />
          </Field>
        </div>
      </div>

      {/* Section 13: Document Uploads */}
      <div>
        <h3 className={sectionHeader}>Section 13 — Required Document Uploads</h3>
        <p className="text-sm text-gray-500 mb-5">
          Please upload all required documents. Accepted formats: PDF, JPG, JPEG, PNG. Maximum 10 MB per file.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FileUpload
            label="Passport Photograph"
            required
            error={errors.passportPhotographFile}
            file={data.passportPhotographFile}
            fieldKey="passportPhotographFile"
            onFileChange={onFileChange}
          />
          <FileUpload
            label="Curriculum Vitae (CV) / Resume"
            required
            error={errors.cvFile}
            file={data.cvFile}
            fieldKey="cvFile"
            onFileChange={onFileChange}
          />
          <FileUpload
            label="Government-Issued Identification"
            required
            error={errors.govtIdFile}
            file={data.govtIdFile}
            fieldKey="govtIdFile"
            onFileChange={onFileChange}
          />
          <FileUpload
            label="Highest Qualification Certificate"
            required
            error={errors.qualificationCertFile}
            file={data.qualificationCertFile}
            fieldKey="qualificationCertFile"
            onFileChange={onFileChange}
          />
        </div>
      </div>

      {/* Section 14: Declaration */}
      <div>
        <h3 className={sectionHeader}>Section 14 — Declaration</h3>
        <div className="p-5 bg-gray-50 rounded-lg border border-gray-200 mb-4">
          <p className="text-sm text-gray-600 leading-relaxed italic">
            I hereby declare that the information provided in this application is complete and accurate
            to the best of my knowledge. I understand that providing false or misleading information
            may result in the rejection of my application or termination of any subsequent engagement
            with Prexea Technology Limited.
          </p>
        </div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="flex-shrink-0 mt-0.5">
            <input
              type="checkbox"
              checked={data.declarationAgreed}
              onChange={e => onChange('declarationAgreed', e.target.checked ? 'true' : 'false')}
              className="w-5 h-5 rounded accent-[#0A2342] cursor-pointer"
            />
          </div>
          <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
            I agree to the above declaration.<span className="text-red-500 ml-0.5">*</span>
          </span>
        </label>
        {errors.declarationAgreed && (
          <p className={errorCls}>{errors.declarationAgreed}</p>
        )}
      </div>
    </div>
  );
}
