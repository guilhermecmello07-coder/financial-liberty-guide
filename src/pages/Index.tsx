import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { FinancialCards } from "@/components/FinancialCards";
import { ChartsSection } from "@/components/ChartsSection";
import { ProgressPanel } from "@/components/ProgressPanel";
import { PaymentStrategy } from "@/components/PaymentStrategy";
import { MoneyDrain } from "@/components/MoneyDrain";
import { RenegotiationCenter } from "@/components/RenegotiationCenter";
import { ExtraIncome } from "@/components/ExtraIncome";
import { EducationWall } from "@/components/EducationWall";

const Index = () => {
  const [activeSection, setActiveSection] = useState("painel");

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <main className="ml-[260px] p-8 space-y-8 transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Bem-vindo de volta 👋</p>
            <h2 className="text-lg font-heading font-semibold text-foreground">
              Dashboard DebtView
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              Plano Gratuito
            </div>
          </div>
        </div>

        {/* Financial Cards */}
        <FinancialCards />

        {/* Charts */}
        <ChartsSection />

        {/* Progress */}
        <ProgressPanel />

        {/* Payment Strategy */}
        <PaymentStrategy />

        {/* Money Drain */}
        <MoneyDrain />

        {/* Renegotiation */}
        <RenegotiationCenter />

        {/* Extra Income */}
        <ExtraIncome />

        {/* Education */}
        <EducationWall />
      </main>
    </div>
  );
};

export default Index;
