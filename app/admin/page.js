"use client";
import { useState, useEffect } from "react";

export default function Admin() {
  const [messages, setMessages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("time"); // default filter
  const [replyMessage, setReplyMessage] = useState("");

  useEffect(() => {
    fetchMessages();
  }, [filter]);

  const fetchMessages = async () => {
    const res = await fetch("/api/messages");
    const data = await res.json();
    if (data.success) {
      let sorted = data.data;
      if (filter === "az") {
        sorted = sorted.sort((a, b) => a.name.localeCompare(b.name));
      }
      setMessages(sorted);
    }
  };
  const handleReply = async () => {
    await fetch("/api/messages/reply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: selected.email,
        subject: "Reply from Admin",
        body: replyMessage,
      }),
    });
    setReplyMessage();
  };

  const handleDelete = async () => {
    const confirm_mess = confirm(
      "Are you sure you want to delete this message?"
    );
    if (confirm_mess === true) {
      await fetch(`/api/messages/${selected.id}`, {
        method: "DELETE",
      });

      setSelected(null); // clear right panel
      fetchMessages(); // refresh list
    } else {
      return; // exit if user cancels
    }
  };

  const handleHold = async () => {
    const holdTime = "2025-08-01 10:00:00"; // you can make it dynamic with prompt or date picker
    await fetch(`/api/messages/${selected.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hold_until: holdTime }),
    });
    fetchMessages(); // refresh to show status change
  };

  return (
    <div className="flex pt-[60px] h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Left Panel */}
      <aside className="w-1/3 bg-white/90 border-gray-200 border-r p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">Messages</h2>

        {/* Filters */}
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setFilter("time")}
            className={`px-3 py-1 text-black rounded ${
              filter === "time"
                ? "bg-blue-600 text-black"
                : "bg-gray-100 hover:bg-gray-50"
            }`}
          >
            By Time
          </button>
          <button
            onClick={() => setFilter("az")}
            className={`px-3 py-1  text-black  rounded ${
              filter === "az"
                ? "bg-blue-600 text-black"
                : "bg-gray-100 hover:bg-gray-50"
            }`}
          >
            A–Z
          </button>
        </div>

        {/* Messages List */}
        <div className="space-y-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              onClick={() => setSelected(msg)}
              className="p-3 bg-white/90 rounded-lg shadow cursor-pointer hover:bg-blue-50 border border-gray-100"
            >
              <p className="font-semibold text-black">
                {msg.name}{" "}
                {msg.status === "hold" && (
                  <span className=" text-yellow-600 text-sm">(on Hold) </span>
                )}{" "}
              </p>
              <p className="text-sm text-gray-500">{msg.email}</p>
            </div>
          ))}
        </div>
      </aside>

      {/* Right Panel */}
      <main className="flex-1 p-6 bg-white/90">
        {selected ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              {selected.name}
            </h2>
            <p className="text-gray-600">{selected.email}</p>
            <p className="p-3 bg-gray-50 text-black rounded border border-gray-200">
              {selected.message}
            </p>
            {selected && (
              <div className="space-y-4">
                <textarea
                  className="w-full border h-[300px] text-gray-700 p-2 rounded"
                  placeholder="Type your reply here..."
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                />
                <button
                  onClick={handleReply}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Send Reply
                </button>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={handleReply}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Reply
              </button>
              <button
                onClick={handleDelete}
                className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
              <button
                onClick={handleHold}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Hold
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Select a message to view details.</p>
        )}
      </main>
    </div>
  );
}
