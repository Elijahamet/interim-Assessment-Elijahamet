const API_KEY = "rnd_kOWJPMPJaENukT7uKwPwhYmIMoqP";
const OWNER_ID = "tea-d7rtg7u7r5hc739k1btg";
const REPO = "https://github.com/Elijahamet/interim-Assessment-Elijahamet";

async function deploy() {
  const headers = {
    "Authorization": `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    "Accept": "application/json"
  };

  // 2. Create Frontend
  console.log("Deploying Frontend...");
  const frontendRes = await fetch("https://api.render.com/v1/services", {
    method: "POST",
    headers,
    body: JSON.stringify({
      type: "static_site",
      name: "coinbase-clone-frontend",
      ownerId: OWNER_ID,
      repo: REPO,
      autoDeploy: "yes",
      branch: "main",
      rootDir: "coinbase-clone",
      serviceDetails: {
        buildCommand: "npm install && npm run build",
        publishPath: "dist",
        pullRequestPreviewsEnabled: "no"
      }
    })
  });
  const frontendData = await frontendRes.json();
  if (frontendRes.ok) {
    console.log("Frontend created successfully!");
    console.log("Details:", JSON.stringify(frontendData, null, 2));
  } else {
    console.error("Frontend error:", frontendData);
  }
}

deploy();
