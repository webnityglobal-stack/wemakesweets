import https from "https";

const PIXEL_ID = "1523136356504886";
const ACCESS_TOKEN =
  process.env.META_CAPI_ACCESS_TOKEN ||
  "EAAQJ2a062YcBSyXAtZA4324AJTf3E686P25lAnugQvCiIOzv6oQaFvdV0b66n0zRI8qy2OwNRxDu72nvg1WsQ6ilVw57vmYUX1EC1dxCsBqxOxRz3Ojcy5O14Im8acQcN1h4HZCs3OpWYV9si7mu5zwpaQZAMC1w4cgYiGoTqFVXlVVFFU5rOo90juqWnfZBrwZDZD";

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { eventName, eventId, eventSourceUrl, eventData = {}, userData = {} } = req.body || {};

    if (!eventName || !eventId) {
      return res.status(400).json({ error: "Missing required fields: eventName, eventId" });
    }

    const clientIp =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.socket?.remoteAddress ||
      "";

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: eventSourceUrl || "",
          action_source: "website",
          user_data: {
            client_ip_address: clientIp,
            client_user_agent: userData.userAgent || req.headers["user-agent"] || "",
            fbp: userData.fbp || undefined,
            fbc: userData.fbc || undefined,
          },
          custom_data: {
            currency: "INR",
            ...eventData,
          },
        },
      ],
    };

    const postData = JSON.stringify(payload);

    const options = {
      hostname: "graph.facebook.com",
      path: `/v21.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData),
      },
    };

    await new Promise((resolve, reject) => {
      const fbReq = https.request(options, (fbRes) => {
        let responseBody = "";
        fbRes.on("data", (chunk) => {
          responseBody += chunk;
        });
        fbRes.on("end", () => {
          resolve(responseBody);
        });
      });

      fbReq.on("error", (error) => {
        reject(error);
      });

      fbReq.write(postData);
      fbReq.end();
    });

    return res.status(200).json({ success: true, eventId });
  } catch (err) {
    console.error("Meta CAPI Vercel Error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
