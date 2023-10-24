import React, { useState } from "react";
import { AiOutlineMessage, AiOutlineSend } from "react-icons/ai";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Send form data to your server for email sending
    fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Email sent successfully!");
          // Optionally, you can reset the form fields here
          setName("");
          setEmail("");
          setMessage("");
        } else {
          alert("Email not sent. Please try again later.");
        }
      });
  };

  return (
    <div
      className={`fixed right-5 bottom-5 ${
        isOpen ? "w-72" : "w-16"
      } p-2 rounded-lg bg-rose-500 text-white transition-all duration-300`}
    >
      {isOpen ? (
        <div>
          <div className="p-4">
            <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
            <p className="text-sm mb-3">
              Ready to bring your vision to life? Let&apos;s talk and make it happen!
            </p>

            <div className="mt-4">
              <form onSubmit={handleFormSubmit}>
                <div className="mb-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-white">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border rounded text-black"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-white">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border rounded text-black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-white">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-2 border rounded text-black"
                    style={{ height: "120px", overflowY: "auto" }}
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-2 text-center">
                  <button
                    type="submit"
                    className="bg-white text-rose-800 py-2 px-4 rounded hover:bg-rose-400 text-lg"
                  >
                    Send <AiOutlineSend className="inline-block text-xl ml-1" />{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <button
            className="text-white hover:text-black text-xl w-full py-2 border-t border-gray-200"
            onClick={toggleChat}
          >
            Close
          </button>
        </div>
      ) : (
        <div className="text-center cursor-pointer" onClick={toggleChat}>
          <AiOutlineMessage className="text-3xl" />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
