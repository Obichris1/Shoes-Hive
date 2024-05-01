import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

export const POST = async (req) => {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const reqBody = await req.json();
    console.log(reqBody);
    const {items, email} = await reqBody
    // console.log(items);

    const extractingItems = await items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.image],
        },
      },
    }));

    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/checkout`,
      metadata: {
        email,
      },
    });

    return NextResponse.json(
      {
        message: "connected successfully",
        success: true,
       id : session.id
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "failedddd",
      },
      { status: 500 }
    );
  }
};
