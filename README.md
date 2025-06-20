# Time Tracker

## Getting started

You will need Git and Node.js installed on your computer

## Installation

From your command line, clone the repo and run the app:

```bash
# Clone this repository
git clone https://github.com/gtchax/time-tracker

# Go into the repository
cd time-tracker

# Install dependencies
npm install
# or
yarn install
# or
bun install

# Start the app

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Trade offs

1. Made no use of packages to reduce the dependencies and bundle size but reduced user experience and accessibility as a result.
2. No persistent storage of entries required given the time allowance.

## Given more time

1. Use Next.js and add user authentication so that individual user entries can be saved to a database.
2. Use tailwindCSS to improve UI (make it responsive) and improve accessibility.
3. Make use of framer motion to add micro animations to improve user experience.
4. Make use of Zustand to better handle global state.
5. With more time I would only list latest ten entries and add a page just for displaying entries with pagination.