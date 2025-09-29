"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  FiArrowLeft,
  FiVideo,
  FiPhone,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";
import { IoMdSend } from "react-icons/io";
import { chats } from "@/Components/data/chats";

const allMessages = {
  1: [
    { id: 0, type: "system", text: "Hela Quintin is a partner of QENT" },
    {
      id: 1,
      from: "them",
      text: "Ready for your next adventure? Book a car today and get 20% off your first rental! Don’t miss out—limited-time offer. Reserve your ride now!",
      time: "09:10 am",
    },
    {
      id: 2,
      from: "me",
      text: "Hi, I'm interested in renting your car. Is it available from [Date] to [Date]?",
      time: "09:10 am",
    },
    {
      id: 3,
      from: "them",
      text: "Hello! Yes, the car is available on those dates. Could you please confirm the pickup and drop-off locations?",
      time: "09:15 am",
    },
    {
      id: 4,
      from: "me",
      text: "Great! I'd like to pick it up from [Pickup Location] and return it to [Drop-off Location].",
      time: "09:17 am",
    },
    {
      id: 5,
      from: "them",
      text: "It’s ok no problem",
      time: "09:18 am",
    },
  ],
};

export default function ChatInner() {
  const { id } = useParams();
  const router = useRouter();

  const user = chats.find((c) => c.id === Number(id));
  const [messages, setMessages] = useState(allMessages[id] || []);
  const [newMsg, setNewMsg] = useState("");
  const [editMsgId, setEditMsgId] = useState(null);
  const [selectedMsg, setSelectedMsg] = useState(null); // الرسالة اللي معمولة Long Press عليها

  const messagesEndRef = useRef(null);

  // Auto scroll لآخر رسالة
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!newMsg.trim()) return;

    setMessages([
      ...messages,
      { id: Date.now(), from: "me", text: newMsg, time: "Now" },
    ]);

    setNewMsg("");

    // 🟢 رجّع الـ textarea لحجمه الأصلي بعد الإرسال
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleDelete = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
    setSelectedMsg(null);
  };

  const handleEdit = (msg) => {
    setEditMsgId(msg.id);
    setNewMsg(msg.text);
    setSelectedMsg(null);
  };
  const textareaRef = useRef(null);

  return (
    <div className="bg-gray-50 h-lvh flex flex-col">
      {/* الهيدر */}
      <div className="flex items-center justify-between bg-gray-50 px-4 h-16 shadow sticky top-[70px] z-10">
        {/* Left side */}
        <div className="flex items-center gap-3 flex-1  ">
          <button onClick={() => router.back()}>
            <FiArrowLeft className="text-gray-600 text-xl" />
          </button>
          <Image
            src={user?.img || "/images/default.png"}
            alt={user?.name || "User"}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="truncate">
            <h3 className="font-semibold text-gray-800 truncate">
              {user?.name}
            </h3>
            <p
              className={`text-xs ${
                user?.online ? "text-green-600" : "text-gray-400"
              }`}
            >
              {user?.online ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex gap-4 text-red-500 ml-3">
          <FiVideo className="text-xl cursor-pointer" />
          <FiPhone className="text-xl cursor-pointer" />
        </div>
      </div>

      {/* الرسائل */}
      <div className="flex-1 px-4 py-3 space-y-3 overflow-y-auto scrollbar-hide">
        {messages.map((msg) =>
          msg.type === "system" ? (
            <div
              key={msg.id}
              className="text-center text-xs text-gray-500 bg-gray-100 py-2 rounded-md"
            >
              {msg.text}
            </div>
          ) : (
            <div
              key={msg.id}
              className={`flex ${
                msg.from === "me" ? "justify-end" : "justify-start"
              }`}
              onContextMenu={(e) => {
                e.preventDefault(); // تمنع القائمة الافتراضية
                msg.from === "me" && setSelectedMsg(msg);
              }}
              onTouchStart={() => {
                msg.from === "me" && setTimeout(() => setSelectedMsg(msg), 500); // ضغطة طويلة على الموبايل
              }}
            >
              {msg.from === "them" && (
                <Image
                  src={user?.img || "/images/default.png"}
                  alt="avatar"
                  width={28}
                  height={28}
                  className="rounded-full mr-2 self-end"
                />
              )}
              <div
                className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm shadow ${
                  msg.from === "me"
                    ? "bg-white text-gray-800 rounded-br-none"
                    : "bg-white text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
                <p className="text-[10px] mt-1 text-gray-400">{msg.time}</p>
              </div>
            </div>
          )
        )}
        <div ref={messagesEndRef} />
      </div>
      {/* شريط الكتابة */}
      <div className="bg-gray-100 p-3 flex items-center gap-2 sticky bottom-0 z-10">
        {/* الـ Input مع زرار الإرسال جوه */}
        <div className="flex-1 relative flex items-center">
          <textarea
            rows={1}
            placeholder="Type a message..."
            value={newMsg}
            ref={textareaRef}
            onChange={(e) => {
              setNewMsg(e.target.value);

              // auto resize مع حد أقصى 5 سطور
              e.target.style.height = "auto";
              const maxHeight = 5 * 24;
              if (e.target.scrollHeight > maxHeight) {
                e.target.style.height = maxHeight + "px";
                e.target.style.overflowY = "auto"; // بس في الحالة دي
              } else {
                e.target.style.height = e.target.scrollHeight + "px";
                e.target.style.overflowY = "hidden"; // لو أقل من maxHeight
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            className="w-full bg-white px-4 py-2 pr-12 rounded-full border border-gray-500 outline-none text-sm resize-none placeholder:text-gray-600 placeholder:font-medium"
            style={{ lineHeight: "24px", overflowY: "hidden" }} // يبدأ من غير scroll
          />

          {/* زرار الإرسال متوسّط رأسيًا */}
          <button
            onClick={handleSend}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-600"
          >
            <IoMdSend className="text-xl" />
          </button>
        </div>
      </div>

      {/* منيو (Modal) لما تضغط ضغطة طويلة */}
      {selectedMsg && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-4 w-[220px] text-center space-y-3">
            <p className="text-sm text-gray-700 truncate">{selectedMsg.text}</p>
            <div className="flex justify-around mt-3">
              <button
                onClick={() => handleEdit(selectedMsg)}
                className="flex items-center gap-1 text-blue-500 hover:text-blue-700"
              >
                <FiEdit2 /> Edit
              </button>
              <button
                onClick={() => handleDelete(selectedMsg.id)}
                className="flex items-center gap-1 text-red-500 hover:text-red-700"
              >
                <FiTrash2 /> Delete
              </button>
            </div>
            <button
              onClick={() => setSelectedMsg(null)}
              className="mt-2 text-xs text-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
