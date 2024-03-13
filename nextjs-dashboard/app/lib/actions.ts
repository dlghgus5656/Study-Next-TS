'use server';

import { constants } from 'zlib';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  //   const rawFormData = {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // 값을 센트 단위로 저장
  // 일반적으로 JavaScript 부동 소수점 오류를 제거하고 정확성을 높이기 위해 데이터베이스에 금전적 가치를 센트 단위로 저장하는 것이 좋습니다.
  // 금액을 센트로 변환해 보겠습니다. - amountInCents
  const amountInCents = amount * 100;
  // 새 날짜 만들기
  // 마지막으로 송장 생성 날짜에 대해 "YYYY-MM-DD" 형식으로 새 날짜를 생성해 보겠습니다.
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
  INSERT INTO invoices (customer_id, amount, status, date)
  VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  // 재검증
  revalidatePath('/dashboard/invoices');
  //사용자를 페이지로 다시 리디렉션
  redirect('/dashboard/invoices');
  // Test it out:
  //   console.log(rawFormData, 'rawFormData');
}

// 작업과 유사하게 createInvoice다음과 같습니다.
// 에서 데이터를 추출합니다 formData.
// Zod를 사용하여 유형을 검증합니다.
// 금액을 센트로 변환합니다.
// 변수를 SQL 쿼리에 전달합니다.
// revalidatePath클라이언트 캐시를 지우고 새 서버 요청을 하기 위해 호출합니다 .
// redirect사용자를 청구서 페이지로 리디렉션하기 위해 호출합니다 .
export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // 값을 센트 단위로 저장
  // 일반적으로 JavaScript 부동 소수점 오류를 제거하고 정확성을 높이기 위해 데이터베이스에 금전적 가치를 센트 단위로 저장하는 것이 좋습니다.
  // 금액을 센트로 변환해 보겠습니다. - amountInCents
  const amountInCents = amount * 100;
  // 새 날짜 만들기
  // 마지막으로 송장 생성 날짜에 대해 "YYYY-MM-DD" 형식으로 새 날짜를 생성해 보겠습니다.
  // const date = new Date().toISOString().split('T')[0];
  try {
    await sql`
  UPDATE invoices
  SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
  `;
  } catch (error) {
    return {
      message: 'Database ErrorL: Failed to Update Invoice.',
    };
  }

  // 재검증
  revalidatePath('/dashboard/invoices');
  //사용자를 페이지로 다시 리디렉션
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  // throw new Error('Failed to Delete Invoice');

  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: failed to Delete Invoice.' };
  }
}
