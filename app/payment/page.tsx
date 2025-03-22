"use client";
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import styles from "../page.module.css"; // Corrected import path

const PaymentPage: React.FC = () => {
  const router = useRouter();

  const handleApprove = async (data: Record<string, any>, actions: any) => {
    return actions.order.capture().then((details: any) => {
      alert("Transaction completed by " + details.payer.name.given_name);
      localStorage.setItem("hasPaid", "true"); // Store payment status in local storage
      router.push("/"); // Redirect to the home/video page after successful payment
    });
  };

  return (
    <div className={styles.paymentPage}>
      <main className={styles.main}>
        <h1 className={styles.heading}>Pay only $1 to Access Video: To reduce the server load</h1>
        <PayPalScriptProvider options={{ "clientId": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "", currency: "USD" }}>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                  {
                    reference_id: "VID_ACCESS_001", // Unique identifier for tracking
                    amount: {
                      currency_code: "USD",
                      value: "1.00",
                      breakdown: {
                        item_total: {
                          currency_code: "USD",
                          value: "1.00",
                        },
                      },
                    },
                    payee: {
                      email_address: "merchant@example.com", // Add merchant PayPal email if required
                    },
                    items: [
                      {
                        name: "Video Access",
                        description: "Payment for accessing premium video content",
                        unit_amount: {
                          currency_code: "USD",
                          value: "1.00",
                        },
                        quantity: "1",
                      },
                    ],
                  },
                ],
              });
            }}
            onApprove={handleApprove}
          />
        </PayPalScriptProvider>
      </main>
    </div>
  );
};

export default PaymentPage;