const crmLeadEndpoint =
  import.meta.env.VITE_CRM_LEAD_ENDPOINT?.trim() || "https://api.soloregular.com/api/public/leads";

export interface LandingLeadPayload {
  name: string;
  city: string;
  phone: string;
  email?: string;
  propertyType?: string;
  description?: string;
  lgpdConsent: boolean;
  website?: string;
}

export async function sendLandingLead(payload: LandingLeadPayload) {
  const response = await fetch(crmLeadEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      pageUrl: window.location.href,
      referrer: document.referrer,
    }),
  });

  if (!response.ok) {
    throw new Error("Nao foi possivel enviar sua solicitacao.");
  }

  return response.json();
}
