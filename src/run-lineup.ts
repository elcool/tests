function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

async function main(): Promise<void> {
  console.log("Yahoo lineup job started");
  console.log("Current time:", new Date().toISOString());

  const clientId = getRequiredEnv("YAHOO_CLIENT_ID");
  const clientSecret = getRequiredEnv("YAHOO_CLIENT_SECRET");
  const refreshToken = getRequiredEnv("YAHOO_REFRESH_TOKEN");
  const teamKey = getRequiredEnv("YAHOO_TEAM_KEY");

  console.log("Env check passed");
  console.log("Team key:", teamKey);
  console.log("Client ID length:", clientId.length);
  console.log("Client secret length:", clientSecret.length);
  console.log("Refresh token length:", refreshToken.length);
}

main().catch((error) => {
  console.error("Job failed");
  console.error(error);
  process.exit(1);
});