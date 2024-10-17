import { NextResponse } from "next/server";
import Stripe from 'stripe';
const stripeSecrectKey = process.env.NEXT_PUBLIC_PAYMENT_S_KEY
const stripe = new Stripe(stripeSecrectKey);

export async function POST(request) {
    try {
        const data = await request.json();        
        const amount = parseInt(data.price * 100);
        const paymentIntent = await stripe.paymentIntents.create({
            amount : amount,
            currency : 'usd',
            payment_method_types : ['card']
        })
        return NextResponse.json({
            message : 'Payment intent create successfully',
            clientSecret: paymentIntent.client_secret,
            status : 200,
            success : true
        })
    } catch (error) {
        return NextResponse.json({
            message : 'Something went wrong',
            status : 500,
            success : false
        })
    }
}