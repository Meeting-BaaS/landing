...
const app: Express = express();

// SANITY CHECK
// ENV variables
const missingEnvVars = checkEnvironmentVariables();

// NOTION DATABASES (easy source of error)
if (process.env.NOTION_API_KEY) {
  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    listDatabases(notion);
  } catch {
    console.log("⚠️ Could not access Notion.");
  }
}

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  var url = req.protocol + "://" + req.get("host");
  res.locals.title = "Home";
  res.render("pages/index", { url, missingEnvVars });
});

// create a page with a form to send a meeting bot on Google Meet, Zoom, and Teams
app.use("/form", formRouter);

// set up the webhook to receive meeting data (transcription, etc) from Meeting Baas
app.use("/webhook", webhookRouter);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(
    `\n\n[server]: 🟢🟢 Server is running at \u001b]8;;${url}\u001b\\${url}\u001b]8;;\u001b\\ 🟢🟢`
  );
});
