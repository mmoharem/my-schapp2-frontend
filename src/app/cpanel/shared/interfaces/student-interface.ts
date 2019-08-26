export interface Student {
  id: number,
  user_id: number,
  grade_id: number,
  schYear_id: number,
  gardian: string,

  parents: Parent[],

  payment: Payment,

  transactions: Transaction[],

  grade: Grade,
}

export interface Parent {
  id: number;
  relation: string,
  edu_degree: string,
  profession: string,
  job: string,
  company_name: string,
  work_phone: number,
  position: string,
  student_id: number,
}

export interface Payment {
  id: number,
  grade_name: string,
  fees: number,
  total_payments: number,
  old_unpaid: number,
  to_pay_fees: number,
  discount: number,
  discount_verify: boolean,
  block: boolean,
  permit: boolean,
  isOldFees: boolean,
  note: null,
  student_id: number,
  sch_year_id: number,
}

export interface Transaction {
  id: number,
  type: string,
  amount: number,
  bank_date: number,
  bank_no: number,
  student_id: number,
  sch_year_id: number,
}

export interface Grade {
  id: number,
  name: string,
  level: string,

  fees: Fees,
}

export interface Fees {
  id: number,
  old_schFees : number,
  old_booksFees : number,
  schFees : number,
  booksFees : number,
  totFees: number
}
