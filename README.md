This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## 📐 Image Dimensions Guide — Device-Specific Uploads

All Hero, Banner, and Parallax sections now support **two separate image uploads** in the CMS:
- **Desktop Image** — shown on screens ≥ 768px (sm breakpoint)
- **Mobile Image** (optional) — shown on screens < 768px

If no mobile image is uploaded, the desktop image is used on all screen sizes.

---

### Section-by-Section Recommended Dimensions

#### 🏠 Home Page

| Section | Desktop | Mobile |
|---|---|---|
| **Hero** (full-screen) | `1920 × 1080 px` (16:9) | `750 × 1334 px` (9:16) |
| **Parallax 1** | `1920 × 900 px` (21:9) | `750 × 1200 px` (5:8) |
| **Parallax 2** | `1920 × 900 px` (21:9) | `750 × 1200 px` (5:8) |

> Hero is `100vh` tall. Keep important subjects centered — they will be cropped on the sides on very wide screens.

---

#### 🍽️ Restaurant Page

| Section | Desktop | Mobile |
|---|---|---|
| **Hero Banner** (75vh) | `1920 × 1080 px` (16:9) | `750 × 1334 px` (9:16) |

---

#### 🥂 Bar Page

| Section | Desktop | Mobile |
|---|---|---|
| **Banner** (brunch-banner) | `1920 × 900 px` (21:9) | `750 × 1200 px` (5:8) |

---

#### 📷 Gallery Page

| Section | Desktop | Mobile |
|---|---|---|
| **Hero Banner** | `1920 × 900 px` (21:9) | `750 × 1200 px` (5:8) |
| **Gallery Grid Images** | `800 × 800 px` (1:1 square) | — (same image, 1:1 works on all screens) |

---

#### 🎉 Dinner Party Page

| Section | Desktop | Mobile |
|---|---|---|
| **Hero Banner** | `1920 × 900 px` (21:9) | `750 × 1200 px` (5:8) |

---

### General Tips

- **File format:** Use `WebP` or high-quality `JPG`. Avoid PNG for large hero photos (file size).
- **Max file size:** Keep under **800 KB** per image for fast loading.
- **Subject placement:** On mobile (portrait), keep the main subject in the **center-top** of the frame so it isn't cropped by the safe area.
- **Parallax sections:** The parallax effect scales the image to `160%` of section height. Upload images slightly taller than specifications above to avoid white edges during scroll.
- **CMS hint:** In the CMS editor, the Desktop Image box has the default border. The Mobile Image box has a **blue border** and is labeled "Mobile Image (portrait crop)".

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
