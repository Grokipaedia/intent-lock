// 🔒 intent-lock (MVP)

// fake AI response (we keep it simple first)
function getAIResponse(prompt) {
  return "This domain could be worth millions due to brand potential";
}

// simple constraints
const constraints = [
  "no hype",
  "no brand speculation"
];

// check for violations
function violates(output) {
  if (output.toLowerCase().includes("millions")) return true;
  if (output.toLowerCase().includes("brand")) return true;
  return false;
}

// run with "intent lock"
function run(prompt) {
  const output = getAIResponse(prompt);

  if (violates(output)) {
    return "❌ BLOCKED: violates constraints";
  }

  return "✅ " + output;
}

// test
console.log(run("Should I buy AGIHQS.com?"));
