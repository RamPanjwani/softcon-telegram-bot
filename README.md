# Softcon Telegram Bot

A Node.js Telegram bot for Softcon Business Solutions. The bot shares company information, contact details, office hours, location, website links, and after-hours response messages with Telegram users.

## Features

- Welcomes users with a short introduction to Softcon Business Solutions
- Responds to Telegram commands and matching text keywords
- Shares office address, Google Maps location, website, email, phone, and WhatsApp contact details
- Sends contact cards for phone and WhatsApp numbers
- Replies with an after-hours message outside office hours
- Uses environment variables for bot token configuration

## Tech Stack

- Node.js
- Telegraf
- dotenv

## Prerequisites

- Node.js installed
- npm installed
- Telegram bot token from BotFather

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
BOT_TOKEN=your_telegram_bot_token_here
```

Start the bot:

```bash
npm start
```

If everything is configured correctly, the console will show:

```text
bot is running
```

## Bot Commands

| Command | Description |
| --- | --- |
| `/start` | Sends the welcome message |
| `/details` | Shares complete company details |
| `/location` | Sends the Google Maps location |
| `/hours` | Shows office hours |
| `/web` | Sends the company website |
| `/address` | Shares the office address |
| `/contact` | Sends company phone contacts |
| `/whatsapp` | Sends the WhatsApp contact |
| `/email` | Sends company email addresses |
| `/link` | Sends the Telegram bot link |

The bot also responds when users send text containing keywords such as `details`, `location`, `hours`, `web`, `address`, `contact`, `whatsapp`, `email`, or `link`.

## Project Structure

```text
softcon-telegram-bot/
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Environment Variables

| Variable | Required | Description |
| --- | --- | --- |
| `BOT_TOKEN` | Yes | Telegram bot token generated through BotFather |

## Deployment Notes

- Keep the `.env` file private and never commit real bot tokens.
- The after-hours response uses the server's local time. Set the server timezone correctly for accurate office-hour behavior.
- For production hosting, use a process manager or platform that can keep the Node.js process running continuously.

## Available Scripts

```bash
npm start
```

Runs the Telegram bot with `node index.js`.

```bash
npm test
```

Currently this project does not include automated tests.

## License

This project is licensed under the ISC License.
