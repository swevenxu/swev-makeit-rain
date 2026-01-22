"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Review {
  id: number;
  name: string;
  role: string;
  message: string;
  rating: number;
  created_at: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);

  // Fetch approved reviews
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from("Reviews")
      .select("*")
      .eq("approved", true)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setReviews(data);
    }
    setLoading(false);
  };

  // Submit review
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from("Reviews").insert([
      {
        name,
        role,
        message,
        rating,
        approved: false, // Needs your approval
      },
    ]);

    setSubmitting(false);

    if (!error) {
      setSubmitted(true);
      setName("");
      setRole("");
      setMessage("");
      setRating(5);
      setTimeout(() => {
        setShowForm(false);
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-24 px-8 sm:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <p
          className="text-[#7f7cff] text-sm uppercase tracking-wider mb-4"
          style={{ fontFamily: "'Expose', sans-serif" }}
        >
          Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
          WHAT CLIENTS SAY
        </h2>
        <p
          className="text-white/60 mb-8"
          style={{ fontFamily: "'Plein', sans-serif" }}
        >
          Real feedback from people I've worked with.
        </p>

        {/* Leave Review Button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-8 px-6 py-3 bg-transparent text-white border border-white/10 rounded hover:border-[#7f7cff] transition-all duration-300"
          style={{ fontFamily: "'Expose', sans-serif" }}
        >
          {showForm ? "Cancel" : "Leave a Review"}
        </button>

        {/* Review Form */}
        {showForm && (
          <div className="mb-12 p-8 bg-white/5 border border-white/10 rounded-lg">
            {submitted ? (
              <p className="text-green-400 text-center">
                Thanks! Your review has been submitted and is pending approval.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-white/30 focus:outline-none focus:border-[#7f7cff] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      Role / Company
                    </label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-white/30 focus:outline-none focus:border-[#7f7cff] transition-colors"
                      placeholder="e.g. CEO at Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`text-2xl ${
                          star <= rating ? "text-yellow-400" : "text-white/20"
                        }`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    Your Review
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-white/30 focus:outline-none focus:border-[#7f7cff] transition-colors resize-none"
                    placeholder="Share your experience..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 bg-[#7f7cff] text-white rounded hover:bg-[#6e6cd6] transition-all duration-300 disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Submit Review"}
                </button>
              </form>
            )}
          </div>
        )}

        {/* Reviews Display */}
        {loading ? (
          <p className="text-white/50">Loading reviews...</p>
        ) : reviews.length === 0 ? (
          <p className="text-white/50">No reviews yet. Be the first!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="p-8 bg-white/5 border border-white/10 rounded-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-lg ${
                        star <= review.rating
                          ? "text-yellow-400"
                          : "text-white/20"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p
                  className="text-white/80 text-lg mb-6"
                  style={{ fontFamily: "'Plein', sans-serif" }}
                >
                  "{review.message}"
                </p>
                <div>
                  <p className="text-white font-medium">{review.name}</p>
                  <p
                    className="text-white/50 text-sm"
                    style={{ fontFamily: "'Expose', sans-serif" }}
                  >
                    {review.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
