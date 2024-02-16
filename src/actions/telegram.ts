"use server";

const TG_BOT_TOKEN = process.env.NEXT_PUBLIC_TG_BOT_TOKEN;
const TG_CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID;
const URI_API = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`;

let message = "Заявка з сайту:\n";

export const send = async (values: { [x: string]: any }) => {
  const dataToSend = Object.entries(values).reduce(
    (aggr, [key, value]) => (aggr += `${key}: ${value}\n`),
    message,
  );

  try {
    const response = await fetch(URI_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text: dataToSend,
      }),
    });

    console.log("Sending:", response);

    if (response.ok) {
      return true;
    } else {
      console.error(
        "Error sending message to Telegram. HTTP Status:",
        response.status,
      );
      return false;
    }
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return false;
  }
};
