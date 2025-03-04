# DJ Portfolio Application

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js)](https://nodejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.11-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-4.21.2-000000?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?logo=mongodb)](https://www.mongodb.com/)

A professional portfolio website for DJs with an integrated admin panel for managing content and responding to inquiries. This full-stack application showcases music, events, a gallery, and offers contact functionality.

![](public/dj_portfolio_preview_1.png?raw=true)

## ✨ Features

- **Responsive Design** - Optimized for all device sizes
- **Music Showcase** - Display tracks with interactive audio player
- **Image Gallery** - Categorized gallery with modal view
- **Contact Form** - Integrated with email notifications
- **Admin Panel** - Secure access to manage inquiries
- **Animations** - Smooth scroll reveal and transition effects
- **Modern UI** - Clean, professional interface with Tailwind CSS and shadcn/ui

## 🛠️ Tech Stack

### Frontend
- [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) - Fast build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Unstyled UI components
- [Lucide Icons](https://lucide.dev/) - Beautiful SVG icons
- [React Router](https://reactrouter.com/) - Client-side routing
- [React Query](https://tanstack.com/query) - Data fetching and caching

### Backend
- [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- [AdminJS](https://adminjs.co/) - Admin panel framework
- [Nodemailer](https://nodemailer.com/) - Email sending functionality
- [Express Session](https://www.npmjs.com/package/express-session) - Session management


|FredonBytes|DJ Portfolio Preview|
|:-:|:-:|
|![](public/dj_portfolio_preview_2.png?raw=true&h=750&w=1260)|![](public/dj_portfolio_preview_3.png?raw=true&h=750&w=1260)|
|![](public/dj_portfolio_preview_4.png?raw=true&h=750&w=1260)|![](public/dj_portfolio_preview_5.png?raw=true&h=750&w=1260)|

---

## 🗂️ Project Structure

```
/
├── backend/               # Backend Express application
│   ├── components/        # AdminJS UI components
│   ├── config/            # Database configuration
│   ├── models/            # Mongoose schemas
│   ├── utils/             # Backend utilities
│   └── server.js          # Main server file
├── src/
│   ├── components/        # React components
│   │   ├── contact/       # Contact-related components
│   │   └── ui/            # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Frontend utilities
│   ├── pages/             # Route pages
│   └── types/             # TypeScript type definitions
├── public/                # Static assets
└── ...config files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- MongoDB database

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/patrik-fredon/dj-portfolio.git
cd dj-portfolio
```

2. **Install dependencies**

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

3. **Environment Setup**

Create .env files based on the examples:

**Frontend**
.env:

```
VITE_API_URL=http://localhost:5000
VITE_ADMIN_URL=http://localhost:5000/admin
```

**Backend**
.env:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=secure_password
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-email-password
SESSION_SECRET=your-session-secret
```

4. **Run the application**

```bash
# Run frontend and backend concurrently in development mode
npm run dev
```

The frontend will be available at http://localhost:8080 and the backend at http://localhost:5000

#### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | POST | Submit a contact message |
| `/admin` | GET | Admin panel interface |
| `/` | GET | API health check |

## 💌 Contact Form

The application includes a contact form that:

1. Validates user input
2. Stores messages in MongoDB
3. Sends email notifications to administrators
4. Can be managed through the admin panel

Email sending is handled by the mailer.js utility using Nodemailer.

## 🔐 Admin Panel

The application features an admin panel powered by AdminJS:

- Message management
- Status tracking (unread/read/replied)
- Filtering and searching messages
- Authentication system

Access the admin panel at `/admin` with the credentials set in your .env file.

## 🔒 Security Features

- CSRF protection
- Content Security Policy
- Secure session cookies
- Rate limiting
- Input validation
- Environment variable protection

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Patrik Fredon - [FredonBytes](mailto:patrik@fredonbytes.cloud)

---

© 2025 FredonBytes | Bringing your vision to life
