import OpenAI from "openai";

// 🔑 uses your API key from environment
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// constraints
function violates(output) {
  if (output.toLowerCase().includes("millions")) return true;
  if (output.toLowerCase().includes("brand")) return true;
  return false;
}

// real AI call
async function getAIResponse(prompt) {
  const res = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content: "Be realistic. No hype. No speculation."
      },
      {
        role: "user",
        content: prompt
      }
    ]
  });

  return res.choices[0].message.content;
}

// intent lock
async function run(prompt) {
  const output = await getAIResponse(prompt);

  if (violates(output)) {
    return "❌ BLOCKED: violates constraints";
  }

  return "✅ " + output;
}

// test
run("Should I buy AGIHQS.com?").then(console.log);
