'use server';

import { constants } from 'zlib';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// customerId- Zod는 string 유형을 예상하여 고객 필드가 비어 있으면 이미 오류를 발생시킵니다 . 하지만 사용자가 고객을 선택하지 않으면 친근한 메시지를 추가해 보겠습니다.
// amount- 금액 유형을 에서 로 강제 변환하므로 string문자열 number이 비어 있으면 기본값은 0이 됩니다. Zod에게 우리는 항상 gt().함수를 사용하여 0보다 큰 양을 원한다고 말합시다.
// status- Zod는 "보류 중" 또는 "지불됨"을 예상하므로 상태 필드가 비어 있으면 이미 오류를 발생시킵니다. 사용자가 상태를 선택하지 않은 경우에도 친근한 메시지를 추가해 보겠습니다.
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(prevState: State, formData: FormData) {
  //   const rawFormData = {
  // Validate form fields using Zod
  //safeParse()success또는 필드 를 포함하는 객체를 반환합니다 error. 이렇게 하면 이 논리를 try/catch 블록 안에 넣지 않고도 유효성 검사를 보다 원활하게 처리하는 데 도움이 됩니다.
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    console.log(validatedFields, 'validatedFields');
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
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
export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;

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
