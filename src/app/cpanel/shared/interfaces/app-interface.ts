import { Student } from './student-interface';

export interface userStudData {
  id: number,
  firstName: string,
  lastName: string,
  fullName: string,
  nationality: string,
  address: string,
  gender: string,
  birthDate: string,
  phoneNumber: number,
  mobilePhone: number,
  email: string,
  medicalState: string,
  notes: string,
  created_at: string,
  updated_at: string,

  images: [
    {
      filename: string
    }
  ],

  student: Student;

  // student: {
  //   id: number,
  //   class: string,
  //   user_id: number,
  //   grade_id: number,
  //   schYear_id: number,
  //   gardian: string

  //   parents: [
  //     {
  //       id: number;
  //       relation: string,
  //       edu_degree: string,
  //       profession: string,
  //       job: string,
  //       company_name: string,
  //       work_phone: number,
  //       position: string,
  //       student_id: number
  //     }
  //   ],

  //   grade: {
  //     id: number,
  //     name: string,
  //     level: string,

  //     fees: {
  //       id: number,
  //       old_schFees : number,
  //       old_booksFees : number,
  //       schFees : number,
  //       booksFees : number,
  //       totFees: number
  //     }
  //   }
  // },

  employee: {
    id: number,
    profession: string,
    insurance_state: number,
    reg_date: string,
    experience: string,
    user_id: number,
    salary_id: number,
    created_at: string,
    updated_at: string,
  }
}


export interface userEmployData {
  id: number,
  firstName: string,
  lastName: string,
  fullName: string,
  address: string,
  gender: string,
  birthDate: string,
  phoneNumber: number,
  mobilePhone: number,
  email: string,
  medicalState: string,
  notes: string,
  created_at: string,
  updated_at: string,

  images: [
    {
      filename: string,
      created_at: string,
      updated_at: string,
    }
  ]

  employee: {
    id: number,
    profession: string,
    insurance_state: number,
    reg_date: string,
    experience: string,
    user_id: number,
    salary_id: number,
    created_at: string,
    updated_at: string,
  }
}

export interface paymentEl {
  id: number,
  type: string,
  amount: number,
  student_id: number,
  created_at: Date,
  updated_at: Date
}
