'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import {
  Send,
  User,
  Mail,
  Building,
  MessageSquare,
  CheckCircle,
  Sparkles,
  ArrowLeft,
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  type: 'brand' | 'creator';
  message: string;
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>();

  const watchType = watch('type');

  const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      setIsSubmitted(true);
      toast.success("Message sent successfully!");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  } catch (err) {
    toast.error("Something went wrong. Please try again.");
  }

  setIsSubmitting(false);
};


  if (isSubmitted) {
    return (
      <div className="py-20 lg:py-32 flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 text-center max-w-md">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
          <p className="text-white/80 mb-8">
            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
          <a
            href="/"
            className="px-8 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-all"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 relative overflow-hidden">
      {/* Fancy floating blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-300/20 rounded-full blur-2xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-300/15 rounded-full blur-xl animate-float"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </a>

          {/* Header/Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-6">
              <span className="text-white font-medium">Get Started</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Let&apos;s Create Something
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Ready to elevate your brand or creator journey? Share your vision
              with us and let&apos;s discuss how we can bring it to life.
            </p>
          </div>

          {/* FORM + INFO */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* CONTACT FORM */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Name */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-white font-medium">
                    <User className="w-5 h-5" />
                    <span>Full Name</span>
                  </label>
                  <input
                    {...register('name', {
                      required: 'Name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters',
                      },
                    })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  {errors.name && (
                    <p className="text-red-300 text-sm">⚠ {errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-white font-medium">
                    <Mail className="w-5 h-5" />
                    <span>Email Address</span>
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email',
                      },
                    })}
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  {errors.email && (
                    <p className="text-red-300 text-sm">⚠ {errors.email.message}</p>
                  )}
                </div>

                {/* Type */}
                <div className="space-y-4">
                  <label className="flex items-center space-x-2 text-white font-medium">
                    <Building className="w-5 h-5" />
                    <span>I am a...</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label>
                      <input
                        {...register('type', { required: true })}
                        value="brand"
                        type="radio"
                        className="sr-only"
                      />
                      <div
                        className={`p-6 text-center rounded-xl border-2 ${
                          watchType === 'brand'
                            ? 'bg-white/20 border-white text-white'
                            : 'bg-white/5 border-white/30 text-white/70 hover:bg-white/10'
                        }`}
                      >
                        <Building className="w-8 h-8 mx-auto mb-3" />
                        <div className="font-semibold">Brand</div>
                        <div className="text-sm">Looking for creators</div>
                      </div>
                    </label>

                    <label>
                      <input
                        {...register('type', { required: true })}
                        value="creator"
                        type="radio"
                        className="sr-only"
                      />
                      <div
                        className={`p-6 text-center rounded-xl border-2 ${
                          watchType === 'creator'
                            ? 'bg-white/20 border-white text-white'
                            : 'bg-white/5 border-white/30 text-white/70 hover:bg-white/10'
                        }`}
                      >
                        <User className="w-8 h-8 mx-auto mb-3" />
                        <div className="font-semibold">Creator</div>
                        <div className="text-sm">Seeking opportunities</div>
                      </div>
                    </label>
                  </div>
                  {errors.type && (
                    <p className="text-red-300 text-sm">⚠ Please select a type</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-white font-medium">
                    <MessageSquare className="w-5 h-5" />
                    <span>Message</span>
                  </label>
                  <textarea
                    rows={4}
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Minimum 10 characters',
                      },
                    })}
                    placeholder={
                      watchType === 'brand'
                        ? 'Tell us about your brand and what you need...'
                        : 'Tell us about yourself, your style, your goals...'
                    }
                    className="w-full px-4 py-4 bg-white/10 rounded-xl border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-300 text-sm">
                      ⚠ {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 disabled:opacity-50 flex items-center justify-center space-x-2 transition-all shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* INFO SIDE */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-white/80">contact@youngtalentsagency.com</p>
                      <p className="text-white/60 text-sm">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  What to Expect
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      iconColor: 'bg-green-500',
                      label: 'Quick Response',
                    },
                    {
                      iconColor: 'bg-blue-500',
                      label: 'Personalized Consultation',
                    },
                    {
                      iconColor: 'bg-purple-500',
                      label: 'Clear Next Steps',
                    },
                  ].map((item) => (
                    <div className="flex space-x-3" key={item.label}>
                      <div
                        className={`w-6 h-6 rounded-full ${item.iconColor} flex items-center justify-center`}
                      >
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-white font-semibold">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

