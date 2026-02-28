# Unified UPI Cashback & Coupon Aggregator 💳📊

A real-time full-stack fintech web application that centralizes UPI cashback rewards and coupons from platforms like Google Pay, Paytm, and PhonePe into a single intelligent dashboard.

##  Problem

UPI rewards are fragmented across apps, expire unnoticed, and lack centralized visibility — leading to unclaimed cashback and inefficient redemption.

##  Solution

A unified real-time dashboard that:

- Extracts reward data via OCR from screenshots
- Parses cashback details from SMS notifications
- Tracks coupon expiry automatically
- Provides real-time analytics & savings insights
- Syncs across devices instantly

---

## 🛠 Tech Stack

**Frontend**
- Next.js / React
- Tailwind CSS
- Chart.js / Recharts

**Backend**
- Node.js + Express
- PostgreSQL
- Socket.IO (WebSockets)

**Automation & Intelligence**
- Node Cron (Expiry Scheduler)
- Tesseract / Google Vision API (OCR Pipeline)

## ✨ Core Features

- 📷 Screenshot-based OCR reward extraction
- 📩 SMS parsing engine
- ⏳ Automated expiry reminders
- 📊 Monthly savings analytics
- 🔄 Real-time live dashboard updates
- 🏷 Category-based reward filtering
- 🔐 Multi-device sync

---
## Setup

```bash
npm install
npm run dev

