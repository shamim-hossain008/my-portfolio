import { Send } from "lucide-react";
import { useState, type SyntheticEvent } from "react";

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-2xl mx-auto border-t border-zinc-900"
    >
      <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
        <span className="text-emerald-400 font-mono text-xl">03.</span>{" "}
        Initialize Contact
      </h2>
      <p className="text-zinc-400 mb-8 text-sm">
        Have a security audit request or a frontend architecture role? Send an
        encrypted transmission below.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          required
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-emerald-500"
        />
        <input
          type="email"
          required
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-emerald-500"
        />
        <textarea
          rows={4}
          required
          placeholder="Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-emerald-500"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="flex items-center justify-center gap-2 w-full bg-emerald-500 text-zinc-950 font-semibold py-3 rounded-lg hover:bg-emerald-400 transition disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          {status === "sending" ? "Transmitting..." : "Send Message"}
        </button>
        {status === "sent" && (
          <p className="text-emerald-400 text-sm font-mono">
            Message delivered successfully.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm font-mono">
            Transmission failed. Check server.
          </p>
        )}
      </form>
    </section>
  );
};
