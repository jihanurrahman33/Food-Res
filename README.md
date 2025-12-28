# 🍕 Food-Res

A modern, full-stack restaurant web application built with Next.js 16, featuring food browsing, shopping cart functionality, customer reviews, and feedback management.

## ✨ Features

- **Food Menu Browsing**: Browse a comprehensive menu of food items with search functionality
- **Shopping Cart**: Add food items to cart with real-time updates
- **Search & Filter**: Search for specific food items dynamically
- **Customer Reviews**: View and browse customer reviews and ratings
- **Feedback System**: Submit and manage customer feedback with MongoDB integration
- **Responsive Design**: Fully responsive UI built with Tailwind CSS and DaisyUI
- **Server-Side Rendering**: Optimized performance with Next.js App Router
- **API Routes**: RESTful API endpoints for feedback management

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Frontend**: React 19, Tailwind CSS 4, DaisyUI
- **Database**: MongoDB
- **Styling**: CSS Modules, Tailwind CSS, DaisyUI
- **State Management**: React Context API
- **Date Handling**: date-fns
- **Code Quality**: ESLint

## 📁 Project Structure

```
food-res/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── foods/             # Food menu pages
│   │   ├── feedback/          # Feedback pages
│   │   ├── reviews/           # Reviews pages
│   │   └── api/               # API routes
│   ├── components/            # Reusable React components
│   │   ├── FoodCard/         # Food item display card
│   │   ├── FeedbackCard/     # Feedback display card
│   │   ├── ReviewCard/       # Review display card
│   │   ├── NavBar/           # Navigation bar
│   │   ├── Footer/           # Footer component
│   │   └── forms/            # Form components
│   ├── contexts/             # React Context providers
│   │   └── CartProvider.jsx  # Shopping cart state management
│   ├── action/               # Server and client actions
│   │   ├── server/          # Server actions
│   │   └── client/          # Client actions
│   └── lib/                  # Utility functions
│       └── dbConnect.js      # MongoDB connection
├── public/                   # Static assets
└── package.json             # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB database (local or cloud)
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jihanurrahman33/Food-Res.git
cd food-res
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_server=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📄 Available Pages

- `/` - Home page
- `/foods` - Browse all food items with search
- `/foods/[id]` - Individual food item details
- `/reviews` - Customer reviews page
- `/feedback` - View all feedback
- `/feedback/add` - Submit new feedback

## 🔌 API Endpoints

- `GET /api/feedback` - Get all feedback
- `POST /api/feedback` - Create new feedback
- `GET /api/feedback/[id]` - Get feedback by ID
- `PUT /api/feedback/[id]` - Update feedback
- `DELETE /api/feedback/[id]` - Delete feedback

## 🎨 Key Features Breakdown

### Shopping Cart
- Context-based state management
- Add items to cart from food menu
- Real-time cart updates
- Persistent cart view on foods page

### Search Functionality
- Real-time food search
- Query parameter-based search
- Server-side search implementation

### Feedback System
- MongoDB integration for feedback storage
- CRUD operations for feedback management
- Server actions for data mutations
- Form validation and submission

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 📦 Dependencies

### Main Dependencies
- `next`: 16.1.1
- `react`: 19.2.3
- `react-dom`: 19.2.3
- `mongodb`: 7.0.0
- `daisyui`: 5.5.14
- `date-fns`: 4.1.0
- `tailwindcss`: 4.1.18

### Dev Dependencies
- `eslint`: 9
- `eslint-config-next`: 16.1.1
- `@tailwindcss/postcss`: 4.1.18

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚢 Deployment

### Deploy on Vercel

The easiest way to deploy this app is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import the project to Vercel
3. Configure environment variables
4. Deploy!

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Jihan Ur Rahman**
- GitHub: [@jihanurrahman33](https://github.com/jihanurrahman33)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com) and [DaisyUI](https://daisyui.com)
- Food data from Taxi Kitchen API
