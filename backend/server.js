import express from 'express';
import cors from 'cors';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import * as AdminJSMongoose from '@adminjs/mongoose';
import session from 'express-session';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Message from './models/Message.js';
import { sendContactNotification } from './utils/mailer.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

// Register the Mongoose adapter
AdminJS.registerAdapter(AdminJSMongoose);

const PORT = process.env.PORT || 5000;
const app = express();

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourdomain.com'] 
    : ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Content Security Policy
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'"
  );
  next();
});

app.use(express.json());

// Session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax'
    }
  })
);

// Connect to MongoDB
await connectDB();

// Basic authentication check
const authenticate = async (email, password) => {
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    return Promise.resolve({ email });
  }
  return null;
};

// AdminJS Setup
const adminJs = new AdminJS({
  resources: [{
    resource: Message,
    options: {
      navigation: { name: 'Contact Messages' },
      properties: {
        createdAt: {
          isVisible: { list: true, filter: true, show: true, edit: false }
        },
        status: {
          isVisible: { list: true, filter: true, show: true, edit: true },
          availableValues: [
            { value: 'unread', label: 'Unread' },
            { value: 'read', label: 'Read' },
            { value: 'replied', label: 'Replied' }
          ]
        },
        message: {
          type: 'richtext',
          isVisible: { list: false, filter: false, show: true, edit: false }
        }
      },
      sort: {
        sortBy: 'createdAt',
        direction: 'desc'
      },
      listProperties: ['name', 'email', 'subject', 'status', 'createdAt'],
      filterProperties: ['status', 'createdAt', 'subject'],
      showProperties: ['name', 'email', 'subject', 'message', 'status', 'createdAt'],
      editProperties: ['status']
    }
  }],
  rootPath: '/admin',
  branding: {
    companyName: 'DJ Portfolio Admin',
    logo: false
  },
  dashboard: {
    handler: async () => {
      return { some: 'output' }
    },
    component: join(__dirname, 'components/dashboard')
  }
});

// Build and use the Router with authentication
const router = AdminJSExpress.buildAuthenticatedRouter(
  adminJs,
  {
    authenticate,
    cookieName: 'adminjs',
    cookiePassword: process.env.SESSION_SECRET || 'secret-key'
  },
  null,
  {
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET || 'secret-key',
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  }
);

app.use(adminJs.options.rootPath, router);

// Health check route
app.get('/', (req, res) => {
  res.json({ status: 'API is running' });
});

// API Routes
app.post('/api/contact', async (req, res) => {
  try {
    const messageData = req.body;
    const message = await Message.create(messageData);
    
    // Send email notification
    try {
      await sendContactNotification(messageData);
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // Continue execution even if email fails
    }
    
    res.status(201).json({
      success: true,
      message: 'Message sent successfully'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong!'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`AdminJS started on http://localhost:${PORT}/admin`);
});
