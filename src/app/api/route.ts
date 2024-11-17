import connect from "@/utils/start-mongo";
import { NextResponse } from "next/server";

const Exception = ({
  message,
  status,
}: {
  message: string;
  status: number;
}) => {
  return NextResponse.json(
    {
      message,
      status,
      success: false,
    },
    { status }
  );
};

async function sendWaitListJoinSuccessEmail(data: { email: string }) {
  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: process.env.GMAIL_SERVICE_ID,
        template_id: process.env.EMAIL_JS_TEMPLATE_ID,
        user_id: process.env.EMAIL_JS_PUBLIC_KEY,
        accessToken: process.env.EMAIL_JS_PRIVATE_KEY,
        template_params: {
          user_email: data.email,
          from_name: "Bookklub",
        },
      }),
    });
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`EmailJS Error: ${errorText}`);
    }

    return res;
  } catch (err) {
    throw err;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.email)
      return Exception({
        message: `Email not in body`,
        status: 401,
      });

    const client = await connect;
    const collection = client.db("bookklub-waitlist").collection("users");

    const existingUser = await collection.findOne({ email: body.email });
    if (existingUser) {
      return Exception({
        message: "You're already on the waitlist!",
        status: 409,
      });
    }

    await collection.insertOne({ email: body.email });

    await sendWaitListJoinSuccessEmail({ email: body.email });

    return Response.json({
      message: "successfully added to waitlist",
      status: 200,
      success: true,
    });
  } catch (err) {
    return Exception({
      message: `${err}`,
      status: 500,
    });
  }
}
