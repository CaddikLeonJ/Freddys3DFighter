// Freddy's 3D Anime Fighter - GitHub Auto-Updater for Scriptable
// Same simple workflow as our other games: GitHub -> Scriptable.
// IMPORTANT: This launcher works only when the repository is PUBLIC.
// No GitHub token, login, or additional services required.

const GAME_URL = "https://raw.githubusercontent.com/CaddikLeonJ/Freddys3DFighter/main/index.html";
const fm = FileManager.local();
const savedGame = fm.joinPath(fm.documentsDirectory(), "Freddys3DFighter_cached.html");

async function showMessage(title, message) {
  const a = new Alert();
  a.title = title;
  a.message = message;
  a.addAction("OK");
  await a.presentAlert();
}

async function runGame() {
  let html;

  try {
    // Add a timestamp to request the latest build, not an old cached response.
    const request = new Request(GAME_URL + "?refresh=" + Date.now());
    request.timeoutInterval = 25;
    request.headers = { "Cache-Control": "no-cache" };
    html = await request.loadString();

    const status = request.response ? request.response.statusCode : 0;
    if (status !== 200 || !/<html\b/i.test(html) || !/<\/html>/i.test(html)) {
      throw new Error(
        "GitHub couldn't return the game (HTTP " + (status || "?") +
        "). Make sure Freddys3DFighter is Public and index.html exists on main."
      );
    }

    // A successful download becomes our last-working backup.
    fm.writeString(savedGame, html);

  } catch (error) {
    // Still let the player use the last successfully downloaded version.
    if (!fm.fileExists(savedGame)) {
      await showMessage("Freddy's Game - Can't Update",
        String(error.message || error) +
        "\n\nConnect to the internet and check the GitHub repository is Public.");
      return;
    }

    const a = new Alert();
    a.title = "Latest Update Unavailable";
    a.message = String(error.message || error) +
      "\n\nWould you like to play the last downloaded version instead?";
    a.addAction("Play Saved Version");
    a.addCancelAction("Cancel");
    if ((await a.presentAlert()) < 0) return;
    html = fm.readString(savedGame);
  }

  const view = new WebView();
  await view.loadHTML(html, "https://raw.githubusercontent.com/CaddikLeonJ/Freddys3DFighter/main/");
  await view.present(true);
}

await runGame();