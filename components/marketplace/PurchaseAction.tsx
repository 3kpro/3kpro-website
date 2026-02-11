"use client";

import React, { useState } from "react";
import { Zap, Loader2 } from "lucide-react";
import { MarketplaceItem } from "@/lib/data/marketplace";

interface PurchaseActionProps {
  product: MarketplaceItem;
}

export function PurchaseAction({ product }: PurchaseActionProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    // If it's an external link, just go there
    if (product.stripePaymentLink && product.stripePaymentLink.startsWith("http")) {
      window.location.href = product.stripePaymentLink;
      return;
    }

    // If it's a relative link that isn't our API, go there
    if (product.stripePaymentLink && !product.stripePaymentLink.includes("/api/checkout")) {
        window.location.href = product.stripePaymentLink;
        return;
    }

    // Otherwise use our internal checkout API
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: product.slug,
          priceId: product.priceId,
          // We can add more metadata here if needed
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Checkout failed to initialize.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("A system error occurred. Please try again or contact support.");
    } finally {
      setLoading(false);
    }
  };

  if (!product.stripePaymentLink) {
    return (
      <a
        href="/#contact"
        className="px-10 py-5 bg-black text-white hover:bg-black/90 transition-all font-bold uppercase tracking-widest text-xs flex items-center justify-center"
      >
        <Zap className="w-4 h-4 mr-3" />
        Request Specifications
      </a>
    );
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="px-10 py-5 bg-black text-white hover:bg-black/90 transition-all font-bold uppercase tracking-widest text-xs flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed min-w-[300px]"
    >
      {loading ? (
        <Loader2 className="w-4 h-4 mr-3 animate-spin" />
      ) : (
        <Zap className="w-4 h-4 mr-3" />
      )}
      {product.price === 0 ? "Initialize Acquisition" : `Acquire License - $${product.price}`}
    </button>
  );
}
