"use client";


import { Button } from "@repo/ui/button";
import { Section } from "@repo/ui/section";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
 

  return (
    <Section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Button
        className="primary-button"
        onClick={() => router.push("/dashboard")}
      >
        Go to DPP dashboard
      </Button>
    </Section>
  );
}
