export interface BisCompany {
  businessId: string;
  name: string;
  registrationDate: string;
  companyForm: string;
}

export interface BisCompanyDetails extends BisCompany {
  detailsUri?: string;
  liquidations?: [];
  names: [];
  auxiliaryNames?: [];
  addresses?: [];
  companyForms?: [];
  businessLines?: [];
  languages?: [];
  registeredOffices?: [];
  contactDetails?: [];
  registeredEntries?: [];
  businessIdChanges?: [];
}

export interface BisCompanyLiquidation extends BisCompanyDetails {
  source?: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  name: string;
  language?: string;
  type: string;
}

export interface BisCompanyName extends BisCompanyDetails {
  order: number;
  version: number;
  name: string;
  registrationDate: string;
  endDate?: string;
  source?: number;
}

interface BisCompanyAuxiliaryName extends BisCompanyDetails {
  order: number;
  version: number;
  name: string;
  registrationDate: string;
  endDate?: string;
  source?: number;
}

interface BisCompanyAddress extends BisCompanyDetails {
  careOf?: string;
  street?: string;
  postCode?: string;
  type: number;
  version: number;
  city?: string;
  country?: string;
  registrationDate: string;
  endDate?: string;
  language?: string;
  source?: number;
}

interface BisCompanyForm extends BisCompanyDetails {
  version: number;
  name: string;
  type: string;
  registrationDate: string;
  endDate?: string;
  language?: string;
  source?: number;
}

interface BisCompanyBusinessLine extends BisCompanyDetails {
  source?: number;
  order: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  name: string;
  language?: string;
}

interface BisCompanyLanguage extends BisCompanyDetails {
  source?: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  name: string;
  language?: string;
}

interface BisCompanyContactDetail extends BisCompanyDetails {
  source?: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  language?: string;
  value: string;
  type: string;
}

interface BisCompanyRegisteredEntry extends BisCompanyDetails {
  authority: number;
  register: number;
  status: number;
  registrationDate: string;
  endDate?: string;
  language?: string;
  description: string;
}

interface BisCompanyBusinessIdChange extends BisCompanyDetails {
  source?: number;
  description: string;
  reason: string;
  changeDate?: string;
  change: number;
  newBusinessId: string;
  language?: string;
}
