"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";

interface Question {
  id: number;
  question: string;
  options: { id: string; text: string; icon?: string }[];
  type: "single" | "multiple";
}

interface QuizResult {
  skinType: string;
  concerns: string[];
  recommendedProducts: string[];
  routine: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "How would you describe your skin type?",
    type: "single",
    options: [
      {
        id: "oily",
        text: "Oily - Shiny, large pores, prone to breakouts",
      },
      { id: "dry", text: "Dry - Tight, flaky, sometimes rough" },
      {
        id: "combination",
        text: "Combination - Oily T-zone, dry cheeks",
      },
      {
        id: "sensitive",
        text: "Sensitive - Easily irritated, reactive",
      },
      { id: "normal", text: "Normal - Balanced, few concerns" },
    ],
  },
  {
    id: 2,
    question: "What are your main skin concerns? (Select all that apply)",
    type: "multiple",
    options: [
      { id: "acne", text: "Acne & Breakouts" },
      { id: "aging", text: "Fine Lines & Wrinkles" },
      { id: "dark-spots", text: "Dark Spots & Hyperpigmentation" },
      { id: "dullness", text: "Dullness & Uneven Texture" },
      { id: "pores", text: "Large Pores" },
      { id: "redness", text: "Redness & Irritation" },
    ],
  },
  {
    id: 3,
    question: "How often do you currently follow a skincare routine?",
    type: "single",
    options: [
      { id: "never", text: "Never - I'm just starting out" },
      { id: "sometimes", text: "Sometimes - When I remember" },
      { id: "daily", text: "Daily - Morning or evening" },
      {
        id: "twice-daily",
        text: "Twice daily - Morning and evening",
      },
    ],
  },
  {
    id: 4,
    question: "What's your age range?",
    type: "single",
    options: [
      { id: "teens", text: "13-19 years" },
      { id: "twenties", text: "20-29 years" },
      { id: "thirties", text: "30-39 years" },
      { id: "forties", text: "40-49 years" },
      { id: "fifties-plus", text: "50+ years" },
    ],
  },
  {
    id: 5,
    question: "How much time do you want to spend on your routine?",
    type: "single",
    options: [
      { id: "minimal", text: "Minimal - 2-3 minutes" },
      { id: "moderate", text: "Moderate - 5-10 minutes" },
      { id: "extensive", text: "Extensive - 15+ minutes" },
    ],
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [showResults, setShowResults] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (
    questionId: number,
    optionId: string,
    type: "single" | "multiple"
  ) => {
    setAnswers((prev) => {
      if (type === "single") {
        return { ...prev, [questionId]: [optionId] };
      } else {
        const currentAnswers = prev[questionId] || [];
        const newAnswers = currentAnswers.includes(optionId)
          ? currentAnswers.filter((id) => id !== optionId)
          : [...currentAnswers, optionId];
        return { ...prev, [questionId]: newAnswers };
      }
    });
  };

  const nextQuestion = () => {
    setIsAnimating(true);
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
      setIsAnimating(false);
    }, 300);
  };

  const prevQuestion = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentQuestion(currentQuestion - 1);
      setIsAnimating(false);
    }, 300);
  };

  const getResults = (): QuizResult => {
    const skinType = answers[1]?.[0] || "normal";
    const concerns = answers[2] || [];

    // Simple recommendation logic
    const recommendedProducts = [
      "gentle-foaming-cleanser",
      "vitamin-c-brightening-serum",
      "hydrating-night-moisturizer",
      "mineral-sunscreen-spf-50",
    ];

    const routine = [
      "Morning: Gentle Cleanser → Vitamin C Serum → Moisturizer → Sunscreen",
      "Evening: Gentle Cleanser → Treatment Product → Night Moisturizer",
    ];

    return { skinType, concerns, recommendedProducts, routine };
  };

  const currentQ = questions[currentQuestion];
  const currentAnswers = answers[currentQ?.id] || [];
  const canProceed = currentAnswers.length > 0;

  if (showResults) {
    const results = getResults();
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-red-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <Sparkles className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Your Personalized Results!
            </h1>
            <p className="text-xl text-gray-600">
              Based on your answers, here's your custom skincare routine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-xl border-0 animate-slide-in-left">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Your Skin Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Skin Type:</h3>
                  <Badge
                    variant="secondary"
                    className="text-lg px-4 py-2 capitalize"
                  >
                    {results.skinType}
                  </Badge>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Main Concerns:</h3>
                  <div className="flex flex-wrap gap-2">
                    {results.concerns.map((concern) => (
                      <Badge
                        key={concern}
                        variant="outline"
                        className="capitalize"
                      >
                        {concern.replace("-", " ")}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 animate-slide-in-right">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-red-600" />
                  Recommended Routine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {results.routine.map((step, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card
            className="shadow-xl border-0 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <CardHeader>
              <CardTitle>Recommended Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {results.recommendedProducts.map((productSlug, index) => {
                  const product = products.find((p) => p.slug === productSlug);
                  if (!product) return null;

                  return (
                    <div
                      key={product.id}
                      className="text-center group animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3 group-hover:shadow-lg transition-all duration-300">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-medium text-sm mb-1">
                        {product.name}
                      </h3>
                      <p className="text-rose-600 font-bold">
                        ${product.price}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div
            className="text-center animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-rose-600 hover:bg-rose-700 text-lg px-8 py-4 mr-4"
            >
              <Link href="/products">Shop Recommended Products</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 bg-transparent"
            >
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-red-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Skin Test
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Discover your perfect skincare routine in just 5 questions
          </p>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div
              className="bg-gradient-to-r from-[#BF6159] to-red-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <Card
          className={`shadow-2xl border-0 transition-all duration-300 ${
            isAnimating ? "opacity-50 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <CardHeader>
            <CardTitle className="text-2xl text-center animate-fade-in-up">
              {currentQ?.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentQ?.options.map((option, index) => (
              <button
                key={option.id}
                onClick={() =>
                  handleAnswer(currentQ.id, option.id, currentQ.type)
                }
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 animate-fade-in-up ${
                  currentAnswers.includes(option.id)
                    ? "border-[#BF6159] bg-rose-50 shadow-lg"
                    : "border-gray-200 hover:border-[#db8780]"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{option.icon}</span>
                  <span className="font-medium">{option.text}</span>
                  {currentAnswers.includes(option.id) && (
                    <CheckCircle className="w-6 h-6 text-[#BF6159] ml-auto animate-bounce" />
                  )}
                </div>
              </button>
            ))}
          </CardContent>
        </Card>

        <div className="flex justify-between mt-8 animate-fade-in-up">
          <Button
            onClick={prevQuestion}
            variant="outline"
            disabled={currentQuestion === 0}
            className="flex items-center gap-2 bg-transparent"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>
          <Button
            onClick={nextQuestion}
            disabled={!canProceed}
            className="bg-[#BF6159] hover:bg-white hover:text-black flex items-center gap-2"
          >
            {currentQuestion === questions.length - 1 ? "Get Results" : "Next"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
