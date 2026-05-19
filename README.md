# French Shadow

Mobile-first French listening and shadowing practice for public-domain and Creative Commons texts.

## Run locally

```bash
python3 -m http.server 8788
```

Then open `http://localhost:8788`.

## Deploy on Cloudflare Pages

1. Create a new Cloudflare Pages project.
2. Connect this repository or upload this folder.
3. Use no build command.
4. Set the output directory to `/`.

The current prototype is fully static. Future versions can add Cloudflare D1 for lesson metadata, R2 for pre-generated audio, and Workers for account/progress APIs.

## Content plan

Start with short, source-attributed lessons instead of full books. For launch, prioritize beginner and lower-intermediate material:

- 30 A1 passages
- 40 A2 passages
- 20 B1 passages
- 10 B2 passages

Do not start with C1/C2. The app is most useful when learners can repeat phrases confidently, so beginner and A-level content should carry the first version.

- public-domain French fables and short stories
- Creative Commons articles with compatible licenses
- sentence-level English translations
- pre-generated French audio assets for consistent pronunciation
