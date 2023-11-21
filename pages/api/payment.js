// const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

// // export default async function handler(req, res) {
// //   if (req.method === "POST") {
// //     const { cart } = req.body;
// //     console.log(req.body);
// //     try {
// //       const session = await stripe.checkout.sessions.create({
// //         //   payment_method_types: ["card"],
// //         line_items: [cart],
// //         mode: "payment",
// //         success_url: `${req.headers.origin}/order`,
// //         cancel_url: `${req.headers.origin}/order`,
// //       });

// //       res.redirect(303, session.url);
// //     } catch (err) {
// //       res.status(err.statusCode || 500).json(err.message);
// //     }
// //   } else {
// //     res.setHeader("Allow", "POST");
// //     res.status(405).end("Method Not Allowed");
// //   }
// // }

// import Stripe from "stripe";
// import { NextResponse, NextRequest } from "next/server";

// export async function POST(request) {
//   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
//   let data = await request.json();
//   //   let priceId = req.body.subTotal;
//   console.log(data);
//   let priceId = data.priceId;
//   //   let quantity = req.body.qty;
//   //   let priceId = data.priceId;
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         price: priceId,
//         quantity: 1,
//       },
//     ],
//     mode: "payment",
//     success_url: "http://localhost:3000",
//     cancel_url: "http://localhost:3000",
//   });

//   return NextResponse.json(session.url);
// }
