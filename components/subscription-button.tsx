"use client";

import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export function SubscriptionButton({ isPro = false }: SubscriptionButtonProps) {
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (err) {
      console.log("BILING_ERROR", err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      disabled={loading}
      onClick={onClick}
      variant={isPro ? "default" : "premium"}
    >
      {isPro ? "Manage Subscription" : "Upgade"}
      {!isPro && <Zap className="w-4 h-4 ml-2 full-white" />}
    </Button>
  );
}
