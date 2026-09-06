import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please complete all required fields.' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
from: 'LUFU Beauty Website <website@lufubeauty.com>',
to: ['lufubeauty1@gmail.com'],
replyTo: email,

      subject: `LUFU Beauty Contact — ${subject}`,

      html: `
        <div style="
          margin: 0;
          padding: 40px 20px;
          background-color: #f8f6f4;
          font-family: Arial, Helvetica, sans-serif;
          color: #1a1a1a;
        ">

          <div style="
            max-width: 620px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #e8e0dc;
          ">

            <!-- Header -->
            <div style="
              background-color: #1a1a1a;
              padding: 32px;
              text-align: center;
            ">
              <div style="
                color: #d4af37;
                font-size: 12px;
                letter-spacing: 4px;
                text-transform: uppercase;
                margin-bottom: 10px;
              ">
                LUFU BEAUTY
              </div>

              <div style="
                color: #ffffff;
                font-size: 22px;
                font-weight: 500;
              ">
                New Contact Message
              </div>
            </div>


            <!-- Content -->
            <div style="padding: 36px;">

              <p style="
                margin: 0 0 30px;
                color: #6b625e;
                font-size: 14px;
                line-height: 1.6;
              ">
                A new message was submitted through the LUFU Beauty website.
              </p>


              <!-- Name -->
              <div style="
                padding-bottom: 18px;
                margin-bottom: 18px;
                border-bottom: 1px solid #eee8e4;
              ">
                <div style="
                  font-size: 10px;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                  color: #9b8579;
                  margin-bottom: 7px;
                ">
                  Name
                </div>

                <div style="font-size: 16px;">
                  ${name}
                </div>
              </div>


              <!-- Email -->
              <div style="
                padding-bottom: 18px;
                margin-bottom: 18px;
                border-bottom: 1px solid #eee8e4;
              ">
                <div style="
                  font-size: 10px;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                  color: #9b8579;
                  margin-bottom: 7px;
                ">
                  Email
                </div>

                <div style="font-size: 16px;">
                  <a
                    href="mailto:${email}"
                    style="color: #1a1a1a; text-decoration: none;"
                  >
                    ${email}
                  </a>
                </div>
              </div>


              <!-- Phone -->
              <div style="
                padding-bottom: 18px;
                margin-bottom: 18px;
                border-bottom: 1px solid #eee8e4;
              ">
                <div style="
                  font-size: 10px;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                  color: #9b8579;
                  margin-bottom: 7px;
                ">
                  Phone
                </div>

                <div style="font-size: 16px;">
                  ${phone || 'Not provided'}
                </div>
              </div>


              <!-- Subject -->
              <div style="
                padding-bottom: 18px;
                margin-bottom: 26px;
                border-bottom: 1px solid #eee8e4;
              ">
                <div style="
                  font-size: 10px;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                  color: #9b8579;
                  margin-bottom: 7px;
                ">
                  Subject
                </div>

                <div style="font-size: 16px;">
                  ${subject}
                </div>
              </div>


              <!-- Message -->
              <div>
                <div style="
                  font-size: 10px;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                  color: #9b8579;
                  margin-bottom: 10px;
                ">
                  Message
                </div>

                <div style="
                  background-color: #f8f6f4;
                  border-left: 3px solid #d4af37;
                  padding: 20px;
                  font-size: 15px;
                  line-height: 1.7;
                  white-space: pre-wrap;
                ">${message}</div>
              </div>


              <!-- Reply Button -->
              <div style="
                text-align: center;
                margin-top: 32px;
              ">
                <a
                  href="mailto:${email}"
                  style="
                    display: inline-block;
                    background-color: #1a1a1a;
                    color: #ffffff;
                    padding: 14px 28px;
                    text-decoration: none;
                    font-size: 12px;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                  "
                >
                  Reply to Customer
                </a>
              </div>

            </div>


            <!-- Footer -->
            <div style="
              background-color: #f5e6e0;
              padding: 20px 30px;
              text-align: center;
              color: #766b65;
              font-size: 11px;
              line-height: 1.6;
            ">
              This message was submitted through the
              LUFU Beauty website contact form.
              <br>
              © LUFU Beauty
            </div>

          </div>

        </div>
      `,
    })

if (error) {
  console.error('RESEND ERROR:', error)

  return NextResponse.json(
    {
      error: error.message || 'Unable to send your message.',
      details: error,
    },
    { status: 500 }
  )
}

    return NextResponse.json({
      success: true,
      id: data?.id,
    })
  } catch (error) {
    console.error('Contact API error:', error)

    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    )
  }
}