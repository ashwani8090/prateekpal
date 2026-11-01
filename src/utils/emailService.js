/**
 * Email Service for Prateek Associates using Resend
 * Dispatches inquiries to ashwani9080singh@gmail.com
 */

export const sendInquiryEmail = async (formData, source = "Website Consultation Form") => {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        source,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to dispatch email");
    }

    return { success: true, data };
  } catch (error) {
    console.error("sendInquiryEmail error:", error);
    return { success: false, error: error.message || "Failed to dispatch email" };
  }
};
