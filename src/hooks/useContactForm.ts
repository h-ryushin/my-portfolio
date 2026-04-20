// hooks/useContactForm.ts
import { useState } from "react";

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("送信中...");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "95d397f0-79db-49d1-b3ba-11460d4019d7");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult("メッセージありがとうございます！無事に届きました。");
      (e.target as HTMLFormElement).reset();
    } else {
      setResult("エラーが発生しました。時間を置いて再度お試しください。");
    }
    setIsSubmitting(false);
  };

  return { isSubmitting, result, handleSubmit };
};