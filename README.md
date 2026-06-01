# The Home's Doctor — static site (Netlify)

Modern replacement for the Base44-hosted site. **No monthly Base44 fee** — Netlify free tier covers typical brochure-site traffic.

## What's included

- All main pages from thehomesdoctor.com (home, about, services, contact, quote, estate agents, service detail pages)
- Netlify Forms on `/contact/` and `/get-quote/`
- 301 redirects from old Base44 URLs (`/About`, `/Contact`, etc.)
- Mobile-first responsive design
- Your logo and contact details

## Deploy to Netlify

### Option A — Drag and drop (fastest)

1. Zip the `thehomesdoctor` folder (or use the folder as-is).
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Deploy manually**.
3. Drop the folder.

### Option B — Git (recommended)

1. Create a new GitHub repo (e.g. `thehomesdoctor-site`).
2. Push this folder:

   ```bash
   cd ~/Desktop/thehomesdoctor
   git init
   git add .
   git commit -m "Initial static site for The Home's Doctor"
   git remote add origin git@github.com:YOUR_USER/thehomesdoctor-site.git
   git push -u origin main
   ```

3. In Netlify: **Add new site** → **Import from Git** → select the repo.
4. Build settings: **publish directory** = `.` (root), no build command.

### Connect your domain

1. Netlify → **Domain management** → **Add domain** → `thehomesdoctor.com` and `www.thehomesdoctor.com`.
2. At your domain registrar, point DNS to Netlify (they show exact A/CNAME records).
3. Enable HTTPS (automatic on Netlify).

### Forms

After first deploy, open **Forms** in Netlify to confirm `contact` and `quote` appear. Set **Form notifications** to `info@thehomesdoctor.com`.

Add this hidden form to `index.html` if forms don't register (Netlify sometimes needs it):

```html
<form name="contact" netlify netlify-honeypot="bot-field" hidden></form>
<form name="quote" netlify netlify-honeypot="bot-field" hidden></form>
```

## Cancel Base44

After DNS points to Netlify and you've tested contact/quote forms:

1. Export any blog posts or case studies from Base44 if needed.
2. Cancel the Base44 subscription.
3. Remove the Base44 badge (gone automatically on the new site).

## Local preview

```bash
cd ~/Desktop/thehomesdoctor
npx --yes serve .
# open http://localhost:3000
```

## Cost

- **Netlify**: free for static sites + 100 form submissions/month on free tier
- **Domain**: whatever you already pay your registrar
- **Savings**: ~£20/month vs Base44
