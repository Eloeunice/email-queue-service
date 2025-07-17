# 📧 Email Queue Service

A robust and scalable email queueing and delivery service built with **NestJS**, **BullMQ**, **Redis**, and **Nodemailer**.

This service allows applications to enqueue email jobs for asynchronous processing, improving performance and reliability.

---

## 🚀 Tech Stack

- **NestJS** – Progressive Node.js framework for building efficient and scalable applications.
- **BullMQ** – A high-performance job queue system based on Redis.
- **Redis** – In-memory data store used for managing the queue.
- **Nodemailer** – Module to send emails using SMTP or other transport protocols.

---

## 📦 Features

- Asynchronous email delivery via BullMQ queue
- Automatic retries and failure handling
- Scalable architecture (producer/consumer separation)
- Support for multiple email templates (coming soon)
- Optional admin dashboard for queue monitoring (Bull Board)

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/seu-usuario/email-queue-service.git
cd email-queue-service
```

### 2. Install dependencies

```bash
npm install
```

---

### 3. Set up environment variables

Create a `.env` file based on `.env.example`:

```env
# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379

# Email (SMTP) Configuration
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_user
SMTP_PASS=your_password
EMAIL_FROM=no-reply@example.com
```

---

### 4. Run the application

```bash
npm run start:dev
```

---

## 📬 Usage

You can create a job by calling an internal service or creating a REST endpoint like:

```ts
this.emailQueueService.sendEmail({
  to: 'user@example.com',
  subject: 'Welcome!',
  text: 'Thank you for registering.',
});
```
---

## 📊 Queue Monitoring (Optional)

If you integrate **Bull Board**, you can monitor your queues visually:

```bash
http://localhost:3000/admin/queues
```

---

## 🧪 TODOs

- [ ] Add support for email templates (e.g. Handlebars)
- [ ] Add Swagger API documentation
- [ ] Add Docker support
- [ ] Add unit/integration tests
- [ ] Create REST endpoint for sending emails
---

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.
