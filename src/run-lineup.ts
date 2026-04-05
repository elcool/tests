async function main(): Promise<void> {
  console.log("Yahoo lineup job started");
  console.log("Current time:", new Date().toISOString());
}

main().catch((error) => {
  console.error("Job failed");
  console.error(error);
  process.exit(1);
});