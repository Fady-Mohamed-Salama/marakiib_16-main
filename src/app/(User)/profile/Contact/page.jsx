"use client";

import React, { useState } from "react";
import BackArrow from "@/Components/BackArrow/BackArrow";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, msg: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ loading: false, ok: true, msg: data.message || "Message sent." });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({ loading: false, ok: false, msg: data.message || "Failed to send." });
      }
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: err.message || "Network error" });
    }
  };

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center justify-center relative mb-8">
          <div className="absolute left-0">
            <BackArrow className="text-3xl" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 text-center">Contact Us</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Form */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Send us a message</h2>

              {/* ✅ Success / Error Message */}
            {status.ok !== null && (
              <div
                className={`mb-4 p-3 rounded text-sm ${
                  status.ok
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : "bg-red-100 text-red-700 border border-red-300"
                }`}
              >
                {status.msg}
              </div>
            )}


            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-60"
                >
                  {status.loading ? "Sending..." : "Send Message"}
                </button>
                {status.ok === true && (
                  <span className="text-green-600">{status.msg}</span>
                )}
                {status.ok === false && (
                  <span className="text-red-600">{status.msg}</span>
                )}
              </div>
            </form>

            <p className="text-xs text-gray-500 mt-3">We will respond within 24-48 hours.</p>
          </div>

          {/* Right: Map + Info grid */}
          <div className="space-y-6">
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow">
              {/* Google Maps iframe centered on Amman, Jordan - replace coords/address as needed */}
              <iframe
                title="Marakiib location"
                src={`https://www.google.com/maps?q=Amman,+Jordan&z=13&output=embed`}
                className="w-full h-64 border-0"
                loading="lazy"
              />
            </div>

            {/* General info grid */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Contact information</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p>Amman, Hashemite Kingdom of Jordan</p>
                </div>

                <div>
                  <h4 className="font-medium">Email</h4>
                  <p>support@marakiib.com</p>
                </div>

                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p>+962 7X XXX XXXX</p>
                </div>

                <div>
                  <h4 className="font-medium">Working hours</h4>
                  <p>Sun – Thu: 9:00 AM – 6:00 PM</p>
                </div>

                <div>
                  <h4 className="font-medium">Since</h4>
                  <p>Established 2018</p>
                </div>

                <div>
                  <h4 className="font-medium">Website</h4>
                  <p>www.marakiib.com</p>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <a href="#" className="text-sm underline">Facebook</a>
                <a href="#" className="text-sm underline">Instagram</a>
                <a href="#" className="text-sm underline">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
        API route example (Next.js) - place in /pages/api/contact.js or /app/api/contact/route.js

        // pages/api/contact.js (Node - Next.js API Route)
        import nodemailer from 'nodemailer';

        export default async function handler(req, res) {
          if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
          const { name, email, phone, message } = req.body;

          if (!name || !email || !message) return res.status(400).json({ message: 'Missing fields' });

          // Configure transporter using environment variables
          const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
          });

          const mailOptions = {
            from: `${name} <${email}>`,
            to: process.env.TO_EMAIL || 'support@marakiib.com',
            subject: `New contact from website: ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
          };

          try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Message sent successfully' });
          } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Failed to send email' });
          }
        }

        // Note: Add the following env vars to .env.local:
        // SMTP_HOST=smtp.example.com
        // SMTP_PORT=587
        // SMTP_SECURE=false
        // SMTP_USER=your_smtp_user
        // SMTP_PASS=your_smtp_pass
        // TO_EMAIL=support@marakiib.com
      */}
    </div>
  );
}
