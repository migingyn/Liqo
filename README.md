#💧 Liqo – Real-Time Treasury Intelligence

> **Liqo** is a web application providing real-time intraday liquidity visibility, automated treasury operations, and full blockchain transparency for banks & corporates.
Powered by React + TypeScript + Convex, Liqo helps financial teams understand cash flow in the moment it happens — not at end-of-day.
> Built with **React**, **TypeScript**, and **Convex**, Liqo leverages **blockchain transparency** to make global cash management secure, intelligent, and effortless.

## 🏗️ Architecture (High-Level)
                   ┌──────────────────────────────────────────┐
                   │                 Frontend                 │
                   │        React + TypeScript + Vite         │
                   │   UI: Graphs, Dashboard, Transactions    │
                   └──────────────────────┬───────────────────┘
                                          │
                     Real-time Queries &  │ UI actions trigger Convex functions
                          Mutations       │
                                          ▼
                ┌───────────────────────────────────────────────┐
                │                    Convex                     │
                │ Backend Functions + Real-time Database        │
                │ - fetchIntradayData()                         │
                │ - executeTransaction()                        │
                │ - getLedgerHistory()                          │
                │ - ruleAutomation()                            │
                └──────────────────────┬────────────────────────┘
                                       │
                         Blockchain / On-Chain Mock Layer
                                       │
                     Hashes, proofs, settlement status
                                       ▼
                ┌──────────────────────────────────────────────┐
                │              Transparent Ledger              │
                │ Immutable history of all actions & flows     │
                └──────────────────────────────────────────────┘


---

## 🚀 Overview

Most treasury systems rely on end-of-day reporting and scattered data across multiple banks, leaving gaps in real-time decision-making.  
**Liqo** closes that gap by offering:

- ⚡ **Instant visibility** of global liquidity and cash flow positions  
- 🤖 **Smart automation** for sweeps and settlements using programmable rules  
- 🔗 **On-chain transparency** for every transaction and audit trail  
- 📊 **Dynamic analytics** with live charts and alerts  
- 🌗 **Comfortable dual-theme interface** (soft day mode + Webull-style night mode)

---

## 🧠 Key Features

| Category | Description |
|:--|:--|
| 💹 **Intraday Liquidity Graphs** | Real-time line graph showing liquidity vs time; toggle bar, donut, and heatmap views |
| 🧾 **Ledger Transparency** | Immutable on-chain record of all transfers with hash and status tracking |
| 🔄 **Automated Rules** | Create smart triggers for sweeps or payouts via Convex functions |
| 🏦 **Transaction Center** | Secure transfer module with blockchain confirmation modal |
| 🌗 **Day/Night Mode** | Accessible light/dark themes designed for comfort and clarity |
| 🔔 **Alerts & Insights** | Threshold warnings, anomaly detection, and liquidity recommendations |

---

## 🧰 Tech Stack

**Frontend**
- [React](https://react.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Vite](https://vitejs.dev/) – fast development environment  

**Backend**
- [Convex](https://www.convex.dev/) – real-time database and function backend  

**Data & Visualization**
- [Recharts](https://recharts.org/) or [Chart.js](https://www.chartjs.org/)  

**Design**
- [Figma](https://www.figma.com/) – UI/UX prototyping  
- [TailwindCSS](https://tailwindcss.com/) – styling and responsive layout  

---

## 📂 Project Structure
liqo/
├── src/
│ ├── components/ # Reusable UI components (graphs, modals, tables)
│ ├── pages/ # Dashboard, Transactions, Ledger
│ ├── context/ # Theme + App state providers
│ ├── convex/ # Convex backend functions and schema
│ ├── assets/ # Icons, logos
│ └── utils/ # Helpers, mock data
├── public/
│ └── index.html
├── package.json
└── README.md


---

## ⚙️ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-team>/liqo.git
cd liqo
```

### 2️⃣ Install dependencies
npm install

### 3️⃣ Run development server
npm run dev

### 4️⃣ Start Convex backend (new terminal)
npx convex dev

### 🔐 Environment Variables
VITE_CONVEX_URL=<your-convex-url>

