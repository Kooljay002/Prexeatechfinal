export interface FieldAgentFormData {
  // Section 1: Personal
  fullName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  nin: string;

  // Section 2: Contact
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
  residentialAddress: string;
  stateOfResidence: string;
  lga: string;
  town: string;
  postalCode: string;

  // Section 3: Work Location
  statesWillingToWork: string[];
  preferredLGAs: string[];
  willingToTravel: string;

  // Section 4: Education
  highestQualification: string;
  fieldOfStudy: string;
  institution: string;

  // Section 5: Experience
  currentOccupation: string;
  totalYearsExperience: string;
  agricultureExperience: string;
  extensionExperience: string;
  salesExperience: string;
  communityMobilisationExperience: string;
  digitalDataExperience: string;

  // Section 6: Agriculture Knowledge
  agricultureKnowledge: string[];

  // Section 7: Technical Skills
  technicalSkills: string[];

  // Section 8: Equipment
  hasAndroidSmartphone: string;
  hasLaptop: string;
  hasReliableInternet: string;

  // Section 9: Languages
  languages: string[];
  otherLanguage: string;

  // Section 10: References
  ref1Name: string;
  ref1Relationship: string;
  ref1Phone: string;
  ref2Name: string;
  ref2Relationship: string;
  ref2Phone: string;

  // Section 11: Emergency Contact
  emergencyName: string;
  emergencyRelationship: string;
  emergencyPhone: string;

  // Section 12: Availability
  availableImmediately: string;
  availableFullTime: string;
  availablePartTime: string;

  // Section 13: Documents
  passportPhotographFile: File | null;
  cvFile: File | null;
  govtIdFile: File | null;
  qualificationCertFile: File | null;

  // Section 14: Declaration
  declarationAgreed: boolean;
}

export const defaultFormData: FieldAgentFormData = {
  fullName: '', dateOfBirth: '', gender: '', nationality: '', nin: '',
  phoneNumber: '', whatsappNumber: '', email: '', residentialAddress: '',
  stateOfResidence: '', lga: '', town: '', postalCode: '',
  statesWillingToWork: [], preferredLGAs: [], willingToTravel: '',
  highestQualification: '', fieldOfStudy: '', institution: '',
  currentOccupation: '', totalYearsExperience: '', agricultureExperience: '',
  extensionExperience: '', salesExperience: '', communityMobilisationExperience: '',
  digitalDataExperience: '',
  agricultureKnowledge: [], technicalSkills: [],
  hasAndroidSmartphone: '', hasLaptop: '', hasReliableInternet: '',
  languages: [], otherLanguage: '',
  ref1Name: '', ref1Relationship: '', ref1Phone: '',
  ref2Name: '', ref2Relationship: '', ref2Phone: '',
  emergencyName: '', emergencyRelationship: '', emergencyPhone: '',
  availableImmediately: '', availableFullTime: '', availablePartTime: '',
  passportPhotographFile: null, cvFile: null, govtIdFile: null, qualificationCertFile: null,
  declarationAgreed: false,
};

export type FormErrors = Partial<Record<keyof FieldAgentFormData, string>>;

export interface StepProps {
  data: FieldAgentFormData;
  errors: FormErrors;
  onChange: (field: keyof FieldAgentFormData, value: string) => void;
  onMultiChange: (field: keyof FieldAgentFormData, value: string, checked: boolean) => void;
  onFileChange: (field: keyof FieldAgentFormData, file: File | null) => void;
}
