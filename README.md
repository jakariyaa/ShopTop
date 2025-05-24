# ShopTop

ShopTop is a modern, responsive e-commerce shopping cart demo built with React, TypeScript, and TailwindCSS. It features a clean UI, persistent cart state with local storage, and smooth user experience.

### Live Demo

https://shoptop.pages.dev/

## Features

- 🛍️ Browse a store of products with images and prices
- 🛒 Add, remove, and update item quantities in your shopping cart
- 💾 Cart state persists in local storage
- 📱 Responsive design for desktop and mobile
- ⚡ Type safe development with TypeScript
- ✨ Clean, modern UI with Tailwind CSS

## Project Structure

```
.
├── public/
│   └── images/           # Product images
├── src/
│   ├── components/       # UI components (Cart, Navbar, StoreItem, etc.)
│   ├── context/          # Shopping cart context/provider
│   ├── data/             # Store items data (JSON)
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page components (Home, About, Store)
│   ├── utilities/        # Utility functions (currency formatting, etc.)
│   ├── App.tsx`          # Main app component
│   └── main.tsx          # Entry point
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/ShopTop.git
   cd ShopTop
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) to view the app.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## Customization

- **Add or edit products:**  
  Modify [`src/data/items.json`](src/data/items.json) and add images to [`public/images/`](public/images/).
- **Styling:**  
  Edit Tailwind classes in component files under [`src/components/`](src/components/).

## Feedback

For any questions or suggestions, please [open an issue](https://github.com/your-username/ShopTop/issues/new).
