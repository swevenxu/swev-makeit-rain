"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "./AnimateOnScroll";
import AnimatedText from "./AnimatedText";

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
    <section id="reviews" className="py-24 px-8 sm:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll animation="fadeUp">
          <p
            className="text-[#7f7cff] text-sm uppercase tracking-wider mb-4"
            style={{ fontFamily: "'Expose', sans-serif" }}
          >
            Testimonials
          </p>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="fadeUp" delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            <AnimatedText animation="slideUp" type="words" delay={0.2}>
              WHAT CLIENTS SAY
            </AnimatedText>
          </h2>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="fadeUp" delay={0.2}>
          <p
            className="text-white/60 mb-8"
            style={{ fontFamily: "'Plein', sans-serif" }}
          >
            Real feedback from people I've worked with.
          </p>
        </AnimateOnScroll>

        {/* Leave Review Button */}
        <AnimateOnScroll animation="fadeUp" delay={0.3}>
          <motion.button
            onClick={() => setShowForm(!showForm)}
            className="mb-8 px-6 py-3 bg-transparent text-white border border-white/10 rounded transition-all duration-300"
            style={{ fontFamily: "'Expose', sans-serif" }}
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(127, 124, 255, 0.5)",
              boxShadow: "0 0 20px rgba(127, 124, 255, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            {showForm ? "Cancel" : "Leave a Review"}
          </motion.button>
        </AnimateOnScroll>

        {/* Review Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: "auto", marginBottom: 48 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="p-8 bg-white/5 border border-white/10 rounded-lg">
                {submitted ? (
                  <motion.p
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-green-400 text-center"
                  >
                    Thanks! Your review has been submitted and is pending approval.
                  </motion.p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="group">
                        <label className="block text-white/70 text-sm mb-2 group-focus-within:text-[#7f7cff] transition-colors">
                          Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-white/30 focus:outline-none focus:border-[#7f7cff] focus:bg-[#7f7cff]/5 transition-all duration-300"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-white/70 text-sm mb-2 group-focus-within:text-[#7f7cff] transition-colors">
                          Role / Company
                        </label>
                        <input
                          type="text"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-white/30 focus:outline-none focus:border-[#7f7cff] focus:bg-[#7f7cff]/5 transition-all duration-300"
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
                          <motion.button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className={`text-2xl transition-colors ${
                              star <= rating ? "text-yellow-400" : "text-white/20"
                            }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            ★
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-white/70 text-sm mb-2 group-focus-within:text-[#7f7cff] transition-colors">
                        Your Review
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-white/30 focus:outline-none focus:border-[#7f7cff] focus:bg-[#7f7cff]/5 transition-all duration-300 resize-none"
                        placeholder="Share your experience..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={submitting}
                      className="px-6 py-3 bg-[#7f7cff] text-white rounded transition-all duration-300 disabled:opacity-50"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(127, 124, 255, 0.4)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {submitting ? "Submitting..." : "Submit Review"}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reviews Display */}
        {loading ? (
          <motion.div
            className="flex items-center gap-3 text-white/50"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-5 h-5 border-2 border-[#7f7cff]/30 border-t-[#7f7cff] rounded-full animate-spin" />
            Loading reviews...
          </motion.div>
        ) : reviews.length === 0 ? (
          <AnimateOnScroll animation="fadeUp">
            <p className="text-white/50">No reviews yet. Be the first!</p>
          </AnimateOnScroll>
        ) : (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.15} delay={0.4}>
            {reviews.map((review) => (
              <StaggerItem key={review.id} animation="fadeUp">
                <motion.div
                  className="p-8 bg-white/5 border border-white/10 rounded-lg h-full"
                  whileHover={{
                    borderColor: "rgba(127, 124, 255, 0.3)",
                    backgroundColor: "rgba(127, 124, 255, 0.05)",
                    y: -5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.span
                        key={star}
                        className={`text-lg ${
                          star <= review.rating
                            ? "text-yellow-400"
                            : "text-white/20"
                        }`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: star * 0.1 }}
                      >
                        ★
                      </motion.span>
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
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
};

export default Reviews;
