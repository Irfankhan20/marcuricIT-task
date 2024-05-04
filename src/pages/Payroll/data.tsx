interface InvoiceItem {
  id: number;
  name: string;
  description: string;
  hours: number;
  hour_rate: number;
  total: number;
}

interface Address {
  owner: string;
  line_1: string;
  city: string;
  state: string;
  zip: number;
  phone: string;
}
// interface TableRecords {
//   id: number;
//   firstName: string;
//   lastName: string;
//   userName: string;
// }

// dummy records
// const records: TableRecords[] = [
//   { id: 1, firstName: "Mark", lastName: "Otto", userName: "@mdo" },
//   { id: 2, firstName: "Jacob", lastName: "Thornton", userName: "@fat" },
//   { id: 3, firstName: "Larry", lastName: "the Bird", userName: "@twitter" },
// ];

export interface InvoiceTypes {
  Employee?: string;
  notes?: string;
  invoice_date?: string;
  joining_date?: string;
  invoice_id?: string;
  Basic_salary?: string;
  House_rent_allowance?: string;
  conveyance?: string;
  other_allowance?: string;
  total_earnings?: string;
  tax_deducted_at_source?: string;
  provident_fund?: string;
  esi?: string;
  loan?: string;
  total_deductions?: string;
  payslip?: string;
  salary_month?: string;
  profession?: string;
  address: Address;
  items: InvoiceItem[];
  sub_total?: number;
  discount?: number;
  total?: number;
}

export interface PlanItemsTypes {
  id: number;
  name: string;
  icon: string;
  price: number;
  duration: string;
  features: Array<string>;
  isRecommended: boolean;
}

interface MaintenanceQueryTypes {
  icon: string;
  title: string;
  desc: string;
}

const invoiceData: InvoiceTypes = {
  invoice_id: "000028",
  Employee: " Greeva Navadiya",
  Basic_salary: "$6500",
  House_rent_allowance: "$55",
  conveyance: "$6500",
  other_allowance: "$6500",
  total_earnings: "$6500",
  tax_deducted_at_source: "$6500",
  provident_fund: "$6500",
  esi: "$6500",
  loan: "$6500",
  total_deductions: "$6500",
  notes:
    "All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above",
  invoice_date: "Jul 17, 2019",
  joining_date: "Jul 27,2019",
  payslip: "#49029",
  salary_month: "March, 2019",
  profession: "Web Designer",
  address: {
    owner: "Greeva Navadiya",
    line_1: "795 Folsom Ave, Suite 600",
    city: "San Francisco",
    state: "CA",
    zip: 94107,
    phone: "(123) 456-7890",
  },
  items: [
    {
      id: 1,
      name: "Web Design",
      description: "2 Pages static website - my website",
      hours: 22,
      hour_rate: 30,
      total: 660.0,
    },
    {
      id: 2,
      name: "Software Development",
      description: "Invoice editor software - AB'c Software",
      hours: 112.5,
      hour_rate: 35,
      total: 3937.5,
    },
  ],
  sub_total: 4597.5,
  discount: 459.75,
  total: 4137.75,
};

const pricingPlans: PlanItemsTypes[] = [
  {
    id: 1,
    name: "Professional Pack",
    icon: "users",
    price: 19,
    duration: "Month",
    features: [
      "10 GB Storage",
      "500 GB Bandwidth",
      "No Domain",
      "Email Support",
      "24x7 Support",
    ],
    isRecommended: false,
  },
  {
    id: 2,
    name: "Business Pack",
    icon: "briefcase",
    price: 29,
    duration: "Month",
    features: [
      "50 GB Storage",
      "900 GB Bandwidth",
      "2 Domain",
      "Email Support",
      "24x7 Support",
    ],
    isRecommended: true,
  },
  {
    id: 3,
    name: "Enterprise Pack",
    icon: "shopping-bag",
    price: 49,
    duration: "Month",
    features: [
      "100 GB Storage",
      "Unlimited Bandwidth",
      "Unlimited Domain",
      "Email Support",
      "24x7 Support",
    ],
    isRecommended: false,
  },
];

const maintenanceQuery: MaintenanceQueryTypes[] = [
  {
    icon: "uil-presentation-lines-alt",
    title: "Why is the Site Down?",
    desc: "If several languages coalesce, the grammar of the resulting language is more simple.",
  },
  {
    icon: "uil-clock-eight",
    title: "What is the Downtime?",
    desc: "Everyone realizes why a new common language would be desirable one could refuse.",
  },
  {
    icon: "uil-envelope",
    title: "Do you need Support?",
    desc: "You need to be sure there isn't anything embar.. Please contact us via email no-reply@domain.com",
  },
];

export { invoiceData, pricingPlans, maintenanceQuery };
