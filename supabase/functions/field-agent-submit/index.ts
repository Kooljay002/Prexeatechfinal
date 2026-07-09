import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

function buildEmailHtml(fullName: string, appData: Record<string, unknown>, docUrls: Record<string, string | null>): string {
  const section = (title: string, rows: [string, string | undefined | null][]) => `
    <h3 style="color:#0A2342;border-bottom:2px solid #0A2342;padding-bottom:6px;margin-top:28px;">${title}</h3>
    <table style="width:100%;border-collapse:collapse;">
      ${rows.map(([k, v]) => v ? `
        <tr>
          <td style="padding:6px 12px 6px 0;font-weight:600;color:#444;width:40%;vertical-align:top;">${k}</td>
          <td style="padding:6px 0;color:#222;">${v}</td>
        </tr>` : '').join('')}
    </table>`;

  const personal = appData.personalInfo as Record<string, string> ?? {};
  const contact = appData.contactInfo as Record<string, string> ?? {};
  const workLoc = appData.workLocation as Record<string, unknown> ?? {};
  const edu = appData.education as Record<string, string> ?? {};
  const exp = appData.experience as Record<string, string> ?? {};
  const skills = appData.skills as Record<string, string[]> ?? {};
  const equip = appData.equipment as Record<string, string> ?? {};
  const langs = appData.languages as Record<string, unknown> ?? {};
  const refs = appData.references as Record<string, Record<string, string>> ?? {};
  const emerg = appData.emergencyContact as Record<string, string> ?? {};
  const avail = appData.availability as Record<string, string> ?? {};

  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Field Agent Application</title></head>
<body style="font-family:Arial,sans-serif;max-width:700px;margin:0 auto;padding:24px;color:#222;">
  <div style="background:#0A2342;padding:20px 24px;border-radius:8px 8px 0 0;">
    <h1 style="color:#fff;margin:0;font-size:20px;">Field Agent Application</h1>
    <p style="color:rgba(255,255,255,0.7);margin:4px 0 0;">Prexea Technology Limited</p>
  </div>
  <div style="background:#f8f9fa;padding:16px 24px;border-left:4px solid #E85D5D;">
    <p style="margin:0;font-size:16px;"><strong>Applicant:</strong> ${fullName}</p>
  </div>
  <div style="padding:0 8px;">
    ${section('Personal Information', [
      ['Full Name', personal.fullName],
      ['Date of Birth', personal.dateOfBirth],
      ['Gender', personal.gender],
      ['Nationality', personal.nationality],
      ['NIN', personal.nin || 'Not provided'],
    ])}
    ${section('Contact Information', [
      ['Phone Number', contact.phoneNumber],
      ['WhatsApp Number', contact.whatsappNumber || 'Not provided'],
      ['Email Address', contact.email],
      ['Residential Address', contact.residentialAddress],
      ['State of Residence', contact.stateOfResidence],
      ['LGA', contact.lga || 'Not specified'],
      ['Town / Community', contact.town],
      ['Postal Code', contact.postalCode || 'Not provided'],
    ])}
    ${section('Preferred Work Location', [
      ['States Willing to Work', (workLoc.statesWillingToWork as string[] ?? []).join(', ') || 'Not specified'],
      ['Preferred LGAs', (workLoc.preferredLGAs as string[] ?? []).join(', ') || 'Not specified'],
      ['Willing to Travel', workLoc.willingToTravel as string],
    ])}
    ${section('Educational Background', [
      ['Highest Qualification', edu.highestQualification],
      ['Field of Study', edu.fieldOfStudy],
      ['Institution', edu.institution],
    ])}
    ${section('Professional Experience', [
      ['Current Occupation', exp.currentOccupation],
      ['Total Years of Experience', exp.totalYearsExperience],
      ['Agriculture Experience', exp.agricultureExperience || '0'],
      ['Extension Services Experience', exp.extensionExperience || '0'],
      ['Sales Experience', exp.salesExperience || '0'],
      ['Community Mobilisation Experience', exp.communityMobilisationExperience || '0'],
      ['Digital Data Collection Experience', exp.digitalDataExperience || '0'],
    ])}
    ${section('Agriculture Knowledge', [
      ['Knowledge Areas', (skills.agricultureKnowledge ?? []).join(', ') || 'None selected'],
    ])}
    ${section('Technical Skills', [
      ['Skills', (skills.technicalSkills ?? []).join(', ') || 'None selected'],
    ])}
    ${section('Equipment Available', [
      ['Android Smartphone', equip.hasAndroidSmartphone],
      ['Laptop', equip.hasLaptop],
      ['Reliable Internet Access', equip.hasReliableInternet],
    ])}
    ${section('Language Proficiency', [
      ['Languages', ((langs.languages as string[]) ?? []).join(', ') || 'None selected'],
      ['Other Language', langs.otherLanguage as string || ''],
    ])}
    ${section('Reference One', [
      ['Name', refs.ref1?.name],
      ['Relationship', refs.ref1?.relationship],
      ['Phone', refs.ref1?.phone],
    ])}
    ${section('Reference Two', [
      ['Name', refs.ref2?.name],
      ['Relationship', refs.ref2?.relationship],
      ['Phone', refs.ref2?.phone],
    ])}
    ${section('Emergency Contact', [
      ['Name', emerg.name],
      ['Relationship', emerg.relationship],
      ['Phone', emerg.phone],
    ])}
    ${section('Availability', [
      ['Available Immediately', avail.availableImmediately],
      ['Available Full-Time', avail.availableFullTime],
      ['Available Part-Time', avail.availablePartTime],
    ])}
    ${section('Uploaded Documents', [
      ['Passport Photograph', docUrls.passportPhotograph ? `<a href="${docUrls.passportPhotograph}">View Document</a>` : 'Not uploaded'],
      ['CV / Resume', docUrls.cv ? `<a href="${docUrls.cv}">View Document</a>` : 'Not uploaded'],
      ['Government ID', docUrls.governmentId ? `<a href="${docUrls.governmentId}">View Document</a>` : 'Not uploaded'],
      ['Qualification Certificate', docUrls.qualificationCertificate ? `<a href="${docUrls.qualificationCertificate}">View Document</a>` : 'Not uploaded'],
    ])}
  </div>
  <div style="margin-top:32px;padding:16px 24px;background:#f8f9fa;border-radius:0 0 8px 8px;font-size:12px;color:#888;">
    This application was submitted via the Prexea Field Agents Application Portal.
  </div>
</body>
</html>`;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { applicationId, applicationData, documentUrls } = await req.json();

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendKey = Deno.env.get("RESEND_API_KEY");

    const _supabase = createClient(supabaseUrl, serviceKey);

    const personal = (applicationData?.personalInfo ?? {}) as Record<string, string>;
    const fullName = personal.fullName ?? "Unknown Applicant";

    if (!resendKey) {
      console.log(`[field-agent-submit] RESEND_API_KEY not configured. Application ${applicationId} saved to DB.`);
      return new Response(JSON.stringify({ success: true, message: "Saved to database. Email not configured." }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const emailHtml = buildEmailHtml(fullName, applicationData, documentUrls);

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Prexea Portal <noreply@prexeatech.com>",
        to: ["sales@prexeatech.com"],
        subject: `Field Agent Application – ${fullName}`,
        html: emailHtml,
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      console.error(`[field-agent-submit] Email send failed: ${errText}`);
    } else {
      await _supabase
        .from("field_agent_applications")
        .update({ status: "email_sent" })
        .eq("id", applicationId);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("[field-agent-submit] Error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
