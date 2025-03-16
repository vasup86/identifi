# Identifi

## Overview

This is a **React-based security payment verification system** built for blockchain transactions, specifically designed to work with the **XRPL Blockchain**. The application enables users to **create wallets, send payments, and verify payments** securely.

## Features

- **Wallet Creation**: Create an XRPL wallet and attach it to an unique username.
- **Send Payments**: Securely send payments via the XRPL blockchain using the users account.
- **Auditability**: Attach a ZKP hash of the proof to the transaction.
- **Wallet Management**: View and manage wallet accounts.

## Installation

### Prerequisites

- Node.js
- npm
- Python
- Flask
- MySQL

### Steps

1. **Clone the repository**
2. **Navigate to the frontend folder**
3. `cd identifi`
4. **Install dependencies**
   `npm install`
5. **Start the development server**
   `npm run dev`
6. ** Navigate to Backend folder **
7. **Install dependencies**
   `pip install -r requirements.txt`
   `npm install`
8. **Run the Flask Server**
   `python app.py`
9. **Create the MySQL Database**
   `setup the database xrpl using the xrpl.sql file`

## Usage

- Navigate to the app in your browser.
- The app will use `Alice` as sender and `Bob` as the receiver.
- Under the `sender username` input "Bob" and the `amount`
- You can see Bob's wallet amount below.
- Navigate to the Bob's account [XRPL Testnet](https://testnet.xrpl.org/accounts/rhk3aZwhntWoNBJa4BkBkm7wkzRQ74WAeZ).
- You can see all the received transactions and the memo which will be the hash of the groth16 ZKP and the full proof will be saved on out database.
