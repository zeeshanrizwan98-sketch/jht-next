import { NextResponse } from 'next/server';
import * as z from 'zod';

const contactSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  address1: z.string().min(2),
  address2: z.string().min(1),
  city: z.string().min(2),
  postcode: z.string().min(5),
  phone: z.string().min(10),
  email: z.string().email(),
  homeowner: z.string().min(1),
  heating: z.string().min(1),
  benefits: z.string().min(1),
  message: z.string().optional(),
  recaptcha: z.boolean(),
  quizResults: z.any().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // In a real application, you would send this to an email or CRM:
    // e.g. using Nodemailer, SendGrid, Mailgun, or HubSpot
    console.log('Received contact submission:', validatedData);

    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Validation or API error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
