import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

// Серверийн талд ажиллах тул Write token-той client үүсгэнэ
const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2026-08-08',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN, // Сервер дээр токен аюулгүй ажиллана
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, category, message } = body;

    // Sanity 'feedback' схем рүү мэдээлэл хадгалах
    const newFeedback = await writeClient.create({
      _type: 'feedback',
      name,
      email,
      category,
      message,
      status: 'pending',
    });

    return NextResponse.json({ success: true, data: newFeedback }, { status: 200 });
  } catch (error) {
    console.error('Sanity хадгалахад гарсан алдаа:', error);
    return NextResponse.json({ success: false, error: 'Мэдээлэл хадгалахад алдаа гарлаа.' }, { status: 500 });
  }
}